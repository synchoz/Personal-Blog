function decodeCredentials(strToDecode) {
    const decodedStr = Buffer.from(strToDecode.replace('Basic', '').trim(), 'base64').toString('utf8');
    const usernamePasswordArr = decodedStr.split(':');
    return usernamePasswordArr
}

function authMiddleware(req, res, next) {
    let username = ""; 
    let password = "";
    if(req.headers.authorization) {
        [username, password] = decodeCredentials(req.headers.authorization);
    }
    if(username == 'admin' && password == 'admin') {
        next();
    }  else if (username == 'guest') {
        req.isGuest = true;
        next();
    } else {
        res.set('WWW-Authenticate', 'Basic realm="user_pages"');
        res.status(401).send('Authenication Required.');
    }
}


module.exports = {authMiddleware}