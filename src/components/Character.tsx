interface Props {
  imagePath: string;
}

function Character({ imagePath }: Props) {
  return (
    <img src={imagePath} alt="dress up character" className="character"></img>
  );
}

export default Character;
