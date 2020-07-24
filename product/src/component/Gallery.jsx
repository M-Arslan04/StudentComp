import React from "react";
import Mainpic from "./Mainpic.jpg";
import Pdg from "./700x400 pdg.png";
const Gallery = () => {
  return (
    <div className="container" style={{ marginTop: 20, borderColor: "black" }}>
      <div className="row">
        <div className="col-lg">
          <img className="card-img-top" src={Mainpic} />
        </div>
      </div>
      <div className="row" style={{ marginTop: 20 }}>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <a href="#">
              <img className="card-img-top" src={Pdg} />
            </a>
            <div className="card-body">
              <h4 className="card-title">
                <a href="#">Figure 1</a>
              </h4>
              <h5>$.99</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                numquam aspernatur!
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">
                &#9733; &#9733; &#9733; &#9733; &#9734;
              </small>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <a href="#">
              <img className="card-img-top" src={Pdg} />
            </a>
            <div className="card-body">
              <h4 className="card-title">
                <a href="#">Figure Two</a>
              </h4>
              <h5>$.99</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                numquam aspernatur! Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">
                &#9733; &#9733; &#9733; &#9733; &#9734;
              </small>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 mb-4">
          <div class="card h-100">
            <a href="#">
              <img class="card-img-top" src={Pdg} />
            </a>
            <div class="card-body">
              <h4 class="card-title">
                <a href="#">Figure Three</a>
              </h4>
              <h5>$24.99</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                numquam aspernatur!
              </p>
            </div>
            <div class="card-footer">
              <small class="text-muted">
                &#9733; &#9733; &#9733; &#9733; &#9734;
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
