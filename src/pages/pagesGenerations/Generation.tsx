import React, { useEffect, useState } from "react";

import { Header } from "../../components/header";
import GenerationData from "../../types/generations";
import getApiGeneration from "../../services/Generation/apiGeneration";
import { StylesGeneration } from "../../components/GenerationItem/styles";
import { GenerationItem } from "../../components/GenerationItem/index";
import { NameGeneration } from "../../components/nameGeneration";


export const GenerationPage = () => {
  const [dateGeneration, setDataGeneration] = useState<GenerationData[]>([]);

  useEffect(() => {
    getApiGeneration().then((response) => {
      setDataGeneration(response);
    });
  }, []);


  return (
    <div>
      <Header />

      <div>
        <NameGeneration title="Generation" />
      </div>
      <div className="flex justify-center">
        {dateGeneration.length === 0 ? (
          <p className="relative top-[300px] text-5xl text-slate-500 left-6">
            Carregando...
          </p>
        ) : (
          <StylesGeneration>
            <div className="card relative max-h-full max-w-7xl rounded-xl top-[100px] left-10 bg-white border-4 border-purple-550 grid grid-cols-2">
              {dateGeneration.map((item, index) => (
                <GenerationItem key={index} title={item.name} />
              ))}
            </div>
          </StylesGeneration>
        )}
      </div>
    </div>
  );
};
