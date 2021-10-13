import React from "react";
import { useParams } from "react-router";

function NotifyDetail(){
    let {item} = useParams()
    switch (item) {
        case 'shopee':
            return <h2>Notify - Shoppee</h2>
        case 'promotion':
            return <h2>Notify - Promotion</h2>
        case 'wallet':
            return <h2>Notify - Wallet</h2>
        case 'activity':
            return <h2>Notify - Activity</h2>
        case 'rating':
            return <h2>Notify - Rating</h2>
        default:
            return <h2>Notify - oder</h2>
    }
}

export default NotifyDetail