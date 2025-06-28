let Allfilters = ({ search, setsearch, filter, setfilter }) => {
  let handlesearch = (e) => {
    setsearch(e.target.value);
  };
  let handlefilter = (e) => {
    setfilter(e.target.value);
  };
  return (
    <>
      <div className="flex border-2 border-amber-600 mt-2">
        <input
          type="text"
          className="bg-amber-50 text-black "
          onChange={(e) => handlesearch(e)}
        ></input>

        <select
          className="bg-amber-50 text-black"
          onChange={(e) => handlefilter(e)}
          value={filter}
        >
          <option value="all">all</option>
          <option value="asia">asia</option>
          <option value="africa">africa</option>
          <option value="america">america</option>
          <option value="australia">australia</option>
        </select>
      </div>
    </>
  );
};
export default Allfilters;
