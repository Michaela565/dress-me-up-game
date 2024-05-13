interface Props {
  className: string;
  visibilitySetter: React.Dispatch<React.SetStateAction<boolean>>;
}

const PopUp = ({ className, visibilitySetter }: Props) => {
  return (
    <div className={className}>
      <div className="popUp-content">
        <span
          className="close"
          onClick={() => {
            visibilitySetter(false);
          }}
        >
          &times;
        </span>
        <p>Some text in the Modal..</p>
      </div>
    </div>
  );
};

export default PopUp;
