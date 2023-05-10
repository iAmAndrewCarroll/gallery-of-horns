import React from "react";
import Card from 'react-bootstrap/Card';
import './HornedBeast.css';

class HornedBeast extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        clicks: 0
      }
    }

    handleClicks = () => {
      this.setState({
        clicks: this.state.clicks + 1
      });
    }
    
  render() {
    return (
      <div className="card-grid-container">
      <Card className="card" style={{ width: '18rem' }}>
        <img src={this.props.imageURL} alt={this.props.title} title={this.props.title} />
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.description}</p>
          <p><span role="img" aria-label="blackHeart">🖤</span> Favorite <span role="img" aria-label="blackHeart">🖤</span>: {this.state.clicks}</p>
          <button className="btn btn-primary" onClick={this.handleClicks}>Pierce the Veil</button>
        </div>
      </Card>
      </div>
    );
  }
}

export default HornedBeast;