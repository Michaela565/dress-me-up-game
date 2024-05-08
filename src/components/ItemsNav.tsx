interface Props {
  className: string;
}

const ItemsNav = ({ className }: Props) => {
  return (
    <div className={className}>
      <button className="add-new-item-btn">Add new clothing item</button>
    </div>
  );
};

export default ItemsNav;
