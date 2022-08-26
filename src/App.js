import './App.css';
import imageOne from './todoimage1.jpg';
import imageTwo from './todoimage2.jpg'
import { ToDoList } from './ToDoList';


function App() {
  return (
    <div className="App">
      {/* <img src = { imageOne } alt = "ToDoList" width = "200px"/>   */}
      <div className='container'>
        <img src = { imageOne } alt = "ToDoList" width = "250px"/>
      </div>
      <div className='container'>
        <h2>To Do List</h2>
      </div>
      <ToDoList />
      <div className='container'>
        <img src = { imageTwo } alt = "ToDoList" width="250px"/>
      </div>
    </div>
  );
}

export default App;
