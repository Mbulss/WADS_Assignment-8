# ToDo App (Full-Stack More Focusing In Rest APi And Swagger)

A full-stack ToDo application built as an assignment:

- **Backend**: Express.js REST API with MongoDB (Mongoose), JWT auth, Swagger docs
- **Frontend**: React + Vite + Tailwind CSS, JWT-protected routes, consumes the API

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

> All screenshots taken from **Swagger UI** at `http://localhost:5000/api-docs`

---

### **POST** `/api/auth/signup`  
_Register a new user → Returns **201 Created** and the new user’s data_

![Sign Up](https://github.com/user-attachments/assets/1abf991c-ccf0-4e5d-885b-230d425b3b7a)

---

### **POST** `/api/auth/signin`  
_Log in and receive a JWT → Returns **200 OK** and a JSON web token_

![sign in](https://github.com/user-attachments/assets/ae992261-5da1-414b-88e8-6a973aaead8e)

---

### **GET** `/api/todos`  
_Retrieve all todos → Returns **200 OK** and an array of todo items_

![get all todo](https://github.com/user-attachments/assets/cbb6d9f4-0778-4168-b351-68822bee02d6)

---

### **POST** `/api/todos`  
_Create a new todo → Returns **201 Created** and the created todo object_

![create new todo](https://github.com/user-attachments/assets/f35b8d41-ac33-4a92-a6e6-96ae764598d1)

---

### **GET** `/api/todos/{id}`  
_Retrieve a single todo by its ID → Returns **200 OK** and that todo_

![retirive a single todo by id](https://github.com/user-attachments/assets/c5c97b8f-408d-41b1-89e6-7038898f3970)

---

### **PUT** `/api/todos/{id}`  
_Update a todo by its ID → Returns **200 OK** and the updated todo_

![update todo](https://github.com/user-attachments/assets/f58afca3-3bd4-49c8-88c9-c7ed18478206)

---

### **DELETE** `/api/todos/{id}`  
_Delete a todo by its ID → Returns **204 No Content** on success_

![delete todo](https://github.com/user-attachments/assets/26928b15-75de-411f-a7a3-0bf3658fdcee)
