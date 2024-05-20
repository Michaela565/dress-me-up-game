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

  const fits: Array<Category> = [
    { value: "loose", label: "Loose" },
    { value: "normal", label: "Normal" },
    { value: "thight", label: "Thight" },
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
            <div className="input-holder">
              <label htmlFor="color">Color:</label>
              <input type="text" name="color" id="color" />
            </div>
            <div className="input-holder">
              <label htmlFor="fit">Fit:</label>
              <select name="fit" id="fit">
                {fits.map((fit) => (
                  <option value={fit.value}>{fit.label}</option>
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
