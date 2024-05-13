interface Props {
  className: string;
  onClickNewItem: (event: React.MouseEvent) => void;
}

const ItemsNav = ({ className, onClickNewItem }: Props) => {
  return (
    <div className={className}>
      <button className="add-new-item-btn" onClick={onClickNewItem}>
        Add new clothing item
      </button>
    </div>
  );
};

export default ItemsNav;
