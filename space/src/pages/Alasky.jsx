import { useState, useEffect } from "react";
import { Alasky } from "../services/api";
import "../css/Alasky.css" 

function AlaskyAPI() {
  let vals = {
    hips: "CDS%2FP%2FDSS2%2Fcolor",
    width: 1200,
    height: 900,
    fov: 0.5,
    projection: "TAN",
    coordsys: "icrs",
    rotation_angle: 0.0,
    ra: 80.89417083333332,
    dec: -69.75611111111111,
    format: "jpg",
  };
  let root = "C:\Users\CMP_AiRathbun\Downloads\OpenSpace-0.21.3\bin";
 
  const [link] = useState(
    "C:\Users\CMP_AiRathbun\Downloads\OpenSpace-0.21.3\bin"
  );
 
  // useEffect(() => {
  //   let aladin;
 
  //   A.init.then(() => {
  //     aladin = A.aladin("#aladin-lite-div", {
  //       survey: "P/DSS2/color",
  //       fov: 60,
  //     });
  //   });
  // }, []);
 
  return (
    <div>
      <h1 id="header">Example Image From Alasky Site</h1>
      <img
        id="someImg"
        src={`${root}hips=${vals.hips}&width=${vals.width}&height=${vals.height}&fov=${vals.fov}&projection=${vals.projection}&coordsys=${vals.coordsys}&rotation_angle=${vals.rotation_angle}&ra=${vals.ra}&dec=${vals.dec}&format=${vals.format}`}
        alt=""
      />
      <h1 id="alasky">
        Click <a href={link}>Here</a> For Alasky's Site{" "}
      </h1>
      <h1>
        ----------------------------------------------------------------------------------
      </h1>
      <h1 id="header">Aladin Lite</h1>
      <div
        id="aladin-lite-div"
        style={{
          width: "1200px",
          height: "680px",
          backgroundColor: "black",
        }}
      ></div>
 
      <script type="text/javascript">
        {/* {A.init.then(() => {
          aladin = A.aladin("#aladin-lite-div", {
            survey: "P/DSS2/color",
            fov: 60,
          });
        })} */}
      </script>
      <p id="hips">
        Click{" "}
        <a href="https://alasky.cds.unistra.fr/hips-image-services/hips2fits/html?width=200&height=200&hips=DSS2,2MASS%2F,XMM,AllWISE,GALEX,PanSTARRS&object=M1,M20,M27,M33,M51,M57,M58,M76,M81,M88,M83,M101&format=jpg&fov=0.15&projection%20=SIN&group_by=hips">
          Here
        </a>{" "}
        To See Other HiPS Objects In Space (Messier Objects (DSS, 2MASS, XMIM,
        AIWISE, GALEX, PanSTARRS HIPS)), Click On What You Want To See
      </p>
      <p id="hips">
        Click{" "}
        <a href="https://alasky.cds.unistra.fr/hips-image-services/hips2fits/html?width=200&height=200&hips=MATLAS%2Fg,MATLAS%2Fr,MATLAS%2Fi,MATLAS%2Fcolor&object=NGC448,NGC474,NGC770,NGC1222,NGC2481,NGC2685,NGC2764,NGC2962&format=jpg&fov=0.05&projection%20=SIN">
          Here
        </a>{" "}
        To See Other HiPS Objects In Space (MATLAS HIPS), Click On What You
        Want To See
      </p>
    </div>
  );
}
 
export default AlaskyAPI;