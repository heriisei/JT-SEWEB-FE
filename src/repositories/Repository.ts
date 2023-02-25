import axios from "axios";

// local mock api
const baseDomain = window.location.origin;
const baseURL = `${baseDomain}/api`;

export default axios.create({
  baseURL
});