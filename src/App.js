import { ContextProvider } from "./Context/Context";
import Routing from "./Routing/Routing";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Routing />
      </ContextProvider>
    </div>
  );
}

export default App;
