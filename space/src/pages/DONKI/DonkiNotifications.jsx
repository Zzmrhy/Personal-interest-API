import { useEffect, useState } from "react";
import { DONKINotifications } from "../../services/api";
import { Link } from "react-router-dom";
 
function DonkiNotification() {
  const [links, setLink] = useState(null);
  const [available, setAvailable] = useState(true);
  const [message, setMessage] = useState("");
  const [messageID, setMessageID] = useState("");
  const [issue, setIssue] = useState("");
  const [type, setType] = useState("");
 
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await DONKINotifications();
      const focusRecord = response[response.length - 1];
 
      if (!focusRecord) {
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
            <p id="text">Most Recent Donki Notification</p>
            <p id="text">Message Type: {type}</p>
            <p id="text">Message Issue Time: {issue}</p>
            <p id="text">{message}</p>
            <p id="text">Message ID: {messageID}</p>
            <p id="text">
              Click Here: <a href={links}>Click Here For Donki Notifications</a>
            </p>
          </div>
        ) : (
          <h1 id="failure">
            No Information Is Available, Click Links Below To See Other Pages
            Instead.
          </h1>
        )}
 
        <div>
          <h1 id="header">Link For Other DONKI Pages</h1>
          <div>
            <p id="link">
              <Link to="/donki">Click Here To See The DonkiCME Page</Link>
            </p>
          </div>
 
          <div>
            <p id="link">
              <Link to="/donkiGST">Click Here To See The DonkiGST Page</Link>
            </p>
          </div>
 
          <div>
            <p id="link">
              <Link to="/donkiFLR">Click Here To See The DonkiFLR Page</Link>
            </p>
          </div>
 
          <div>
            <p id="link">
              <Link to="/donkiIPS">Click Here To See The DonkiIPS Page</Link>
            </p>
          </div>
 
          <div>
            <p id="link">
              <Link to="/donkiRBE">Click Here To See The DonkiRBE Page</Link>
            </p>
          </div>
 
          <div>
            <p id="link">
              <Link to="/donkiHSS">Click Here To See The DonkiHSS Page</Link>
            </p>
          </div>
 
          <div>
            <p id="link">
              <Link to="/donkiSEP">Click Here To See The DonkiSEP Page</Link>
            </p>
          </div>
 
          <div>
            <p id="link">
              <Link to="/donkiWSA">Click Here To See The DonkiWSA Page</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default DonkiNotification;