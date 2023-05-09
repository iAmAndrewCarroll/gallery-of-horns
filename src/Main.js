import React from "react";
import HornedBeast from './HornedBeast';

class Main extends React.Component {
  render() {
    return (
      <main>
        <HornedBeast
        title="Dragon"
        imageURL="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"
        description="Hoards treasure and has scales...but weighs nothing."
        />
        <HornedBeast
        title="Rhino"
        imageURL="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"
        description="Not made of toothpicks...birthed a Ventura..."
        />
      </main>
    );
  }
}

export default Main;