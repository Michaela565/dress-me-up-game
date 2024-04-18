import Arrow from "./Arrow";
import Bottom from "./Bottom";
import Top from "./Top";
import Hair from "./Hair";
import Stockings from "./Stockings";

interface Props {
  component: "Bottom" | "Top" | "Hair" | "Stockings";
  state: number;
  stateSetter: React.Dispatch<React.SetStateAction<number>>;
  paths: string[];
}

const handleChangeClothes = (
  event: React.MouseEvent,
  orientation: string,
  state: number,
  stateSetter: React.Dispatch<React.SetStateAction<number>>,
  clothesList: string[]
) => {
  if (orientation == "forward") {
    stateSetter(state + 1 < clothesList.length ? state + 1 : 0);
  } else {
    stateSetter(state - 1 >= 0 ? state - 1 : clothesList.length - 1);
  }
};

const pickComponent = (
  componentName: string,
  paths: string[],
  state: number
) => {
  if (componentName == "Bottom")
    return <Bottom imagePath={paths[state]}></Bottom>;
  else if (componentName == "Top") return <Top imagePath={paths[state]}></Top>;
  else if (componentName == "Stockings")
    return <Stockings imagePath={paths[state]}></Stockings>;
  else if (componentName == "Hair")
    return <Hair imagePath={paths[state]}></Hair>;
};

const ClothingItem = ({ state, stateSetter, paths, component }: Props) => {
  return (
    <>
      {pickComponent(component, paths, state)}
      <Arrow
        className={`arrow-div forward arrow-${component.toLowerCase()}`} //TODO fix up the arrow-top to change dynamically to arrow-bottom and etc.
        orientation="forward"
        onClick={(event) => {
          handleChangeClothes(event, "forward", state, stateSetter, paths);
        }}
      />
      <Arrow
        className={`arrow-div back arrow-${component.toLowerCase()}`}
        orientation="back"
        onClick={(event) => {
          handleChangeClothes(event, "back", state, stateSetter, paths);
        }}
      />
    </>
  );
};

export default ClothingItem;
