<h1 align="center">🏆 Learn2Play - Sport Learning Platform</h1>

<p align="center">
  <strong>An innovative online platform empowering athletes to learn sports through high-quality, continuous online coaching and independent practice tracking.</strong>
</p>

## 📖 Introduction
**Learn2Play** is a cutting-edge sport learning platform that bridges the gap between passionate athletes and professional coaches. By seamlessly blending an interactive frontend with a robust backend architecture, Learn2Play provides athletes with tailored coaching, real-time communication, and customized practice plans so they can hone their skills on their own ground. 

## ✨ Key Features
- **💬 Real-Time Coach-Athlete Communication:** Integrated chat and live interaction features powered by Socket.io to keep athletes and coaches deeply connected, ensuring rapid feedback.
- **🔐 Secure Authentication:** Enterprise-grade user authentication and data privacy utilizing best practices with JWT and bcrypt.
- **💳 Payment Gateway:** Streamlined, secure, and flexible payment workflows for coaching subscriptions seamlessly processed via Stripe.
- **🔔 Instant Notifications:** Real-time email and SMS integrations with Nodemailer and Twilio/Vonage, keeping athletes updated with practice schedules, live session links, and OTP alerts.
- **📂 Dynamic Practice Plans & Tracking:** Scalable data storage utilizing MongoDB to seamlessly track athlete profiles, continuous coaching contents, and individualized skill progression.
- **🎨 Responsive & Athlete-Centric UI:** A premium, fully responsive, and fast interface meticulously crafted using React.js, Redux, SASS, and Vite, keeping the focus on learning.

## 🛠️ Technology Stack

### Frontend Architecture
- **Core Frameworks:** React.js (v18), JavaScript (ES6+), HTML5, SASS/CSS3.
- **State Management:** Redux Toolkit & React-Redux.
- **Routing:** React Router DOM.
- **Build Server:** Vite for blazingly fast development and optimized production builds.
- **Key Libraries:** 
  - `axios` for optimized API interactions.
  - `react-quill` for rich-text content and coaching notes generation.
  - `swiper` for slick and dynamic media carousels displaying drills and tutorials.
  - `socket.io-client` for persistent WebSocket connections.

### Backend Architecture
- **Core Engine:** Node.js, Express.js.
- **Database Ecosystem:** MongoDB coupled with Mongoose ODM.
- **Security Mechanisms:** JsonWebToken (JWT), bcrypt, CORS, Express-Session, Express-Validator.
- **Integrations & Utilities:**
  - `stripe` for robust financial transactions and subscriptions.
  - `twilio` & `@vonage/server-sdk` for reliable SMS communications.
  - `nodemailer` for automated email dispatches.
  - `multer` for seamless multimedia analysis uploads (e.g., practice videos).

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
- Architected an immersive sports tracking platform providing personalized learning paths for athletes via online coaching.
- Bridged communication gaps with robust real-time chatting functions allowing expert coaches to monitor progress asynchronously.
- Designed a scalable, future-proof codebase structured to effortlessly accommodate new sports and expansive growth.

## 📄 License & Credits
Licensed under the ISC License. 
Designed and Developed by **Md Hassan** & Contributors.
