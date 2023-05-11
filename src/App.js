import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import './App.css';
import data from './data.json';
import ClickedBeast from './ClickedBeast.js'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hearts: '',
      isModalDisplaying: false,
      beastName: 'test',
      clickedBeast: {}
    }
  }
  addHearts = () => {
    this.setState({
      hearts: this.state.hearts + <span role="img" aria-label="blackHeart">'🖤'</span>
    });
  }
  handleShowModal = (clickedBeast) => {
    // SetState will only work inside the component that it is in
    // if in App.js we call setState, that will change the state of App only
    // this.setState is the way we change values in state
    this.setState({
      isModalDisplaying: true,
      clickedBeast: clickedBeast
    });
    console.log('modal was clicked');

  }

  handleCloseModal = () => {
    this.setState({
      isModalDisplaying: false
    })
  }

  render() {
    return (
      <>
        <Header
          hearts={this.state.hearts}
        />
        <Main
        // addHearts, data and handleShowModal can ONLY be accessed inside Main using this.props (ex: this.props.handleShowModal)
          addHearts={this.addHearts}
          data={data}
          handleShowModal={this.handleShowModal}
        />
        <Footer />
        <ClickedBeast
          show={this.state.isModalDisplaying}
          onHide={this.handleCloseModal}
          clickedBeast={this.state.clickedBeast}
        />
      </>
    )
  }
};

export default App;
