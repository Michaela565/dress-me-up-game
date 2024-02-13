import forwardArrowSvg from "../assets/arrow_forward.svg";
import backArrowSvg from "../assets/arrow_back.svg";

interface Props {
  orientation: "back" | "forward";
  onClick: (event: React.MouseEvent) => void;
  className?: string;
}

const Arrow = ({ orientation, onClick, className }: Props) => {
  return (
    <div className={className}>
      <img
        onClick={onClick}
        src={orientation == "forward" ? forwardArrowSvg : backArrowSvg}
        alt="arrow"
      />
    </div>
  );
};

export default Arrow;
