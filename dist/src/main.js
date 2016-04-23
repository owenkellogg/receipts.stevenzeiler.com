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
    return <div>
      <form>
        <input name="mass" type="number" placeholder="record lbs" step="0.01"/>
        <button>Submit</button>
      </form>
    </div>
  }
}

RecentMass.fetch().then(mass => {

  ReactDOM.render(

    <div>
      <RecentMassView
        mass={mass}
      />
      <hr/>
      <InputMass />
    </div>,

    document.getElementById("content")
  );
})

