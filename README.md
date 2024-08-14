I apologize for the confusion. You're absolutely right - the content I provided earlier was not in proper markdown format. Let me convert that into proper GitHub-flavored markdown for you:

```markdown
<p align="center">
  <img src="https://img.icons8.com/?size=512&id=55494&format=png" width="100" />
</p>
<p align="center">
    <h1 align="center">USERMGMTSYS</h1>
</p>
<p align="center">
    <em><code>► A simple and efficient user management system using Node.js, Express, Express-EJS, and MongoDB</code></em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/Rohit-Bhetal/userMGMTSys?style=flat&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/Rohit-Bhetal/userMGMTSys?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/Rohit-Bhetal/userMGMTSys?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/Rohit-Bhetal/userMGMTSys?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/Nodemon-76D04B.svg?style=flat&logo=Nodemon&logoColor=white" alt="Nodemon">
	<img src="https://img.shields.io/badge/Express-000000.svg?style=flat&logo=Express&logoColor=white" alt="Express">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>
<hr>

## 🔗 Quick Links

> - [📍 Overview](#-overview)
> - [📦 Features](#-features)
> - [📂 Repository Structure](#-repository-structure)
> - [🧩 Modules](#-modules)
> - [🚀 Getting Started](#-getting-started)
>   - [⚙️ Installation](#️-installation)
>   - [🤖 Running userMGMTSys](#-running-userMGMTSys)
>   - [🧪 Tests](#-tests)
> - [🛠 Project Roadmap](#-project-roadmap)
> - [🤝 Contributing](#-contributing)
> - [📄 License](#-license)
> - [👏 Acknowledgments](#-acknowledgments)

---

## 📍 Overview

This is a basic user management system built using **Node.js**, **Express**, **Express-EJS**, and **MongoDB**. The project allows for adding, viewing, editing, and deleting users. Additionally, it features search functionality and an about page.

**Deployed Site:** [usermgmtsys.onrender.com](https://usermgmtsys.onrender.com)

---

## 📦 Features

Features of the user management system include:
- Add, view, edit, and delete user information
- Search functionality to find users
- User-friendly interface with EJS templating
- Simple routing and controller setup

---

## 📂 Repository Structure

```sh
└── userMGMTSys/
    ├── README.md
    ├── app.js
    ├── package-lock.json
    ├── package.json
    ├── public
    │   └── css
    │       └── main.css
    ├── server
    │   ├── config
    │   │   └── db.js
    │   ├── controller
    │   │   └── customerController.js
    │   ├── model
    │   │   └── Customer.js
    │   └── routes
    │       └── customer.js
    └── views
        ├── 404.ejs
        ├── about.ejs
        ├── index.ejs
        ├── layouts
        │   └── main.ejs
        ├── pages
        │   ├── add.ejs
        │   ├── edit.ejs
        │   └── view.ejs
        ├── partials
        │   ├── header.ejs
        │   └── sidebar.ejs
        └── search.ejs
```

---

## 🧩 Modules

<details closed><summary>package.json</summary>

| File                                                                                           | Summary                         |
| ---                                                                                            | ---                             |
| [package.json](https://github.com/Rohit-Bhetal/userMGMTSys/blob/master/package.json)           | Contains project dependencies and scripts for running the application. |

</details>

<details closed><summary>app.js</summary>

| File                                                                                             | Summary                         |
| ---                                                                                              | ---                             |
| [app.js](https://github.com/Rohit-Bhetal/userMGMTSys/blob/master/app.js)                         | Main entry point for the application, setting up Express server and routes. |

</details>

<details closed><summary>server.controller</summary>

| File                                                                                                                     | Summary                         |
| ---                                                                                                                      | ---                             |
| [customerController.js](https://github.com/Rohit-Bhetal/userMGMTSys/blob/master/server/controller/customerController.js) | Contains controller logic for handling user-related operations like add, edit, view, and delete. |

</details>

<details closed><summary>server.model</summary>

| File                                                                                            | Summary                         |
| ---                                                                                             | ---                             |
| [Customer.js](https://github.com/Rohit-Bhetal/userMGMTSys/blob/master/server/model/Customer.js) | MongoDB model schema for the user data. |

</details>

<details closed><summary>server.routes</summary>

| File                                                                                             | Summary                         |
| ---                                                                                              | ---                             |
| [customer.js](https://github.com/Rohit-Bhetal/userMGMTSys/blob/master/server/routes/customer.js) | Defines the routes for user management functionalities such as add, view, edit, and delete. |

</details>

<details closed><summary>server.config</summary>

| File                                                                                 | Summary                         |
| ---                                                                                  | ---                             |
| [db.js](https://github.com/Rohit-Bhetal/userMGMTSys/blob/master/server/config/db.js) | Sets up the MongoDB connection for the application. |

</details>

<details closed><summary>public.css</summary>

| File                                                                                    | Summary                         |
| ---                                                                                     | ---                             |
| [main.css](https://github.com/Rohit-Bhetal/userMGMTSys/blob/master/public/css/main.css) | Contains custom CSS for styling the application. |

</details>

<details closed><summary>views</summary>

| File                                                                                   | Summary                         |
| ---                                                                                    | ---                             |
| [index.ejs](https://github.com/Rohit-Bhetal/userMGMTSys/blob/master/views/index.ejs)   | Home page template displaying the list of users. |
| [search.ejs](https://github.com/Rohit-Bhetal/userMGMTSys/blob/master/views/search.ejs) | Template for the search results. |
| [404.ejs](https://github.com/Rohit-Bhetal/userMGMTSys/blob/master/views/404.ejs)       | 404 error page template. |
| [about.ejs](https://github.com/Rohit-Bhetal/userMGMTSys/blob/master/views/about.ejs)   | About page template. |

</details>

<details closed><summary>views.partials</summary>

| File                                                                                              | Summary                         |
| ---                                                                                               | ---                             |
| [header.ejs](https://github.com/Rohit-Bhetal/userMGMTSys/blob/master/views/partials/header.ejs)   | Partial template for the header section. |
| [sidebar.ejs](https://github.com/Rohit-Bhetal/userMGMTSys/blob/master/views/partials/sidebar.ejs) | Partial template for the sidebar section. |

</details>

<details closed><summary>views.pages</summary>

| File                                                                                     | Summary                         |
| ---                                                                                      | ---                             |
| [edit.ejs](https://github.com/Rohit-Bhetal/userMGMTSys/blob/master/views/pages/edit.ejs) | Template for editing user details. |
| [view.ejs](https://github.com/Rohit-Bhetal/userMGMTSys/blob/master/views/pages/view.ejs) | Template for viewing user details. |
| [add.ejs](https://github.com/Rohit-Bhetal/userMGMTSys/blob/master/views/pages/add.ejs)   | Template for adding a new user. |

</details>

<details closed><summary>views.layouts</summary>

| File                                                                                       | Summary                         |
| ---                                                                                        | ---                             |
| [main.ejs](https://github.com/Rohit-Bhetal/userMGMTSys/blob/master/views/layouts/main.ejs) | Main layout template used across different views. |

</details>

---
## 📝 Routes

The following routes are available in the application:

| Method | Route | Description |
|--------|-------|-------------|
| GET    | `/`   | Home page, displays the list of users |
| GET    | `/about` | About page |
| GET    | `/add-user` | Page to add a new user |
| POST   | `/add-user` | Submit a new user |
| GET    | `/edit-user/:id` | Page to edit an existing user |
| POST   | `/edit-user/:id` | Submit changes to an existing user |
| GET    | `/view-user/:id` | View details of a specific user |
| GET    | `/delete-user/:id` | Delete a specific user |
| GET    | `/search` | Search users by name or other criteria |

## 🚀 Getting Started

### ⚙️ Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Rohit-Bhetal/userMGMTSys.git
   cd userMGMTSys
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root of the project and add the following:

   ```bash
   MONGO_URI=your_mongodb_uri
   ```

### 🤖 Running userMGMTSys

1. **Start the server:**

   ```bash
   npm start
   ```

2. **Visit the application in your browser:**

   ```
   http://localhost:3000
   ```

---

## 🛠 Project Roadmap

Planned enhancements and future features:
- Integration of user authentication
- Enhanced search capabilities
- Implementing role-based access control (RBAC)
- Deployment to a production environment

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

---

## 📄 License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.

---

## 👏 Acknowledgments

This project was inspired by various online tutorials and open-source projects. Special thanks to the Node.js, Express, and MongoDB communities for their resources and support.
```

This version is properly formatted in GitHub-flavored markdown. You can now copy and paste this directly into your README.md file on GitHub, and it should render correctly with all the formatting, tables, and collapsible sections intact.
