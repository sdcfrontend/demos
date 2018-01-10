import React from 'react';
import ReactDOM from 'react-dom';
import CustomStoryPicker from './components/custom-story-picker';

console.log('Custom Story Grid');

// Create your module entry bootstrap here.
require('../styles/components/custom-story-picker.scss');

ReactDOM.render(<CustomStoryPicker />, document.getElementById('custom-grid'));
