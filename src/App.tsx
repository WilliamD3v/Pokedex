import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import { RoutesPrimer } from "./routes";

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <RoutesPrimer />
        </Routes>
      </BrowserRouter>
      ;
    </div>
  );
};
