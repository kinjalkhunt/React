import './App.css';
import { Provider } from 'react-redux';
import store from './REDUX/store';
// import Navigation from '../src/Component/Navigation/Navigation';
import { socket, socketContext } from './Context/socket';
import Navigation from './Component/Navigation/navigation';

function App() {
  return (
    <>

      <Provider store={store}>
        <socketContext.Provider value={socket}>
          <Navigation />
        </socketContext.Provider>
      </Provider>

    </>
  )
}

export default App;

// import React from 'react';
// import { Provider } from 'react-redux';
// import store from "./REDUX/store"
// import ChatApp from './Component/ChatApp';
// // import '.';

// const App = () => (
//   <Provider store={store}>
//     <ChatApp />
//   </Provider>
// );

// export default App;
