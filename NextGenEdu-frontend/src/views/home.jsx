import { Link } from "react-router-dom";
import CourseItems from "../components/courseItem";

// Import images
import heroImage from "../assets/images/hero-image.png";
import trainingFeaturesImg from "../assets/images/tools-for-teacher.png";
import assesmentImg from '../assets/images/assesment-img.png';

// Import styles
import '../styles/home.scss';

const Home = () => {
  const sports = [
    {
      id: 'football',
      name: 'Football',
      icon: 'bi-dribbble',
      description: 'Master ball control, passing, shooting, and team tactics'
    },
    {
      id: 'cricket',
      name: 'Cricket',
      icon: 'bi-bullseye',
      description: 'Learn batting, bowling, fielding, and match strategies'
    },
    {
      id: 'basketball',
      name: 'Basketball',
      icon: 'bi-circle',
      description: 'Perfect shooting, dribbling, defense, and team play'
    },
    {
      id: 'tennis',
      name: 'Tennis',
      icon: 'bi-circle-fill',
      description: 'Develop serves, strokes, footwork, and match tactics'
    }
  ];

  const featuredCourses = [
    {
      key: 'football-pro',
      title: 'Elite Football Academy',
      category: 'Football',
      instructor: 'Coach Alex',
      description: 'Master professional football techniques, tactics, and game strategies',
      duration: '6 months',
      rating: 4.9,
      students: 1200,
      level: 'All Levels'
    },
    {
      key: 'cricket-master',
      title: 'Cricket Excellence Program',
      category: 'Cricket',
      instructor: 'Coach Rahul',
      description: 'Comprehensive cricket training from basics to advanced match techniques',
      duration: '4 months',
      rating: 4.8,
      students: 850,
      level: 'Intermediate'
    },
    {
      key: 'basketball-elite',
      title: 'Pro Basketball Training',
      category: 'Basketball',
      instructor: 'Coach Michael',
      description: 'Develop professional basketball skills with personalized coaching',
      duration: '3 months',
      rating: 4.7,
      students: 950,
      level: 'Advanced'
    },
    {
      key: 'tennis-pro',
      title: 'Tennis Champion Academy',
      category: 'Tennis',
      instructor: 'Coach Sarah',
      description: 'Master tennis techniques with tournament-level training',
      duration: '6 months',
      rating: 4.9,
      students: 750,
      level: 'All Levels'
    }
  ];

  return (
    <div className="home">
      <section className="hero-section py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero-content pe-lg-5">
                <span className="badge bg-warning bg-opacity-10 text-warning px-3 py-2 rounded-pill mb-3">
                  <i className="bi bi-lightning-charge-fill me-2"></i>
                  Transform Your Game
                </span>
                <h1 className="display-4 fw-bold mb-4 text-dark">
                  <span style={{ color: "#F9A826" }}>Unlock</span> Your Athletic Potential
                </h1>
                <p className="lead text-secondary mb-4">
                  Learn2Play is your gateway to mastering sports through expert-led training, personalized coaching, and a supportive community of athletes. Whether you're a beginner or advanced player, we'll help you achieve your athletic goals.
                </p>
                <div className="d-flex gap-3 mt-5">
                  <Link to="/courses?type=sports" className="text-decoration-none">
                    <button className="btn btn-primary btn-lg rounded-pill px-4 py-2 d-flex align-items-center shadow-sm transition-colors border-0">
                      <i className="bi bi-play-circle me-2"></i>
                      Explore Sports
                    </button>
                  </Link>
                  <button className="btn btn-warning text-dark btn-lg rounded-pill px-4 py-2 d-flex align-items-center shadow-sm transition-colors border-0">
                    <i className="bi bi-lightning-fill me-2"></i>
                    Start Training
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0">
              <div className="position-relative w-100 h-100 d-flex justify-content-center align-items-center">
                <div className="position-relative" style={{ zIndex: 2 }}>
                  <img
                    src={heroImage}
                    alt="sports training"
                    className="img-fluid rounded-4 shadow-lg position-relative"
                    style={{ zIndex: 2, maxHeight: '550px', objectFit: 'cover' }}
                  />
                  <div className="position-absolute top-0 start-0 w-100 h-100 bg-primary rounded-4" style={{ zIndex: 3, opacity: 0.1 }}></div>

                  {/* Floating Badges */}
                  <div className="position-absolute top-0 end-0 translate-middle-y me-n4 mt-5 d-none d-md-block" style={{ zIndex: 4 }}>
                    <div className="bg-white rounded-pill px-4 py-3 shadow-lg d-flex align-items-center border border-light">
                      <div className="bg-warning bg-opacity-10 p-2 rounded-circle me-3">
                        <i className="bi bi-trophy-fill text-warning fs-5"></i>
                      </div>
                      <span className="fw-bold fs-6">Expert Coaches</span>
                    </div>
                  </div>

                  <div className="position-absolute bottom-0 start-0 translate-middle-x ms-n4 mb-5 d-none d-md-block" style={{ zIndex: 4 }}>
                    <div className="bg-white rounded-pill px-4 py-3 shadow-lg d-flex align-items-center border border-light">
                      <div className="bg-primary bg-opacity-10 p-2 rounded-circle me-3">
                        <i className="bi bi-people-fill text-primary fs-5"></i>
                      </div>
                      <span className="fw-bold fs-6">Active Community</span>
                    </div>
                  </div>
                </div>

                {/* Decorative background circle */}
                <div className="position-absolute top-50 start-50 translate-middle rounded-circle bg-primary opacity-10" style={{ width: '120%', paddingTop: '120%', zIndex: 1, filter: 'blur(60px)' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sports Section */}
      <section className="sports-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill mb-3">
              <i className="bi bi-trophy me-2"></i>
              Available Sports
            </span>
            <h2 className="display-6 fw-bold mb-3" style={{ color: "#2F327D" }}>
              Choose Your Sport
            </h2>
            <p className="lead text-secondary col-lg-8 mx-auto">
              Select from our wide range of sports and start your journey towards
              excellence with personalized training programs.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-4 mb-4">
              <i className="bi bi-trophy fs-1 text-warning mb-3"></i>
              <h4>Expert Coaches</h4>
              <p>Learn from professional athletes and certified trainers</p>
            </div>
            <div className="col-md-4 mb-4">
              <i className="bi bi-camera-video fs-1 text-primary mb-3"></i>
              <h4>Video Analysis</h4>
              <p>Get detailed feedback on your technique and performance</p>
            </div>
            <div className="col-md-4 mb-4">
              <i className="bi bi-graph-up fs-1 text-success mb-3"></i>
              <h4>Progress Tracking</h4>
              <p>Monitor your improvement with advanced analytics</p>
            </div>
          </div>
          <div className="row g-4 justify-content-center">
            {sports.map((sport) => (
              <div key={sport.id} className="col-md-6 col-lg-3">
                <Link
                  to="/sports-details"
                  state={{
                    heading: `Master ${sport.name}`,
                    subheading: sport.description,
                    sport: sport.name
                  }}
                  className="text-decoration-none"
                >
                  <div className="card h-100 shadow-sm hover-effect">
                    <div className="card-body text-center">
                      <div className="display-1 mb-3">
                        <i className={`bi ${sport.icon}`}></i>
                      </div>
                      <h4 className="card-title">{sport.name}</h4>
                      <p className="card-text text-muted">{sport.description}</p>
                      <button className="btn btn-outline-primary mt-2">
                        Start Training
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="featured-courses-section py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill mb-3">
              <i className="bi bi-star me-2"></i>
              Top Rated Programs
            </span>
            <h2 className="display-6 fw-bold mb-3" style={{ color: "#2F327D" }}>
              Featured Courses
            </h2>
            <p className="lead text-secondary col-lg-8 mx-auto">
              Learn & master any sport with expert guidance, immersive training,
              dedicated practice, and personalized feedback. Start your journey to
              excellence today.
            </p>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h5>Choose your passion</h5>
            <Link
              to="/courses"
              className="text-decoration-none fw-medium"
              style={{ color: "#49BBBD" }}
            >
              see all
            </Link>
          </div>
          <div className="row g-4">
            {featuredCourses.map((course) => (
              <div key={course.key} className="col-md-6 col-lg-3">
                <CourseItems
                  id={course.key}
                  title={course.title}
                  category={course.category}
                  instructor={course.instructor}
                  duration={course.duration}
                  rating={course.rating}
                  students={course.students}
                  level={course.level}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Features */}
      <section className="training-features py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill mb-3">
                <i className="bi bi-gear me-2"></i>
                Advanced Features
              </span>
              <h2 className="display-6 fw-bold mb-4" style={{ color: "#2F327D" }}>
                <span style={{ color: "#00CBB8" }}>Smart Training Tools</span>
                <br />For Athletes
              </h2>
              <p className="lead text-secondary mb-5">
                Access state-of-the-art training tools and resources designed for
                athletes. Get real-time feedback, personalized drills, and
                performance analytics to enhance your game.
              </p>
              <div className="features-list">
                <div className="feature-item d-flex align-items-center p-3 mb-3 bg-white rounded-4 shadow-sm">
                  <div className="feature-icon bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                    <i className="bi bi-calendar-check text-primary fs-4"></i>
                  </div>
                  <div>
                    <h5 className="mb-1 fw-bold">Personalized Training</h5>
                    <p className="mb-0 text-secondary">Custom plans tailored to your goals</p>
                  </div>
                </div>
                <div className="feature-item d-flex align-items-center p-3 mb-3 bg-white rounded-4 shadow-sm">
                  <div className="feature-icon bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                    <i className="bi bi-camera-video text-primary fs-4"></i>
                  </div>
                  <div>
                    <h5 className="mb-1 fw-bold">Live Virtual Coaching</h5>
                    <p className="mb-0 text-secondary">Real-time guidance from experts</p>
                  </div>
                </div>
                <div className="feature-item d-flex align-items-center p-3 bg-white rounded-4 shadow-sm">
                  <div className="feature-icon bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                    <i className="bi bi-graph-up text-primary fs-4"></i>
                  </div>
                  <div>
                    <h5 className="mb-1 fw-bold">Performance Analytics</h5>
                    <p className="mb-0 text-secondary">Track and improve your progress</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0">
              <div className="position-relative w-100 h-100 d-flex justify-content-center align-items-center">
                <img
                  src={trainingFeaturesImg}
                  alt="Advanced training features"
                  className="img-fluid rounded-4 shadow-lg position-relative"
                  style={{ zIndex: 2, maxHeight: '500px', objectFit: 'contain' }}
                />
                <div className="position-absolute top-50 start-50 translate-middle w-100 h-100 bg-primary rounded-4 opacity-10" style={{ zIndex: 1, filter: 'blur(40px)' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Analytics */}
      <div className="performance-analytics py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="position-relative w-100 d-flex justify-content-center">
                <img
                  src={assesmentImg}
                  alt="Performance analytics dashboard"
                  className="img-fluid rounded shadow-lg"
                  style={{ maxHeight: '450px', objectFit: 'contain' }}
                />
              </div>
            </div>
            <div className="col-lg-6 ps-lg-5">
              <span className="badge bg-success bg-opacity-10 text-success px-3 py-2 rounded-pill mb-3">
                <i className="bi bi-graph-up me-2"></i>
                Analytics
              </span>
              <h2 className="display-6 fw-bold mb-4">
                <span className="text-primary">Performance</span> Tracking
              </h2>
              <p className="lead text-secondary mb-4">
                Track your athletic progress with our comprehensive performance analytics.
                Monitor key metrics, review game footage, analyze technique, and receive
                personalized improvement recommendations.
              </p>
              <p className="text-secondary">
                Our advanced tracking system helps
                you identify strengths and areas for improvement, ensuring continuous growth
                in your chosen sport.
              </p>
              <button className="btn btn-outline-primary rounded-pill px-4 py-2 mt-3 transition-colors">
                View Demo Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
