import { Getcountrys } from "../api/mainapi";
import { useEffect, useTransition, useState } from "react";
import Concard from "./countrycard";
import Loader from "./loader";
import Allfilters from "./confilters";
let Country = () => {
  let [ispending, startTransition] = useTransition();
  let [countrydata, setcountrydata] = useState([]);
  let [search, setsearch] = useState();
  let [filter, setfilter] = useState("all");
  let [searched, setsearched] = useState([]);
  useEffect(() => {
    startTransition(async () => {
      let res = await Getcountrys();
      setcountrydata(res.data);
    });
  }, []);

  useEffect(() => {
    let a = countrydata.filter((country) => {
      if (filter !== "all" && search) {
        let all =
          country.name.common.toLowerCase().includes(search) &&
          country.region.toLowerCase().includes(filter);
        return all;
      } else if (filter !== "all" && !search) {
        let all = country.region.toLowerCase().includes(filter);
        return all;
      } else if (filter == "all" && !search) {
        return countrydata;
      } else if (search) {
        let all = country.name.common.toLowerCase().includes(search);
        return all;
      }
    });
    setsearched(a);
  }, [search, filter, countrydata]);

  return (
    <>
      <Allfilters
        search={search}
        setsearch={setsearch}
        filter={filter}
        setfilter={setfilter}
      ></Allfilters>

      <div className="country w-full  p-10 flex flex-wrap gap-6 justify-center items-center">
        {ispending ? (
          <Loader></Loader>
        ) : searched ? (
          <Concard countrydata={searched}></Concard>
        ) : (
          <Concard countrydata={countrydata}></Concard>
        )}
      </div>
    </>
  );
};
export default Country;
