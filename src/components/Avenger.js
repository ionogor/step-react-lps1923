import React, { useState } from "react";
import { useHistory, useParams } from "react-router";
import { Link, Route, Switch } from "react-router-dom";
import { useRouteMatch } from "react-router";
const Avenger = ({ avenger }) => {
  const params = useParams();

  console.log("params", params);

  console.log(avenger);
  const match = useRouteMatch();
  console.log("match", match);

  const history = useHistory();
  console.log("history", history);
  const foundAvenger = avenger.find((el) => {
    console.log("element", el);
    return Number(params.id) === el.id;
  });
  console.log("found ", foundAvenger);

  return (
    <>
      <div className="character-info-wrapper">
        <button onClick={() => history.go(-1)}>Go home</button>
        <p>{foundAvenger.name}</p>
        <h2>{foundAvenger.nickname} </h2>
        <img src={foundAvenger.img}></img>
        <h2>{foundAvenger.description}</h2>
        <Link to={`${match.url}/movies`}>Movies</Link>
      </div>
      <Route exact path={`${match.path}/movies`}>
        {foundAvenger.movies.map((el, idx) => {
          return (
            <ul key={idx}>
              <li>{el}</li>
            </ul>
          );
        })}
      </Route>
    </>
  );
};

export default Avenger;
