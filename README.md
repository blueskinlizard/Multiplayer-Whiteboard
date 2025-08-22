# 🖊️ Real-Time Collaborative Whiteboard App

A full-stack real-time collaborative whiteboard application built with modern technologies. Users can join rooms, draw together, interact, and search for other users. Features secure authentication, persistent session handling, and optimized performance via caching and structured databases.

## Tech Stack

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
- **Room IDs** – Shareable and unique drawing sessions between two users
- **User Search** – Search for & share with users
- **Authentication** – Session-based login/register/logout
---

## Features

- User registration and secure login using Passport and `bcryptjs`
- Unique whiteboard rooms with shareable URLs
- Drawing and canvas updates (Base64 or pixel-level)
- REST APIs for user and board interaction
- Fully responsive UI with MUI components
- Persistent session handling with PostgreSQL
- REAL-TIME collaboration using WebSockets (This was a challenge)!
- Planned: Versioning and canvas history via PostgreSQL snapshots

---

