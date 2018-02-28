// import the react
import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCUFPH7TNwVBHIDT0clSvWcBCmWGrJ5hUM';

//  Create a new component. This component should produce
// some HTML
// this is still a class
const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
		);
}
// Take this component's generated HTML and put it
// on the page (in the DOM)
// and when you add < /> to the App it will become an instance
ReactDOM.render(<App />, document.querySelector('.container'));
