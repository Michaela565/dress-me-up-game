import Accessory from "./Accessory";

interface Props {
  className: string;
  imagePaths: string[];
}

const Accessories = ({ className, imagePaths }: Props) => {
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
        : imagePaths.slice(0, 8).map((path, index) => {
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
