import React from 'react';
const notifyList = [
    {
        img: 'https://cf.shopee.vn/file/2296f7c19fc50162711d52c8728899ba_tn',
        name: 'Đếm ngược 3 ngày! Sale #3.3 bùng nổ',
        desc: `⚡ Săn Voucher toàn sàn giảm đến 50K 
        🌎 Thêm mã giảm đến 99K hàng Quốc tế
        🌟 Loạt Deal đồng giá 33K
        💥 Vào xem ngay!`
    },
    {
        img: 'https://cf.shopee.vn/file/af84fe012cc8219c19c25fa380ea1000_tn',
        name: 'Hàng Quốc tế tung loạt deal 1K',
        desc: `🌎 Bỏ giỏ BST đồng giá 1K, 49K, 99K
        💰 Săn mã Hoàn xu lên đến 100K
        🌟 Thương hiệu HOT giảm đến 50%
        🔥 Săn sale ngay!`
    },
    {
        img: 'https://cf.shopee.vn/file/40cdbb26ab07d4d60b21777730022090_tn',
        name: 'Hẹn giờ rinh siêu phẩm chỉ từ 9K',
        desc: `⏰ 0H 9H 12H 15H 18H 21H
        🚨 6 khung giờ giảm sâu đến 50%
        🔥 Hẹn giờ ngay!`
    },
    {
        img: 'https://cf.shopee.vn/file/af84fe012cc8219c19c25fa380ea1000_tn',
        name: 'Hàng Quốc tế tung loạt deal 1K',
        desc: `🌎 Bỏ giỏ BST đồng giá 1K, 49K, 99K
        💰 Săn mã Hoàn xu lên đến 100K
        🌟 Thương hiệu HOT giảm đến 50%
        🔥 Săn sale ngay!`
    }
]

function NavRight() {
    const renderNotifyList = function(list){
        if(list.length > 0) {
            return (
                list.map((item, index)=>{
                    return (
                        <li key={index} className="header__notify-item">
                            <a href="#root" className="header__notify-link">
                                <img className="header__notify-img" src={item.img} alt="hình ảnh"/>
                                <div className="header__notify-info">
                                    <span className="header__notify-name">{item.name}</span>
                                    <span className="header__notify-desc">{item.desc}</span>
                                </div>
                            </a>
                        </li>
                    )
                })
            )
        }
    }

    return (
        <ul className="header__navbar-list">
            <li className="header__navbar-item header__navbar-item--has-notify">
                <a href="#root" className="header__navbar-item-link"><i className="ti-bell"></i>
                    Thông báo
                </a>
                <div className="header__notify">
                    <header className="header_notify-header">Thông Báo Mới Nhận</header>
                    <ul className="header__notify-list">
                        {renderNotifyList(notifyList)}
                    </ul>
                    <footer className="header_notify-footer">
                        <a href="#root" className="header_notify-footer-link">
                            Xem tất cả
                        </a>
                    </footer>
                </div>
            </li>
            <li className="header__navbar-item">
                <a href="#root" className="header__navbar-item-link"><i className="ti-help-alt"></i>Trợ giúp</a>
            </li>
            {/* <!-- <li className="header__navbar-item">
                <a href="#root"className="header__navbar-item-link header__navbar-item-link--strong">Đăng ký</a>
            </li>
            <li className="header__navbar-item">
                <a href="#root" className="header__navbar-item-link header__navbar-item-link--strong">Đăng nhập</a>
            </li> --> */}
            <li className="header__navbar-item header__navbar-user">
                    <img src="https://avatar-redirect.appspot.com/google/118131703582090499416?size=400" alt="hình ảnh" className="header__navbar-user-avt"/>
                    <span className="header__navbar-user-name">Duy Thái</span>
                    <ul className="header__navbar-user-info">
                        <li className="header__navbar-user-item">
                            <a href="#root">Tài khoản của tôi</a>
                        </li>
                        <li className="header__navbar-user-item">
                            <a href="#root">Đơn mua</a>
                        </li>
                        <li className="header__navbar-user-item header__navbar-user-item--separate">
                            <a href="#root">Đăng xuất</a>
                        </li>
                    </ul>
                </li>
        </ul>
    )
}

export default NavRight