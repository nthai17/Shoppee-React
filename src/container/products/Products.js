import React, { useEffect, useState } from "react";
import MobileCategory from "./MobileCategory.js"
import ProductList from "./ProductList.js"
import Pagination from "./Pagination.js"
import ProductFillter from "./ProductFillter.js"
const listProduct = [
    {
        name: '[Mã FASHIONHOT19 giảm 10k đơn bất kỳ] Hộp cá sấu Tặng 12 sticker Sẵn Hàng đẹp nhất Dép Sục đi mưa Sẵn 20 màu',
        oldPrice: '200.000đ',
        curPrice: '150.000đ',
        sold: '85',
        brand: 'Crocs',
        madeIn: 'Hà Nội',
        isLiked: true,
        salePersent: '25%',
        img: 'https://cf.shopee.vn/file/4b8a79aec90301f1dd846ebf412c0cec_tn'
    },
    {
        name: 'DÉP CROSS Dép nữ nam , sục nữ nam loại 1  Đẹp Nhất [ Giá Sỉ+ Box Hãng + Loại Xịn Nhất+ 12 jb ]',
        oldPrice: '200.000đ',
        curPrice: '150.000đ',
        sold: '85',
        brand: 'Crocs',
        madeIn: 'Hà Nội',
        isLiked: false,
        salePersent: '25%',
        img: 'https://cf.shopee.vn/file/03cd1b68f2e52598bac4b58c42d69a6b_tn'
    },
    {
        name: 'Dép ulzzang quai trơn hot trend - tăng chiều cao - đủ size nam nữ Dép nam Dép nữ dép nữ',
        oldPrice: '200.000đ',
        curPrice: '150.000đ',
        sold: '15',
        brand: 'Ulzzang',
        madeIn: 'Hà Nội',
        isLiked: true,
        salePersent: '25%',
        img: 'https://cf.shopee.vn/file/163416333fa4ef131ffa2a328306a780_tn'
    },
    {
        name: 'Giày mcqueen ( 11VN Free Ship + Fullbox + bill ) hoa cúc , gót đen , gót phản quang giày dép nữ đế cao 4cm độn đế',
        oldPrice: '200.000đ',
        curPrice: '150.000đ',
        sold: '95',
        brand: 'McQueen',
        madeIn: 'HCM',
        isLiked: true,
        salePersent: '25%',
        img: 'https://cf.shopee.vn/file/4ce7b3fb89b4cba940b056f9ba7805fb_tn'
    },
    {
        name: '[Mã FASHIONG10 giảm 10k đơn từ 50k] Set sticker siêu nhân',
        oldPrice: '200.000đ',
        curPrice: '150.000đ',
        sold: '85',
        brand: 'Marvel',
        madeIn: 'Mỹ',
        isLiked: true,
        salePersent: '25%',
        img: 'https://cf.shopee.vn/file/172d6aa884ef923210dcaee1b46628bb_tn'
    },
    {
        name: '[Mã FASHIONG10 giảm 10k đơn 50k] giày cổ chun thể thao',
        oldPrice: '200.000đ',
        curPrice: '150.000đ',
        sold: '05',
        brand: 'Sport',
        madeIn: 'Trung Quốc',
        isLiked: false,
        salePersent: '25%',
        img: 'https://cf.shopee.vn/file/fa5b8de0894fdf0ee3aeaf04ba448e59_tn'
    },
    {
        name: 'Dép Đi Trong Nhà, Văn Phòng (màu tự chọn)',
        oldPrice: '200.000đ',
        curPrice: '150.000đ',
        sold: '105',
        brand: 'Dép',
        madeIn: 'Hà Nội',
        isLiked: true,
        salePersent: '25%',
        img: 'https://cf.shopee.vn/file/89cc17b853132e1d1aee1655bce487a7_tn'
    },
    {
        name: 'Tất Cotton Cổ Cao Thoáng Khí In Hình Dễ Thương Cho Nữ',
        oldPrice: '200.000đ',
        curPrice: '150.000đ',
        sold: '805',
        brand: 'Tất',
        madeIn: 'HCM',
        isLiked: true,
        salePersent: '25%',
        img: 'https://cf.shopee.vn/file/b9ed95a88fce0340ff4ae5a254a0e234_tn'
    },
    {
        name: ' Giày 3 Phân Mũi Nhọn Dây Kép Đi 2 Kiểu (xả kho SLL)',
        oldPrice: '200.000đ',
        curPrice: '150.000đ',
        sold: '55',
        brand: 'Guốc',
        madeIn: 'Hà Nội',
        isLiked: true,
        salePersent: '25%',
        img: 'https://cf.shopee.vn/file/be77187a63cc74de7824873440f1596c_tn'
    },
    {
        name: 'Dây giày cao cấp mẫu bản tròn phản quang siêu bền XIMO [Đủ màu 120cm]',
        oldPrice: '200.000đ',
        curPrice: '150.000đ',
        sold: '82',
        brand: 'Line',
        madeIn: 'Hà Nội',
        isLiked: true,
        salePersent: '25%',
        img: 'https://cf.shopee.vn/file/dcc6df816c2763843ffdab00f7726a7f_tn'
    },
    {
        name: 'Tất Cotton Cổ Cao Thoáng Khí In Hình Dễ Thương Cho Nữ',
        oldPrice: '200.000đ',
        curPrice: '150.000đ',
        sold: '805',
        brand: 'Tất',
        madeIn: 'HCM',
        isLiked: true,
        salePersent: '25%',
        img: 'https://cf.shopee.vn/file/b9ed95a88fce0340ff4ae5a254a0e234_tn'
    },
    {
        name: ' Giày 3 Phân Mũi Nhọn Dây Kép Đi 2 Kiểu (xả kho SLL)',
        oldPrice: '200.000đ',
        curPrice: '150.000đ',
        sold: '55',
        brand: 'Guốc',
        madeIn: 'Hà Nội',
        isLiked: true,
        salePersent: '25%',
        img: 'https://cf.shopee.vn/file/be77187a63cc74de7824873440f1596c_tn'
    },
    {
        name: 'Dây giày cao cấp mẫu bản tròn phản quang siêu bền XIMO [Đủ màu 120cm]',
        oldPrice: '200.000đ',
        curPrice: '150.000đ',
        sold: '82',
        brand: 'Line',
        madeIn: 'Hà Nội',
        isLiked: true,
        salePersent: '25%',
        img: 'https://cf.shopee.vn/file/dcc6df816c2763843ffdab00f7726a7f_tn'
    },
    {
        name: 'Dép Đi Trong Nhà, Văn Phòng (màu tự chọn)',
        oldPrice: '200.000đ',
        curPrice: '150.000đ',
        sold: '105',
        brand: 'Dép',
        madeIn: 'Hà Nội',
        isLiked: true,
        salePersent: '25%',
        img: 'https://cf.shopee.vn/file/89cc17b853132e1d1aee1655bce487a7_tn'
    },
    {
        name: 'Tất Cotton Cổ Cao Thoáng Khí In Hình Dễ Thương Cho Nữ',
        oldPrice: '200.000đ',
        curPrice: '150.000đ',
        sold: '805',
        brand: 'Tất',
        madeIn: 'HCM',
        isLiked: true,
        salePersent: '25%',
        img: 'https://cf.shopee.vn/file/b9ed95a88fce0340ff4ae5a254a0e234_tn'
    },
    {
        name: ' Giày 3 Phân Mũi Nhọn Dây Kép Đi 2 Kiểu (xả kho SLL)',
        oldPrice: '200.000đ',
        curPrice: '150.000đ',
        sold: '55',
        brand: 'Guốc',
        madeIn: 'Hà Nội',
        isLiked: true,
        salePersent: '25%',
        img: 'https://cf.shopee.vn/file/be77187a63cc74de7824873440f1596c_tn'
    },
    {
        name: 'Dây giày cao cấp mẫu bản tròn phản quang siêu bền XIMO [Đủ màu 120cm]',
        oldPrice: '200.000đ',
        curPrice: '150.000đ',
        sold: '82',
        brand: 'Line',
        madeIn: 'Hà Nội',
        isLiked: true,
        salePersent: '25%',
        img: 'https://cf.shopee.vn/file/dcc6df816c2763843ffdab00f7726a7f_tn'
    },
    {
        name: 'Tất Cotton Cổ Cao Thoáng Khí In Hình Dễ Thương Cho Nữ',
        oldPrice: '200.000đ',
        curPrice: '150.000đ',
        sold: '805',
        brand: 'Tất',
        madeIn: 'HCM',
        isLiked: true,
        salePersent: '25%',
        img: 'https://cf.shopee.vn/file/b9ed95a88fce0340ff4ae5a254a0e234_tn'
    },
    {
        name: ' Giày 3 Phân Mũi Nhọn Dây Kép Đi 2 Kiểu (xả kho SLL)',
        oldPrice: '200.000đ',
        curPrice: '150.000đ',
        sold: '55',
        brand: 'Guốc',
        madeIn: 'Hà Nội',
        isLiked: true,
        salePersent: '25%',
        img: 'https://cf.shopee.vn/file/be77187a63cc74de7824873440f1596c_tn'
    },
    {
        name: 'Dây giày cao cấp mẫu bản tròn phản quang siêu bền XIMO [Đủ màu 120cm]',
        oldPrice: '200.000đ',
        curPrice: '150.000đ',
        sold: '82',
        brand: 'Line',
        madeIn: 'Hà Nội',
        isLiked: true,
        salePersent: '25%',
        img: 'https://cf.shopee.vn/file/dcc6df816c2763843ffdab00f7726a7f_tn'
    },
    {
        name: 'Giày mcqueen ( 11VN Free Ship + Fullbox + bill ) hoa cúc , gót đen , gót phản quang giày dép nữ đế cao 4cm độn đế',
        oldPrice: '200.000đ',
        curPrice: '150.000đ',
        sold: '95',
        brand: 'McQueen',
        madeIn: 'HCM',
        isLiked: true,
        salePersent: '25%',
        img: 'https://cf.shopee.vn/file/4ce7b3fb89b4cba940b056f9ba7805fb_tn'
    },
    {
        name: '[Mã FASHIONG10 giảm 10k đơn từ 50k] Set sticker siêu nhân',
        oldPrice: '200.000đ',
        curPrice: '150.000đ',
        sold: '85',
        brand: 'Marvel',
        madeIn: 'Mỹ',
        isLiked: true,
        salePersent: '25%',
        img: 'https://cf.shopee.vn/file/172d6aa884ef923210dcaee1b46628bb_tn'
    },
    {
        name: '[Mã FASHIONG10 giảm 10k đơn 50k] giày cổ chun thể thao',
        oldPrice: '200.000đ',
        curPrice: '150.000đ',
        sold: '05',
        brand: 'Sport',
        madeIn: 'Trung Quốc',
        isLiked: false,
        salePersent: '25%',
        img: 'https://cf.shopee.vn/file/fa5b8de0894fdf0ee3aeaf04ba448e59_tn'
    },
    {
        name: 'Dép Đi Trong Nhà, Văn Phòng (màu tự chọn)',
        oldPrice: '200.000đ',
        curPrice: '150.000đ',
        sold: '105',
        brand: 'Dép',
        madeIn: 'Hà Nội',
        isLiked: true,
        salePersent: '25%',
        img: 'https://cf.shopee.vn/file/89cc17b853132e1d1aee1655bce487a7_tn'
    },
    {
        name: 'Tất Cotton Cổ Cao Thoáng Khí In Hình Dễ Thương Cho Nữ',
        oldPrice: '200.000đ',
        curPrice: '150.000đ',
        sold: '805',
        brand: 'Tất',
        madeIn: 'HCM',
        isLiked: true,
        salePersent: '25%',
        img: 'https://cf.shopee.vn/file/b9ed95a88fce0340ff4ae5a254a0e234_tn'
    },
    {
        name: ' Giày 3 Phân Mũi Nhọn Dây Kép Đi 2 Kiểu (xả kho SLL)',
        oldPrice: '200.000đ',
        curPrice: '150.000đ',
        sold: '55',
        brand: 'Guốc',
        madeIn: 'Hà Nội',
        isLiked: true,
        salePersent: '25%',
        img: 'https://cf.shopee.vn/file/be77187a63cc74de7824873440f1596c_tn'
    },
    {
        name: 'Dây giày cao cấp mẫu bản tròn phản quang siêu bền XIMO [Đủ màu 120cm]',
        oldPrice: '200.000đ',
        curPrice: '150.000đ',
        sold: '82',
        brand: 'Line',
        madeIn: 'Hà Nội',
        isLiked: true,
        salePersent: '25%',
        img: 'https://cf.shopee.vn/file/dcc6df816c2763843ffdab00f7726a7f_tn'
    },
]
function Products(){
    let [page, setPage] = useState(1)
    let [activePage, setActivePage] = useState(1)
    const productPerPage = 10;
    const productsQnt = listProduct.length;
    const numberOfPages = Math.ceil(productsQnt/productPerPage)
    
    useEffect(()=>{
        window.scrollTo(0, 0)
    },[page, activePage]);

    const changePage = function(curPage){
        setPage(curPage)
        setActivePage(curPage)
    }
    const nextPage = function(e){
        e.preventDefault();
        if(activePage < numberOfPages){
            setActivePage(activePage+1)
            setPage(page+1)
        }
    }
    const prevPage = function(e){
        e.preventDefault();
        if(activePage > 1){
            setActivePage(activePage-1)
            setPage(page-1)
        }
    }
    // console.log(numberOfPages);
    return (
        <div className="col l-10 m-12 c-12">
            <ProductFillter/>
            <MobileCategory/>;
            <ProductList listProduct={listProduct} productPerPage={productPerPage} page={page}/>
            <Pagination 
                numberOfPages={numberOfPages} 
                changePage={changePage} 
                activePage={activePage}
                nextPage={nextPage}
                prevPage={prevPage}
            />
        </div>

    )
}

export default Products