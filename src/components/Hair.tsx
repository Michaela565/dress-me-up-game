interface Props {
  imagePath: string;
}

const Hair = ({ imagePath }: Props) => {
  return (
    <img src={imagePath} alt="hair of our character" className="hair"></img>
  );
};

export default Hair;
