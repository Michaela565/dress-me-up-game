import Select from "react-select";

interface Props {
  className: string;
  visibilitySetter: React.Dispatch<React.SetStateAction<boolean>>;
}

const PopUp = ({ className, visibilitySetter }: Props) => {
  const categories = [{ value: "top", label: "Top" }];
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
        <form action="">
          <fieldset>
            <div className="input-holder">
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="input-holder">
              <label htmlFor="category">Name:</label>
              <Select options={categories}></Select>
            </div>
          </fieldset>
        </form>
        <p>Some text in the Modal..</p>
      </div>
    </div>
  );
};

export default PopUp;
