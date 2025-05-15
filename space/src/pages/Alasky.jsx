import { useEffect } from "react";
import { Alasky } from "../services/api";

function AlaskyAPI() {
  <img id="someImg" src="" alt="Something" />;
  useEffect(() => {
    async function fetchData() {
      const response = await Alasky();

      let vals = {
        hips: "CDS",
        width: 300,
        height: 225,
        fov: 0.5,
        projection: "TAN",
        coordsys: "icrs",
        rotation_angle: 0.0,
        object: "Orion nebula",
        format: "jpg",
      };
      let root = "https://alasky.cds.unistra.fr/hips-image-services/hips2fits?";

      document.getElementById(
        "someImg"
      ).src = `${root}hips=${vals.hips}&width=${vals.width}&height=${vals.height}&fov=${vals.fov}&projection=${vals.projection}&coordsys=${vals.coordsys}&rotation_angle=${vals.rotation_angle}&object=${vals.object}&format=${vals.format}`;
    }
    fetchData();
  }, []);
  return (
    <div>
      <h1>something</h1>
    </div>
  );
}

export default AlaskyAPI;
