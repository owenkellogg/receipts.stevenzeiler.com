var React = require('react')
var ReactDOM = require('react-dom');
var RecentMass = require('./RecentMass');

class RecentMassView extends React.Component {
  render() {
    return <h1>Latest Mass {this.props.mass}</h1>
  }
}

class InputMass extends React.Component {
  render() {
    return <form><input type="number" placeholder="pounds"/></form>
  }
}

RecentMass.fetch().then(mass => {

  ReactDOM.render(

    (<RecentMassView
      mass={mass}
    />
    <InputMass/>),

    document.getElementById("content")
  );
})

