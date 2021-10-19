import React, { useEffect } from "react";

function PurchaseDetail(){
    useEffect(()=>{
        const tabList = document.querySelectorAll('.tab-item')
        let tabLine = document.querySelector('.tab-line')
        for(let tab of tabList){
            tab.addEventListener('click',function(e){
                let tabOffsetLeft = e.target.offsetLeft
                let activeTab = document.querySelector('.tab-item.active')
                let displayedContent = document.querySelector('.content-item.displayed')
                if(activeTab) {
                    activeTab.classList.remove('active')
                    displayedContent.classList.remove('displayed')
                }
                e.target.classList.add('active')
                document.querySelector(`.purchase__history-content #${e.target.dataset.target}`).classList.add('displayed')
                tabLine.style.left = tabOffsetLeft + 'px'
            })
        }
    })
    return(
        <div className="purchase">
                <div className="purchase__history-tabs">
                    <div data-target="all-order" className="tab-item active">Tất cả lịch sử</div>
                    <div data-target="waiting-order" className="tab-item">Chờ xác nhận</div>
                    <div data-target="waiting-take-order" className="tab-item">Chờ lấy hàng</div>
                    <div data-target="delivering" className="tab-item">Đang giao hàng</div>
                    <div data-target="delivered" className="tab-item">Đã giao hàng</div>
                    <div data-target="cancelled" className="tab-item">Đã hủy</div>
                    <div className="tab-line"></div>
                </div>
                <div className="purchase__history-content">
                    <div id="all-order" className="content-item displayed">
                        <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/5fafbb923393b712b96488590b8f781f.png" alt="hình ảnh"/>
                        Chưa có đơn hàng</div>
                    <div id="waiting-order" className="content-item"><img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/5fafbb923393b712b96488590b8f781f.png" alt="hình ảnh"/>
                        Chưa có đơn hàng</div>
                    <div id="waiting-take-order" className="content-item"><img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/5fafbb923393b712b96488590b8f781f.png" alt="hình ảnh"/>
                        Chưa có đơn hàng</div>
                    <div id="delivering" className="content-item"><img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/5fafbb923393b712b96488590b8f781f.png" alt="hình ảnh"/>
                        Chưa có đơn hàng</div>
                    <div id="delivered" className="content-item"><img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/5fafbb923393b712b96488590b8f781f.png" alt="hình ảnh"/>
                        Chưa có đơn hàng</div>
                    <div id="cancelled" className="content-item"><img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/5fafbb923393b712b96488590b8f781f.png" alt="hình ảnh"/>
                        Chưa có đơn hàng</div>
                </div>
        </div>
    )
}

export default PurchaseDetail