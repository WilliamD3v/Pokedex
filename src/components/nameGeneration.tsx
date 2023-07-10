interface nameGeneration {
  title?: string
}

export const NameGeneration = ({ title }: nameGeneration) => {
  return (
    <h1 className="relative flex justify-center text-gray-500 font-Merriweather left-[37px] text-4xl top-[40px]">
      {title}
    </h1>
  );
};
