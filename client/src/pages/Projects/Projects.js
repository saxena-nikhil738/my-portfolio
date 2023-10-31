import React from "react";
import "./Projects.css";
import food from './food.jpg'
import employee from './emp.jpg'
import complaint from './complaint.jpg'
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
        During this current course, I have built many web development projects.
        These projects not only helped me gain valuable experience but also demonstrated
         my ability to deliver good-quality web solutions. Some of which are as follows-
        </p>
        <div className="row" id="ads">
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full stack Project</span>
                  <img
                    src={employee}
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">react</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">
                      Blog application
                    </h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://post-blog-7x9n.onrender.com"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend Project</span>
                  <img
                    src={food}
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">HTML</span>
                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">Javascript</span>
                  <span className="card-detail-badge">Bootstrap</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Food ordering application</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://saxena-nikhil738.github.io/foodcosta/"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend Project</span>
                  <img
                    src={complaint}
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">react</span>
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">CSS</span>
                  {/* <span className="card-detail-badge">Mongodb</span> */}
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Portfolio</h5>
                  </div>
                  <a className="ad-btn" href="https://my-portfolio-ik9o.onrender.com/">
                    View
                  </a>
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
