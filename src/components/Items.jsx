import Bricks from 'bricks.js/src/bricks';
  componentDidMount() {

    this.bricks = new Bricks({
      container: ".bricks",
      packed: 'data-packed',
      sizes: [
        { columns: 2, gutter: 10 },
        { mq: '768px', columns: 3, gutter: 25 },
        { mq: '1024px', columns: 4, gutter: 50 }
      ]
    });
  }

  componentDidUpdate() {
    this.packItems();
  }

  packItems() {
    const { searchModel: { results: items } } = this.props.appState;

    if (items.length > 0) {
      this.bricks.update();
    }
  }

  onItemLoadedHandler() {
    this.packItems();
  }
      <div className="bricks" style={{ position: 'relative', width: 1024, height: 980, margin: '0 auto' }}>
      </div>
