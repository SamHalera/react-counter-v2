const ButtonCustom = ({ items, index, setItems, className, action }) => {
  return (
    <button
      onClick={() => {
        const cloneItems = [...items];
        {
          action === "minus"
            ? (cloneItems[index] -= 1)
            : (cloneItems[index] += 1);
        }
        setItems(cloneItems);
      }}
    >
      <i className={className}></i>
    </button>
  );
};

export default ButtonCustom;
