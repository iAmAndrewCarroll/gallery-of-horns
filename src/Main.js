import React from "react";
import HornedBeast from './HornedBeast';

class Main extends React.Component {
  render() {
    return (
      <main>
        <HornedBeast
        title="Dragon"
        imageURL="example URL"
        description="Hoards treasure and has scales...but weighs nothing."
        />
        <HornedBeast
        title="Rhino"
        imageURL="example URL"
        description="Not made of toothpicks...birthed a Ventura..."
        />
      </main>
    );
  }
}

export default Main;