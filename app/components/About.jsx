var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>Learn about the React weather application!</p>
      <p>The <strong>React Weather App</strong> is built using React.js and styled with Foundation.  Weather data provided by OpenWeatherMap.org.</p>
      <p>See the source at <a target="_blank" href="https://github.com/taylorcjohnson/react-weather">Github</a></p>
    </div>
  )
};

module.exports = About;
