import logo from './logo.svg';
import './App.css';
import HomePage from './homepage.component';
import CategoryContainerComponent from './components/category-container/CategoryContainerComponent';

function App() {
  return (
    <div className="App">
      Felight IO
      <CategoryContainerComponent/>
    </div>
  );
}

export default App;
