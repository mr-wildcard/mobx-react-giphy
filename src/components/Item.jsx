import React from 'react';
import request from 'superagent'
import { base64Encode } from '../utils';

class Item extends React.Component {

  state = {
    loaded: false,
    progress: 0
  };

  componentDidMount() {

    this.request = request
      .get(this.props.gifSrc)
      .on('progress', ({ loaded, total }) => {
        this.setState({
          progress: Math.ceil(loaded / total * 100)
        });
      })
      .end((error, { text }) => {
        this.setState({
          loaded: true
        })
      });
  }

  componentWillUnmount() {
    this.request.abort();
  }

  render() {

    const {
      loaded,
      progress
    } = this.state;

    return (
      <div style={{ display: 'inline' }}>
        {!loaded && <span>{progress}</span>}
        {loaded && <img src={this.props.gifSrc} />}
      </div>
    )
  }
}

export default Item;
