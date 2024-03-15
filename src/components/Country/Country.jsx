
import { useState } from 'react';
import './Country.css'
const Country = ({ country, handleVisitedCountry }) => {
  const { name, flags, population, area } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  }

  const passWithParams=()=>{
    handleVisitedCountry(country);
  }

  return (
    <div className={`country ${visited ? "visited" : "non-visited"}`}>
      <h3 style={{ color: visited ? "red" : "black" }}>Name: {name?.common}</h3>
      <img src={flags.png} alt="" />
      <p>Population:{population} </p>
      <p>Area : {area}</p>
      <button onClick={passWithParams}>Mark as Visited</button>
      <br />
      <br />
      <button onClick={handleVisited}>{visited ? "Visited" : "Will go"}</button>
      {visited ? "Already visited this country" : "I want to visit"}
    </div>
  );
};

export default Country;