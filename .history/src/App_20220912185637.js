import "./App.css";
import image from "./img/bot_image.jpg";
import { useState } from "react";

function App() {
  const date = new Date();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();

  const days = ['Sunday','Monday','Tuesday','wednesday','thursday','friday','saturday'];
  const month = ['January','monday','tuesday','wednesday','thursday','friday','saturday'];



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
          <div className="main">
            <div className="main_content">
              <div className="messages">
                <div className="bot-message" id="message1"></div>
                <div className="human-message" id="message2"></div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="btm">
              <div className="input">
                <input
                  type="text"
                  id="input"
                  placeholder="Enter your message"
                />
              </div>
              <div className="btn">
                <button>
                  <i class="fa fa-paper-plane"></i>Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
