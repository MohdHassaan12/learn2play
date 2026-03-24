import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import RelatedBlogItem from "../components/relatedBlogItem";
import CourseItems from "../components/courseItem";

import heroImg from "../assets/images/blog-hero.png";
import blogListItemImg1 from "../assets/images/blog-list-item-1.png";
import blogListItemImg2 from "../assets/images/blog-list-item-2.png";
import blogListItemImg3 from "../assets/images/blog-list-item-3.png";
import blogListItemImg4 from "../assets/images/blog-list-item-4.png";

// Import custom styles
import "../styles/sports.css";

// Sports data
const sportsData = [
  {
    name: 'Football',
    image: blogListItemImg1,
    description: 'Elite football training program certified by UEFA and designed by professional coaches',
    levels: [
      'Foundation (Basic Skills & Rules)',
      'Development (Advanced Techniques)',
      'Elite (Professional Level)',
    ],
    features: [
      'Professional Ball Control',
      'Advanced Dribbling Skills',
      'Strategic Team Formations',
      'Position-Specific Training',
      'Match Analysis & Tactics',
      'Elite Conditioning',
    ],
    duration: '12 weeks',
    achievements: [
      'UEFA Pro Licensed Coaches',
      'Professional Club Exposure',
      'Live Match Experience',
      'Video Analysis Sessions',
    ],
    curriculum: [
      'Technical Excellence',
      'Tactical Mastery',
      'Physical Development',
      'Mental Conditioning',
    ]
  },
  {
    name: 'Cricket',
    image: blogListItemImg2,
    description: 'World-class cricket program featuring ICC-certified coaching and modern training methods',
    levels: [
      'Foundation (Basic Techniques)',
      'Academy (Specialized Skills)',
      'Professional (Match Ready)',
    ],
    features: [
      'Advanced Batting Skills',
      'Professional Bowling',
      'Dynamic Fielding',
      'Match Strategies',
      'Power Hitting',
      'Specialist Training',
    ],
    duration: '16 weeks',
    achievements: [
      'ICC Level 3 Coaches',
      'First-Class Matches',
      'Video Analysis',
      'Pro Equipment Access',
    ],
    curriculum: [
      'Batting Excellence',
      'Bowling Mastery',
      'Fielding Skills',
      'Match Tactics',
    ]
  },
  {
    name: 'Basketball',
    image: blogListItemImg3,
    description: 'Professional basketball training program following NBA development standards',
    levels: [
      'Rookie (Core Skills)',
      'Varsity (Team Play)',
      'Pro (Elite Performance)',
    ],
    features: [
      'Pro Shooting Form',
      'Advanced Dribbling',
      'Court Leadership',
      'Defense Mastery',
      'Team Strategies',
      'Basketball IQ',
    ],
    duration: '10 weeks',
    achievements: [
      'NBA Certified Training',
      'League Games',
      'Skills Assessment',
      'Performance Stats',
    ],
    curriculum: [
      'Offensive Game',
      'Defensive Skills',
      'Team Dynamics',
      'Game Strategy',
    ]
  },
  {
    name: 'Tennis',
    image: blogListItemImg4,
    description: 'Comprehensive tennis program with ATP tour-level training methodology',
    levels: [
      'Foundation (Basic Strokes)',
      'Intermediate (Match Play)',
      'Advanced (Tournament)',
    ],
    features: [
      'Professional Serves',
      'Advanced Returns',
      'Court Positioning',
      'Match Tactics',
      'Tennis Fitness',
      'Mental Toughness',
    ],
    duration: '14 weeks',
    achievements: [
      'ATP Certified Program',
      'Tournament Entry',
      'Performance Tracking',
      'Pro Equipment Use',
    ],
    curriculum: [
      'Stroke Perfection',
      'Game Strategy',
      'Physical Training',
      'Match Practice',
    ]
  }
];

const Sports = () => {
  const navigate = useNavigate();
  return (
    <div className="sports row m-0 p-0 mt-5 pt-lg-4 ">
      <div className="sports-hero m-0 p-0 pt-lg-3 pt-5 ps-lg-0 pe-lg-0 ps-2 pe-2 justify-content-center pb-5 pb-lg-0  ">
        <div className="container d-lg-flex">
          <div className="col-lg-6 p-lg-5 ps-lg-0">
            <p className="m-0 p-0 fs-4">
              Unlock Your Athletic
              <span style={{ color: "#49BBBD" }} className="fw-medium ps-2">
                Potential
              </span>
            </p>
            <h2 className="m-0 p-0 mt-2">Explore Sports</h2>
            <p className="text-secondary mt-4">
              Discover our comprehensive range of sports programs tailored to
              all skill levels. Start your athletic journey or take your
              performance to the next level.
            </p>
            <p className="text-secondary mt-4">
              Whether you're looking to master the fundamentals or refine advanced techniques, Learn2Play offers expert-guided programs across popular sports. Our structured courses combine video tutorials, interactive drills, and personalized feedback to ensure steady progress.
            </p>
            <button 
              className="btn text-light mt-4" 
              onClick={() => navigate('/courses')}
              style={{ backgroundColor: '#49BBBD', transition: 'transform 0.2s' }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              Start Learning Now
            </button>
          </div>
          <div className="col-lg-6 p-lg-5 pe-lg-0 mt-lg-0 mt-5">
            <img
              src={heroImg}
              alt="blog-hero image"
              className="w-100 rounded-4"
            />
          </div>
        </div>
      </div>

      {/* Sports Categories */}
      <div className="sports-categories">
        <div className="sports-container">
          <div className="sports-heading">
            <h2>Explore Sports Categories</h2>
            <p className="sports-subheading">Choose from our wide range of professional sports training programs</p>
          </div>
          <div className="row g-4">
            {sportsData.map((sport, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div 
                  className="sport-card"
                  onClick={() =>
                    navigate("/sports-details", {
                      state: {
                        heading: sport.name,
                        subheading: `Master ${sport.name} with our comprehensive training program.`,
                        details: {
                          description: sport.description,
                          levels: sport.levels,
                          features: sport.features,
                          duration: sport.duration,
                          achievements: sport.achievements
                        }
                      },
                    })
                  }
                >
                  <div className="sport-image">
                    <img src={sport.image} alt={sport.name} />
                    <h4>{sport.name}</h4>
                  </div>
                  <div className="sport-content">
                    {/* Description Section */}
                    <div className="sport-content-section">
                      <h6 className="section-title">Program Overview</h6>
                      <p className="text-muted mb-0">{sport.description}</p>
                    </div>
                    
                    {/* Levels Section */}
                    <div className="sport-content-section">
                      <h6 className="section-title">Training Levels</h6>
                      <div className="sport-levels">
                        {sport.levels.map((level, i) => (
                          <span key={i} className="sport-level-badge">
                            <i className="bi bi-star-fill"></i>
                            {level}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features Section */}
                    <div className="sport-content-section">
                      <h6 className="section-title">Key Features</h6>
                      <div className="sport-features">
                        {sport.features.map((feature, i) => (
                          <div key={i} className="sport-feature-item">
                            <i className="bi bi-check-circle-fill"></i>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Curriculum Section */}
                    <div className="sport-content-section">
                      <h6 className="section-title">Curriculum</h6>
                      <div className="sport-curriculum">
                        {sport.curriculum.map((item, i) => (
                          <div key={i} className="curriculum-item">
                            <i className="bi bi-journal-text"></i>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Achievements Section */}
                    <div className="sport-content-section">
                      <h6 className="section-title">Program Highlights</h6>
                      <div className="sport-achievements">
                        {sport.achievements.map((achievement, i) => (
                          <div key={i} className="achievement-item">
                            <i className="bi bi-trophy-fill"></i>
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Duration and CTA */}
                    <div className="sport-cta">
                      <div className="sport-duration">
                        <i className="bi bi-clock-fill"></i>
                        <span>{sport.duration}</span>
                      </div>
                      <button className="start-training-btn">
                        <i className="bi bi-arrow-right-circle"></i>
                        Start Training
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* *progress course items */}
      <div className="realtedBlogRow m-0 p-0 justify-content-center ">
        <div className="container pt-5 pb-5">
          <div className="row m-0 p-0 justify-content-between ">
            <h4 className="m-0 p-0 w-auto mb-4">Related Sports</h4>
            <Link
              className="w-auto text-decoration-none "
              style={{ color: "#49BBBD" }}
            >
              <p className="m-0 p-0 w-auto fw-medium ">See All</p>
            </Link>
          </div>
          <div className="row m-0 p-0">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                className: "swiper-pagination-top-spacing",
              }}
              modules={[Autoplay, Pagination]}
              breakpoints={{
                // When window width is <= 640px, show only 1 slide
                0: {
                  slidesPerView: 1,
                },
                // When window width is <= 768px, show 2 slides
                768: {
                  slidesPerView: 2,
                },
                1000: {
                  slidesPerView: 2,
                },
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <RelatedBlogItem />
              </SwiperSlide>
              <SwiperSlide>
                <RelatedBlogItem />
              </SwiperSlide>
              <SwiperSlide>
                <RelatedBlogItem />
              </SwiperSlide>
              <SwiperSlide>
                <RelatedBlogItem />
              </SwiperSlide>
              <SwiperSlide>
                <RelatedBlogItem />
              </SwiperSlide>
              <SwiperSlide>
                <RelatedBlogItem />
              </SwiperSlide>
              <SwiperSlide>
                <RelatedBlogItem />
              </SwiperSlide>
              <SwiperSlide>
                <RelatedBlogItem />
              </SwiperSlide>
              <SwiperSlide>
                <RelatedBlogItem />
              </SwiperSlide>
              <SwiperSlide>
                <RelatedBlogItem />
              </SwiperSlide>
              <SwiperSlide>
                <RelatedBlogItem />
              </SwiperSlide>
              <SwiperSlide>
                <RelatedBlogItem />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <div className="courses-section py-5 d-flex flex-column align-items-center  ">
        <div className="container mt-5 mb-5">
          <div className="row m-0 p-0 justify-content-between mt-4 mb-4">
            <h5 className="m-0 p-0 w-auto">Featured Sports Courses</h5>
            <Link
              to="/courses"
              className="w-auto text-decoration-none fw-medium"
              style={{ color: "#49BBBD" }}
            >
              see all
            </Link>
          </div>
          <div className="row">
            <CourseItems 
              id="1"
              title="Professional Football Training"
              category="Football"
              instructor="Coach Alex Smith"
              description="Master football techniques, tactics, and strategies with professional guidance."
              duration="3 Months"
            />
            <CourseItems 
              id="2"
              title="Cricket Masterclass"
              category="Cricket"
              instructor="Coach Rahul Kumar"
              description="From basics to advanced cricket skills - batting, bowling, and fielding techniques."
              duration="4 Months"
            />
            <CourseItems 
              id="3"
              title="Basketball Fundamentals"
              category="Basketball"
              instructor="Coach Mike Johnson"
              description="Learn essential basketball skills, team play, and game strategies."
              duration="3 Months"
            />
            <CourseItems 
              id="4"
              title="Tennis Excellence Program"
              category="Tennis"
              instructor="Coach Sarah Williams"
              description="Comprehensive tennis training from serves to advanced court strategies."
              duration="3 Months"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sports;
