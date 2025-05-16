import { useEffect } from "react";
// import { Alasky } from "../services/api";

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

  return (
    <div>
      <h1>something</h1>
      <img id="someImg" src="" alt="" />
      {/* <h1>
        Dummy testing this for{" "}
        <a href="https://aladin.cds.unistra.fr/AladinLite/?survey=CDS/P/MATLAS/color&target=18.81883066129+-1.62624558244&fov=0.05">
          now
        </a>
      </h1> */}

      {...(document.getElementById(
        "someImg"
      ).src = `${root}hips=${vals.hips}&width=${vals.width}&height=${vals.height}&fov=${vals.fov}&projection=${vals.projection}&coordsys=${vals.coordsys}&rotation_angle=${vals.rotation_angle}&object=${vals.object}&format=${vals.format}`)}
    </div>
  );
}

export default AlaskyAPI;
