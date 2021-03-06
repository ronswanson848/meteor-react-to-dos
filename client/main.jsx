import React from 'react';
import { Meteor } from 'meteor/meteor';

import '../imports/startup/accounts-config.js';

import { render } from 'react-dom';
import App from '../imports/ui/App.jsx';
 
Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});