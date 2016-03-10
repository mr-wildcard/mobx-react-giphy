import React from 'react';
import { observer } from 'mobx-react';
import Item from './Item.jsx';

@observer
class Items extends React.Component {

  constructor() {

    super();

    this.onItemLoadedHandler = this.onItemLoadedHandler.bind(this);
  }

  onItemLoadedHandler() {
    // do something when an item just loaded
  }

  render() {
    
    const { searchModel: { results: items } } = this.props.appState;

    return (
      <div>
        {items.map(result => (
            <Item
              key={result.id}
              gifSrc={result.images.fixed_width_still.url}
              onLoadHandler={this.onItemLoadedHandler}
            />)
          )}
      </div>
    );
  }
}

export default Items;