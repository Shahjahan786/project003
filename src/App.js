
import './App.css';
import Greeting from './Greeting'
import MediaCard from './MediaCard'

function App() {

  

  return (
    <div className="App">
      <h1>Hello React!</h1>

      <Greeting name = "Shahjahan Samoon"/>
      <MediaCard title =  "Sample Card" body = "This is sample media card" imageUrl = "https://www.filepicker.io/api/file/SVFQZQAyRpqJ31f6LNGe"/>
      <MediaCard title = "Sample Card2 " body = "This is sample media card2" imageUrl = "https://www.filepicker.io/api/file/SVFQZQAyRpqJ31f6LNGe"/>

    </div>
  );
}

export default App;
