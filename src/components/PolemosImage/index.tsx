
interface GenerationPage1Props {
  title: string;
  image?: string;
  dataId: number;
}

export const PokemonImage = ({
  title,
  image,
  dataId,
}: GenerationPage1Props) => {
 
  const formula1 = `#00${dataId}`
  const formula2 = `#0${dataId}`
  const formula3 = `#${dataId}`

  const configId = () => {
    if(dataId > 99) {
      return formula3
    } else if(dataId > 10) {
      return formula2
    } else{
      return formula1
    }
  }

  return (
    <div className="name">
      <div className="text">
        <h1>{title}</h1>
      </div>
      <div className="image">
        <img
        src={image}
        alt="" />
      </div>

      <div className="id">{configId()}</div>
    </div>
  );
};