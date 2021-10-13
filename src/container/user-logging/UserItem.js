import React from "react";
import { Route, useParams, useRouteMatch } from "react-router-dom";
import AccountDetail from "./user-subitem/AccountDetail"
import PurchaseDetail from "./user-subitem/PurchaseDetail"
import NotifyDetail from "./user-subitem/NotifyDetail"
import VouchersDetail from "./user-subitem/VouchersDetail"
import CoinsDetail from "./user-subitem/CoinsDetail"
function UserItem(){
    let {item} = useParams()
    switch (item) {
        case 'purchase':
            return <UserPurchase/>
        case 'notify':
            return <UserNotify/>
        case 'vouchers':
            return <UserVouchers/>
        case 'coins':
            return <UserCoins/>
        default:
            return <UserAccount/>
    }
}
function UserAccount(){
    let match = useRouteMatch()
    return (
        <Route path={`${match.path}/:item`}><AccountDetail/></Route>
    )
}
function UserPurchase(){
    let match = useRouteMatch()
    return (
        <Route path={`${match.path}`}><PurchaseDetail/></Route>
    )
}
function UserNotify(){
    let match = useRouteMatch()
    return (
        <Route path={`${match.path}/:item`}><NotifyDetail/></Route>
    )
}
function UserVouchers(){
    let match = useRouteMatch()
    return (
        <Route path={`${match.path}`}><VouchersDetail/></Route>
    )
}
function UserCoins(){
    let match = useRouteMatch()
    return (
        <Route path={`${match.path}`}><CoinsDetail/></Route>
    )
}
export default UserItem