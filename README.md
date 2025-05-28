# Fullstack Monorepo Starter

A starter template for a modern fullstack application using pnpm workspaces, Express.js with TypeScript for the backend, and Vite + Vue 3 with TypeScript for the frontend.

## Project Structure
```
root/
├── frontend/        \# Vue 3 + Vite + TypeScript
├── backend/         \# Express.js + TypeScript
├── tsconfig.base.json
├── pnpm-workspace.yaml
└── package.json
```
## Features

- **Monorepo setup with pnpm workspaces** for efficient dependency management
- **Vue 3 + Vite + TypeScript** for a fast, modern frontend
- **Express.js + TypeScript** for a robust, type-safe backend
- **Shared TypeScript base configuration** for consistent code style and tooling
- **Easy-to-run scripts** for starting both frontend and backend

## Installation

1. **Clone the repository**
```
git clone https://github.com/your-repo/fullstack-monorepo.git
cd fullstack-monorepo
```

2. **Install pnpm (if not already installed)**
```
npm install -g pnpm
```

3. **Install dependencies**
```
pnpm install
```

4. **Build the backend (optional, for production)**
```
cd backend
pnpm run build
```

5. **Start the development servers**
- **Run both frontend and backend in development mode:**
  ```
  pnpm dev
  ```
- **Or start them separately:**
  ```
  pnpm dev:frontend   # Starts frontend dev server
  pnpm dev:backend    # Starts backend server
  ```

## Development URLs

- **Frontend:** `http://localhost:5173`
- **Backend:** `http://localhost:3000/api`

## Usage

- **Frontend:** Edit files in `frontend/src/`
- **Backend:** Edit files in `backend/src/`

## Customization

- **TypeScript configuration:** Edit `tsconfig.base.json` for shared settings.
- **Workspace management:** Edit `pnpm-workspace.yaml` to add/remove packages.

---

This template is designed for rapid prototyping and scalable fullstack projects. Enjoy your development!
