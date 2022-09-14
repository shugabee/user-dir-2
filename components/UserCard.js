import React, { useState } from "react";
import Buttons from "./Buttons";
import data from "../data";

const UserCard = () => {
  const [info, setInfo] = useState(0);

  const next = () => {
    if (info === data.length - 1) {
      return setInfo(data.length - 1);
    }
    setInfo(info + 1);
  };

  const previous = () => {
    if (info === 0) {
      return setInfo(0);
    }
    setInfo(info - 1);
  };

  return (
    <div>
      <h2>
        {data[info].name.first} {data[info].name.last}
      </h2>
      <h2>{data[info].id}/25</h2>
      <h3>
        From: {data[info].city}, {data[info].country}
      </h3>
      <h3>Job Title: {data[info].title}</h3>
      <h3>Employer: {data[info].employer}</h3>

      <h3>Favorite Movies:</h3>
      <ol>
        <li>{data[info].favoriteMovies[0]}</li>
        <li>{data[info].favoriteMovies[1]}</li>
        <li>{data[info].favoriteMovies[2]}</li>
      </ol>

      <Buttons next={next} previous={previous} />
    </div>
  );
};

export default UserCard;
