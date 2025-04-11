const API_KEY = import.meta.env.VITE_NASA_API_KEY;
const BASE_URL = "https://api.nasa.gov";

export const getPictureOfTheDay = async () => {
  const response = await fetch(
    `${BASE_URL}/planetary/apod?api_key=${API_KEY}` //&date=2025-04-01
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
  console.log(data);
  return data;
};

export const DONKISEP = async () => {
  const response = await fetch(
    `${BASE_URL}/DONKI/SEP?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&mostAccurateOnly=true&speed=500&halfAngle=30&catalog=All&api_key=${API_KEY}`
  );
  const data = await response.json();
  console.log(data);
  return data;
};

export const DONKIMPC = async () => {
  const response = await fetch(
    `${BASE_URL}/DONKI/MPC?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&mostAccurateOnly=true&speed=500&halfAngle=30&catalog=All&api_key=${API_KEY}`
  );
  const data = await response.json();
  console.log(data);
  return data;
};

export const DONKIRBE = async () => {
  const response = await fetch(
    `${BASE_URL}/DONKI/RBE?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&mostAccurateOnly=true&speed=500&halfAngle=30&catalog=All&api_key=${API_KEY}`
  );
  const data = await response.json();
  console.log(data);
  return data;
};

export const DONKIHSS = async () => {
  const response = await fetch(
    `${BASE_URL}/DONKI/HSS?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&mostAccurateOnly=true&speed=500&halfAngle=30&catalog=All&api_key=${API_KEY}`
  );
  const data = await response.json();
  console.log(data);
  return data;
};

export const DONKIWSA = async () => {
  const response = await fetch(
    `${BASE_URL}/DONKI/WSAEnlilSimulations?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&mostAccurateOnly=true&speed=500&halfAngle=30&catalog=All&api_key=${API_KEY}`
  );
  const data = await response.json();
  console.log(data);
  return data;
};

export const DONKINotifications = async () => {
  const response = await fetch(
    `${BASE_URL}/DONKI/notifications?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&mostAccurateOnly=true&speed=500&halfAngle=30&catalog=All&api_key=${API_KEY}`
  );
  const data = await response.json();
  console.log(data);
  return data;
};

export const Rover = async () => {
  const response = await fetch(
    `${BASE_URL}/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${API_KEY}`
  );
  const data = await response.json();
  // console.log(data);
  return data;
};
