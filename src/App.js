import MessageComponent from "./Components/MessageComponent/MessageComponent";

const MessageComponentText = "This is the text";

function App() {
  return (
    <div className="App">
      <MessageComponent text={ MessageComponentText }/>
    </div>
  );
}

export default App;
