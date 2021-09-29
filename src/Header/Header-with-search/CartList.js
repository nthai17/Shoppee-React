import React, { useContext } from 'react';
import { HandleHeaderContext } from '../../App';
const cardItems = [
    {
        name: 'Ví da thời trang nam nhập khẩu từ Mỹ là bằng da thật gia công thủ công bởi nghệ nhân kinh nghiệm',
        img: 'https://cf.shopee.vn/file/fff979ab551521daee39d501c5d1f384_tn',
        price: '300.000đ',
        qnt: 1
    },
    {
        name: 'Áo Hoodle nam',
        img: 'https://cf.shopee.vn/file/718e8133a68c6ad5d796476a1e8fc31b_tn',
        price: '199.000đ',
        qnt: 2
    },
    {
        name: 'Ghế tựa lưng',
        img: 'https://cf.shopee.vn/file/70860fa44cef4b0b180e7fb35ebac394_tn',
        price: '500.000đ',
        qnt: 1
    },
    {
        name: 'Ví da thời trang nam',
        img: 'https://cf.shopee.vn/file/fff979ab551521daee39d501c5d1f384_tn',
        price: '300.000đ',
        qnt: 1
    },
    {
        name: 'Ví da thời trang nam nhập khẩu từ Mỹ là bằng da thật gia công thủ công bởi nghệ nhân kinh nghiệm',
        img: 'https://cf.shopee.vn/file/fff979ab551521daee39d501c5d1f384_tn',
        price: '300.000đ',
        qnt: 1
    },
    {
        name: 'Áo Hoodle nam',
        img: 'https://cf.shopee.vn/file/718e8133a68c6ad5d796476a1e8fc31b_tn',
        price: '199.000đ',
        qnt: 2
    }
]
function CardList(){
    const {isLogOut} = useContext(HandleHeaderContext);
    let length = cardItems.length;
    if(isLogOut) {length = 0}
    const renderCardList = function(cardItems, length){
        if(length > 0){
            return (
                <React.Fragment>
                    <h4 className="header__cart-headding">Sản phẩm mới thêm</h4>
                    <ul className="header__cart-list">
                        {cardItems.map((item, index)=>{
                            return (
                                <li key={index} className="header__cart-item">
                                    <img className="header__cart-item-img" src={item.img} alt="hình ảnh"/>
                                    <div className="header__cart-item-info">
                                        <h5 className="header__cart-item-name">{item.name}</h5>
                                        <div className="header__cart-item-wrap">
                                            <span className="header__cart-item-price">{item.price}</span>
                                            <span className="header__cart-item-multiply">x</span>
                                            <span className="header__cart-item-qnt">{item.qnt}</span>
                                        </div> 
                                    </div>
                                </li>
                            )
                        })
                        }
                    </ul>
                    <a href="#root" className="header__cart-check-card btn btn--primary">Xem giỏ hàng</a>
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <img className="header__cart-notifi-img" src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/9bdd8040b334d31946f49e36beaf32db.png" alt="hình ảnh"/>
                    <span className="header__cart-notifi-msg">
                        Vui lòng đăng nhập để xep giỏ hàng nha!
                    </span>
                </React.Fragment>
            )
        }
    }
    return (
        <div className="header__cart">
            <div className="header__cart-wrap">
                <i className="header__cart-icon fas fa-shopping-cart"></i>
                {length ? <span className="header__cart-note">{length}</span> : null}
                {/* <!-- No card: header__cart-notifi--no-card --> */}
                <div className="header__cart-notifi">
                    {renderCardList(cardItems, length)}
                </div>
            </div>
        </div>
       
    )
}

export default CardList