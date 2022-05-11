import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Adver.css";

function Adver() {
  
  const navigation = useNavigate();
  return (
    <div className="adver">
      <h1>Due for a check-up? Book now:</h1>
      <button onClick={() => navigation("/book")}>Book an Appointment</button>
      {/* <p>
        We recommend that everyone should have an eye test with an optometrist
        at least once every 2 years.
      </p>
          <p> Oscar Wylee offers bulk billed eye test, so
              there are no out-of-pocket expenses for eligible Medicare card holders.</p> */}
    </div>
  );
}

export default Adver;
