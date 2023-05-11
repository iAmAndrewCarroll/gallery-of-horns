import React from "react";

class Header extends React.Component {
  
  render() {
  return (
    <header className="header">
      <h1>The Horned One</h1>
      <p id="hearts">{this.props.blackhearts}</p>
    </header>
  )
  }
};

export default Header;