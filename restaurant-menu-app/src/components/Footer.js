import React from "react";

export default function Footer() {
  return (
    <footer className="text-center text-lg-start bg-dark text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div>
          <a href="" className="me-4 link-secondary">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="" className="me-4 link-secondary">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="" className="me-4 link-secondary">
            <i className="fab fa-google"></i>
          </a>
          <a href="" className="me-4 link-secondary">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="" className="me-4 link-secondary">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="" className="me-4 link-secondary">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3 text-secondary"></i>BOOTCAMP
                BRUNCHIN
              </h6>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Operation Time</h6>
              <p>
                <a href="#!" className="text-reset">
                  Sunday: 8am-2pm
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Monday: 7am-2pm
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Tuesday: 8am-1pm
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Wednesday:8am-1pm
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Thursday:8am-1pm
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Friday:8am-1pm
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Saturday: 7am-2pm
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3 text-secondary"></i> 348 E Main
                St, Lexington, KY.
              </p>
              <p>
                <i className="fas fa-envelope me-3 text-secondary"></i>
              </p>
              <p>
                <i className="fas fa-phone me-3 text-secondary"></i> + 01 234
                567 88
              </p>
              <p>
                <i className="fas fa-print me-3 text-secondary"></i> + 01 234
                567 89
              </p>
            </div>
          </div>
        </div>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.025)" }}
      ></div>
    </footer>
  );
}
