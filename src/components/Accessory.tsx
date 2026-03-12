interface Props {
  className: string;
  imagePath: string;
  addAccessory: React.Dispatch<React.SetStateAction<string[]>>;
  spawnedAccessories: string[];
}

const Accessory = ({
  className,
  imagePath,
  addAccessory,
  spawnedAccessories,
}: Props) => {
  const onClickSpawn = () => {
    console.log("clicked");
    addAccessory([...spawnedAccessories, imagePath]);
  };
  return (
    <img
      className={className}
      src={imagePath}
      alt="accessory"
      width="100"
      height="100"
      onClick={onClickSpawn}
    ></img>
  );
};

export default Accessory;
