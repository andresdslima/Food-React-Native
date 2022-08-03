import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer kHKKKyPKODHgf8vraFRaRSQ_i2K8Wn5xkG1SoBDCR2pl1_Xcn6lX9yEYzXSDU3mi2EL9NEcoMsjgu-bQ-lPJx-9vulcnXzk4BNenMsqJWWuEuu12Jd6poGc37gXoYnYx",
  },
});
