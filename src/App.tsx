import React from "react";
import "./App.css";

import useFetch from "./hooks/useFetch";

import { Color } from "./models/ColorResponse";

import Button from "./components/Button";
import List from "./components/List";

function App() {
  const [list, setList] = React.useState<Set<Color>>(new Set());
  const [clicked, setClicked] = React.useState(false);

  const { data, loading, error } = useFetch(clicked);

  React.useEffect(() => {
    if (data && data?.colors[0].hex !== "") {
      setList(list.add(data?.colors[0]));
    }
  }, [data, clicked]);

  const handleClick = () => {
    setClicked((clicked) => !clicked);
  };

  return (
    <div className="App">
      <header className="App-header">
        {error && <p>{error}</p>}
        <Button onClick={handleClick} loading={loading}>
          {loading ? "Loading..." : data?.colors[0].hex}
        </Button>
        <List
          list={list}
          setList={setList}
          hexColor={data?.colors[0].hex as string}
        />
      </header>
    </div>
  );
}

export default App;
