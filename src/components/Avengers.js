import React, { useState } from "react";
import { Avatar } from "@mui/material";
import { Link, Route, Switch } from "react-router-dom";
import Avenger from "./Avenger";
import Home from "./Home";
const Avengers = (props) => {
  const { state } = props;
  console.log(state);
  return (
    <div>
      {state.map((el) => {
        return (
          <Link
            to={`/avengers/${el.id}`}
            key={el.id}
            className="characters-list-wrapper"
          >
            <div className="character-card">
              <p>{el.nickname}</p>
              <img src={el.thumbnail} />
            </div>
          </Link>
        );
      })}
      <Route exact path="/avengers/:id">
        <Avenger avenger={state} />
      </Route>
      ;
    </div>
  );
};

export default Avengers;
