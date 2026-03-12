import Accessory from "./Accessory";

interface Props {
  className: string;
  imagePaths: string[];
  startingIndex: number;
  addAccessory: React.Dispatch<React.SetStateAction<string[]>>;
  spawnedAccessories: string[];
}

const Accessories = ({
  className,
  imagePaths,
  startingIndex,
  addAccessory,
  spawnedAccessories,
}: Props) => {
  return (
    <>
      {imagePaths.length <= 9
        ? imagePaths.map((path, index) => {
            return (
              <Accessory
                className={className + index}
                imagePath={path}
                addAccessory={addAccessory}
                spawnedAccessories={spawnedAccessories}
              ></Accessory>
            );
          })
        : imagePaths
            .slice(0 + startingIndex * 9, 9 + startingIndex * 9)
            .map((path, index) => {
              return (
                <Accessory
                  className={className + index}
                  imagePath={path}
                  addAccessory={addAccessory}
                  spawnedAccessories={spawnedAccessories}
                ></Accessory>
              );
            })}
    </>
  );
};

export default Accessories;
