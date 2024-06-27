import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import ToDoList from './Component/ToDoList';
// import Store from './Component/Store';
// import rootReducer from './store';
import store from './REDUX/store';

function App() {
  return (
    <>
    <Provider store={store}>
      <ToDoList/>
    </Provider>
    </>
  );
}

export default App;
