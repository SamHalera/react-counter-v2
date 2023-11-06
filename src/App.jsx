import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Counter from "./components/Counter";

function App() {
  const [items, setItems] = useState([0]);

  console.log(items);
  return (
    <>
      <Header />
      <main>
        {items.length < 3 && (
          <button
            onClick={() => {
              const cloneItems = [...items];
              cloneItems.push(0);
              setItems(cloneItems);
            }}
            className="add"
          >
            Add counter
          </button>
        )}

        <div className="counter-container">
          {items.map((item, index) => {
            return (
              <Counter
                item={item}
                index={index}
                items={items}
                setItems={setItems}
                key={index}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}

export default App;
