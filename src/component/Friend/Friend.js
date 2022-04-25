import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    const { id, name, username, email, phone, website } = props.friend;

    const friendStyle = {
        border: '3px solid goldenrod',
        padding: '10px',
        borderRadius: '10px'

    };
    const url = `/friend/${id}`
    return (

        <div style={friendStyle}>

            <h2>This is {name}</h2>
            <h3>username: {username}</h3>
            <h3>email: {email}</h3>
            <h4>phone: {phone}</h4>
            <Link to={url}>visit friend</Link>
        </div>
    );
};

export default Friend;