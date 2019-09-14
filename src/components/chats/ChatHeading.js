import React from 'react';
import { FaVideo } from 'react-icons/fa'
import { FaUserPlus } from 'react-icons/fa'
import { MdMenu } from 'react-icons/md'

export default function({name, numberOfUsers}) {
	
	return (
		<div className="chat-header">
			<div className="user-info">
				<div className="user-name">{name}</div>
				<div className="status">
					<div className="indicator"></div>
					<span>{numberOfUsers ? numberOfUsers : null}</span>
				</div>
			</div>
			<div className="options">
				<FaVideo />
				<FaUserPlus />
				<MdMenu />
			</div>
		</div>
	);
	
}