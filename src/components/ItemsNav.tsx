import Accessories from "./Accessories";
import Arrow from "./Arrow";

interface Props {
  className: string;
  onClickNewItem: (event: React.MouseEvent) => void;
  imagePathsAccessories: string[];
  accessoriesState: number;
  accessoriesStateSetter: React.Dispatch<React.SetStateAction<number>>;
}

const handleChangeToNext = (
  orientation: string,
  state: number,
  stateSetter: React.Dispatch<React.SetStateAction<number>>,
  imagePaths: string[]
) => {
  if (orientation == "forward") {
    stateSetter(state + 1 < imagePaths.length / 9 ? state + 1 : 0);
    console.log(state);
  } else {
    stateSetter(
      state - 1 >= 0 ? state - 1 : Math.ceil(imagePaths.length / 9) - 1
    );
    console.log(state);
  }
};

const ItemsNav = ({
  className,
  onClickNewItem,
  imagePathsAccessories,
  accessoriesState,
  accessoriesStateSetter,
}: Props) => {
  return (
    <div className={className}>
      <button className="add-new-item-btn" onClick={onClickNewItem}>
        Add new clothing item
      </button>
      <Arrow
        className={`arrow-div forward arrow-accessories`}
        orientation="forward"
        onClick={() => {
          handleChangeToNext(
            "forward",
            accessoriesState,
            accessoriesStateSetter,
            imagePathsAccessories
          );
        }}
      />
      <Accessories
        className="accessories"
        imagePaths={imagePathsAccessories}
        startingIndex={accessoriesState}
      />
      <Arrow
        className={`arrow-div back arrow-accessories`}
        orientation="back"
        onClick={() => {
          handleChangeToNext(
            "back",
            accessoriesState,
            accessoriesStateSetter,
            imagePathsAccessories
          );
        }}
      />
    </div>
  );
};

export default ItemsNav;
