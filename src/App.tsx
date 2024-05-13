import characterImg from "./assets/character.png";
import "./App.css";
import Character from "./components/Character";
import Hair from "./components/Hair";
import hairImg from "./assets/hair1.png";
import { useEffect, useState } from "react";
import ItemsNav from "./components/ItemsNav";
import ClothingItem from "./components/ClothingItem";

const YOURPHOTOSPATH = '/clothes/'; // HERE YOU SET THE PATH TO YOUR FOLDER WITH CLOTHES
// const categories = ["top", "bottom"]
function App() {
  const [tops, setTops] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8081/clothes/top')
    .then(res => res.json())
    .then(data => setTops(data))
    .catch(err => console.log(err))
  }, []); // TODO test if useEffect runs more than once


  const [currentTop, changeCurrentTop] = useState(0);
  const topsURL = tops.map((item : any) => {
    return YOURPHOTOSPATH.concat(item.imageURL);
  })

  const [bottoms, setBottoms] = useState([])
  useEffect(() => {
    fetch('http://localhost:8081/clothes/bottom')
    .then(res => res.json())
    .then(data => setBottoms(data))
    .catch(err => console.log(err))
  }, []);

  const [currentBottom, changeCurrentBottom] = useState(0);
  const bottomsURL = bottoms.map((item : any) => {
    return YOURPHOTOSPATH.concat(item.imageURL);
  })

  const [currentStockings, changeCurrentStockings] = useState(0);
  const stockings = [
    "/src/assets/stockingsblackopaque.png",
    "/src/assets/stockingsblacksemitransparent.png",
    "/src/assets/stockingswiththighhighsblack.png",
    "/src/assets/thighhighsblack.png",
  ];

  // categories.forEach(category => {
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch(`http://localhost:8081/clothes/${category}`)
  //     .then(res => res.json())
  //     .then(data => setData(data))
  //     .catch(err => console.log(err))
  //   }, []);
  //   if (category == "top"){
  //     setTops(data);
  //   }
  //   else if (category == "bottom"){
  //     setBottoms(data)
  //   }
  //   else {
  //     console.log(`Undefined category name ${category}`)
  //   }
  // });

  
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
          paths={topsURL}
        ></ClothingItem>
        <ClothingItem
          component="Bottom"
          state={currentBottom}
          stateSetter={changeCurrentBottom}
          paths={bottomsURL}
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
