import React from "react";
import "./App.css";

import useFetch from "./hooks/useFetch";

import { Color } from "./models/ColorResponse";

import Button from "./components/Button";
import List from "./components/List";

import { uuid } from "uuidv4";

function App() {
  const [list, setList] = React.useState<Set<Color>>(new Set());
  const [clicked, setClicked] = React.useState(false);

  const { data, loading, error } = useFetch(clicked);

  const [buttonColor, setButtonColor] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (data && data?.colors[0].hex !== "") {
      setList((list) => list.add(data?.colors[0]));
      setButtonColor(null);
      setColorError(null);
    }
  }, [data, clicked]);

  const handleClick = () => {
    setClicked((clicked) => !clicked);
  };

  // Bonus
  const [keyboardColor, setKeyboardColor] = React.useState("");
  const [colorError, setColorError] = React.useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyboardColor(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const re = new RegExp("^(([0-9a-fA-F]{2}){3}|([0-9a-fA-F]){3})$");
    const OK = re.exec(keyboardColor);
    if (!OK) {
      setColorError("Wrong color syntax");
    } else {
      setButtonColor(keyboardColor);
      setList(list.add({ id: uuid(), hex: keyboardColor }));
      setKeyboardColor("");
      setColorError(null);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {error && <p className="error-message">{error}</p>}
        <Button onClick={handleClick} loading={loading}>
          <span style={{ color: buttonColor ? `#${buttonColor}` : "initial" }}>
            {loading ? "Loading..." : data?.colors[0].hex || "API jokes"}
          </span>
        </Button>
        <List
          list={list}
          setList={setList}
          hexColor={data?.colors[0].hex as string}
        />
        {colorError && <p className="error-message">{colorError}</p>}
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Color</legend>
            <input
              className="color-input"
              type="text"
              name="color"
              value={keyboardColor}
              onChange={handleChange}
            />
          </fieldset>
        </form>
      </header>
    </div>
  );
}

export default App;
