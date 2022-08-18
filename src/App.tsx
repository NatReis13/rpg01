import { useEffect } from "react";
import * as C from "./App.styles";
import { Character } from "./components/Character/index";
import { useCharacter } from "./hooks/userCharacter";

const App = () => {
  const char = useCharacter();
  const char2 = useCharacter();

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
  }, []);

  const handleKeyDown = (e: KeyboardEvent) => {
    console.log("apertou");
    switch (e.code) {
      case "KeyA":
      case "ArrowLeft":
        char.moveLeft();
        break;
      case "KeyW":
      case "ArrowUp":
        char.moveUp();
        break;
      case "KeyD":
      case "ArrowRight":
        char.moveRight();
        break;
      case "KeyS":
      case "ArrowDown":
        char.moveDown();
        break;
    }
  };
  //função de aperta e movimentar

  return (
    <C.Container>
      <C.Map>
        <Character x={char.x} y={char.y} side={char.side} />
        <Character x={14} y={2} side={'down'} />
      </C.Map>
    </C.Container>
  );
};

export default App;
