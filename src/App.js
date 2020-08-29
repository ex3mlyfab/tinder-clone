import React from 'react';
import Header from './Header';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import Chats from './Chats';
import Chatscreen from './Chatscreen';

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/chat/:person">
						<Header backButton="/chat" />
						<Chatscreen />
					</Route>
					<Route path="/chat">
						<Header backButton="/" />
						<Chats />
					</Route>
					<Route path="/">
						<Header />
						<TinderCards />
						<SwipeButtons />
					</Route>
				</Switch>
				{/* Header */}
				{/* Tinder Card */}
				{/* Buttons below tinder card */}

				{/* Chats Screen */}
				{/* individual chat screen */}
			</Router>
		</div>
	);
}

export default App;
