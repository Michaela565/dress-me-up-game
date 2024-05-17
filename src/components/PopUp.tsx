interface Props {
  className: string;
  visibilitySetter: React.Dispatch<React.SetStateAction<boolean>>;
}

const PopUp = ({ className, visibilitySetter }: Props) => {
  type Category = {
    value: string;
    label: string;
  };

  const categories: Array<Category> = [
    { value: "top", label: "Top" },
    { value: "bottom", label: "Bottom" },
    { value: "hair", label: "Hair" },
    { value: "stockings", label: "Stockings" },
    { value: "shoes", label: "Shoes" },
  ];

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
              <label htmlFor="category">Category:</label>
              <select name="category" id="category">
                {categories.map((category) => (
                  <option value={category.value}>{category.label}</option>
                ))}
              </select>
            </div>
          </fieldset>
        </form>
        <p>Some text in the Modal..</p>
      </div>
    </div>
  );
};

export default PopUp;
