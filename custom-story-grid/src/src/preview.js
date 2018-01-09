import React from 'react';
import ReactDOM from 'react-dom';
import CustomStoryPicker from './components/custom-story-picker';

// By requiring the stylesheet here like this,
// webpack will append the contents inside a
// style tag in the document HEAD.

require('../styles/components/custom-story-picker.scss');

ReactDOM.render(<CustomStoryPicker />, window.container);
