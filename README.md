Thought for a couple of seconds

Here’s an updated **README.md** with a **“Screenshots”** section that shows how and where to embed your API‐testing images (Swagger UI, Postman, curl output, etc.)—just drop your actual `.png` files into a `screenshots/` folder and update the file names.

```markdown
# ToDo App (Full-Stack More Focusing In Rest APi And Swagger)

A full-stack ToDo application built as an assignment:

- **Backend**: Express.js REST API with MongoDB (Mongoose), JWT auth, Swagger docs
- **Frontend**: React + Vite + Tailwind CSS, JWT-protected routes, consumes the API

---

## 📁 Repo Structure
```

todo-api/
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── index.js
│ ├── package.json
│ └── .env
├── frontend/
│ ├── public/
│ ├── src/
│ ├── package.json
│ └── vite.config.js
└── README.md

````

---

## 🚀 Quick Start

### 1. Backend

```bash
cd backend
npm install
npm run dev
````

- Swagger UI → `http://localhost:5000/api-docs`
- API Base URL → `http://localhost:5000/api`

### 2. Frontend (Dev)

```bash
cd frontend
npm install
npm run dev
```

- React → `http://localhost:5173/` (proxy to `/api`)

### 3. Build & Serve Together

```bash
# from frontend/
npm run build
# from backend/
npm run dev
```

Then visit `http://localhost:5000/` to see the SPA + API on one port.

---

## 📑 API Endpoints

### Auth

| Method | Path               | Description          | Body                            |
| :----: | ------------------ | -------------------- | ------------------------------- |
|  POST  | `/api/auth/signup` | Register new user    | `{ username, email, password }` |
|  POST  | `/api/auth/signin` | Log in & receive JWT | `{ email, password }`           |

### ToDos (Requires `Authorization: Bearer <token>`)

| Method | Path             | Description       | Body                                    |
| :----: | ---------------- | ----------------- | --------------------------------------- |
|  GET   | `/api/todos`     | List all todos    | —                                       |
|  POST  | `/api/todos`     | Create new todo   | `{ title, description?, isCompleted?}`  |
|  GET   | `/api/todos/:id` | Get todo by ID    | —                                       |
|  PUT   | `/api/todos/:id` | Update todo by ID | `{ title?, description?, isCompleted?}` |
| DELETE | `/api/todos/:id` | Delete todo by ID | —                                       |

---

## 📸 Screenshots
