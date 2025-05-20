import { useState, useEffect } from "react";
import { Alasky } from "../services/api";
// import A from "../Javascript/A";
// import { Aladin } from "../Aladin";

function AlaskyAPI() {
  let vals = {
    hips: "CDS%2FP%2F2MASS%2Fcolor",
    width: 1200,
    height: 900,
    fov: 0.5,
    projection: "TAN",
    coordsys: "icrs",
    rotation_angle: 0.0,
    object: "Orion%20nebula",
    format: "jpg",
  };
  let root = "https://alaskybis.cds.unistra.fr/hips-image-services/hips2fits?";

  const [link] = useState(
    "https://alasky.cds.unistra.fr/hips-image-services/hips2fits"
  );
  // const [survey, setSurvey] = useState("");
  // const [surveuURL, setSurveyURL] = useState("");
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await Alasky();

      // if (response.survey) {
      //   setSurvey(response.survey);
      // } else {
      //   setSurvey("N/A");
      // }

      // if (response.surveyUrl) {
      //   setSurveyURL(response.surveyUrl);
      // } else {
      //   setSurveyURL("N/A");
      // }
    }
    fetchData();
  }, []);

  let aladin;

  return (
    <div>
      <h1>Example Image From Alasky Site</h1>
      <img
        id="someImg"
        src={`${root}hips=${vals.hips}&width=${vals.width}&height=${vals.height}&fov=${vals.fov}&projection=${vals.projection}&coordsys=${vals.coordsys}&rotation_angle=${vals.rotation_angle}&object=${vals.object}&format=${vals.format}`}
        alt=""
      />
      <h1>
        Click <a href={link}>Here</a> For Alasky's Site{" "}
      </h1>
      <h1>
        ----------------------------------------------------------------------------------
      </h1>
      <h1>Aladin Lite</h1>
      <div id="aladin-lite-div" style="width:400px;height:400px;"></div>
      <script
        type="text/javascript"
        src="https://aladin.cds.unistra.fr/AladinLite/api/v3/latest/aladin.js"
        charset="utf-8"
      ></script>
      <script type="text/javascript">
        {A.init.then(() => {
          aladin = A.aladin("#aladin-lite-div", {
            survey: "P/DSS2/color",
            fov: 60,
          });
        })}
      </script>
    </div>
  );
}

export default AlaskyAPI;
