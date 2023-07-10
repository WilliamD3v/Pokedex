import React from "react";
import { TbPokeball } from "react-icons/tb";

interface GenrationItemProps {
  title: string;
  image?: string;
}

export const GenerationItem = ({ title, image }: GenrationItemProps) => {
  const [name1, name2] = title.split("-");

  return (
    <a className="card-elements" href={`/${name1}/${name2}`}>
      <TbPokeball className="split-image" />
      <div>
        <h1 className="a capitalize">{name1}<span className="a uppercase">{" "}{name2}</span>
        </h1>
      </div>
    </a>
  );
};
