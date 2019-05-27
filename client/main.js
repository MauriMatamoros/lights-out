import { Meteor } from 'meteor/meteor'
import ReactDOM from 'react-dom'

import { routes } from  '../imports/routes/routes';

import 'bootstrap/dist/css/bootstrap.min.css';


Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'))
})