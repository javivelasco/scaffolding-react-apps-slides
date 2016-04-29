class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: props.initialCount };
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div onClick={this.handleClick.bind(this)}>
        <Viewer count={this.state.count} />
      </div>
    );
  }
}
