import React, { useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";
import VARIABLES from "../../environmentVariables";

import CourseCategoryItem from "../components/courseCategoryItem";
import CourseItems from "../components/courseItem";
import ProgressCourseItem from "../components/progressCourseItem";
import courseImg1 from "../assets/images/courseImg.png";
import courseImg2 from "../assets/images/blog-list-item-1.png";
import courseImg3 from "../assets/images/blog-list-item-2.png";
import courseImg4 from "../assets/images/blog-list-item-3.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const Courses = ({ type = 'all' }) => {
  const [searchParams] = useSearchParams();
  const [courseList, setCourseList] = useState();
  const [loading, setLoading] = useState(true);
  const [selectedSport, setSelectedSport] = useState(searchParams.get('sport'));

  const handleViewCourseList = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL_REMOTE}/view-courses`
      );
      if (response.status === 200) {
        let courses = response.data.data || [];

        if (type === 'sports') {
          courses = courses.filter(course =>
            ['Football', 'Cricket', 'Basketball', 'Tennis', 'Swimming', 'Table Tennis']
              .includes(course.category)
          );

          // Further filter by selected sport if specified
          if (selectedSport) {
            courses = courses.filter(course =>
              course.category.toLowerCase() === selectedSport.toLowerCase()
            );
          }
        }

        setCourseList(courses);
      }
    } catch (error) {
      console.error('Error fetching courses:', error);
      toast.error('Failed to load courses');
    } finally {
      setLoading(false);
    }
  };

  const sportsCategories = [
    { id: 'football', name: 'Football', icon: 'bi-dribbble', count: 12 },
    { id: 'cricket', name: 'Cricket', icon: 'bi-bullseye', count: 8 },
    { id: 'basketball', name: 'Basketball', icon: 'bi-circle', count: 10 },
    { id: 'tennis', name: 'Tennis', icon: 'bi-circle-fill', count: 6 },
    { id: 'swimming', name: 'Swimming', icon: 'bi-water', count: 4 },
    { id: 'tabletennis', name: 'Table Tennis', icon: 'bi-record-circle', count: 5 }
  ];

  const courseImgArr = [courseImg1, courseImg2, courseImg3, courseImg4];

  useEffect(() => {
    handleViewCourseList();
  }, [type, selectedSport]); // Re-fetch when type or selected sport changes

  useEffect(() => {
    setSelectedSport(searchParams.get('sport'));
  }, [searchParams]);
  const isSportsView = type === 'sports';

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="courses row m-0 p-0 pt-lg-4 mt-5">
      <div className="container">
        <h1 className="text-center mb-4">{isSportsView ? 'Sports Training Courses' : 'All Courses'}</h1>
        <p className="text-center text-muted mb-5">
          {isSportsView
            ? 'Master your favorite sports with expert guidance and personalized training programs'
            : 'Explore our wide range of courses designed to help you achieve your learning goals'}
        </p>
      </div>
      {isSportsView && (
        <div className="container mt-4 mb-5">
          <h4 className="mb-4">Browse by Sport {selectedSport && `- ${selectedSport.charAt(0).toUpperCase() + selectedSport.slice(1)}`}</h4>
          <div className="row g-4">
            {sportsCategories.map((category) => (
              <div key={category.id} className="col-md-4 col-lg-2">
                <Link
                  to={`/courses?sport=${category.id}`}
                  className="text-decoration-none"
                >
                  <div className="card h-100 shadow-sm hover-effect">
                    <div className="card-body text-center">
                      <div className="display-4 mb-3">
                        <i className={`bi ${category.icon}`}></i>
                      </div>
                      <h5 className="card-title">{category.name}</h5>
                      <p className="card-text text-muted">{category.count} Courses</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Course List */}
      <div className="progressCourseRow m-0 p-0 justify-content-center">
        {(!courseList || courseList.length === 0) && (
          <div className="text-center py-5">
            <h3>No courses found</h3>
            <p className="text-muted">
              {selectedSport
                ? `No courses available for ${selectedSport}. Please check back later.`
                : 'No courses available at the moment.'}
            </p>
          </div>
        )}
        <div className="container pt-5 pb-5">
          <div className="row m-0 p-0 justify-content-between ">
            <h4 className="m-0 p-0 w-auto mb-4">
              Featured Sports Courses
            </h4>
            <Link
              className="w-auto text-decoration-none "
              style={{ color: "#49BBBD" }}
            >
              <p className="m-0 p-0 w-auto fw-medium ">View history</p>
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
                  slidesPerView: 3,
                },
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <ProgressCourseItem
                  title="Professional Football Training"
                  category="Football"
                  progress={75}
                  nextLesson="Advanced Dribbling Techniques"
                />
              </SwiperSlide>
              <SwiperSlide>
                <ProgressCourseItem
                  title="Cricket Mastery Program"
                  category="Cricket"
                  progress={60}
                  nextLesson="Spin Bowling Fundamentals"
                />
              </SwiperSlide>
              <SwiperSlide>
                <ProgressCourseItem
                  title="Basketball Skills Development"
                  category="Basketball"
                  progress={45}
                  nextLesson="Three-Point Shooting"
                />
              </SwiperSlide>
              <SwiperSlide>
                <ProgressCourseItem
                  title="Tennis Excellence Program"
                  category="Tennis"
                  progress={30}
                  nextLesson="Serve Techniques"
                />
              </SwiperSlide>
              <SwiperSlide>
                <ProgressCourseItem />
              </SwiperSlide>
              <SwiperSlide>
                <ProgressCourseItem />
              </SwiperSlide>
              <SwiperSlide>
                <ProgressCourseItem />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      {/**course category list */}
      <div className="courseCategoryList">
        <div className="container  mt-5 mb-5">
          <h4 className="m-0 p-0">Choice favourite sports from top category</h4>
          <div className="row m-0 p-0">
            <CourseCategoryItem
              name="Sports"
              iconName="brush-fill"
              iconColor="#49BBBD"
              iconBgColor="rgba(73,187,189,0.3)"
              details="Hello"
            />
            <CourseCategoryItem
              name="Development"
              iconName="building"
              iconColor="#5B72EE"
              iconBgColor="rgba(91,114,238,0.3)"
              details="Hello hi"
            />
            <CourseCategoryItem
              name="Web Development"
              iconName="database-fill"
              iconColor="#9DCCFF"
              iconBgColor="rgba(157,204,255,0.3)"
              details="Hello"
            />
            <CourseCategoryItem
              name="Business"
              iconName="briefcase"
              iconColor="#00CBB8"
              iconBgColor="rgba(0,203,184,0.3)"
              details="Hello"
            />
            <CourseCategoryItem
              name="Marketing"
              iconName="shop-window"
              iconColor="#F48C06"
              iconBgColor="rgba(244,140,6,0.3)"
              details="Hello"
            />
            <CourseCategoryItem
              name="Photography"
              iconName="camera-fill"
              iconColor="#EE645B"
              iconBgColor="rgba(238,100,91,0.3)"
              details="Hello"
            />
            <CourseCategoryItem
              name="Acting"
              iconName="film"
              iconColor="#252641"
              iconBgColor="rgba(37,38,65,0.3)"
              details="Hello"
            />
            <CourseCategoryItem
              name="Business"
              iconName="brush-fill"
              iconColor="#00CBB8"
              iconBgColor="rgba(0,203,184,0.3)"
              details="Hello"
            />
          </div>
        </div>
      </div>
      {/* course list */}
      <div
        className="pt-3 pb-5"
        style={{ backgroundColor: "rgba(157,204,255,0.2)" }}
      >
        <div className="container mt-5 mb-5">
          <div className="row m-0 p-0 justify-content-between mt-4 mb-4">
            <h5 className="m-0 p-0 w-auto">Recommended for you</h5>
            <Link
              to="/courses"
              className="w-auto text-decoration-none fw-medium"
              style={{ color: "#49BBBD" }}
            >
              see all
            </Link>
          </div>
          <div className="row g-4 mt-4">
            {loading ? (
              <p>Loading...</p>
            ) : (
              courseList.map((course, index) => (
                <div key={course._id} className="col-12 col-md-6 col-lg-3">
                  <CourseItems
                    id={course._id}
                    title={course.courseTitle}
                    category={course.courseCategory}
                    instructor={course.teacherId.firstname}
                    img={courseImgArr[index]}
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <div className="courses-section py-5 d-flex flex-column align-items-center  ">
        <div className="container mt-5">
          <div className="row m-0 p-0 justify-content-between mt-4 mb-4">
            <h5 className="m-0 p-0 w-auto">Get choice of your course</h5>
            <Link
              to="/courses"
              className="w-auto text-decoration-none fw-medium"
              style={{ color: "#49BBBD" }}
            >
              see all
            </Link>
          </div>
          <div className="row g-4">
            <div className="col-12 col-md-6 col-lg-3">
              <CourseItems
                key="10001"
                title="Beginner Football Skills"
                category="Football"
                instructor="Amaan"
              />
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <CourseItems
                key="10002"
                title="Table Tennis Fundamentals"
                category="TT"
                instructor="Nabeel"
              />
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <CourseItems
                key="10003"
                title="Match Strategy & Tactics"
                category="General Sport"
                instructor="Hassan"
              />
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <CourseItems
                key="10004"
                title="Advanced Stroke Refinement"
                category="Swimming"
                instructor="Shahid"
              />
            </div>
          </div>
        </div>
      </div>

      {/**online coaching remote */}
      <div className=" m-0 mt-5 p-0 d-flex justify-content-center ">
        <div className="learningnow container">
          <div
            className="card p-5 rounded-4 d-flex align-items-center  justify-content-center "
            style={{ backgroundColor: "#252641" }}
          >
            <h4 className="m-0 p-0 w-auto text-light">
              Train anywhere, progress everywhere – elite sports coaching without boundaries.
            </h4>
            <p className="m-0 p-0 mt-3 text-white text-center ">
              Learn2Play's remote coaching platform brings expert instruction directly to you, eliminating geographical barriers to quality sports education.
              Our innovative approach combines technology and expertise to deliver effective, engaging lessons that fit your schedule and learning preferences.
            </p>
            <button className=" btn text-light mt-4">start learning now</button>
          </div>
        </div>
      </div>
      {!selectedSport && courseList && courseList.length > 0 && (
        <div className="courses-section py-5 d-flex flex-column align-items-center">
          <div className="container mt-5">
            <div className="row m-0 p-0 justify-content-between mt-4 mb-4">
              <h5 className="m-0 p-0 w-auto">
                Popular Sports Courses
              </h5>
              <Link
                to="/courses"
                className="w-auto text-decoration-none fw-medium"
                style={{ color: "#49BBBD" }}
              >
                see all
              </Link>
            </div>
            <div className="row g-4">
              {courseList.slice(0, 4).map((course) => (
                <div key={course._id} className="col-12 col-md-6 col-lg-3">
                  <CourseItems
                    title={course.title}
                    category={course.category}
                    instructor={course.instructor}
                    image={courseImgArr[Math.floor(Math.random() * courseImgArr.length)]}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {!selectedSport && courseList && courseList.length > 0 && (
        <div
          className="pt-3 pb-5"
          style={{ backgroundColor: "rgba(157,204,255,0.2)" }}
        >
          <div className="container mt-5 mb-5">
            <div className="row m-0 p-0 justify-content-between mt-4 mb-4">
              <h5 className="m-0 p-0 w-auto">Trending Sports Courses</h5>
              <Link
                to="/courses"
                className="w-auto text-decoration-none fw-medium"
                style={{ color: "#49BBBD" }}
              >
                see all
              </Link>
            </div>
            <div className="row g-4">
              {courseList.slice(4, 8).map((course) => (
                <div key={course._id} className="col-12 col-md-6 col-lg-3">
                  <CourseItems
                    title={course.title}
                    category={course.category}
                    instructor={course.instructor}
                    image={courseImgArr[Math.floor(Math.random() * courseImgArr.length)]}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;
