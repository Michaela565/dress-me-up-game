import characterImg from "./assets/character.png";
import "./App.css";
import Character from "./components/Character";
import Hair from "./components/Hair";
import hairImg from "./assets/hair1.png";
import { useEffect, useState } from "react";
import ItemsNav from "./components/ItemsNav";
import ClothingItem from "./components/ClothingItem";

const YOURPHOTOSPATH = '/clothes/'; // HERE YOU SET THE PATH TO YOUR FOLDER WITH CLOTHES

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8081/Clothing_item_imageURL')
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err))
  }, []);
  const [currentTop, changeCurrentTop] = useState(0);
  const tops = data.map((item : any) => {
    return YOURPHOTOSPATH.concat(item.imageURL);
  })
  console.log(tops);
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
