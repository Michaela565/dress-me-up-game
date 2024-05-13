interface Props {
  className: string;
}

const PopUp = ({ className }: Props) => {
  return (
    <div className={className}>
      <div className="popUp-content">
        <span className="close">&times;</span>
        <p>Some text in the Modal..</p>
      </div>
    </div>
  );
};

export default PopUp;
