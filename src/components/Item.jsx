import React from 'react';
import request from 'superagent'
import { base64Encode } from '../utils';

class Item extends React.Component {

  state = {
    loaded: false,
    progress: 0,
    requestResponse: ""
  };

  componentDidMount() {

    request
      .get(this.props.gifSrc)
      .on('progress', ({ loaded, total }) => {
        this.setState({
          progress: Math.ceil(loaded / total * 100)
        });
      })
      .end((error, { text }) => {
        console.log(text);
        this.setState({
          loaded: true,
          requestResponse: "data:image/jpeg;base64," + base64Encode(text)
        })
      });
  }

  render() {

    const {
      loaded,
      progress,
      requestResponse
    } = this.state;

    return (
      <div style={{ display: 'inline' }}>
        {!loaded && <span>{progress}</span>}
        {loaded && <img src={requestResponse} />}
      </div>
    )
  }
}

export default Item;
