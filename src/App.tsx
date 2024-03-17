import characterImg from "./assets/character.png";
// import topImg from "./assets/pinkshirt.png";
import "./App.css";
import Character from "./components/Character";
import Top from "./components/Top";
import Arrow from "./components/Arrow";
import Bottom from "./components/Bottom";
import Hair from "./components/Hair";
import hairImg from "./assets/hair1.png";
import { useState } from "react";
import ItemsNav from "./components/ItemsNav";
import Stockings from "./components/Stockings";
import ClothingItem from "./components/ClothingItem";

function App() {
  const [currentTop, changeCurrentTop] = useState(0);
  const tops = [
    "/src/assets/pinkshirt.png",
    "/src/assets/blueshirt.png",
    "/src/assets/greenshirt.png",
  ];
  const [currentBottom, changeCurrentBottom] = useState(0);
  const bottoms = [
    "/src/assets/pinkskirt.png",
    "/src/assets/blueskirt.png",
    "/src/assets/greenskirt.png",
  ];
  const [currentStockings, changeCurrentStockings] = useState(0);
  const stockings = [
    "/src/assets/stockingsblackopaque.png",
    "/src/assets/stockingsblacksemitransparent.png",
    "/src/assets/stockingswiththighhighsblack.png",
    "/src/assets/thighhighsblack.png",
  ];
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

  return (
    <>
      <div className="main">
        <ItemsNav className="itemsNav"></ItemsNav>
        <Hair imagePath={hairImg}></Hair>
        <Character imagePath={characterImg} />
        <ClothingItem
          component="Top"
          state={currentTop}
          stateSetter={changeCurrentTop}
          paths={tops}
        ></ClothingItem>
        <ClothingItem
          component="Bottom"
          state={currentBottom}
          stateSetter={changeCurrentBottom}
          paths={bottoms}
        ></ClothingItem>
        <ClothingItem
          component="Stockings"
          state={currentStockings}
          stateSetter={changeCurrentStockings}
          paths={stockings}
        ></ClothingItem>
      </div>
    </>
  );
}

export default App;
