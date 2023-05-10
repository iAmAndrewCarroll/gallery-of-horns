import React from "react";
import HornedBeast from './HornedBeast';
import HornedOneData from './data.json';

class Main extends React.Component {
  render() {

    let hornedOne = [];
      HornedOneData.forEach((horn, idx) => {
        hornedOne.push(<HornedBeast
          imageURL={horn.image_url}
          title={horn.title}
          description={horn.description}
          key={horn.keyword}
          horns={horn.horns}
          />);
      });

    return (
      <main>
        {hornedOne}
      </main>
    );
  }
}

export default Main;