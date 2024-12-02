<p align="center">
	<em><code>❯ BoilerPlate Express Clean Architecture</code></em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/last-commit/acoory/boilerplate_express_clean_architecture?style=flat-square&logo=git&logoColor=white&color=e84118" alt="Last Commit">
	<img src="https://img.shields.io/github/languages/top/acoory/boilerplate_express_clean_architecture?style=flat-square&color=0080ff" alt="Top Language">
	<img src="https://img.shields.io/github/languages/count/acoory/boilerplate_express_clean_architecture?style=flat-square&color=0080ff" alt="Language Count">
</p>

<p align="center">Built with powerful tools and technologies:</p>
<p align="center">
	<img src="https://img.shields.io/badge/Docker-2496ED.svg?style=flat-square&logo=Docker&logoColor=white" alt="Docker">
	<img src="https://img.shields.io/badge/Typescript-3178C6.svg?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript">
</p>

---

## 🚀 Getting Started

### 📋 Prerequisites

Before starting, ensure your environment meets the following requirements:

- **Node.js** installed
- **Docker** installed (for containerized development)

---

### 🛠 Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/acoory/boilerplate_express_clean_architecture.git
    ```

2. **Navigate to the project directory:**

   ```sh
   cd boilerplate_express_clean_architecture
   ```

---

## 🌟 Development Environment

You can run the project with the following command:

```sh
npm run dev
```

However, if you prefer using ``npm run dev``, ensure you configure the ``.env`` file to point to your MySQL database.
This
applies to both development and production environments. Proper database credentials in the .env file are essential for
smooth operation.
---

## 🐳 Using Docker for Development

To set up the development environment with Docker:

Run the following command:

```sh
docker-compose -f compose-dev.yml up -d --build
```

This will start the project with hot-reloading (nodemon) for real-time updates.

---

## ✨ Features

- User Authentication: Secure authentication using JWT tokens
- Multi-Environment Configuration: Easily switch between development, and production setups

---

📂 Project Structure

```
├── README.md
├── compose-dev.yml
├── dist
│   ├── server.js
│   └── src
│       ├── app.js
│       ├── config
│       │   └── database.js
│       ├── domain
│       │   ├── models
│       │   │   ├── index.js
│       │   │   └── user.model.js
│       │   ├── repositories
│       │   │   └── userRepository.js
│       │   └── services
│       │       ├── jwtService.js
│       │       └── userService.js
│       └── interfaces
│           ├── middleware
│           │   └── authMiddleware.js
│           └── routes
│               └── userRouter.js
├── nodemon.json
├── package-lock.json
├── package.json
├── server.ts
├── src
│   ├── app.ts
│   ├── config
│   │   ├── database.js
│   │   └── database.ts
│   ├── domain
│   │   ├── models
│   │   │   ├── index.ts
│   │   │   └── user.model.ts
│   │   ├── repositories
│   │   │   └── userRepository.ts
│   │   └── services
│   │       ├── jwtService.ts
│   │       └── userService.ts
│   └── interfaces
│       ├── middleware
│       │   └── authMiddleware.ts
│       └── routes
│           └── userRouter.ts
└── tsconfig.json
```