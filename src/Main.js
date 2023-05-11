import React from "react";
import HornedBeast from './HornedBeast';
// import HornedOneData from './data.json';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class Main extends React.Component {
  render() {

    let hornedOne = this.props.data.map((horn, idx) => {
        //     HornedOneData.forEach((horn, idx) => {
        // hornedOne.push(
        //   <Col md={4} key={idx}>

      return (<Col key={idx} className="mt-4">
        
        <HornedBeast
          imageURL={horn.image_url}
          title={horn.title}
          alt={horn.alt}
          description={horn.description}
          key={horn.keyword}
          horns={horn.horns}
          addHearts={this.props.addHearts}
          handleShowModal={this.props.handleShowModal}
          beast={horn}
          />
          </Col>)
      });

    return (
      <main>
        <Row xs={1} sm={2} md={3} lg={4}>
        {hornedOne}
        </Row>
      </main>
    );
  }
}

export default Main;