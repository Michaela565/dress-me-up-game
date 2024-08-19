interface Props {
  className: string;
  imagePath: string;
}

const Accessory = ({ className, imagePath }: Props) => {
  return (
    <img
      className={className}
      src={imagePath}
      alt="accessory"
      width="100"
      height="100"
    ></img>
  );
};

export default Accessory;
