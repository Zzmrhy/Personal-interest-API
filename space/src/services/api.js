const API_KEY = import.meta.env.VITE_NASA_API_KEY;
const BASE_URL = "https://api.nasa.gov";

export const getPictureOfTheDay = async () => {
  const response = await fetch(
    `${BASE_URL}/planetary/apod?api_key=${API_KEY}` //&date=2020-03-24
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

export const DONKICMEA = async () => {
  const response = await fetch(
    `${BASE_URL}/DONKI/CMEAnalysis?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&mostAccurateOnly=true&speed=500&halfAngle=30&catalog=All&api_key=${API_KEY}`
  );
  const data = await response.json();
  return data;
};

export const DONKIGST = async () => {
  const response = await fetch(
    `${BASE_URL}/DONKI/GST?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&mostAccurateOnly=true&speed=500&halfAngle=30&catalog=All&api_key=${API_KEY}`
  );
  const data = await response.json();
  return data.results;
};

export const DONKIIPS = async () => {
  const response = await fetch(
    `${BASE_URL}/DONKI/IPS?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&mostAccurateOnly=true&speed=500&halfAngle=30&catalog=All&api_key=${API_KEY}`
  );
  const data = await response.json();
  return data.results;
};

export const DONKIFLR = async () => {
  const response = await fetch(
    `${BASE_URL}/DONKI/FLR?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&mostAccurateOnly=true&speed=500&halfAngle=30&catalog=All&api_key=${API_KEY}`
  );
  const data = await response.json();
  return data.results;
};

export const DONKISEP = async () => {
  const response = await fetch(
    `${BASE_URL}/DONKI/SEP?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&mostAccurateOnly=true&speed=500&halfAngle=30&catalog=All&api_key=${API_KEY}`
  );
  const data = await response.json();
  return data.results;
};

export const DONKIMPC = async () => {
  const response = await fetch(
    `${BASE_URL}/DONKI/MPC?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&mostAccurateOnly=true&speed=500&halfAngle=30&catalog=All&api_key=${API_KEY}`
  );
  const data = await response.json();
  return data.results;
};

export const DONKIRBE = async () => {
  const response = await fetch(
    `${BASE_URL}/DONKI/RBE?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&mostAccurateOnly=true&speed=500&halfAngle=30&catalog=All&api_key=${API_KEY}`
  );
  const data = await response.json();
  return data.results;
};

export const DONKIHSS = async () => {
  const response = await fetch(
    `${BASE_URL}/DONKI/HSS?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&mostAccurateOnly=true&speed=500&halfAngle=30&catalog=All&api_key=${API_KEY}`
  );
  const data = await response.json();
  return data.results;
};

export const DONKIWSA = async () => {
  const response = await fetch(
    `${BASE_URL}/DONKI/WSAEnlilSimulations?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&mostAccurateOnly=true&speed=500&halfAngle=30&catalog=All&api_key=${API_KEY}`
  );
  const data = await response.json();
  return data.results;
};

export const DONKINotifications = async () => {
  const response = await fetch(
    `${BASE_URL}/DONKI/notifications?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&mostAccurateOnly=true&speed=500&halfAngle=30&catalog=All&api_key=${API_KEY}`
  );
  const data = await response.json();
  return data.results;
};

export const Rover = async () => {
  const response = await fetch(
    `${BASE_URL}/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${API_KEY}`
  );
  const data = await response.json();
  console.log(data);
  return data;
};

export const ExoplanetKepler = async () => {
  const response = await fetch(
    `https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?&table=exoplanets&format=ipac&where=pl_kepflag=1`
  );
  const data = await response.json();
  return data.results;
};

export const ExoplanetHost = async () => {
  const response = await fetch(
    `httpps://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?&table=exoplanets&format=ipac&where=pl_tranflag=1`
  );
  const data = await response.json();
  return data.results;
};

export const ExoplanetCandidates = async () => {
  const response = await fetch(
    `https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=cumulative&where=koi_prad<2 and koi_teq>180 and koi_teq<303 and koi_disposition like 'CANDIDATE'`
  );
  const data = await response.json();
  return data.results;
};

export const ImageAndVideo = async () => {
  const response = await fetch(`images-${BASE_URL}`);
  const data = await response.json();
  return data.json();
};
