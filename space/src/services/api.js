const API_KEY = import.meta.env.VITE_NASA_API_KEY;
const BASE_URL = "https://api.nasa.gov";

export const getPictureOfTheDay = async (day) => {
  const response = await fetch(
    `${BASE_URL}/planetary/apod?api_key=${API_KEY}&date=${day}`
  );
  const data = await response.json();
  // console.log(data);
  return data;
};

export const DONKICME = async () => {
  const response = await fetch(
    `${BASE_URL}/DONKI/CME?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&api_key=${API_KEY}`
  );
  const data = await response.json();
  // console.log(data);
  return data;
};

export const DONKIGST = async () => {
  const response = await fetch(
    `${BASE_URL}/DONKI/GST?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&mostAccurateOnly=true&speed=500&halfAngle=30&catalog=All&api_key=${API_KEY}`
  );
  const data = await response.json();
  // console.log(data);
  return data;
};

export const DONKIIPS = async () => {
  const response = await fetch(
    `${BASE_URL}/DONKI/IPS?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&mostAccurateOnly=true&speed=500&halfAngle=30&catalog=All&api_key=${API_KEY}`
  );
  const data = await response.json();
  // console.log(data);
  // console.log(data[data.length - 1]);
  return data;
};

export const DONKIFLR = async () => {
  const response = await fetch(
    `${BASE_URL}/DONKI/FLR?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&mostAccurateOnly=true&speed=500&halfAngle=30&catalog=All&api_key=${API_KEY}`
  );
  const data = await response.json();
  // console.log(data);
  return data;
};

export const DONKISEP = async () => {
  const response = await fetch(
    `${BASE_URL}/DONKI/SEP?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&mostAccurateOnly=true&speed=500&halfAngle=30&catalog=All&api_key=${API_KEY}`
  );
  const data = await response.json();
  // console.log(data);
  return data;
};

export const DONKIMPC = async () => {
  const response = await fetch(
    `${BASE_URL}/DONKI/MPC?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&api_key=${API_KEY}`
  );
  const data = await response.json();
  // console.log(data);
  return data;
};

export const DONKIRBE = async () => {
  const response = await fetch(
    `${BASE_URL}/DONKI/RBE?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&mostAccurateOnly=true&speed=500&halfAngle=30&catalog=All&api_key=${API_KEY}`
  );
  const data = await response.json();
  // console.log(data);
  return data;
};

export const DONKIHSS = async () => {
  const response = await fetch(
    `${BASE_URL}/DONKI/HSS?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&mostAccurateOnly=true&speed=500&halfAngle=30&catalog=All&api_key=${API_KEY}`
  );
  const data = await response.json();
  // console.log(data);
  return data;
};

export const DONKIWSA = async () => {
  const response = await fetch(
    `${BASE_URL}/DONKI/WSAEnlilSimulations?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&mostAccurateOnly=true&speed=500&halfAngle=30&catalog=All&api_key=${API_KEY}`
  );
  const data = await response.json();
  // console.log(data);
  return data;
};

export const DONKINotifications = async () => {
  const response = await fetch(
    `${BASE_URL}/DONKI/notifications?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&mostAccurateOnly=true&speed=500&halfAngle=30&catalog=All&api_key=${API_KEY}`
  );
  const data = await response.json();
  // console.log(data);
  return data;
};

export const Rover = async (num, name="curiosity") => {
  let url = `${BASE_URL}/mars-photos/api/v1/rovers/${name}/photos?sol=${num}&api_key=${API_KEY}`;
  console.log(url)
  const response = await fetch(
    url
  );
  const data = await response.json();
  // console.log(data);
  return data;
};

export const Exoplanets = async () => {
  const response = await fetch(
    "https://cors-anywhere.herokuapp.com/https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+*+from+ps+where+tran_flag=1+and+default_flag=1+order+by+pl_name&format=json"
  );
  const data = await response.json();
  // console.log(data);
  return data;
};

export const Alasky = async () => {
  const response = await fetch(
    "C:\Users\CMP_AiRathbun\Downloads\OpenSpace-0.21.3\bin\OpenSpace.exe"
  );
  const data = await response.json();
  // console.log(data);
  return data;
};
 
export const Aurora = async () => {
  const response = await fetch(
    "https://services.swpc.noaa.gov/json/ovation_aurora_latest.json"
  );
  const data = await response.json();
  // console.log(data);
  return data;
};
 
export const Celestial = async () => {
  const response = await fetch("/api/v1/celestial-bodies");
  const data = await response.json();
  // console.log(data);
  return data;
};

export const Gravitational = async () => {
  const response = await fetch("https://gwosc.org/api/v2/event-versions?format=json");
  const data = await response.json();
  console.log(data);
  return data;
};