import "../css/DayPicture.css";
import { useState, useEffect } from "react";
import { getPictureOfTheDay } from "../services/api";
import { useSearchParams } from "react-router-dom";
import DateSearch from "../components/DateSearch";
import DOMPurify from 'dompurify'

function getFormattedDate(date) {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function DayImage() {
  const [searchParams] = useSearchParams();
  const [params] = useSearchParams();
  let chosen = params.get("date")
    ? params.get("date")
    : getFormattedDate(new Date());
  let index = searchParams.get("index") ? searchParams.get("index") : 0;
  const [code, setCode] = useState(0);
  const [msg, setMsg] = useState("");
  const [service, setService] = useState("");
  const [alt, setAlt] = useState("");
  const [basicAlt, setBasicAlt] = useState("");
  const [basicHTML, setBasicHTML] = useState("");
  const [copyright, setCopyright] = useState("");
  const [credit, setCredit] = useState("");
  const [date, setDate] = useState("");
  const [explanation, setExplanation] = useState("");
  const [hdurl, setHDURL] = useState(null);
  const [media, setMedia] = useState(null);
  const [video, setVideo] = useState(null);
  const [image, setImage] = useState("");
  // const [permaLink, setPermaLink] = useState(null);
  const [title, setTitle] = useState("");
  // const [URL, setURL] = useState(null);
  const [available, setAvailable] = useState(true);
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await getPictureOfTheDay(chosen);

      // if (response) {
      //   setAvailable(true);
      // }else{
      //   setAvailable(false)
      // }

      if (response[index].hdurl) {
        setHDURL(response[index].hdurl)
      }

      if (response[index].code) {
        setCode(response[index].code);
        //assume code means not available - no code with valid resposes
        setAvailable(false);
      } else {
        setCode();
        setAvailable(true);
      }

      if (response[index].msg) {
        setMsg(response[index].msg);
      } else {
        setMsg();
      }

      if (response[index].service_version) {
        setService(response[index].service_version);
      } else {
        setService();
      }

      if (response[index].copyright) {
        setCopyright(response[index].copyright);
      } else {
        setCopyright("N/A");
      }

      if (response[index].title) {
        setTitle(response[index].title);
      } else {
        setTitle("N/A");
      }

      if (response[index].date) {
        setDate(response[index].date);
      } else {
        setDate("N/A");
      }

      if (response[index].hdurl) {
        setImage(response[index].hdurl);
        setVideo(response[index].hdurl);
      } else {
        setImage(null);
        setVideo(null);
      }

      if (response[index].explanation) {
        setExplanation(response[index].explanation);
      } else {
        setExplanation("N/A");
      }

      if (response[index].media_type) {
        setMedia(response[index].media_type);
      } else {
        setMedia("N/A");
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    fetch("https://science.nasa.gov/wp-json/wp/v2/apod-basic")
      .then((response) => response.json())
      .then((data) => {
        const cleanExplanation = DOMPurify.sanitize(String(data.explanation));
        const cleanCopyright = DOMPurify.sanitize(String(data.copyright));
        setData({
          ...data,
          explanation: cleanExplanation,
          copyright: cleanCopyright
        });
      })
      .catch((error) => console.error("Data synchronization error: ", error));
  }, [])

  if (!data) return <span>Synchronizing NASA Stream...</span>

  return (
    <div>
      {!available ? (
        <div>
          <h1 id="h">Put A Date To Change Information (YYYY-MM-DD format)</h1>
          <div>{DateSearch()}</div>
          <p id="t">Chosen Date: {chosen}</p>
          <p id="null">
            No Picture Of The Day Available Today, Choose Another Page To See
            What It Has To Offer
          </p>
          <p id="in">
            Server Responded With A Code Of {code} With A Message Of ("{msg}")
            With A Service Version Of {service}
          </p>
        </div>
      ) : (
        <div>
          <h1 id="h">Put A Date To Change Information (YYYY-MM-DD format)</h1>
          <div>{DateSearch()}</div>
          <p id="t">Chosen Date: {date}</p>
          <h1>
            ----------------------------------------------------------------------------
          </h1>
          <h1 id="h">Today's Picture Of the Day: </h1>
          <p id="t">{title}</p>
          <p id="t" dangerouslySetInnerHTML={{__html: copyright}} />
          <p id="t">Today's Date: {chosen}</p>
          <p id="t">Media Type: {media}</p>
          {media == "image" ? (
            <img src={image} alt="Some Picture" width={1000}/>
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
          ) : media == "video" && video.indexOf("mp4") > 0 ? (
            <video controls width="75%">
              <source src = {video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : media == "other" && !media.url ? (
            <h1 id="other">There Is No Content To Be Loaded</h1>
          ) : media == "other" && media.url ? (
            <h1 id="other">
              This is just dummy text until a media type of other with a url is
              seen, so if these words are seen then I'll have extra stuff to do
            </h1>
          ) : (
            <p id="fail">
              No content loaded. Check it out{" "}
              <a href={hdurl} target="_blank">
                here
              </a>
            </p>
          )}
          <p id="t" dangerouslySetInnerHTML={{__html: explanation}} />
        </div>
      )}
    </div>
  );
}

export default DayImage;
