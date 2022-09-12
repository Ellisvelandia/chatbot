import "./App.css";
import image from './img/bot_image.jpg'

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="content">
          <div className="header">
            <div className="img">
              <img src={image} alt="bot" />
            </div>
            <div className="right">
              <div className="name">ChatBot</div>
              <div className="status">Active</div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
