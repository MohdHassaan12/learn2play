import React from "react";
import { Link } from "react-router-dom";
import courseImg from "../assets/images/courseImg.png";
import InstructorImg from "../assets/images/instructor-image-course.png";
const CourseItems = ({
  id,
  img = '/src/assets/images/courseImg.png',
  category,
  title,
  instructor,
  duration = '12 Month',
  description,
  rating,
  students,
  level
}) => {
  return (
    <div className="course-item h-100">
      <Link to={`/course-details/${id}`} className="text-decoration-none h-100 d-block">
        <div className="card h-100 course-card shadow-sm hover-effect">
          {/* Course Image and Level Badge */}
          <div className="position-relative">
            <img
              src={img || courseImg}
              alt={title}
              className="card-img-top rounded-top"
              loading="lazy"
            />
            <div className="course-overlay d-flex align-items-center justify-content-center">
              <button className="btn btn-light btn-sm fw-medium px-3 py-2">
                <i className="bi bi-play-circle me-1"></i>
                Preview Course
              </button>
            </div>
            {level && (
              <div className="position-absolute top-0 end-0 m-3">
                <span className="badge bg-primary px-3 py-2 rounded-pill fw-medium">{level}</span>
              </div>
            )}
          </div>

          {/* Course Details */}
          <div className="card-body d-flex flex-column p-4">
            {/* Category and Duration */}
            <div className="d-flex justify-content-between align-items-center mb-3">
              <span className="badge bg-light text-primary d-flex align-items-center px-3 py-2">
                <i className="bi bi-grid me-2"></i>
                {category}
              </span>
              <span className="badge bg-light text-secondary d-flex align-items-center px-3 py-2">
                <i className="bi bi-stopwatch me-2"></i>
                {duration}
              </span>
            </div>

            {/* Title and Description */}
            <h5 className="card-title h5 fw-bold mb-3 text-dark">{title}</h5>
            <p className="card-text text-secondary flex-grow-1 mb-4">{description || 'Master the world\'s most popular sport with our comprehensive training programs.'}</p>

            {/* Instructor and Enrollment */}
            <div className="mt-auto">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="d-flex align-items-center">
                  <div className="instructor-avatar">
                    <img
                      src={InstructorImg}
                      alt={instructor}
                      className="rounded-circle shadow-sm"
                      width="40"
                      height="40"
                    />
                  </div>
                  <span className="ms-3 fw-medium text-dark">{instructor}</span>
                </div>
                <button className="btn btn-primary btn-sm rounded-pill px-3 py-2 fw-medium">
                  Enroll Now
                </button>
              </div>

              {/* Rating and Students */}
              {(rating || students) && (
                <div className="d-flex justify-content-between align-items-center">
                  {rating && (
                    <div className="d-flex align-items-center">
                      <i className="bi bi-star-fill text-warning me-2 fs-5"></i>
                      <span className="fw-medium">{rating}</span>
                    </div>
                  )}
                  {students && (
                    <div className="d-flex align-items-center text-secondary">
                      <i className="bi bi-people-fill me-2 fs-5"></i>
                      <span>{students.toLocaleString()} students</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CourseItems;
