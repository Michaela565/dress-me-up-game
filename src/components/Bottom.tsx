interface Props {
  imagePath: string;
}

const Bottom = ({ imagePath }: Props) => {
  return (
    <img src={imagePath} alt="bottom of our character" className="bottom"></img>
  );
};

export default Bottom;
