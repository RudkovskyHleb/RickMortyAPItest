import React from "react";
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
const CharacterItem = (props) => {
  const router = useNavigate()
  return (
    <div className="card col-md-3">
      <img src={props.character.image} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{props.character.id}. {props.character.name}</h5>
        <p className="card-text">{props.character.status}</p>
        <a href="#" onClick={() => router(`/characters/${props.character.id}`)} className="btn btn-primary">Info</a>
      </div>
    </div>
  );
};

export default CharacterItem;

