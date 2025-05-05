import { useEffect, useState } from "react";
import { DONKIIPS } from "../../services/api";
import { Link } from "react-router-dom";

function DonkiMPC() {
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await DONKIIPS();
      const focusRecord = response[response.length - 1];
    }
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <h1>Link For Other DONKI Pages</h1>
        <div>
          <h2>
            <Link to="/donki">Click Here To See The DonkiCME Page</Link>
          </h2>
        </div>

        <div>
          <h2>
            <Link to="/donkiGST">Click Here To See The DonkiGST Page</Link>
          </h2>
        </div>

        <div>
          <h2>
            <Link to="/donkiFLR">Click Here To See The DonkiFLR Page</Link>
          </h2>
        </div>

        <div>
          <h2>
            <Link to="/donkiSEP">Click Here To See The DonkiSEP Page</Link>
          </h2>
        </div>

        <div>
          <h2>
            <Link to="/donkiRBE">Click Here To See The DonkiRBE Page</Link>
          </h2>
        </div>

        <div>
          <h2>
            <Link to="/donkiHSS">Click Here To See The DonkiHSS Page</Link>
          </h2>
        </div>

        <div>
          <h2>
            <Link to="/donkiWSA">Click Here To See The DonkiWSA Page</Link>
          </h2>
        </div>

        <div>
          <h2>
            <Link to="/donkiNotifications">
              Click Here To See The DonkiNotifications Page
            </Link>
          </h2>
        </div>

        <div>
          <h2>
            <Link to="/donkiIPS">Click Here To See The DonkiIPS Page</Link>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default DonkiMPC;
