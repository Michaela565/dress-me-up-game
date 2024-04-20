import characterImg from "./assets/character.png";
// import topImg from "./assets/pinkshirt.png";
import "./App.css";
import Character from "./components/Character";
import Hair from "./components/Hair";
import hairImg from "./assets/hair1.png";
import { useState } from "react";
import ItemsNav from "./components/ItemsNav";
import ClothingItem from "./components/ClothingItem";

function App() {
  const [currentTop, changeCurrentTop] = useState(0);
  const tops = [
    "/clothes/1.png",
    "/clothes/2.png",
    "/clothes/3.png",
    "/clothes/4.png",
    "/clothes/5.png",
    "/clothes/6.png",
    "/clothes/7.png",
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
