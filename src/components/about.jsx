import Facts from "../api/facts";

let About = () => {
  Facts;
  return (
    <>
      <div className="about w-full flex flex-col p-4 space-y-10">
        <div className="flex flex-col justify-center items-center text-4xl">
          <h1 className="">Here are some interesting facts about diffrent</h1>
          <span className=""> country's of the world </span>
        </div>
        <div className="card-container w-full h-full p-[2%] grid grid-cols-3 gap-8">
          {Facts.map((i) => (
            <div className="card max-w-83 p-[5%] bg-gradient-to-r  from-slate-900 via-gray-800 to-gray-600 rounded-4xl m-[auto] transition duration-300 hover:scale-105">
              <strong>{i.name}</strong>
              <p className="mb-1">
                <strong>capital: </strong>
                {i.capital}
              </p>
              <p className="mb-1">
                <strong>Population: </strong>
                {i.population}
              </p>
              <p className="mb-1  line-clamp-4">
                <strong>Interesting-facts: </strong>
                {i.facts}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default About;
