import './App.css';

import { Provider } from "react-redux"
import store from "./redux/store"
import CakeContainer from './components/CakeContainer';
import HooksCakesContainer from './components/HooksCakesContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakesContainer />
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
