import React from "react";

function VouchersDetail(){
    return(
        <header className="account__detait-header col c-12 account__header-no-border">
            <h3>Ví voucher</h3>
            <div className="voucher__addbox">
                <label htmlFor="">Mã Voucher</label>
                <input type="text" id="voucher-input" placeholder="Nhập mã VOUCHER vào đây"/>
                <button className="btn btn--primary">Lưu</button>
            </div>
        </header>
    )
}

export default VouchersDetail