import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header title="My Horned Beasts" />
        <Main />
        <Footer author="Your Name" />
      </div>
    );
  }
}

export default App;
