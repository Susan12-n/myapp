
import './App.css';
import MyComponent1 from './components/MyComponent1';

// below is the jsx code -html,css,js 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>welcome to react app</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore obcaecati quis consequuntur error neque consectetur nobis blanditiis maxime, id harum quae libero ipsum delectus repellat possimus. Odio tenetur cupiditate incidunt!</p>

        {/* render Mycomponent 2 */}
        <MyComponent1/>
      </header>
    </div>
  );
}

export default App;
