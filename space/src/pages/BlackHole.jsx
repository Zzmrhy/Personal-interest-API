import { useState, useEffect } from "react";

function BlackHole() {
  const fs = require("fs");
  let data = JSON.parse(fs.readFileSync("data.json"));
  let img = data.image;
  let kind = data.kind;
  let list = data.list;
  let type = data.type;
  useEffect(() => {
    async function fetchData() {
      // You can await here
    }
    fetchData();
  }, []);
  return (
    <div>
      <h1>Information For Black Hole</h1>
      <img src={`${img}`} alt="Picture" />
    </div>
  );
}

export default BlackHole;
