import Accessory from "./Accessory";

interface Props {
  className: string;
  imagePaths: string[];
  startingIndex: number;
}

const Accessories = ({ className, imagePaths, startingIndex }: Props) => {
  return (
    <>
      {imagePaths.length <= 9
        ? imagePaths.map((path, index) => {
            return (
              <Accessory
                className={className + index}
                imagePath={path}
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
                ></Accessory>
              );
            })}
    </>
  );
};

export default Accessories;
