import React from 'react';

function NavLeft(){
    return (
        <ul className="header__navbar-list">
            <li className="header__navbar-item header__navbar-item--has-qr">
                <a href="/" className="header__navbar-item-link">Vào cửa hàng trên ứng dụng Tickid ID</a>
                <div className="header-qrcode">
                    <img src="/assets/img/QR_code.png" className="header-qrcode_img" alt="QRCode"/>
                    <div className="qrcode-dowload">
                        <a href="/" className="qrcode-link">
                            <img src="/assets/img/ggappstore.png" alt="App store" className="qrcode-link-img"/>
                        </a>
                        <a href="/" className="qrcode-link">
                            <img src="/assets/img/ggpchplay.pnd.png" alt="CH play" className="qrcode-link-img"/>
                        </a>
                    </div>
                </div>
            </li>
            <li className="header__navbar-item">
                Kết nối
                <a href="/" className="header__navbar-item-link"><i className="ti-facebook"></i></a>
                <a href="/" className="header__navbar-item-link"><i className="ti-instagram"></i></a>
            </li>
        </ul>
    )
}

export default NavLeft