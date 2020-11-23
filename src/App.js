import './App.css';

import { Provider } from "react-redux"
import store from "./redux/store"
import CakeContainer from './components/CakeContainer';
import HooksCakesContainer from './components/HooksCakesContainer';
import IceCreamContainer from './components/IceCreamContainer';
import HooksIceCreamContainer from './components/HooksIceCreamCointer';
import NewCakeContainer from './components/NewCakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakesContainer />
        <CakeContainer />
        <NewCakeContainer />
        <IceCreamContainer />
        <HooksIceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
