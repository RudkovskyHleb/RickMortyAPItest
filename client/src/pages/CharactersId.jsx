import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import CharacterService from '../CharacterService'
import { useFetching } from '../hooks/useFatching'

const CharactersId= ()=>{
  const params= useParams()
  const [character, setCharacter]= useState({})
  const [fetchCharacterById ] = useFetching(async(id)=>{
  const response = await CharacterService.getById(id)
  setCharacter(response.data)});
  useEffect(()=>{
fetchCharacterById(params.id)
  },[])
  return(
      <div className="card col-md-3">
          <img src={character.image} className="card-img-top" />
          <div className="card-body">
              <h5 className="card-title">{character.id}. {character.name}</h5>
              <p className="card-text">{character.status}</p>

          </div>
      </div>

     )
}
export default CharactersId;
