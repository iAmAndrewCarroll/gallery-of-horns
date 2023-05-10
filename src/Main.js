import React from "react";
import HornedBeast from './HornedBeast';
import HornedOneData from './data.json';

class Main extends React.Component {
  render() {

    let hornedOne = [];
      HornedOneData.forEach((horn, idx) => {
        hornedOne.push(
          <Col md={4} key={idx}>
        
        <HornedBeast
          imageURL={horn.image_url}
          title={horn.title}
          description={horn.description}
          key={horn.keyword}
          horns={horn.horns}
          />
          </Col>
          );
      });

    return (
      <main>
        <Row>
        {hornedOne}
        </Row>
      </main>
    );
  }
}

export default Main;