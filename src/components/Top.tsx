interface Props {
  imagePath: string;
}

const Top = ({ imagePath }: Props) => {
  return <img src={imagePath} alt="top of our character" className="top"></img>;
};

export default Top;
