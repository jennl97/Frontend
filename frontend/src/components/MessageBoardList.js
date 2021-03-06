import React, { useEffect, useState} from "react";
import axios from "axios";

//import components
import MessageBoard from "./MessageBoard";

function MessageBoardList() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        axios
        .get('https://disneyparent-backend.herokuapp.com/posts')
        .then(res => {
            console.log('axios: ', res.data)
            setMessages(res.data);
        })
        .catch(err => {
            console.log('error: ', err)
        })
    }, [])


    return(
        <div>
            <section className="messageList grid-view">
                {messages.map((data, index) => {
                    return <MessageBoard parentId={data.parent_id} title={data.title} children={data.children} attraction={data.attraction} time={data.time} key={index} />
                })}
            </section>
        </div>
    )
}

export default MessageBoardList;