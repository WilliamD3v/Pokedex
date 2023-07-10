import { useEffect, useState } from "react";

import PokemonData from "../../types/pokemons";
import { secondGeneration } from "../../services/Pokemons/apiPokemons";
import { PokemonImage } from "../../components/PolemosImage/index";
import { GenerationStyle1 } from "../../components/PolemosImage/styles";
import { SearchStyles } from "../../components/Search/styles";
import { Search } from "../../components/Search";
import { SearchText } from "../../components/search-text";
import { Header } from "../../components/header";
import { NameGeneration } from "../../components/nameGeneration";

export const SecondGeneration = () => {
  const [dataPokemonImage, setDataPokemonImage] = useState<PokemonData[]>([]);
  const [dataPokemon, setDataPokemon] = useState(9);
  const [search, setSearch] = useState("");

  const lowerSearch = search.toLowerCase();
  const searchFilter = dataPokemonImage.filter((item) =>
    item.forms[0].name.includes(lowerSearch)
  );

  const showMoreElements = () => {
    setDataPokemon(dataPokemon + dataPokemonImage.length);
  };

  const showLessElements = () => {
    setDataPokemon(dataPokemon - dataPokemonImage.length);
  };

  useEffect(() => {
    secondGeneration().then((res) => {
      setDataPokemonImage(res);
    });
  }, []);

  return (
    <div>
      <Header />

      {/* h1 title */}
      <NameGeneration title="Generation II" />
      {/* Search Text */}
      <div className="relative top-8">
        <SearchText />
      </div>

      {/* Search */}
      <SearchStyles>
        <div>
          <div className="search">
            <Search search={search} setSearch={setSearch} />
          </div>
        </div>
      </SearchStyles>

      <GenerationStyle1>
        <div className="flex items-center justify-center">
          {dataPokemonImage.length === 0 ? (
            <p className="relative top-[300px] text-5xl text-slate-500 left-3">
              Carregando...
            </p>
          ) : (
            <div className="card">
              <div className="grid grid-cols-3">
                {searchFilter.slice(0, dataPokemon).map((item, index) => (
                  <PokemonImage
                    key={index}
                    dataId={item.id}
                    title={item.forms[0].name}
                    image={item.sprites.other.home.front_default}
                  />
                ))}
              </div>

              {dataPokemon < dataPokemonImage.length ? (
                <div>
                  {dataPokemon >= 9 && (
                    <button
                      className="button-more"
                      onClick={showMoreElements}
                      style={{ display: search ? "none" : "block" }}
                      type="submit"
                    >
                      Mostrar mais
                    </button>
                  )}
                </div>
              ) : (
                dataPokemon >= dataPokemonImage.length && (
                  <button
                    className="button-lass relative w-2"
                    onClick={showLessElements}
                    style={{ display: search ? "none" : "block" }}
                    type="submit"
                  >
                    Mostrar menos
                  </button>
                )
              )}
            </div>
          )}
        </div>
      </GenerationStyle1>
    </div>
  );
};
