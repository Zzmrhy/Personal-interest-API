import { useEffect, useState } from "react";
import {
  DONKICME,
  DONKICMEA,
  DONKIGST,
  DONKIIPS,
  DONKIFLR,
  DONKISEP,
  DONKIMPC,
  DONKIRBE,
  DONKIHSS,
  DONKIWSA,
  DONKINotifications,
} from "../services/api";
function Donki() {
  const donkicme = DONKICME();
  const donkicmea = DONKICMEA();
  const donkigst = DONKIGST();
  const donkiips = DONKIIPS();
  const donkiflr = DONKIFLR();
  const donkisep = DONKISEP();
  const donkimpc = DONKIMPC();
  const donkirbe = DONKIRBE();
  const donkihss = DONKIHSS();
  const donkiwsa = DONKIWSA();
  const donkinotifications = DONKINotifications();
  return (
    <div>
      <div>
        <h2>Information on CME (Coronal Mass Ejection)</h2>
        <a href={`${donkicme}`}>Click Here For Information On CME</a>
      </div>
      <div>
        <h2>Information on CMEA (Coronal Mass Ejection Analysis)</h2>
        <a href={`${donkicmea}`}>Click Here For Information On CMEA</a>
      </div>
      <div>
        <h2>Information on GST (Geomagnetic Storm)</h2>
        <a href={`${donkigst}`}>Click Here For Information On GST</a>
      </div>
      <div>
        <h2>Information on IPS (Interplanetary Shock)</h2>
        <a href={`${donkiips}`}>Click Here For Information On IPS</a>
      </div>
      <div>
        <h2>Information on FLR (Solar Flare)</h2>
        <a href={`${donkiflr}`}>Click Here For Information On FLR</a>
      </div>
      <div>
        <h2>Information on SEP (Solar Energetic Particle)</h2>
        <a href={`${donkisep}`}>Click Here For Information On SEP</a>
      </div>
      <div>
        <h2>Information on MPC (Magnetopause Crossing)</h2>
        <a href={`${donkimpc}`}>Click Here For Information On MPC</a>
      </div>
      <div>
        <h2>Information on RBE (Radiation Belt Enhancement)</h2>
        <a href={`${donkirbe}`}>Click Here For Information On RBE</a>
      </div>
      <div>
        <h2>Information on HSS (High Speed Stream)</h2>
        <a href={`${donkihss}`}>Click Here For Information On HSS</a>
      </div>
      <div>
        <h2>Information on WSA+EnlilSimulation</h2>
        <a href={`${donkiwsa}`}>
          Click Here For Information On WSA and EnlilSimulation
        </a>
      </div>
      <div>
        <h2>Notifications</h2>
        <a href={`${donkinotifications}`}>Click Here For Notifications</a>
      </div>
    </div>
  );
}

export default Donki;
