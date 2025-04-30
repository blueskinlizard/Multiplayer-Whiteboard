# 🖊️ Real-Time Collaborative Whiteboard App

A full-stack real-time collaborative whiteboard application built with modern technologies. Users can join rooms, draw together, interact, and search for other users. Features secure authentication, persistent session handling, and optimized performance via caching and structured databases.

## 🔧 Tech Stack

### Frontend
- **React** – UI Framework
- **Material UI (MUI)** – Component styling
- **REST API Integration** – For backend communication

### Backend
- **Express.js** – Backend server
- **Redis** – For caching canvas state
- **Prisma** – ORM for PostgreSQL
- **PostgreSQL** – Relational database
- **Passport.js** – Authentication middleware
- **bcryptjs** – Password hashing

### Other Features
- **Room IDs** – Shareable and unique drawing sessions
- **User Search** – Search for users in real-time
- **Authentication** – Session-based login/register/logout
- **Canvas Syncing** – Real-time updates (planned)

---

## ✨ Features

- User registration and secure login using Passport and `bcryptjs`
- Unique whiteboard rooms with shareable URLs
- Drawing and canvas updates (Base64 or pixel-level)
- RESTful API architecture for user and board interaction
-  User search functionality with live filtering
- Fully responsive UI with MUI components
- Persistent session handling with PostgreSQL
- Planned: Real-time collaboration using WebSockets or Redis pub/sub
- Planned: Versioning and canvas history via PostgreSQL snapshots

---

