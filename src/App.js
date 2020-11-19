import './App.css';

import { Provider } from "react-redux"
import { store } from "./redux"

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello</h1>
      </div>
    </Provider>
  );
}

export default App;
