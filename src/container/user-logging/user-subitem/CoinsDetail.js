import React, { useEffect } from "react";

function CoinsDetail(){
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
                document.querySelector(`.coin__history-content #${e.target.dataset.target}`).classList.add('displayed')
                tabLine.style.left = tabOffsetLeft + 'px'
            })
        }
    })
    return(
        <React.Fragment>
            <header className="account__detait-header col c-12 account__header-has-button">
                <div className="coin__info">
                    <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/75efaf1b556a8e2fac6ab9383e95d4e3.png" alt="hình ảnh"></img>
                    <h3>0</h3>
                    <h4>Xu hiện có</h4>
                </div>
                <button className="btn btn--primary add-coin-btn">{`Nhận thêm xu! >`}</button>
            </header>
            <div className="coin__history">
                <div className="coin__history-tabs">
                    <div data-target="all-history" className="tab-item active">Tất cả lịch sử</div>
                    <div data-target="in-history" className="tab-item">Đã nhận</div>
                    <div data-target="out-history" className="tab-item">Đã dùng</div>
                    <div className="tab-line"></div>
                </div>
                <div className="coin__history-content">
                    <div id="all-history" className="content-item displayed">
                        <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/5fafbb923393b712b96488590b8f781f.png" alt="hình ảnh"/>
                        Không có lịch sử
                    </div>
                    <div id="in-history" className="content-item"><img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/5fafbb923393b712b96488590b8f781f.png" alt="hình ảnh"/>
                        Không có lịch sử
                    </div>
                    <div id="out-history" className="content-item"><img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/5fafbb923393b712b96488590b8f781f.png" alt="hình ảnh"/>
                        Không có lịch sử
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CoinsDetail