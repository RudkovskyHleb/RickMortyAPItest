import React, { useEffect, useMemo, useState } from "react";
// import "./styles.css";
import CharacterItem from "../CharacterItem";
import CharacterService from "../CharacterService";
import { getPagesArray } from "../Pages";
export default function Characters() {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const changePage = (page) => {
    setPage(page);
    fetchCharacters();

    pagesArray = getPagesArray(totalPages);
  };

  let pagesArray = getPagesArray(totalPages);

  const [characters, setCharacters] = useState([
    { id: "", name: "", status: "", image: "" }
  ]);
  useEffect(() => {
    fetchCharacters();
  }, [page]);
  async function fetchCharacters() {
    const response = await CharacterService.getAll(page);
    // console.log(characters.data.results);

    setCharacters(response.data.results);

    const totalPages = response.data.info.pages;
    setTotalPages(totalPages);
    // console.log(response.data.info.pages);
    pagesArray = getPagesArray(totalPages);
    console.log(pagesArray);
  }

  return (
    <div className="App container" >
      <div className="row">
        {characters.map((character) => (
          <CharacterItem character={character} />
        ))}
      </div>
      <div className="row">
        <div>

          <ul className="pagination ">
            {pagesArray.map((p) => (
              <li className="page-item"><a onClick={() => changePage(p)} className="page-link" href="#">{p}</a></li>
            ))}
          </ul>

        </div>
      </div>
    </div>
  );
}

