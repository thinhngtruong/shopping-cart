import React from 'react';

class App extends React.Component {
  render() {
    var {message} = this.props
    return (
      <span className="badge amber darken-2">{message}</span>
    );
  }
}
export default App;
