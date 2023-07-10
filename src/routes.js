import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

/* import { SearchInput } from "./components/search-input"; */
import { GenerationPage } from "./pages/pagesGenerations/Generation";
import { FirstGeneration } from "./pages/pagesPokemons/FirstGeneration";
import { SecondGeneration } from "./pages/pagesPokemons/SecondGeneration";
import { ThirdGeneration } from "./pages/pagesPokemons/ThirdGeneration";
import { FourthGeneration } from "./pages/pagesPokemons/FourthGeneration";
import { FifthGeneration } from "./pages/pagesPokemons/FifthGeneration";
import { SeventhGeneration } from "./pages/pagesPokemons/SeventhGeneration";
import { EighthGeneration } from "./pages/pagesPokemons/EighthGeneration";
import { NinhtGeneration } from "./pages/pagesPokemons/NinthGeneration";
import { SixthGeneration } from "./pages/pagesPokemons/SixthGeneration";
import Test from "./tests/teste";


export const RoutesPrimer = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GenerationPage />} />
        <Route path="generation/i" element={<FirstGeneration />} />
        <Route path="generation/ii" element={<SecondGeneration />} />
        <Route path="generation/iii" element={<ThirdGeneration />} />
        <Route path="generation/iv" element={<FourthGeneration />} />
        <Route path="generation/v" element={<FifthGeneration/>} />
        <Route path="generation/vi" element={<SixthGeneration />} />
        <Route path="generation/vii" element={<SeventhGeneration />} />
        <Route path="generation/viii" element={<EighthGeneration />} />
        <Route path="generation/ix" element={<NinhtGeneration />} />
        <Route path="teste" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
};
