interface Props {
  imagePath: string;
}

const Stockings = ({ imagePath }: Props) => {
  return (
    <img
      src={imagePath}
      alt="stockings of our character"
      className="stockings"
    ></img>
  );
};

export default Stockings;
