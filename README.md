[//]: # (<p align="center">)

[//]: # (    <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" align="center" width="30%">)

[//]: # (</p>)

[//]: # (<p align="center"><h1 align="center">PegasusLinker</h1></p>)
<p align="center">
	<em><code>❯ BoilerPlate express</code></em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/last-commit/acoory/boilerplate_express_clean_architecture?style=default&logo=git&logoColor=white&color=e84118" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/acoory/boilerplate_express_clean_architecture?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/acoory/boilerplate_express_clean_architecture?style=default&color=0080ff" alt="repo-language-count">
</p>

<p align="center">Built with the tools and technologies:</p>
<p align="center">
	<img src="https://img.shields.io/badge/Docker-2496ED.svg?style=flat&logo=Docker&logoColor=white" alt="Docker">
	<img src="https://img.shields.io/badge/Typescript-3776AB.svg?style=flat&logo=Python&logoColor=white" alt="typescript">
</p>

## Getting Started

### Prerequisites

Before getting started with readme-ai, ensure your runtime environment meets the following requirements:

- **Programming Language:** Node.js
- **Container Runtime:** Docker

### Installation

1. Clone the repository

```sh
git clone https://github.com/acoory/boilerplate_express_clean_architecture.git
```

2. Change directory

```sh
cd boilerplate_express_clean_architecture
```

3. Install dependencies

```sh
npm install
```

---

## Project Structure

```sh
├── README.md
├── compose.yml
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

---

[//]: # (## Project Roadmap)

[//]: # ()

[//]: # (- [X] **`Task 1`**: <strike>Implement feature one.</strike>)

[//]: # (- [ ] **`Task 2`**: Implement feature two.)

[//]: # (- [ ] **`Task 3`**: Implement feature three.)

