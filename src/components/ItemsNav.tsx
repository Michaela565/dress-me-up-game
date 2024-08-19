import Accessories from "./Accessories";

interface Props {
  className: string;
  onClickNewItem: (event: React.MouseEvent) => void;
  imagePathsAccessories: string[];
}

const ItemsNav = ({
  className,
  onClickNewItem,
  imagePathsAccessories,
}: Props) => {
  return (
    <div className={className}>
      <button className="add-new-item-btn" onClick={onClickNewItem}>
        Add new clothing item
      </button>
      <Accessories
        className="accessories"
        imagePaths={imagePathsAccessories}
      ></Accessories>
    </div>
  );
};

export default ItemsNav;
