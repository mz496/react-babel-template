var Thing = React.createClass({
  render: function() {
    return (
      <h1>Hello world</h1>
    );
  }
});

ReactDOM.render(
  <Thing />,
  document.getElementById('content')
);