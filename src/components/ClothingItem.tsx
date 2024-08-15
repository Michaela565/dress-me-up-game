import Arrow from "./Arrow";
import Bottom from "./Bottom";
import Top from "./Top";
import Hair from "./Hair";
import Stockings from "./Stockings";

interface Props {
  component: "Bottom" | "Top" | "Hair" | "Stockings" | "LayerTop";
  state: number;
  stateSetter: React.Dispatch<React.SetStateAction<number>>;
  paths: string[];
}

const handleChangeClothes = (
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
  else if (componentName == "Top" || componentName == "LayerTop")
    return <Top imagePath={paths[state]}></Top>;
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
        className={`arrow-div forward arrow-${component.toLowerCase()}`}
        orientation="forward"
        onClick={() => {
          handleChangeClothes("forward", state, stateSetter, paths);
        }}
      />
      <Arrow
        className={`arrow-div back arrow-${component.toLowerCase()}`}
        orientation="back"
        onClick={() => {
          handleChangeClothes("back", state, stateSetter, paths);
        }}
      />
    </>
  );
};

export default ClothingItem;
