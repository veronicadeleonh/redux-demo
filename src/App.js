import './App.css';

import { Provider } from "react-redux"
import store from "./redux/store"
import CakeContainer from './components/CakeContainer';
import HooksCakesContainer from './components/HooksCakesContainer';
import IceCreamContainer from './components/IceCreamContainer';
import HooksIceCreamContainer from './components/HooksIceCreamCointer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakesContainer />
        <CakeContainer />
        <IceCreamContainer />
        <HooksIceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
