import React, { useState } from 'react';
import { Avatar } from '@material-ui/core';
import './chatScreen.css';

function Chatscreen() {
	const [ input, setInput ] = useState('');
	const [ messages, setMessages ] = useState([
		{
			name: 'Magic',
			image: '.....',
			message: 'hello love'
		},
		{
			name: 'Magic',
			image: '....',
			message: 'how r u doing?'
		},
		{
			message: 'great to have you here continue....'
		}
	]);
	const handleSubmit = (e) => {
		e.preventDefault();
		setMessages([ ...messages, { message: input } ]);
		setInput('');
	};
	return (
		<div className="chatscreen">
			<h1 className="chatscreen__timestamp "> This is the chat SCreen</h1>
			{messages.map(
				(message) =>
					message.name ? (
						<div className="chatscreen__message">
							<Avatar alt={message.name} src={message.image} className="chatscreen__image" />
							<p className="chatscreen__text">{message.message}</p>
						</div>
					) : (
						<div className="chatscreen__message">
							<p className="chatscreen__textUser">{message.message}</p>
						</div>
					)
			)}

			<form className="chatscreen__input">
				<input
					value={input}
					onChange={(e) => setInput(e.target.value)}
					type="text"
					placeholder="type your message"
					className="chatscreen__inputField"
				/>

				<button type="submit" onClick={handleSubmit} className="chatscreen__inputButton">
					SEND
				</button>
			</form>
		</div>
	);
}

export default Chatscreen;
