
import React, { Component } from 'react';
import { FaChevronDown } from 'react-icons/fa'
import { MdMenu } from 'react-icons/md'
import { MdSearch } from 'react-icons/md'
import { MdEject } from 'react-icons/md'

export default class SideBar extends Component{
		
	render(){
		const { chats, activeChat, user, setActiveChat, logout} = this.props
		return (
			<div id="side-bar">
					<div className="heading">
						<div className="app-name"> Chattin' It Up <FaChevronDown /></div>
						<div className="menu">
							<MdMenu />
						</div>
					</div>
					<div className="search">
						<i className="search-icon"><MdSearch /></i>
						<input placeholder="Search" type="text"/>
						<div className="plus"></div>
					</div>
					<div 
						className="users" 
						ref='users' 
						onClick={(e)=>{ (e.target === this.refs.user) && setActiveChat(null) }}>
						
						{
						chats.map((chat)=>{ //looping throught the chat arrays
							if(chat.name){ 
								const lastMessage = chat.messages[chat.messages.length - 1]; //gets the last one of the messages
								const user = chat.users.find(({name})=>{ //the user that is connected to the chat, not yourself
									return name !== this.props.name
								}) || { name:"Community" } //if there isn't anyone in the chat, the room will be set to community chat
								const classNames = (activeChat && activeChat.id === chat.id) ? 'active' : '' //if activeChat(and isn't null) and the id = chat.id, set to active, if not, blank
								
								return(
								<div  //if there is a chat, we return this.
									key={chat.id} 
									className={`user ${classNames}`} //user and the className set in the above const on line 37
									onClick={ ()=>{ setActiveChat(chat) } } //pass in the function and set it to the chat that we are currently on in this loop
									>
									<div className="user-photo">{user.name[0].toUpperCase()/* getting first letter of the person logged in*/}</div>
									<div className="user-info">
										<div className="name">{user.name /*The user wer are currently*/}</div>
										{lastMessage && <div className="last-message">{lastMessage.message/*prints out the last message in SideBar*/ }</div>}
									</div>
									
								</div>
							)
							}

							return null //if the above isn't returned, return null
						})	
						}
						
					</div>
					<div className="current-user">
						<span>{user.name}</span>
						<div onClick={()=>{logout()}} title="Logout" className="logout">
							<MdEject/>	
						</div>
					</div>
			</div>//Logout container
		);
	
	}
}