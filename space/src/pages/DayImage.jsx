import "../css/DayPicture.css";
import { useState, useEffect } from "react";
import { getPictureOfTheDay } from "../services/api";
import { useSearchParams } from "react-router-dom";
import DateSearch from "../components/DateSearch";
 
function getFormattedDate(date) {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}
 
function DayImage() {
  const [params] = useSearchParams();
  let chosen = params.get("date")
    ? params.get("date")
    : getFormattedDate(new Date());
  const [pic, setPic] = useState(null);
  const [video, setVideo] = useState(null);
  const [available, setAvailable] = useState(true);
  const [desc, setDesc] = useState("");
  const [copy, setCopy] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [media, setMedia] = useState("");
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await getPictureOfTheDay(chosen);
 
      if (!response) {
        setAvailable(null);
      }
 
      if (response.copyright) {
        setCopy(response.copyright);
      } else {
        setCopy("N/A");
      }
 
      if (response.title) {
        setTitle(response.title);
      } else {
        setTitle("N/A");
      }
 
      if (response.date) {
        setDate(response.date);
      } else {
        setDate("N/A");
      }
 
      if (response.url) {
        setPic(response.url);
        setVideo(response.url);
      } else {
        setPic(null);
        setVideo(null);
      }
 
      if (response.explanation) {
        setDesc(response.explanation);
      } else {
        setDesc("N/A");
      }
 
      if (response.media_type) {
        setMedia(response.media_type);
      } else {
        setMedia("N/A");
      }
    }
    fetchData();
  }, []);
 
  return (
    <div>
      {available ? (
        <div>
          <h1 id="h">Put A Date To Change Information (YYYY-MM-DD format)</h1>
          <div>{DateSearch()}</div>
          <p id="t">Chosen Date: {chosen}</p>
          <h1>
            ----------------------------------------------------------------------------
          </h1>
          <h1 id="h">Today's Picture Of the Day: </h1>
          <p id="t">{title}</p>
          <p id="t">Copyright: {copy}</p>
          <p id="t">Today's Date: {chosen}</p>
          <p id="t">Media Type: {media}</p>
          {media == "image" ? (
            <img src={pic} alt="Some Picture" />
          ) : media == "video" && video.indexOf("youtube") > 0 ? (
            <iframe
              width="560"
              height="315"
              src={video}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          ) : media == "other" && !media.url ? (
            <h1 id="other">There Is No Content To Be Loaded</h1>
          ) : media == "other" && media.url ? (
            <h1 id="other">This is just dummy text until a media type of other with a url is seen, so if these words are seen then I'll have extra stuff to do</h1>
          ) : (
            <p id="fail">
              No content loaded. Check it out{" "}
              <a href={video} target="_blank">
                here
              </a>
            </p>
          )}
 
          <p id="t">Explanation: {desc}</p>
        </div>
      ) : (
        <p id="t">No Picture Of The Day Today</p>
      )}
    </div>
  );
}

export default DayImage;