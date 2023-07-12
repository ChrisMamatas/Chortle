import React from "react";
import Home from "./Home"
import 'bootstrap/dist/css/bootstrap.min.css';
const moment = require("moment")

function App() {

  moment.updateLocale('en', {
    relativeTime: {
      future : 'in %s',
      past   : '%s ago',
      s  : function (number, withoutSuffix) {
        return withoutSuffix ? 'now' : 'a few seconds';
      },
      m  : '1m',
      mm : '%dm',
      h  : '1h',
      hh : '%dh',
      d  : '1d',
      dd : '%dd',
      M  : '1mth',
      MM : '%dmth',
      y  : '1y',
      yy : '%dy'
    }
  });

  return (
    <div>
      <Home />
    </div>
  )
}

export default App;