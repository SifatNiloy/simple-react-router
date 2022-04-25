import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const { friendId } = useParams();
    const [friend, setFriend] = useState({});
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
            .then(res => res.json())
            .then(data => setFriend(data));
    }, [])

    return (
        <div>
            <h2>This is friend Detail:{friendId} </h2>
            <h2>{friend.name}</h2>
            <h2>{friend.phone}</h2>
            <h2>{friend.website}</h2>
            <p>works at : {friend.company?.name}</p>
        </div>
    );
};

export default FriendDetail;