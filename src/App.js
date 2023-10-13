import Mensaje from './Mensaje';
import Description from './Description';
import './App.css';

function App() {

  return (

    <div className="App">
      <Mensaje color='red' message='Estamos trabajando'/>
      <Mensaje color='green' message='en un curso'/>
      <Mensaje color='black' message='de React' />
      <Description />
    </div>
  );
}

export default App;
