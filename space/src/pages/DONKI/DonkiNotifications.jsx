import { useEffect, useState } from "react";
import { DONKINotifications } from "../../services/api";
import { Link } from "react-router-dom";

function DonkiNotification() {
  const [links, setLink] = useState(null);
  const [available, setAvailable] = useState(null);
  const [message, setMessage] = useState("");
  const [messageID, setMessageID] = useState("");
  const [issue, setIssue] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await DONKINotifications();
      const focusRecord = [response.length - 1];

      if (focusRecord.length === 0) {
        setAvailable(null);
      }

      if (focusRecord.messageBody) {
        setMessage(focusRecord.messageBody);
      } else {
        setMessage("N/A");
      }

      if (focusRecord.messageID) {
        setMessageID(focusRecord.messageID);
      } else {
        setMessageID("N/A");
      }

      if (focusRecord.messageIssueTime) {
        setIssue(focusRecord.messageIssueTime);
      } else {
        setIssue("N/A");
      }

      if (focusRecord.messageType) {
        setType(focusRecord.messageType);
      } else {
        setType("N/A");
      }

      if (focusRecord.messageURL) {
        setLink(focusRecord.messageURL);
      } else {
        setLink(null);
      }
    }
    fetchData();
  });

  return (
    <div>
      <div>
        {available ? (
          <div>
            <h1>Most Recent Donki Notification</h1>
            <h1>Message Type: {type}</h1>
            <h1>Message Issue Time: {issue}</h1>
            <h1>{message}</h1>
            <h1>Message ID: {messageID}</h1>
            <h1>
              Click Here: <a href={links}>Click Here For Donki Notifications</a>
            </h1>
          </div>
        ) : (
          <h1>
            No Information Is Available, Click Links Below To See Other Pages
            Instead.
          </h1>
        )}

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
              <Link to="/donkiIPS">Click Here To See The DonkiIPS Page</Link>
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
              <Link to="/donkiSEP">Click Here To See The DonkiSEP Page</Link>
            </h2>
          </div>

          <div>
            <h2>
              <Link to="/donkiWSA">Click Here To See The DonkiWSA Page</Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonkiNotification;
