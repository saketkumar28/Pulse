# 🐦 Twitter Clone

A full-stack social media application inspired by Twitter/X, built with the MERN stack. This project demonstrates real-time social networking features including posting, following, liking, and user interactions.

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![Node](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)

## ✨ Features

- **User Authentication** - Secure signup/login with JWT-based authentication
- **Tweet Management** - Create, edit, and delete tweets with character limits
- **Social Interactions** - Like, retweet, and reply to tweets
- **User Profiles** - Customizable profiles with bio, avatar, and cover images
- **Follow System** - Follow/unfollow users and view follower/following lists
- **Real-time Feed** - Dynamic timeline showing tweets from followed users
- **Responsive Design** - Mobile-first design that works across all devices
- **Search Functionality** - Discover users and tweets
- **Notifications** - Get notified of likes, replies, and new followers

## 🛠️ Tech Stack

**Frontend:**
- React.js with Vite
- React Router for navigation
- Axios for API calls
- Tailwind CSS / CSS3 for styling
- Context API / Redux for state management

**Backend:**
- Node.js & Express.js
- MongoDB with Mongoose ODM
- JWT for authentication
- Bcrypt for password hashing
- Multer for image uploads

**Deployment:**
- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/twitter-clone.git
   cd twitter-clone
Install dependencies

Backend:

bash
cd server
npm install
Frontend:

bash
cd client
npm install
Environment Variables

Create a .env file in the server directory:

text
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
Create a .env file in the client directory:

text
VITE_API_URL=http://localhost:5000/api
Run the application

Backend (from server directory):

bash
npm run dev
Frontend (from client directory):

bash
npm run dev
Access the application

Frontend: http://localhost:5173

Backend: http://localhost:5000

📁 Project Structure
text
twitter-clone/
├── client/                 # Frontend React application
│   ├── public/            # Static files
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── context/       # Context API providers
│   │   ├── utils/         # Helper functions
│   │   ├── hooks/         # Custom React hooks
│   │   └── App.jsx        # Main App component
│   └── package.json
│
└── server/                # Backend Node.js application
    ├── config/            # Configuration files
    ├── controllers/       # Route controllers
    ├── models/            # Mongoose models
    ├── routes/            # API routes
    ├── middleware/        # Custom middleware
    ├── utils/             # Helper functions
    └── server.js          # Entry point
🔌 API Endpoints
Authentication
POST /api/auth/register - Register new user

POST /api/auth/login - User login

GET /api/auth/me - Get current user

Tweets
GET /api/tweets - Get all tweets

POST /api/tweets - Create tweet

DELETE /api/tweets/:id - Delete tweet

PUT /api/tweets/:id/like - Like/unlike tweet

POST /api/tweets/:id/reply - Reply to tweet

Users
GET /api/users/:id - Get user profile

PUT /api/users/:id - Update profile

PUT /api/users/:id/follow - Follow/unfollow user

GET /api/users/:id/followers - Get followers list

🎨 Key Features Implementation
Authentication Flow
JWT tokens are stored in localStorage and included in API request headers. Protected routes verify token validity on both frontend and backend.

Real-time Updates
The feed automatically refreshes to show new tweets from followed users, implementing polling or WebSocket connections for live updates.

Image Upload
Users can upload profile pictures and tweet images using Multer middleware, with files stored in cloud storage or local directories.

🧪 Testing
bash
# Run tests
npm test

# Run with coverage
npm run test:coverage
📝 Contributing
Contributions are welcome! Please follow these steps:

Fork the repository

Create a feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

👤 Author
Saket Kumar

🙏 Acknowledgments
Inspired by Twitter/X

Built as a portfolio project to demonstrate full-stack development skills

Thanks to the MERN stack community for excellent documentation

🔗 Links
Live Demo

API Documentation

Project Report

⭐ If you found this project helpful, please give it a star!
