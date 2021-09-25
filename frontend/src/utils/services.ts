import {stringify} from "query-string";
import { Person } from "./types";

const axios = require('axios');
const baseUrl = "http://localhost:8000";

const get = async (endpoint: string) => {
  const url = baseUrl + endpoint;
  return await axios.get(url);
};

const post = async (endpoint: string, data: Person) => {
  const url = baseUrl + endpoint;
  return await axios.post(url, data);
};

const services = {
  // Practice 1: add get data endpoint here
  // example: () => get(...)

  // Practice 2: add post data endpoint here
};


export default services;