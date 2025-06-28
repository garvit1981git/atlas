import axios from "axios";

let api = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});
export let Getcountrys = async () => {
  return await api.get("/all?fields=name,capital,population,region,flags");
};
export let Getindcountrys = async (name) => {
  return await api.get(
    `/name/${name}?fields=name,capital,population,region,flags,currencies`
  );
};
