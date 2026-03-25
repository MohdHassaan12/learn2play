<h1 align="center">🎓 NextGenEdu - Next Generation E-Learning Platform</h1>

<p align="center">
  <strong>A comprehensive, modern, and interactive e-learning solution built to revolutionize online education.</strong>
</p>

## 📖 Introduction
**NextGenEdu** is a cutting-edge web-based e-learning platform that bridges the gap between engaging learner experiences and powerful backend management. By seamlessly blending a highly interactive frontend with a robust API architecture, NextGenEdu provides a highly cohesive, immersive, and personalized educational environment for both educators and students.

## ✨ Key Features
- **💬 Real-Time Communication:** Integrated real-time chat and collaboration features powered by Socket.io to keep students and instructors deeply connected.
- **🔐 Secure Authentication:** Enterprise-grade user authentication and data privacy utilizing best-practices with JWT and bcrypt.
- **💳 Payment Gateway:** Streamlined, secure, and flexible payment workflows securely processed via Stripe.
- **🔔 Instant Notifications:** Real-time email and SMS integrations with Nodemailer and Twilio/Vonage, keeping learners updated with OTPs, alerts, and course updates.
- **📂 Dynamic Content Management:** Scalable data storage utilizing MongoDB to seamlessly track user profiles, extensive course contents, and individualized learning progression.
- **🎨 Responsive & Interactive UI:** A premium, fully responsive, and fast interface meticulously crafted using React.js, Redux, SASS, and Vite.

## 🛠️ Technology Stack

### Frontend Architecture
- **Core Frameworks:** React.js (v18), JavaScript (ES6+), HTML5, SASS/CSS3.
- **State Management:** Redux Toolkit & React-Redux.
- **Routing:** React Router DOM.
- **Build Server:** Vite for blazingly fast development and optimized production builds.
- **Key Libraries:** 
  - `axios` for optimized API interactions.
  - `react-quill` for rich-text content generation.
  - `swiper` for slick and dynamic media carousels.
  - `socket.io-client` for persistent WebSocket connections.

### Backend Architecture
- **Core Engine:** Node.js, Express.js.
- **Database Ecosystem:** MongoDB coupled with Mongoose ODM.
- **Security Mechanisms:** JsonWebToken (JWT), bcrypt, CORS, Express-Session, Express-Validator.
- **Integrations & Utilities:**
  - `stripe` for robust financial transactions.
  - `twilio` & `@vonage/server-sdk` for reliable SMS communications.
  - `nodemailer` for automated email dispatches.
  - `multer` for seamless multimedia and file uploads.

## 🚀 Installation & Local Setup

### Prerequisites
- [Node.js](https://nodejs.org/en/) installed on your machine.
- A running instance of MongoDB (Local or [Atlas](https://www.mongodb.com/cloud/atlas)).

### 1. Clone the repository
```bash
git clone https://github.com/MohdHassaan12/learn2play.git
cd learn2play
```

### 2. Backend Setup
Navigate to the backend environment and install dependencies:
```bash
cd Learn2Play-backend
npm install
```
Provide the necessary Environment Variables. Create a `.env` file in the `Learn2Play-backend` directory:
```env
PORT=5000
MONGO_URL=your_mongodb_connection_string
# Add credentials for Stripe, Twilio, NodeMailer, JWT_SECRET, etc.
```
Kickstart the backend server:
```bash
npm run start
```

### 3. Frontend Setup
Open a new terminal window, navigate to the frontend directory, and install dependencies:
```bash
cd Learn2Play-frontend
npm install
```
Configure environment variables based on `.env.sample`.
Launch the Vite development server:
```bash
npm run dev
```

## 🎯 Project Achievements
- Architected an immersive tracking platform providing personalized learning paths.
- Bridged communication gaps with robust real-time chatting functions between educators and students.
- Designed a scalable, future-proof codebase structured to effortlessly accommodate new features and explosive growth.

## 📄 License & Credits
Licensed under the ISC License. 
Designed and Developed by **Hibbanur Rahman** & Contributors.
