import characterImg from "./assets/character.png";
// import topImg from "./assets/pinkshirt.png";
import "./App.css";
import Character from "./components/Character";
import Top from "./components/Top";
import Arrow from "./components/Arrow";
import { useState } from "react";

function App() {
  const [currentTop, changeCurrentTop] = useState(0);
  const tops = [
    "/src/assets/pinkshirt.png",
    "/src/assets/blueshirt.png",
    "/src/assets/greenshirt.png",
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
        <Character imagePath={characterImg} />
        <Top imagePath={tops[currentTop]} />
        <Arrow
          className="arrow-top forward"
          orientation="forward"
          onClick={(event) => {
            handleChangeClothes(
              event,
              "forward",
              currentTop,
              changeCurrentTop,
              tops
            );
          }}
        />
        <Arrow
          className="arrow-top back"
          orientation="back"
          onClick={(event) => {
            handleChangeClothes(
              event,
              "back",
              currentTop,
              changeCurrentTop,
              tops
            );
          }}
        />
      </div>
    </>
  );
}

export default App;
