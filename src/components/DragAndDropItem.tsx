import { useEffect, useState } from "react";

type Props = {
  imagePath: string;
};

interface Position {
  x: number;
  y: number;
}

const DragAndDropItem = ({ imagePath }: Props) => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [dragging, setDragging] = useState<boolean>(false);
  const [offset, setOffset] = useState<Position>({ x: 0, y: 0 });

  const onMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const onMouseUp = () => {
    setDragging(false);
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  };

  const onMouseMove = (e: MouseEvent) => {
    if (dragging) {
      setPosition({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y,
      });
    }
  };

  useEffect(() => {
    if (dragging) {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    }
  });

  return (
    <div
      style={{
        position: "fixed",
        left: position.x,
        top: position.y,
        cursor: dragging ? "grabbing" : "grab",
        zIndex: 20,
      }}
      onMouseDown={onMouseDown}
    >
      <img src={imagePath} alt="accessory" width="100" height="100"></img>
    </div>
  );
};
export default DragAndDropItem;
