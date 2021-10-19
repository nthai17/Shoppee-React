import React from "react";
import { useParams } from "react-router";

function NotifyDetail(){
    let {item} = useParams()
    switch (item) {
        case 'shopee':
            return <Shoppee/>
        case 'promotion':
            return <Promotion/>
        case 'wallet':
            return <Wallet/>
        case 'activity':
            return <Activity/>
        case 'rating':
            return <Rating/>
        default:
            return <Oder/>
    }
}
function Shoppee(){
    return(
        <React.Fragment>
            <header className="notify-header col c-12">
                <span>Đánh dấu Đã đọc tất cả</span>
            </header>
            <div className="notify-item">
                <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/fa4e2b534c2928596a6deded9c730a21.png" alt="hình ảnh"/>
                Chưa có cập nhật.
            </div>
        </React.Fragment>
    )
}
function Promotion(){
    return(
        <React.Fragment>
            <header className="notify-header col c-12">
                <span>Đánh dấu Đã đọc tất cả</span>
            </header>
            <div className="notify-item">
                <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/fa4e2b534c2928596a6deded9c730a21.png" alt="hình ảnh"/>
                Chưa có cập nhật.
            </div>
        </React.Fragment>
    )
}
function Wallet(){
    return(
        <React.Fragment>
            <header className="notify-header col c-12">
                <span>Đánh dấu Đã đọc tất cả</span>
            </header>
            <div className="notify-item">
                <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/fa4e2b534c2928596a6deded9c730a21.png" alt="hình ảnh"/>
                Chưa có cập nhật.
            </div>
        </React.Fragment>
    )
}
function Activity(){
    return(
        <React.Fragment>
            <header className="notify-header col c-12">
                <span>Đánh dấu Đã đọc tất cả</span>
            </header>
            <div className="notify-item">
                <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/fa4e2b534c2928596a6deded9c730a21.png" alt="hình ảnh"/>
                Chưa có cập nhật.
            </div>
        </React.Fragment>
    )
}
function Rating(){
    return(
        <React.Fragment>
            <header className="notify-header col c-12">
                <span>Đánh dấu Đã đọc tất cả</span>
            </header>
            <div className="notify-item">
                <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/fa4e2b534c2928596a6deded9c730a21.png" alt="hình ảnh"/>
                Chưa có cập nhật.
            </div>
        </React.Fragment>
    )
}
function Oder(){
    return(
        <React.Fragment>
            <header className="notify-header col c-12">
                <span>Đánh dấu Đã đọc tất cả</span>
            </header>
            <div className="notify-item">
                <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/fa4e2b534c2928596a6deded9c730a21.png" alt="hình ảnh"/>
                Chưa có cập nhật.
            </div>
        </React.Fragment>
    )
}
export default NotifyDetail