import ButtonCustom from "./ButtonCustom";

const Counter = ({ items, setItems, index }) => {
  return (
    <div>
      <div>
        <div className="button-container">
          {items[index] > 0 && (
            <ButtonCustom
              items={items}
              setItems={setItems}
              index={index}
              className="fas fa-minus"
              action="minus"
            />
          )}
        </div>
        <div className="number">
          <p>{items[index]}</p>
        </div>

        <div className="button-container">
          {items[index] < 10 && (
            <ButtonCustom
              items={items}
              setItems={setItems}
              index={index}
              className="fas fa-plus"
              action="plus"
            />
          )}
        </div>
      </div>
      <button
        onClick={() => {
          const cloneItems = [...items];
          cloneItems[index] = 0;

          setItems(cloneItems);
        }}
        className="reset"
      >
        reset
      </button>
    </div>
  );
};

export default Counter;
