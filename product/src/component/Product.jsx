import React, { Component } from "react";
import Gallery from "./Gallery";
import RecPop from "./RecentPopular";
class Product extends Component {
  state = {};
  render() {
    return (
      <div>
        <button type="button" class="btn btn-outline-secondary float-right">
          Add to WishList
        </button>

        <Gallery />
        <RecPop />
        <form>
          <div class="form-group" style={{ margin: 100, padding: 10 }}>
            <label style={{ backgroundColor: "grey" }}>
              <h4>Put Your review here! </h4>
            </label>
            <textarea
              style={{ borderColor: "black", borderStyle: "dotted" }}
              class="form-control"
              rows="3"
            ></textarea>
            <button type="button" class="btn btn-outline-secondary float-right">
              Submit!
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Product;
