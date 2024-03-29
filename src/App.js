import Home from "./components/pages/Home";
import axios from "axios";

function App() {
  return (
    <div className="App">
      {room.map((currentRoom) => (
        <Home
          name={currentRoom.name}
          description={currentRoom.description}
          imageUrl={currentRoom.imageUrl}
          reviews={currentRoom.reviews}
        />  
      ))}
    </div>
  );
}

export default App;
