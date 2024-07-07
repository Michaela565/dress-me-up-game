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
    { value: "1", label: "Top" },
    { value: "2", label: "Bottom" },
    { value: "3", label: "Hair" },
    { value: "4", label: "Stockings" },
    { value: "5", label: "Shoes" },
  ];

  const fits: Array<Category> = [
    { value: "loose", label: "Loose" },
    { value: "normal", label: "Normal" },
    { value: "thight", label: "Thight" },
  ];

  const lengths: Array<Category> = [
    { value: "long", label: "Long" },
    { value: "normal", label: "Normal" },
    { value: "short", label: "Short" },
  ];

  function formHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    let formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name"),
      category: formData.get("category"),
      color: formData.get("color"),
      fit: formData.get("fit"),
      length: formData.get("length"),
      type: formData.get("type"),
      tags: formData.get("tags"),
      imgPath: formData.get("img-path"),
    };
    console.log(JSON.stringify(data));
    try {
      const response = fetch("http://localhost:8081/upload-clothing-item", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      alert(`An error occured : ${error}`);
    }
  }

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
        <form onSubmit={formHandler} className="upload-form">
          <fieldset className="main-inputs">
            <div className="input-holder">
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="input-holder">
              <label htmlFor="category">Category:</label>
              <select name="category" id="category">
                {categories.map((category) => (
                  <option value={category.value} key={category.value}>
                    {category.label}
                  </option>
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
                  <option value={fit.value} key={fit.value}>
                    {fit.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="input-holder">
              <label htmlFor="length">Length:</label>
              <select name="length" id="length">
                {lengths.map((length) => (
                  <option value={length.value} key={length.value}>
                    {length.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="input-holder">
              <label htmlFor="type">Type:</label>
              <input
                type="text"
                name="type"
                id="type"
                placeholder="oversized hoodie"
              />
            </div>
            <div className="input-holder">
              <label htmlFor="tags">Tags:</label>
              <textarea name="tags" id="tags"></textarea>
            </div>
          </fieldset>
          <fieldset className="img-input">
            <div className="input-holder">
              <label htmlFor="img-path">Image file name:</label>
              <input type="text" name="img-path" id="img-path" />
            </div>
            <div className="input-holder">
              <button
                type="submit"
                onClick={() => {
                  visibilitySetter(false);
                  location.reload();
                }}
              >
                Upload
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default PopUp;
