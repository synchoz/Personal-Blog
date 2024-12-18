
# 📖 Personal Blog Backend Project

A **backend-focused** project to build a **Personal Blog** using **Node.js**, **Express**, and **EJS templates** for server-side rendering. This project is part of my learning journey inspired by the [roadmap.sh](https://roadmap.sh) guides, focusing on strengthening backend development skills and creating dynamic web applications.

---

## 🚀 Features

- **CRUD Operations**:
  - Add, edit, delete, and view blog articles.
- **Dynamic Templating**:
  - Server-side rendering using **EJS** for pages like the homepage, article and views.
- **Authentication Check**:
  - Basic logic to differentiate between admin and guest users.
- **File Handling**:
  - Articles stored and managed as JSON files with associated metadata.
- **Seamless User Experience**:
  - Redirects and conditional rendering ensure smooth navigation for users.

---

## 🛠️ Technologies Used

- **Backend**: Node.js, Express.js
- **Templating Engine**: EJS
- **File Handling**: Built-in Node.js modules for managing JSON files.

---

## 📂 Project Structure

```
Personal-Blog/
├── routes/
│   ├── articles.js          # Router for article-related routes
│
├── views/
│   ├── home.ejs             # Homepage (for guests)
│   ├── admin.ejs            # Homepage (for admin users)
│   ├── viewArticle.ejs      # View article page
│   ├── editArticle.ejs      # Edit article page
│   └── new.ejs              # New article form
├── utils/
│   └── fileHelper.js        # Utilities for file operations (CRUD)
├── public/                  # Static files (CSS, JS, images)
├── index.js                 # Main application entry point
├── package.json             # Dependencies and project metadata
└── README.md                # Project documentation
```

---

## 🔧 Setup and Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/synchoz/Personal-Blog.git
   cd personal-blog
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Application**:
   ```bash
   node index.js
   ```

4. **Access the Blog**:
   Open your browser and navigate to `http://localhost:3000`.

---

## ✨ Routes and Functionality

### **Public Routes**
| Method | Route                  | Description                      |
|--------|------------------------|----------------------------------|
| `GET`  | `/`                    | Renders homepage for guests/admin |
| `GET`  | `/article/:articleId`  | View a specific article          |

### **Admin Routes**
| Method | Route                  | Description                      |
|--------|------------------------|----------------------------------|
| `GET`  | `/new`                 | Render new article form          |
| `POST` | `/new`                 | Add a new article                |
| `GET`  | `/editArticle/:articleId` | Render edit article form       |
| `POST` | `/editArticle/:articleId` | Edit an article                |
| `POST` | `/deleteArticle/:articleId` | Delete an article             |

---

## 🔑 Learning Goals

- **Backend Development**:
  - Strengthen skills in Node.js and Express.js.
  - Work with server-side rendering using EJS.
- **File Handling**:
  - Implemented dynamic CRUD operations on JSON files.
- **Authentication Logic**:
  - Added simple guest/admin role-based rendering.
- **Roadmap.sh Application**:
  - Built this project as part of the [Backend Developer Roadmap](https://roadmap.sh/backend).

---

## 🌟 Future Enhancements

- **Database Integration**:
  - Replace JSON-based file storage with MongoDB or PostgreSQL.
- **User Authentication**:
  - Add proper login/logout and user role management.
- **Frontend Framework**:
  - Enhance the frontend with a framework like React.
- **Deployment**:
  - Deploy the project on a platform like Heroku or Vercel.

---

## 🎉 Acknowledgments

- Inspired by the [roadmap.sh](https://roadmap.sh/projects/personal-blog) guide.
