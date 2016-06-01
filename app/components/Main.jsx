var React = require('react');
var Nav = require('Nav');

// This is an example of a stateless functional component for React

var Main = (props) => {
  return (
    <div>
      <Nav/>
      <div className="row">
        <div className="medium-6 large-4 small-centered columns">
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;