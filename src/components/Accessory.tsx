import DragAndDropItem from "./DragAndDropItem";

interface Props {
  className: string;
  imagePath: string;
}

const Accessory = ({ className, imagePath }: Props) => {
  const onClick = () => {
    console.log("clicked");
    return <DragAndDropItem imagePath={imagePath}></DragAndDropItem>;
  };

  return (
    <img
      className={className}
      src={imagePath}
      alt="accessory"
      width="100"
      height="100"
      onClick={onClick}
    ></img>
  );
};

export default Accessory;
