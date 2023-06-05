import React from "react";
import { Link } from "react-router-dom";
function Test() {
  return (
    <div>
      <p> the test component </p>
      <Link to="/data"> to fetch Data</Link>
    </div>
  );
}

export default Test;
