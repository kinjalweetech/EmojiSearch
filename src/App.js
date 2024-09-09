import './App.css';
import Navigation from './Component/Navigation';
import { Provider } from 'react-redux';
import { store } from './Component/Redux/Store';

function App() {
  return (
    <Provider store={store}>
        <Navigation/>
    </Provider>
    
  )
}
export default App;
