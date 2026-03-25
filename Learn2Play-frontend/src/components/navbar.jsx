import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { decode } from "jwt-js-decode";
import { useSelector } from "react-redux";

import InstructorImg from "../assets/images/instructor-image-course.png";
import logo from "../assets/images/logo.png";
import VARIABLES from "../../environmentVariables";

const Navbar = () => {
  const navigate = useNavigate()
  const [isUser, setIsUser] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [profileLink, setProfileLink] = useState(null);
  const [userDetails, setUserDetails] = useState();
  const currentUser = useSelector((state) => state.auth.isAuthenticated);
  const userProfileImage = useSelector(state => state.auth.userProfile.profileImage);

  const handleScrollTop = () => {
    window.scrollTo(0, 0);
  }


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const offset = 100;

      setIsFixed(scrollPosition > offset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  useEffect(() => {

    const token = localStorage.getItem("token");
    if (token) {
      setIsUser(true);
      let jwt = decode(token);
      setUserDetails(jwt.payload.user);
      setProfileLink(`/${jwt.payload.user.role}`);

    } else {
      setIsUser(false);
    }
  }, [currentUser]);

  return (
    <div
      className={`Navbar row m-0 p-0 justify-content-between align-items-center pt-3 pb-3 p-md-5 pt-md-3 pb-md-3  fixed ${isFixed ? "navbar-light" : " "
        }`}
    >
      <div className="col-3 col-lg-2 overflow-hidden ">
        <img src={logo} alt="logo" className="w-lg-75 w-100" style={{ cursor: "pointer" }} onClick={() => navigate("/")} />
      </div>
      <div className="col-10 col-lg-10 d-lg-flex d-none justify-content-end">
        <div className="d-flex align-items-center gap-4">
          <Link
            to="/"
            className={`text-light m-0 p-0 text-decoration-none fw-medium transition-colors ${isFixed ? "text-dark" : " "
              }`}
            onClick={handleScrollTop}
          >
            Home
          </Link>
          <Link
            to="/courses"
            className={`text-light m-0 p-0 text-decoration-none fw-medium transition-colors ${isFixed ? "text-dark" : " "
              }`}
            onClick={handleScrollTop}
          >
            Courses
          </Link>
          <Link
            to="/forum"
            className={`text-light m-0 p-0 text-decoration-none fw-medium transition-colors ${isFixed ? "text-dark" : " "
              }`}
            onClick={handleScrollTop}
          >
            Community
          </Link>
          <Link
            to="/courses?type=sports"
            className={`text-light m-0 p-0 text-decoration-none fw-medium transition-colors ${isFixed ? "text-dark" : " "
              }`}
            onClick={handleScrollTop}
          >
            Sports
          </Link>
          <Link
            to="/aboutUs"
            className={`text-light m-0 p-0 text-decoration-none fw-medium transition-colors ${isFixed ? "text-dark" : " "
              }`}
            onClick={handleScrollTop}
          >
            About Us
          </Link>
          {userDetails ? (
            <div className="d-flex justify-content-end ms-3">
              <Link to={profileLink} className="text-decoration-none" onClick={handleScrollTop}>
                <div className="d-flex align-items-center gap-2">
                  <div
                    className="rounded-circle overflow-hidden m-0 p-0"
                    style={{ backgroundColor: "#D9D9D9", height: '48px', width: '48px' }}
                  >
                    <img
                      src={userProfileImage ? `${import.meta.env.VITE_API_URL_REMOTE}/uploads/${userProfileImage}` : (userDetails.profileImage ? `${import.meta.env.VITE_API_URL_REMOTE}/uploads/${userDetails.profileImage}` : InstructorImg)}
                      alt="instructor image"
                      className="instructorImg rounded-circle"
                      style={{ height: '48px', width: '48px', objectFit: 'cover' }}
                    />
                  </div>
                  <p
                    className={`text-light text-decoration-none m-0 p-0 fw-semibold ${isFixed ? "text-dark" : " "
                      }`}
                  >
                    {userDetails.username}
                  </p>
                </div>
              </Link>
            </div>
          ) : (
            <div className="d-flex justify-content-end gap-3 ms-3">
              <Link
                to="/login"
                className="text-decoration-none"
                onClick={handleScrollTop}
              >
                <button
                  className={`login btn bg-light rounded-pill px-4 py-2 fw-semibold ${isFixed ? "login-scroll" : " "
                    }`}
                >
                  Login
                </button>
              </Link>
              <Link
                to="/register"
                className="text-decoration-none"
                onClick={handleScrollTop}
              >
                <button
                  className={`signup btn rounded-pill px-4 py-2 text-light fw-semibold ${isFixed ? "signup-scroll" : ""
                    }`}
                  style={{ border: '2px solid transparent' }}
                >
                  Sign Up
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>

      <i
        className="bi bi-list fs-1 w-auto d-flex d-lg-none"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      ></i>

      <div
        className="offcanvas offcanvas-end"

        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <div className="col-6">
            <img src={logo} alt="logo" className="w-100" />
          </div>

          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="row m-0 p-0 align-items-center">
            <Link
              to="/"
              className=" text-light  m-0 p-0 text-decoration-none mt-3 mb-3 "
              onClick={handleScrollTop}
            >
              <p className="m-0 p-0 w-auto fs-4 " data-bs-dismiss="offcanvas">Home</p>
            </Link>
            <Link
              to="/courses"
              className="text-light  m-0 p-0 text-decoration-none mt-3 mb-3"
              onClick={handleScrollTop}
            >
              <p className="m-0 p-0 w-auto fs-4 " data-bs-dismiss="offcanvas">Courses</p>
            </Link>
            <Link
              to="/forum"
              className="text-light  m-0 p-0 text-decoration-none mt-3 mb-3"
              onClick={handleScrollTop}
            >
              <p className="m-0 p-0 w-auto fs-4 " data-bs-dismiss="offcanvas">Community-forum</p>
            </Link>
            <Link
              to="/courses?type=sports"
              className="text-light  m-0 p-0 text-decoration-none mt-3 mb-3"
              onClick={handleScrollTop}
            >
              <p className="m-0 p-0 w-auto fs-4 " data-bs-dismiss="offcanvas">Sports</p>
            </Link>
            <Link
              to="/aboutUs"
              className="text-light  m-0 p-0 text-decoration-none mt-3 mb-3"
              onClick={handleScrollTop}
            >
              <p className="m-0 p-0 w-auto fs-4 " data-bs-dismiss="offcanvas">About Us</p>
            </Link>
            {userDetails ? (
              <div className="row m-0 p-0">
                <Link to={profileLink} className="text-decoration-none m-0 p-0" onClick={handleScrollTop}>
                  <div className="row m-0 p-0 align-items-center w-auto">
                    <div
                      className=" rounded-circle overflow-hidden w-auto m-0 p-0"
                      style={{ backgroundColor: "#D9D9D9" }}
                    >
                      <img
                        src={userProfileImage ? `${import.meta.env.VITE_API_URL_REMOTE}/uploads/${userProfileImage}` : (userDetails.profileImage ? `${import.meta.env.VITE_API_URL_REMOTE}/uploads/${userDetails.profileImage}` : InstructorImg)}
                        alt="instructor image"
                        className="instructorImg  rounded-circle"
                        style={{ height: '50px', width: '50px' }}
                      />
                    </div>
                    <p
                      className={`text-light text-decoration-none  m-0 p-0 ps-2 w-auto fw-medium ${isFixed ? "text-dark" : " "
                        }`}

                      data-bs-dismiss="offcanvas"
                    >
                      {userDetails.username}
                    </p>
                  </div>
                </Link>
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-light w-auto m-0 p-0 text-decoration-none"
                  onClick={handleScrollTop}
                >
                  <button className="login btn bg-light rounded-pill ps-4 pe-4 fs-4" data-bs-dismiss="offcanvas">
                    Login
                  </button>
                </Link>
                <Link
                  to="/register"
                  className="text-light w-auto m-0 p-0 text-decoration-none ms-2"
                  onClick={handleScrollTop}
                >
                  <button className="signup btn rounded-pill ps-3 pe-3 text-light fs-4" data-bs-dismiss="offcanvas">
                    Sign Up
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
