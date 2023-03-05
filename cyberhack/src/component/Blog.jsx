import React from "react";
import { NavLink } from "react-router-dom";


const Blog = () => {
  return (
    <div>
      <section id="blog">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 mt-3">
              <h1 class="display-4 fw-bolder mb-4 text-center text-white">Service Request</h1>
            </div>
          </div>
        </div>
      </section>
		<nav className="navbar navbar-expand-lg navbar-dark bg-info">
			<div className="container">
				<button
					className="navbar-toggler collapsed"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#mobileMenu"
					aria-controls="mobileMenu"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="toggler-icon top-bar"></span>
					<span className="toggler-icon middle-bar"></span>
					<span className="toggler-icon bottom-bar"></span>
				</button>
				<div className="collapse navbar-collapse" id="mobileMenu">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink
								className="nav-link"
								activeClassName="active"
								to="/cruds/new"
                style={{color: 'black'}}
							>
								Create Request
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link"
								activeClassName="active"
								to="/cruds"
                style={{color: 'black'}}
							>
								Read Request - Table View
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link"
								activeClassName="active"
								to="/cruds/grid-view"
                style={{color: 'black'}}
							>
								Read Request - Grid View
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link"
								activeClassName="active"
								to="/cruds/list-view"
                style={{color: 'black'}}
							>
								Read Request - List View
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
      <section id="Mission">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6 d-flex flex-column align-items-center text-white justify-content-center order-2">
              <img src="/assets/help.jpg" alt="blog" className="w-75 mt-5"/>
            </div>
            <div className="col-md-6">
              <hr />
              <p className="lead">
                Cybersecurity research involves studying the different aspects of 
                digital security, including network security, data protection, and 
                access controls, among others. The objective of cybersecurity research 
                is to identify vulnerabilities, risks, and threats that could impact 
                a company's digital assets and to develop strategies to prevent or 
                mitigate these risks. 
              </p>
              <p>
                Cybersecurity research can benefit your 
                company in many ways, including protecting your business from 
                cyberattacks, preventing data breaches, and safeguarding your 
                customers' personal and financial information. By investing in 
                cybersecurity research, you can identify potential threats before 
                they become a problem, and you can develop proactive measures to 
                protect your company's assets, reputation, and bottom line. 
                Furthermore, cybersecurity research can help you stay up-to-date with 
                the latest security technologies and best practices, ensuring that 
                you are always one step ahead of cybercriminals.  
              </p>
              <p>
                Cyber hack is a company that is committed to hiring cyber security
                experts that are trained on the latest technologies that help secure
                your digital information.
              </p>
              <div className="row justify-content-center">

              <div className="col-md-4 text-center">
              <div className="card p-3">
                <div className="card-body">
                  <i className="fa fa-laptop fa-4x mb-4 text-primary"></i>
                  <h1 className="card-title mb-3 fs-6 fw-bold text-center">Registration</h1>
                  <p className="card-text">
                    Charity Application.
                  </p>
                  <a
                    className="btn btn-outline-primary px-4 py-2"
                    href="http://localhost:3000/charities"
                    role="button"
                  >
                    Sign Up
                  </a>
                  </div>
                </div>
              </div>
            <div className="col-md-4 text-center">
              <div className="card p-3">
                <div className="card-body">
                  <i className="fa fa-laptop fa-4x mb-4 text-primary"></i>
                  <h1 className="card-title mb-3 fs-6 fw-bold text-center">Service</h1>
                      <p className="card-text">
                        Submit a service request
                      </p>
                      <a
                        className="btn btn-outline-primary px-4 py-2"
                        href="http://localhost:3000/cruds/new"
                        role="button">
                        Submit
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 text-center">
              <div className="card p-3">
                <div className="card-body">
                  <i className="fa fa-laptop fa-4x mb-4 text-primary"></i>
                  <h1 className="card-title mb-3 fs-6 fw-bold text-center">Progress</h1>
                      <p className="card-text">
                      Check on your request
                  </p>
                    <a
                      className="btn btn-outline-primary px-4 py-2"
                      href="http://localhost:3000/cruds"
                      role="button">
                      Check
                    </a>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Blog;






