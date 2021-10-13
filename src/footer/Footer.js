import React from "react";

function Footer(){
    return (
        <footer id="footer">
            <div className="grid wide">
                <div className="row">
                    <div className="col l-2-4 m-4 c-12">
                        <h3 className="footer__heading">Chăm sóc khách hàng</h3>
                        <ul className="footer__list">
                            <li className="footer__item">
                                <a href="#root" className="footer__link">Trung tâm trợ giúp</a>
                            </li>
                            <li className="footer__item">
                                <a href="#root" className="footer__link">Shopee mail</a>
                            </li>
                            <li className="footer__item">
                                <a href="#root" className="footer__link">Hướng dân mua hàng</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col l-2-4 m-4 c-12">
                        <h3 className="footer__heading">Về chúng tôi</h3>
                        <ul className="footer__list">
                            <li className="footer__item">
                                <a href="#root" className="footer__link">Giới hiệu về Shoppe Việt Nam</a>
                            </li>
                            <li className="footer__item">
                                <a href="#root" className="footer__link">Tuyển dụng</a>
                            </li>
                            <li className="footer__item">
                                <a href="#root" className="footer__link">Điều khoản Shoppe</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col l-2-4 m-4 c-12">
                        <h3 className="footer__heading">Danh mục</h3>
                        <ul className="footer__list">
                            <li className="footer__item">
                                <a href="#root" className="footer__link">Giày thể thao</a>
                            </li>
                            <li className="footer__item">
                                <a href="#root" className="footer__link">Quần áo thể thao</a>
                            </li>
                            <li className="footer__item">
                                <a href="#root" className="footer__link">Mũ thể thao</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col l-2-4 m-4 c-12">
                        <h3 className="footer__heading">Theo dõi</h3>
                        <ul className="footer__list">
                            <li className="footer__item">
                                <a href="#root" className="footer__link">
                                    <i className="footer__item-icon fab fa-facebook"></i>
                                    Facebook</a>
                            </li>
                            <li className="footer__item">
                                <a href="#root" className="footer__link">
                                    <i className="footer__item-icon fab fa-instagram-square"></i>
                                    Instagram</a>
                            </li>
                            <li className="footer__item">
                                <a href="#root" className="footer__link">
                                    <i className="footer__item-icon fab fa-linkedin"></i>
                                    Linkedin</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col l-2-4 m-8 c-12">
                        <h3 className="footer__heading">Vào cửa hàng trên ứng dụng</h3>
                        <div className="footer__dowload">
                            <a href="#root" className="footer__dowload-qr-link">
                                <img src="/assets/img/QR_code.png" alt="hình ảnh" className="footer__dowload-qr"/>
                            </a>
                            <div className="footer__dowload-apps">
                                <a href="#root" className="footer__dowload-apps-link">
                                    <img src="/assets/img/ggpchplay.pnd.png" alt="hình ảnh" className="footer__dowload-app-img"/>
                                </a>
                                <a href="#root" className="footer__dowload-apps-link">
                                    <img src="/assets/img/ggappstore.png" alt="hình ảnh" className="footer__dowload-app-img"/>
                                </a>
                                <a href="#root" className="footer__dowload-apps-link">
                                    <img src="/assets/img/appgallery.png" alt="hình ảnh" className="footer__dowload-app-img"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="grid wide">
                    <p className="footer-text">© 2021 - Bản quyền thuộc về Công ty TNHH Shopee</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer