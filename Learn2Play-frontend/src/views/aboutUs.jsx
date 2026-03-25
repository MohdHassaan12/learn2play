import AboutUsImg1 from "../assets/images/about-us-img-1.jpg";
const AboutUs = () => {
  return (
    <div className="aboutUs row m-0 p-0 mt-5 pt-lg-5">
      <div className="hero d-flex flex-column  align-items-center justify-content-center">
        <h1 className="text-light text-center m-0 p-0 mb-3">About Learn2Play</h1>
        <p className="m-0 p-0 text-light text-center fs-5">
          Dedicated to transforming sports education through technology and expertise.
          At Learn2Play, we're revolutionizing how people learn and master sports. 
          Our innovative online platform bridges the gap between aspiring athletes and expert guidance, making quality sports education accessible to everyone, everywhere.
        </p>
      </div>

      <div className="m-0 p-0 d-flex justify-content-center ">
        <div className="container">
          <div className="row m-0 p-0 align-items-center">
            <div className="col-12 col-lg-6 p-lg-5 mt-5 mt-lg-0 rounded-5 overflow-hidden ">
              <img
                src={AboutUsImg1}
                alt="about us Image-1"
                className="rounded-4 w-100"
              />
            </div>
            <div className="col-12 col-lg-6 p-lg-2 ps-lg-0 mt-lg-0 mt-4 p-3">
              <h2 className="m-0 p-0" style={{ color: "#2F327D" }}>
                Back
                <span className="" style={{ color: "#00CBB8" }}>
                  ground
                </span>
              </h2>
              <p className="m-0 p-0 text-secondary fs-6 mt-4">
                Learn2Play was founded by a team of passionate sports enthusiasts, professional coaches, 
                and technology experts who saw the need for a more comprehensive and accessible approach to sports education.
                Our diverse team brings together expertise from various sports disciplines, education, 
                and technology fields to create a platform that truly addresses the needs of aspiring athletes at all levels.
              </p>
              <h2 className="m-0 p-0 mt-5" style={{ color: "#00CBBB" }}>
                Mission <span style={{ color: "#000" }}>&</span>
                <span className="ms-2" style={{ color: "#2F327D" }}>
                  Vision
                </span>
              </h2>
              <p className="m-0 p-0 mt-4 text-secondary">
                At Learn2Play, our mission is to democratize access to high-quality sports education and training. 
                We believe that everyone deserves the opportunity to excel in their chosen sport, regardless of their location or resources.

                We strive to create a comprehensive platform that connects aspiring athletes with expert coaches, 
                provides immersive learning experiences, and offers personalized feedback and guidance for improvement.

                Through our innovative use of technology, including video analysis, 
                and remote instruction, we aim to break down barriers to sports excellence and 
                help individuals realize their full athletic potential.
              </p>
            </div>
          </div>
          <div className="row m-0 p-0 mt-5 mb-5">
            <h2 className="m-0 p-0 text-center" style={{ color: "#2F327D" }}>
              Things that
              <span className="ms-2" style={{ color: "#00CBB8" }}>
                make us proud
              </span>
            </h2>
            <p className="m-0 p-0 pt-2 text-secondary text-center fs-5">
              Choose your learning level
            </p>
            <div className="row m-0 p-0 mt-lg-5 mb-lg-5 mt-4">
              <div className="col-lg-6 mt-3 mt-lg-0 mb-3 mb-lg-0 d-flex align-items-center">
                <div
                  className="icon d-flex justify-content-center align-items-center w-auto rounded-circle"
                  style={{ backgroundColor: 'rgba(73,187,189,0.3)' }}
                >
                  <i className="bi bi-controller fs-2" style={{ color: "#49BBBD" }}></i>
                </div>
                <div className="w-auto ms-4">
                  <h4 className="m-0 p-0 w-auto">Beginner</h4>
                  <p className="m-0 p-0 mt-2  text-secondary w-auto">
                    with analytics tools, to help you share with current and
                    future clients
                  </p>
                </div>
              </div>
              <div className="col-lg-6 mt-3 mt-lg-0 mb-3 mb-lg-0 d-flex align-items-center">
                <div
                  className="icon d-flex justify-content-center align-items-center w-auto rounded-circle"
                  style={{ backgroundColor: 'rgba(73,187,189,0.3)' }}
                >
                  <i className="bi bi-controller fs-2" style={{ color: "#49BBBD" }}></i>
                </div>
                <div className="w-auto ms-4">
                  <h4 className="m-0 p-0 w-auto">Intermediate</h4>
                  <p className="m-0 p-0 mt-2  text-secondary w-auto">
                   Total collections, quoting, enrollment, and reporting in italian and english
                  </p>
                </div>
              </div>
            </div>
            <div className="row m-0 p-0 mt-lg-5 mb-lg-5">
              <div className="col-lg-6 mt-3 mt-lg-0 mb-3 mb-lg-0 d-flex align-items-center">
                <div
                  className="icon d-flex justify-content-center align-items-center w-auto rounded-circle"
                  style={{ backgroundColor: 'rgba(73,187,189,0.3)' }}
                >
                  <i className="bi bi-controller fs-2" style={{ color: "#49BBBD" }}></i>
                </div>
                <div className="w-auto ms-4">
                  <h4 className="m-0 p-0 w-auto">Advanced</h4>
                  <p className="m-0 p-0 mt-2  text-secondary w-auto">
                    All services for our team of industry experts, personal training.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 mt-3 mt-lg-0 mb-3 mb-lg-0 d-flex align-items-center">
                <div
                  className="icon d-flex justify-content-center align-items-center w-auto rounded-circle"
                  style={{ backgroundColor: 'rgba(73,187,189,0.3)' }}
                >
                  <i className="bi bi-controller fs-2" style={{ color: "#49BBBD" }}></i>
                </div>
                <div className="w-auto ms-4">
                  <h4 className="m-0 p-0 w-auto">Professional</h4>
                  <p className="m-0 p-0 mt-2  text-secondary w-auto">
                    We can help you set up and manager your groups if you are become our partner.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
