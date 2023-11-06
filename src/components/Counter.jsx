import ButtonCustom from "./ButtonCustom";

const Counter = ({ items, setItems, index, item }) => {
  return (
    <div>
      <div>
        <div className="button-container">
          {item > 0 && (
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
          <p>{item}</p>
        </div>

        <div className="button-container">
          {item < 10 && (
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
