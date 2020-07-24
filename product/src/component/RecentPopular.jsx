import React from "react";
const RecPop = () => {
  return (
    <div class="container" style={{ marginTop: 10 }}>
      <div class="row">
        <div class="col-sm">
          {
            <ul class="list-group">
              <li class="list-group-item active">Recent Sold Items</li>
              <li class="list-group-item">product 1</li>
              <li class="list-group-item">product 2</li>
              <li class="list-group-item">product 3</li>
              <li class="list-group-item">product 4</li>
              <li class="list-group-item">product 5</li>
            </ul>
          }
        </div>
        <div class="col-sm">
          {
            <ul class="list-group">
              <li class="list-group-item active">
                Our Most Popular Sold Items
              </li>
              <li class="list-group-item">product 1</li>
              <li class="list-group-item">product 2</li>
              <li class="list-group-item">product 3</li>
              <li class="list-group-item">product 4</li>
              <li class="list-group-item">product 5</li>
            </ul>
          }
        </div>
      </div>
    </div>
  );
};

export default RecPop;
