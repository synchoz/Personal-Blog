const express = require('express');
const router = express.Router();
const utils = require('../utils/fileHelper');
const fileList = utils.getAllFileNames();
let jsonArr = utils.createJSONFromFiles(fileList);


router.get('/', (req, res, next) => {
    res.render(req.isGuest ? 'home': 'admin', { articles: jsonArr });
});

router.get('/editArticle/:articleId', (req, res, next) => {
    if(req.isGuest) {
        res.status(401).send('Authenication Required.');
    } else {
        const neededArticle = jsonArr.find((article) => article.id == req.params.articleId);
        const articleData = utils.getFileData(neededArticle.filename);
        res.render('editArticle', {article: articleData});
    }
});

router.get('/article/:articleId', (req, res, next) => {
    const neededArticle = jsonArr.find((article) => article.id == req.params.articleId);
    const articleData = utils.getFileData(neededArticle.filename);
    res.render('viewArticle', {article: articleData});
})

router.get('/new', (req, res, next) => res.render('new'))

router.post('/new', (req, res, next) => {
    const {title, date, content} = req.body;
    const newId = utils.getNewId(jsonArr);
    const obj = utils.createDataFile(title,date,content,newId);
    if(Object.keys(obj).length > 0) {
        jsonArr.push(obj);
        res.redirect('/');
    } else {
        res.render('new');
    }
})

router.post('/editArticle/:articleId', (req, res, next) => {
    const {title, date, content} = req.body;
    const id = req.params.articleId;
    const articleToEdit = jsonArr.find((article) => article.id == id);
    utils.updateFile(articleToEdit, title, date, content);
    jsonArr = jsonArr.map((article) => {
        if(article.id == articleToEdit.id) {
            return {
                ...article,
                title: title,
                date: date
            }
        } else {
            return article;
        }
    })
    res.redirect('/');
})

router.post('/deleteArticle/:articleId', (req, res, next) => {
    const id = req.params.articleId;
    const articleToDelete = jsonArr.find((article) => article.id == id);
    if(articleToDelete != undefined) {
        utils.deleteFile(articleToDelete.filename);
        jsonArr = jsonArr.filter((file) => file.id != articleToDelete.id);
    }
    res.redirect('/');
})

module.exports = router;