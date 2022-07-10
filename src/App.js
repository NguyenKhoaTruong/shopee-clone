import logo from './logo.svg';
import './App.css';
import './base.css';
import React from 'react';
import * as Icon from 'react-bootstrap-icons';
function App() {
  return (
    <React.Fragment>

      <header className="header">
        <div className="grid">
          <nav className="header__navbar">
            <ul className="header__navbar-list">
              <li className="header__navbar-item
                                header__navbar-item--separate">Kênh Người Bán</li>
              <li className="header__navbar-item
                                header__navbar-item--separate">Trở thành Người
                bán Shopee</li>
              <li className="header__navbar-item header__navbar-item--qr
                                header__navbar-item--separate">Tải ứng dụng
                <div className="header_qr">
                  <img src="./accset/img/qr_code.png" alt="qr-code" className="header_qr--img" />
                  <div className="header-qr--app">
                    <a href="#" className="header_qr-link">
                      <img src="./accset/img/gg_play.png" alt="" className="header_qr--download-img" />
                    </a>
                    <a href="#" className="header-qr-link">
                      <img src="./accset/img/app_store.png" alt="" className="header_qr--download-img" />
                    </a>
                  </div>
                </div>
              </li>
              <li className="header__navbar-item header__no-pointer">Kết nối
                <a href="" className="header__navbar-icon--link">
                  <Icon.Facebook size={18} color="white" style={{ background: "" }} className=" header__navbar-icon fa-brands fa-facebook" />
                  {/* <i className=" header__navbar-icon fa-brands fa-facebook "></i> */}
                </a>
                <a href="" className="header__navbar-icon--link">
                  <Icon.Instagram size={18} color="white" style={{ background: "" }} className=" header__navbar-icon fa-brands fa-instagram" />
                  {/* <i className=" header__navbar-icon fa-brands fa-instagram"></i> */}
                </a>
              </li>
            </ul>
            <ul className="header__navbar-list">
              <li className="header__navbar-item header__notify-item--hover">
                <a href="#" className="header__navbar-item-link">
                  <a href="" className="header__navbar-icon--link">
                    <Icon.Bell size={13} color="white" style={{ marginRight: '2px' }} className=" header__navbar-icon far fa-bell" />
                    {/* <i className=" header__navbar-icon far fa-bell"></i> */}
                    Thông
                    báo
                  </a>
                  <div className="header__notify">
                    <header className="header__notify-header">
                      <p>Thông báo mới nhận </p>
                    </header>
                    <ul className="header__notify-list">
                      <li className="header__notify-item">
                        <a href="" className="header__notify-link header__notify-item--view">
                          <img src="./accset/img/shoopee-vinamilk-img.jpg" alt=""
                            className="header__notify-img" />
                          <div className="header__notify-info">
                            <span className="header__notify-name">Xác thực nguồn gốc chính hãng Sản
                              Phẩm</span>
                            <span className="header__notify-description">So teams can deliver better
                              products, faster.</span>
                          </div>
                        </a>
                      </li>
                      <li className="header__notify-item ">
                        <a href="" className="header__notify-link">
                          <img src="./accset/img/yomost.jpg" alt="" className="header__notify-img" />
                          <div className="header__notify-info">
                            <span className="header__notify-name">Sữa Chua Lên Mem Tự Nhiên Yomost
                              180ml Các Vị</span>
                            <span className="header__notify-description">
                              Sữa chua uống Yomost được làm từ sữa chua lên men tự nhiên kết
                              hợp cùng hương
                              cấp</span>
                          </div>
                        </a>
                      </li>
                      <li className="header__notify-item">
                        <a href="" className="header__notify-link">
                          <img src="./accset/img/th-true.jpg" alt="" className="header__notify-img" />
                          <div className="header__notify-info">
                            <span className="header__notify-name">Lốc 6 chai Sữa Trái Cây TH true
                              JUICE (Cam / Dâu) Chai 300ml</span>
                            <span className="header__notify-description">Nguồn năng lượng hoàn toàn
                              từ thiên nhiên: Kết hợp sữa tươi sạch của trang trại TH cùng với
                            </span>
                          </div>
                        </a>
                      </li>
                    </ul>
                    <footer className="header__notify-footer">
                      <a href="#" className="header__notify-footer--btn">Xem Tất cả</a>
                    </footer>
                  </div>
                </a>
              </li>

              <li className="header__navbar-item">
                <a href="#" className="header__navbar-item-link">
                  <a href="" className="header__navbar-icon--link">
                    {/* <i className=" header__navbar-icon fa-solid fa-circle-question"></i> */}
                    <Icon.QuestionCircleFill size={13} color="white" style={{ marginRight: '2px' }} className=" header__navbar-icon fa-solid fa-circle-question" />
                    Hỗ trợ</a>
                </a>
              </li>
              <li className="header__navbar-item header__language--hover">
                <a href="#" className="header__navbar-item-link">
                  <a href="" className="header__navbar-icon--link">
                    {/* <i className=" header__navbar-icon fa-solid fa-globe"></i> */}
                    <Icon.Globe size={13} color="white" style={{ marginRight: '2px' }} className=" header__navbar-icon fa-solid fa-circle-question" />
                    Ngôn ngữ
                    <Icon.ChevronDown size={13} color="white" style={{ marginLeft: '2px' }} className=" fa-solid fa-chevron-down" />
                    {/* <i className="fa-solid fa-chevron-down"></i> */}
                  </a>
                  <div className="header_language">
                    <p className="header_language-vn">Tiếng Việt</p>
                    <p className="header_language-english">English</p>
                  </div>
                </a>
              </li>
              <li className="header__navbar-item
                                            header__navbar-item-strong
                                            header__navbar-item--separate">
                <a href="#" className="header__navbar-icon--link"></a>Đăng
                Ký
              </li>
              <li className="header__navbar-item
                                            header__navbar-item-strong">Đăng
                Nhập</li>
              <li className="header__navbar-item header-navbar-user ">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjYmlp9JDeNMaFZzw9S3G1dVztGqF_2vq9nA&usqp=CAU"
                  alt="" className="header-navbar-img" />
                <span className="header-navbar-user-name">Trường Nguyễn</span>
                <ul className="navbar__user-menu">
                  <li className="menu-item">
                    <a href="#">Tài khoản của tôi</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Địa chỉ của tôi</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Đơn Mua</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Đăng xuất</a>
                  </li>

                </ul>
              </li>
            </ul>

          </nav>
          <div className="header-with--seach">
            <div className="header-logo">
              <img className="header-logo-img" />
            </div>
            {/* <!-- Seach --> */}
            <div className="header-seach">
              <div className="header-seach-wrap">
                <input type="text" className="header-seach-input" placeholder="Nhập để tìm kiếm sản phẩm" />
                <div className="header-seach-history">
                  <h3 className="header-seach-heading">Lịch sử tìm kiếm</h3>
                  <ul className="header-seach-list">
                    <li className="header-seach-item">
                      <a href="">Sữa chua Vinamilk</a>
                    </li>
                    <li className="header-seach-item">
                      <a href="">Kem hương dâu</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="header-seach-select">
                <span className="header-seach-select-label">Trong shop
                  <Icon.ChevronDown size={15} color="black" className=" fa-solid fa-angle-down header-seach-select-icon" />
                  {/* <i
                    className="fa-solid fa-angle-down header-seach-select-icon"></i> */}
                </span>
                <ul className="header-seach-option">
                  <li className="header-seach-option-item header-seach-option-item-active "><span>Trong
                    shop</span>
                    <Icon.Check size={16} color="#EE4D2D" style={{ marginLeft: '5px' }} className=" fa-solid fa-check" />
                    {/* <i className="fa-solid fa-check"></i> */}
                  </li>
                  <li className="header-seach-option-item"><span>Ngoài shop</span>
                    <i className="fa-solid fa-check"></i>
                  </li>
                </ul>
              </div>
              <button className="header-seach-btn">
                <Icon.Search size={15} color="white" style={{ marginRight: '2px', }} className=" header-seach-btn-icon fa-solid fa-magnifying-glass" />
                {/* <i className=" header-seach-btn-icon fa-solid fa-magnifying-glass"></i> */}
              </button>
            </div>
            {/* <!-- Cart --> */}
            <div className="header-cart">
              <div className="header-cart-wrap">
                <Icon.Cart3 size={25} color="white" style={{ marginRight: '2px' }} className=" header-cart-icon fa-solid fa-cart-shopping" />
                {/* <i className="header-cart-icon fa-solid fa-cart-shopping"></i> */}
                <span className="header-cart-wrap-notice">3</span>
                {/* <!-- No Cart:header-cart-list--no-cart --> */}
                <div className="header-cart-list ">
                  <img src="./accset/img/no-cart.png" alt="" className="header-cart-img" />
                  <span className="header-cart-message">Chưa có sản phẩm</span>
                  <h3 className="header-cart--heading">
                    Sản phẩm đã thêm
                  </h3>
                  <ul className="header-cart-list--item">
                    <li className="header-cart-item">
                      <img src="https://cf.shopee.vn/file/1f656b3ee213ce5b8d45b45dfe6b2446_tn"
                        alt="ao" className="header-cart-item-img" />
                      <div className="header-cart-item--info">
                        <div className="header-cart-item-head">
                          <h5 className="header-cart-item-name">
                            Áo khoác blazer nữ dài tay.
                          </h5>
                          <div className="header-cart-price">
                            <span className="cart-price">
                              2.000.000đ
                            </span>
                            <span className="header-cart-multiply">x</span>
                            <span className="header-cart-quantity">2</span>
                          </div>

                        </div>
                        <div className="header-cart-body">
                          <span className="cart-description">
                            Phân loại:Bạc
                          </span>
                          <span className="cart-delete">
                            Xóa
                          </span>
                        </div>
                      </div>
                    </li>
                    <li className="header-cart-item">
                      <img src="https://cf.shopee.vn/file/1f656b3ee213ce5b8d45b45dfe6b2446_tn"
                        alt="ao" className="header-cart-item-img" />
                      <div className="header-cart-item--info">
                        <div className="header-cart-item-head">
                          <h5 className="header-cart-item-name">
                            Áo khoác blazer nữ dài tay. Áo khoác blazer nữ dài tay. Áo khoác
                            blazer nữ dài tay. Áo khoác blazer nữ dài tay. Áo khoác blazer nữ
                            dài tay.
                          </h5>
                          <div className="header-cart-price">
                            <span className="cart-price">
                              2.000.000đ
                            </span>
                            <span className="header-cart-multiply">x</span>
                            <span className="header-cart-quantity">2</span>
                          </div>

                        </div>
                        <div className="header-cart-body">
                          <span className="cart-description">
                            Phân loại:Bạc
                          </span>
                          <span className="cart-delete">
                            Xóa
                          </span>
                        </div>
                      </div>
                    </li>
                    <li className="header-cart-item">
                      <img src="https://cf.shopee.vn/file/1f656b3ee213ce5b8d45b45dfe6b2446_tn"
                        alt="ao" className="header-cart-item-img" />
                      <div className="header-cart-item--info">
                        <div className="header-cart-item-head">
                          <h5 className="header-cart-item-name">
                            Áo khoác blazer nữ dài tay.
                          </h5>
                          <div className="header-cart-price">
                            <span className="cart-price">
                              2.000.000đ
                            </span>
                            <span className="header-cart-multiply">x</span>
                            <span className="header-cart-quantity">2</span>
                          </div>

                        </div>
                        <div className="header-cart-body">
                          <span className="cart-description">
                            Phân loại:Bạc
                          </span>
                          <span className="cart-delete">
                            Xóa
                          </span>
                        </div>
                      </div>
                    </li>
                    <li className="header-cart-item">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFTTD-H1Gm7Q2zVPBfwAzqS8Y0rszmnCfKdA&usqp=CAU"
                        alt="ao" className="header-cart-item-img" />
                      <div className="header-cart-item--info">
                        <div className="header-cart-item-head">
                          <h5 className="header-cart-item-name">
                            Bộ đồ thể thao nữ hàng hiệu.
                          </h5>
                          <div className="header-cart-price">
                            <span className="cart-price">
                              10.000.000đ
                            </span>
                            <span className="header-cart-multiply">x</span>
                            <span className="header-cart-quantity">1</span>
                          </div>

                        </div>
                        <div className="header-cart-body">
                          <span className="cart-description">
                            Phân loại:Bạc
                          </span>
                          <span className="cart-delete">
                            Xóa
                          </span>
                        </div>
                      </div>
                    </li>
                    <li className="header-cart-item">
                      <img src="https://thumb.danhsachcuahang.com/image/2019/05/top-shop-quan-ao-nu-han-quoc-dep-tai-tphcm-thumb-63.jpg"
                        alt="ao" className="header-cart-item-img" />
                      <div className="header-cart-item--info">
                        <div className="header-cart-item-head">
                          <h5 className="header-cart-item-name">
                            Bộ Quần Áo HQ nữ dài tay.
                          </h5>
                          <div className="header-cart-price">
                            <span className="cart-price">
                              5.000.000đ
                            </span>
                            <span className="header-cart-multiply">x</span>
                            <span className="header-cart-quantity">1</span>
                          </div>

                        </div>
                        <div className="header-cart-body">
                          <span className="cart-description">
                            Phân loại:Bạc
                          </span>
                          <span className="cart-delete">
                            Xóa
                          </span>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <a href="#" className="header-cart-view btn btn-primary"> Xem giỏ hàng</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="app__container">
        <div className="grid">
          <div className="grid__row app__content">
            <div className="grid__column-2">
              <nav className="category">
                <h3 className="category-heading heading">
                  <Icon.ListTask size={14} color="black" className=" heading-icon fa-solid fa-list" />
                  {/* <i className="heading-icon fa-solid fa-list"></i> */}
                  Danh mục
                </h3>
                <ul className="category-list">
                  <li className="category-item category-item--active">
                    <a href="#" className="category-item__link">Thời Trang</a>
                  </li>
                  <li className="category-item">
                    <a href="#" className="category-item__link">Trang Sức Nam </a>
                  </li>
                  <li className="category-item">
                    <a href="#" className="category-item__link">Trang Phục Ngành Nghề </a>
                  </li>
                  <li className="category-item ">
                    <a href="#" className="category-item__link">Quần Dài/Quần Âu</a>
                  </li>
                  <li className="category-item">
                    <a href="#" className="category-item__link">Váy Đầm</a>
                  </li>
                  <li className="category-item">
                    <a href="#" className="category-item__link">Đồ Ngủ</a>
                  </li>
                  <li className="category-item">
                    <a href="#" className="category-item__link">Phụ kiện</a>
                  </li>
                  <li className="category-item">
                    <a href="#" className="category-item__link">Cà vạt & Nơ cổ</a>
                  </li>
                  {/* <li className="category-item">
                    <a href="#" className="category-item__link">Xích chó</a>
                  </li> */}
                </ul>
              </nav>
            </div>
            <div className="grid__column-10">
              <div className="home-finter">
                <span className="home-finter-label">Sắp Xếp Theo</span>
                <button className="btn home-finter-btn">Phổ Biến</button>
                <button className="btn home-finter-btn btn-primary">Mới Nhất</button>
                <button className="btn home-finter-btn">Bán Chạy</button>
                <div className="select-expensive"><span className="select-ex">
                  Giá
                </span>
                  <Icon.ChevronDown size={14} color="black" className=" select-ex-icon fa-solid fa-chevron-down" />
                  {/* <i className="select-ex-icon fa-solid fa-chevron-down"></i> */}
                  {/* <!-- list option --> */}
                  <ul className="select-ex-list">
                    <li className="select-ex-item"><a href="#" className="select-ex-link">Giá thấp đến cao</a>
                    </li>
                    <li className="select-ex-item"><a href="#" className="select-ex-link">Giá cao đến thấp</a>
                    </li>
                  </ul>
                </div>
                <div className="home-finter_page">
                  <span className="home-finter_page-number">
                    <span className="home-finter_page-simber">1</span>/14
                  </span>
                  <div className="home-finter_page-control">
                    <a href="#" className="home-finter_page-btn home-finter_page-btn--disable">
                      <Icon.ChevronLeft size={14} color="gray" className=" home-finter_page-control-icon fa-solid fa-chevron-left" />
                      {/* <i className="home-finter_page-control-icon fa-solid fa-chevron-left"></i> */}
                    </a>
                    <a href="#" className="home-finter_page-btn">
                      <Icon.ChevronRight size={14} color="black" className=" home-finter_page-control-icon fa-solid fa-chevron-left" />
                      {/* <i className="home-finter_page-control-icon fa-solid fa-chevron-right"></i> */}
                    </a>
                  </div>
                </div>

              </div>
              <div className="grid__product">
                <div className="grid__row">
                  <div className="grid__column-2-4">
                    <a className="home-product-item" href="#">
                      <div className="home-product-item-img">
                      </div>
                      <h4 className="home-product-item-name">Máy in nhiệt Shoptida SP46 in đơn hàng, phiếu
                        gửi, minicode, logo tự dán, bảo hành 12 tháng</h4>
                      <div className="home-product-item-price">
                        <span className="home-product-item-price--old">1.200.000đ</span>
                        <span className="home-product-item-price--simble">999.000đ</span>
                      </div>
                      <div className="home-product-item-action">
                        <span className="home-product-item-like home-product-item-liked">
                          <i className=" home-product-item-like-no-like fa-solid fa-heart"></i>
                          <Icon.Hearts size={15} color="red" style={{}} className=" home-product-item-like  fa-solid fa-heart-circle-check" />
                          {/* <i className="home-product-item-like  fa-solid fa-heart-circle-check"></i> */}
                        </span>
                        <div className="home-product-item-rating">
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          {/* <i className="home-product-item-star--gold fa-solid fa-star"></i>
                          <i className="home-product-item-star--gold fa-solid fa-star"></i>
                          <i className="home-product-item-star--gold fa-solid fa-star"></i>
                          <i className="home-product-item-star--gold fa-solid fa-star"></i> */}
                          <Icon.Star size={15} color="gray" style={{}} className=" fa-solid fa-star" />
                        </div>
                        <span className="home-product-item-sold">88 đã bán</span>
                      </div>
                      <div className="home-product-item_origin">
                        <span className="home-product-item_brand">Whoo</span>
                        <span className="home-product-item_origin-name">Nhật Bản</span>

                      </div>
                      <div className="home-product-item_favourite">
                        <Icon.Check size={15} color="white" style={{}} className=" fa-solid fa-check" />
                        {/* <i className="fa-solid fa-check"></i> */}
                        <span>Yêu Thích</span>
                      </div>
                      <div className="home-product-item-sale-off">
                        <span className="home-product-item__sale-off-percent">60%</span>
                        <span className="home-product-item__sale-off-label">Giảm</span>

                      </div>
                    </a>
                  </div>
                  <div className="grid__column-2-4">
                    <a className="home-product-item" href="#">
                      <div className="home-product-item-img"
                      // style={{ backgroundImage: URL('https://cf.shopee.vn/file/19d0e9c33983e6b6d715aea9bf7169f3') }}
                      >
                      </div>
                      <h4 className="home-product-item-name">Áo Thun Unisex Nam Nữ TEEZ - TZ1001 Form Rộng
                        Tay Lỡ Freesize</h4>
                      <div className="home-product-item-price">
                        <span className="home-product-item-price--old">₫109.000</span>
                        <span className="home-product-item-price--simble">₫115.000</span>
                      </div>
                      <div className="home-product-item-action">
                        <span className="home-product-item-like home-product-item-liked">
                          <i className=" home-product-item-like-no-like fa-solid fa-heart"></i>
                          <Icon.Hearts size={15} color="red" style={{}} className=" home-product-item-like  fa-solid fa-heart-circle-check" />
                          {/* <i className="home-product-item-like  fa-solid fa-heart-circle-check"></i> */}
                        </span>
                        <div className="home-product-item-rating">
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          {/* <i className="home-product-item-star--gold fa-solid fa-star"></i>
                          <i className="home-product-item-star--gold fa-solid fa-star"></i>
                          <i className="home-product-item-star--gold fa-solid fa-star"></i>
                          <i className="home-product-item-star--gold fa-solid fa-star"></i> */}
                          <Icon.Star size={15} color="gray" style={{}} className=" fa-solid fa-star" />
                        </div>
                        <span className="home-product-item-sold">4525 đã bán</span>
                      </div>
                      <div className="home-product-item_origin">
                        <span className="home-product-item_brand">Whoo</span>
                        <span className="home-product-item_origin-name">Hàn Quốc</span>

                      </div>
                      <div className="home-product-item_favourite">
                        <Icon.Check size={15} color="white" style={{}} className=" fa-solid fa-check" />
                        {/* <i className="fa-solid fa-check"></i> */}
                        <span>Yêu Thích</span>
                      </div>
                      <div className="home-product-item-sale-off">
                        <span className="home-product-item__sale-off-percent">30%</span>
                        <span className="home-product-item__sale-off-label">Giảm</span>

                      </div>
                    </a>

                  </div>
                  <div className="grid__column-2-4">
                    <a className="home-product-item" href="#">
                      <div className="home-product-item-img"
                      // style={{ backgroundImage: URL('https://cf.shopee.vn/file/5c64475c9c4ab9a4a344a4d5876e12ed') }}
                      >
                      </div>
                      <h4 className="home-product-item-name">Áo thun UNDER Hà Nội 36 Phố Phường - UTS002
                      </h4>
                      <div className="home-product-item-price">
                        <span className="home-product-item-price--old">₫250.000</span>
                        <span className="home-product-item-price--simble">180.000đ</span>
                      </div>
                      <div className="home-product-item-action">
                        <span className="home-product-item-like home-product-item-liked">
                          <i className=" home-product-item-like-no-like fa-solid fa-heart"></i>
                          <Icon.Hearts size={15} color="red" style={{}} className=" home-product-item-like  fa-solid fa-heart-circle-check" />
                          {/* <i className="home-product-item-like  fa-solid fa-heart-circle-check"></i> */}
                        </span>
                        <div className="home-product-item-rating">
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          {/* <i className="home-product-item-star--gold fa-solid fa-star"></i>
                          <i className="home-product-item-star--gold fa-solid fa-star"></i>
                          <i className="home-product-item-star--gold fa-solid fa-star"></i>
                          <i className="home-product-item-star--gold fa-solid fa-star"></i> */}
                          <Icon.Star size={15} color="gray" style={{}} className=" fa-solid fa-star" />
                        </div>
                        <span className="home-product-item-sold">888 đã bán</span>
                      </div>
                      <div className="home-product-item_origin">
                        <span className="home-product-item_brand">Whoo</span>
                        <span className="home-product-item_origin-name">Nhật Bản</span>

                      </div>
                      <div className="home-product-item_favourite">
                        <Icon.Check size={15} color="white" style={{}} className=" fa-solid fa-check" />
                        {/* <i className="fa-solid fa-check"></i> */}
                        <span>Yêu Thích</span>
                      </div>
                      <div className="home-product-item-sale-off">
                        <span className="home-product-item__sale-off-percent">3%</span>
                        <span className="home-product-item__sale-off-label">Giảm</span>

                      </div>
                    </a>
                  </div>
                  <div className="grid__column-2-4">
                    <a className="home-product-item" href="#">
                      <div className="home-product-item-img"
                      // style={{ backgroundImage: URL('https://cf.shopee.vn/file/7aa4ee812dad18635a6e92f3d44d48dd') }}
                      >
                      </div>
                      <h4 className="home-product-item-name">Máy in nhiệt Shoptida SP46 in đơn hàng, phiếu
                        gửi, minicode, logo tự dán, bảo hành 12 tháng</h4>
                      <div className="home-product-item-price">
                        <span className="home-product-item-price--old">1.200.000đ</span>
                        <span className="home-product-item-price--simble">999.000đ</span>
                      </div>
                      <div className="home-product-item-action">
                        <span className="home-product-item-like home-product-item-liked">
                          <i className=" home-product-item-like-no-like fa-solid fa-heart"></i>
                          <Icon.Hearts size={15} color="red" style={{}} className=" home-product-item-like  fa-solid fa-heart-circle-check" />
                          {/* <i className="home-product-item-like  fa-solid fa-heart-circle-check"></i> */}
                        </span>
                        <div className="home-product-item-rating">
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          {/* <i className="home-product-item-star--gold fa-solid fa-star"></i>
                          <i className="home-product-item-star--gold fa-solid fa-star"></i>
                          <i className="home-product-item-star--gold fa-solid fa-star"></i>
                          <i className="home-product-item-star--gold fa-solid fa-star"></i> */}
                          <Icon.Star size={15} color="gray" style={{}} className=" fa-solid fa-star" />
                        </div>
                        <span className="home-product-item-sold">88 đã bán</span>
                      </div>
                      <div className="home-product-item_origin">
                        <span className="home-product-item_brand">Whoo</span>
                        <span className="home-product-item_origin-name">Nhật Bản</span>

                      </div>
                      <div className="home-product-item_favourite">
                        <Icon.Check size={15} color="white" style={{}} className=" fa-solid fa-check" />
                        {/* <i className="fa-solid fa-check"></i> */}
                        <span>Yêu Thích</span>
                      </div>
                      <div className="home-product-item-sale-off">
                        <span className="home-product-item__sale-off-percent">3%</span>
                        <span className="home-product-item__sale-off-label">Giảm</span>

                      </div>
                    </a>
                  </div>
                  <div className="grid__column-2-4">
                    <a className="home-product-item" href="#">
                      <div className="home-product-item-img"
                      // style={{ backgroundImage: URL('https://cf.shopee.vn/file/3e448457563df3d39d6e5a93a879ced5') }}
                      >
                      </div>
                      <h4 className="home-product-item-name">Áo thun in hình FNI0669, Thun 100% COTTON -
                        form rộng UNISEX</h4>
                      <div className="home-product-item-price">
                        <span className="home-product-item-price--old">99.000đ</span>
                        <span className="home-product-item-price--simble">239.000đ</span>
                      </div>
                      <div className="home-product-item-action">
                        <span className="home-product-item-like home-product-item-liked">
                          <i className=" home-product-item-like-no-like fa-solid fa-heart"></i>
                          <Icon.Hearts size={15} color="red" style={{}} className=" home-product-item-like  fa-solid fa-heart-circle-check" />
                          {/* <i className="home-product-item-like  fa-solid fa-heart-circle-check"></i> */}
                        </span>
                        <div className="home-product-item-rating">
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          {/* <i className="home-product-item-star--gold fa-solid fa-star"></i>
                          <i className="home-product-item-star--gold fa-solid fa-star"></i>
                          <i className="home-product-item-star--gold fa-solid fa-star"></i>
                          <i className="home-product-item-star--gold fa-solid fa-star"></i> */}
                          <Icon.Star size={15} color="gray" style={{}} className=" fa-solid fa-star" />
                        </div>
                        <span className="home-product-item-sold">88 đã bán</span>
                      </div>
                      <div className="home-product-item_origin">
                        <span className="home-product-item_brand">Whoo</span>
                        <span className="home-product-item_origin-name">Nhật Bản</span>

                      </div>
                      <div className="home-product-item_favourite">
                        <Icon.Check size={15} color="white" style={{}} className=" fa-solid fa-check" />
                        {/* <i className="fa-solid fa-check"></i> */}
                        <span>Yêu Thích</span>
                      </div>
                      <div className="home-product-item-sale-off">
                        <span className="home-product-item__sale-off-percent">3%</span>
                        <span className="home-product-item__sale-off-label">Giảm</span>

                      </div>
                    </a>
                  </div>
                  <div className="grid__column-2-4">
                    <a className="home-product-item" href="#">
                      <div className="home-product-item-img"
                      // style={{ backgroundImage: URL('https://cf.shopee.vn/file/7428f238886a72e1d179f2dc9ea9ab5a') }}
                      >
                      </div>
                      <h4 className="home-product-item-name">Áo thun nam nữ tay lỡ form rộng chữ kiễu dơi
                        Monster vải dày mịn</h4>
                      <div className="home-product-item-price">
                        <span className="home-product-item-price--old">29.900đ</span>
                        <span className="home-product-item-price--simble">39.900đ</span>
                      </div>
                      <div className="home-product-item-action">
                        <span className="home-product-item-like home-product-item-liked">
                          <i className=" home-product-item-like-no-like fa-solid fa-heart"></i>
                          <Icon.Hearts size={15} color="red" style={{}} className=" home-product-item-like  fa-solid fa-heart-circle-check" />
                          {/* <i className="home-product-item-like  fa-solid fa-heart-circle-check"></i> */}
                        </span>
                        <div className="home-product-item-rating">
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          {/* <i className="home-product-item-star--gold fa-solid fa-star"></i>
                          <i className="home-product-item-star--gold fa-solid fa-star"></i>
                          <i className="home-product-item-star--gold fa-solid fa-star"></i>
                          <i className="home-product-item-star--gold fa-solid fa-star"></i> */}
                          <Icon.Star size={15} color="gray" style={{}} className=" fa-solid fa-star" />
                        </div>
                        <span className="home-product-item-sold">88 đã bán</span>
                      </div>
                      <div className="home-product-item_origin">
                        <span className="home-product-item_brand">Whoo</span>
                        <span className="home-product-item_origin-name">Nhật Bản</span>

                      </div>
                      <div className="home-product-item_favourite">
                        <Icon.Check size={15} color="white" style={{}} className=" fa-solid fa-check" />
                        {/* <i className="fa-solid fa-check"></i> */}
                        <span>Yêu Thích</span>
                      </div>
                      <div className="home-product-item-sale-off">
                        <span className="home-product-item__sale-off-percent">3%</span>
                        <span className="home-product-item__sale-off-label">Giảm</span>

                      </div>
                    </a>
                  </div>
                  <div className="grid__column-2-4">
                    <a className="home-product-item" href="#">
                      <div className="home-product-item-img"
                      // style={{ backgroundImage: URL('https://cf.shopee.vn/file/7e32e15551d9d4f181c1c73cfeef869e') }}
                      >
                      </div>
                      <h4 className="home-product-item-name">BST áo thun mùa hè thời trang Hàn Quốc cotton
                        vải dày mịn</h4>
                      <div className="home-product-item-price">
                        <span className="home-product-item-price--old">120.000đ</span>
                        <span className="home-product-item-price--simble">39.900đ</span>
                      </div>
                      <div className="home-product-item-action">
                        <span className="home-product-item-like home-product-item-liked">
                          <i className=" home-product-item-like-no-like fa-solid fa-heart"></i>
                          <Icon.Hearts size={15} color="red" style={{}} className=" home-product-item-like  fa-solid fa-heart-circle-check" />
                          {/* <i className="home-product-item-like  fa-solid fa-heart-circle-check"></i> */}
                        </span>
                        <div className="home-product-item-rating">
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          {/* <i className="home-product-item-star--gold fa-solid fa-star"></i>
                          <i className="home-product-item-star--gold fa-solid fa-star"></i>
                          <i className="home-product-item-star--gold fa-solid fa-star"></i>
                          <i className="home-product-item-star--gold fa-solid fa-star"></i> */}
                          <Icon.Star size={15} color="gray" style={{}} className=" fa-solid fa-star" />
                        </div>
                        <span className="home-product-item-sold"> đã bán</span>
                      </div>
                      <div className="home-product-item_origin">
                        <span className="home-product-item_brand">Whoo</span>
                        <span className="home-product-item_origin-name">Nhật Bản</span>

                      </div>
                      <div className="home-product-item_favourite">
                        <Icon.Check size={15} color="white" style={{}} className=" fa-solid fa-check" />
                        {/* <i className="fa-solid fa-check"></i> */}
                        <span>Yêu Thích</span>
                      </div>
                      <div className="home-product-item-sale-off">
                        <span className="home-product-item__sale-off-percent">3%</span>
                        <span className="home-product-item__sale-off-label">Giảm</span>

                      </div>
                    </a>
                  </div>
                  <div className="grid__column-2-4">
                    <a className="home-product-item" href="#">
                      <div className="home-product-item-img"
                      // style={{ backgroundImage: URL('https://cf.shopee.vn/file/2381810753643a441c42a8d9627e5403') }}
                      >
                      </div>
                      <h4 className="home-product-item-name">Áo Thun Dễ Thương Giá Rẻ AP09(Áo Màu
                        Hồng)</h4>
                      <div className="home-product-item-price">
                        <span className="home-product-item-price--old"> ₫178.000đ</span>
                        <span className="home-product-item-price--simble">₫75.000</span>
                      </div>
                      <div className="home-product-item-action">
                        <span className="home-product-item-like home-product-item-liked">
                          <i className=" home-product-item-like-no-like fa-solid fa-heart"></i>
                          <Icon.Hearts size={15} color="red" style={{}} className=" home-product-item-like  fa-solid fa-heart-circle-check" />
                          {/* <i className="home-product-item-like  fa-solid fa-heart-circle-check"></i> */}
                        </span>
                        <div className="home-product-item-rating">
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          {/* <i className="home-product-item-star--gold fa-solid fa-star"></i>
                          <i className="home-product-item-star--gold fa-solid fa-star"></i>
                          <i className="home-product-item-star--gold fa-solid fa-star"></i>
                          <i className="home-product-item-star--gold fa-solid fa-star"></i> */}
                          <Icon.Star size={15} color="gray" style={{}} className=" fa-solid fa-star" />
                        </div>
                        <span className="home-product-item-sold">585 đã bán</span>
                      </div>
                      <div className="home-product-item_origin">
                        <span className="home-product-item_brand">Whoo</span>
                        <span className="home-product-item_origin-name">Nhật Bản</span>

                      </div>
                      <div className="home-product-item_favourite">
                        <Icon.Check size={15} color="white" style={{}} className=" fa-solid fa-check" />
                        {/* <i className="fa-solid fa-check"></i> */}
                        <span>Yêu Thích</span>
                      </div>
                      <div className="home-product-item-sale-off">
                        <span className="home-product-item__sale-off-percent">26%</span>
                        <span className="home-product-item__sale-off-label">Giảm</span>

                      </div>
                    </a>
                  </div>
                  <div className="grid__column-2-4">
                    <a className="home-product-item" href="#">
                      <div className="home-product-item-img"
                      // style={{ backgroundImage: URL('https://cf.shopee.vn/file/b4153b81509975505b560b9c753175d8') }}
                      >
                      </div>
                      <h4 className="home-product-item-name">Áo Thun Form Rộng Có Big Size Giá Rẻ
                        AP09(Áo Màu Hồng)</h4>
                      <div className="home-product-item-price">
                        <span className="home-product-item-price--old">1.200.000đ</span>
                        <span className="home-product-item-price--simble">999.000đ</span>
                      </div>
                      <div className="home-product-item-action">
                        <span className="home-product-item-like home-product-item-liked">
                          <i className=" home-product-item-like-no-like fa-solid fa-heart"></i>
                          <Icon.Hearts size={15} color="red" style={{}} className=" home-product-item-like  fa-solid fa-heart-circle-check" />
                          {/* <i className="home-product-item-like  fa-solid fa-heart-circle-check"></i> */}
                        </span>
                        <div className="home-product-item-rating">
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          {/* <i className="home-product-item-star--gold fa-solid fa-star"></i>
                          <i className="home-product-item-star--gold fa-solid fa-star"></i>
                          <i className="home-product-item-star--gold fa-solid fa-star"></i>
                          <i className="home-product-item-star--gold fa-solid fa-star"></i> */}
                          <Icon.Star size={15} color="gray" style={{}} className=" fa-solid fa-star" />
                        </div>
                        <span className="home-product-item-sold">895 đã bán</span>
                      </div>
                      <div className="home-product-item_origin">
                        <span className="home-product-item_brand">Whoo</span>
                        <span className="home-product-item_origin-name">Nhật Bản</span>

                      </div>
                      <div className="home-product-item_favourite">
                        <Icon.Check size={15} color="white" style={{}} className=" fa-solid fa-check" />
                        {/* <i className="fa-solid fa-check"></i> */}
                        <span>Yêu Thích</span>
                      </div>
                      <div className="home-product-item-sale-off">
                        <span className="home-product-item__sale-off-percent">38%</span>
                        <span className="home-product-item__sale-off-label">Giảm</span>

                      </div>
                    </a>
                  </div>
                  <div className="grid__column-2-4">
                    <a className="home-product-item" href="#">
                      <div className="home-product-item-img"
                      // style={{ backgroundImage: URL('https://cf.shopee.vn/file/b89ab7cca2d3506c71033d0d389b3c22') }}
                      >
                      </div>
                      <h4 className="home-product-item-name">Basic tee Oversize Ulzzang cá tính - Áo Thun
                        Unisex Nam Nữ SDVN BAD VIBES (V147)</h4>
                      <div className="home-product-item-price">
                        <span className="home-product-item-price--old">₫145.100</span>
                        <span className="home-product-item-price--simble">₫89.000</span>
                      </div>
                      <div className="home-product-item-action">
                        <span className="home-product-item-like home-product-item-liked">
                          <i className=" home-product-item-like-no-like fa-solid fa-heart"></i>
                          <Icon.Hearts size={15} color="red" style={{}} className=" home-product-item-like  fa-solid fa-heart-circle-check" />
                          {/* <i className="home-product-item-like  fa-solid fa-heart-circle-check"></i> */}
                        </span>
                        <div className="home-product-item-rating">
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          {/* <i className="home-product-item-star--gold fa-solid fa-star"></i>
                          <i className="home-product-item-star--gold fa-solid fa-star"></i>
                          <i className="home-product-item-star--gold fa-solid fa-star"></i>
                          <i className="home-product-item-star--gold fa-solid fa-star"></i> */}
                          <Icon.Star size={15} color="gray" style={{}} className=" fa-solid fa-star" />
                        </div>
                        <span className="home-product-item-sold">552 đã bán</span>
                      </div>
                      <div className="home-product-item_origin">
                        <span className="home-product-item_brand">Whoo</span>
                        <span className="home-product-item_origin-name">Viêt Nam</span>

                      </div>
                      <div className="home-product-item_favourite">
                        <Icon.Check size={15} color="white" style={{}} className=" fa-solid fa-check" />
                        {/* <i className="fa-solid fa-check"></i> */}
                        <span>Yêu Thích</span>
                      </div>
                      <div className="home-product-item-sale-off">
                        <span className="home-product-item__sale-off-percent">3%</span>
                        <span className="home-product-item__sale-off-label">Giảm</span>

                      </div>
                    </a>
                  </div>
                  <div className="grid__column-2-4">
                    <a className="home-product-item" href="#">
                      <div className="home-product-item-img"
                      // style={{ backgroundImage: URL('https://cf.shopee.vn/file/19d0e9c33983e6b6d715aea9bf7169f3') }}
                      >
                      </div>
                      <h4 className="home-product-item-name">Áo Thun Unisex Nam Nữ TEEZ - TZ1001 Form Rộng
                        Tay Lỡ Freesize</h4>
                      <div className="home-product-item-price">
                        <span className="home-product-item-price--old">₫109.000</span>
                        <span className="home-product-item-price--simble">₫115.000</span>
                      </div>
                      <div className="home-product-item-action">
                        <span className="home-product-item-like home-product-item-liked">
                          <i className=" home-product-item-like-no-like fa-solid fa-heart"></i>
                          <Icon.Hearts size={15} color="red" style={{}} className=" home-product-item-like  fa-solid fa-heart-circle-check" />
                          {/* <i className="home-product-item-like  fa-solid fa-heart-circle-check"></i> */}
                        </span>
                        <div className="home-product-item-rating">
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          {/* <i className="home-product-item-star--gold fa-solid fa-star"></i>
                          <i className="home-product-item-star--gold fa-solid fa-star"></i>
                          <i className="home-product-item-star--gold fa-solid fa-star"></i>
                          <i className="home-product-item-star--gold fa-solid fa-star"></i> */}
                          <Icon.Star size={15} color="gray" style={{}} className=" fa-solid fa-star" />
                        </div>
                        <span className="home-product-item-sold">4525 đã bán</span>
                      </div>
                      <div className="home-product-item_origin">
                        <span className="home-product-item_brand">Whoo</span>
                        <span className="home-product-item_origin-name">Hàn Quốc</span>

                      </div>
                      <div className="home-product-item_favourite">
                        <Icon.Check size={15} color="white" style={{}} className=" fa-solid fa-check" />
                        {/* <i className="fa-solid fa-check"></i> */}
                        <span>Yêu Thích</span>
                      </div>
                      <div className="home-product-item-sale-off">
                        <span className="home-product-item__sale-off-percent">30%</span>
                        <span className="home-product-item__sale-off-label">Giảm</span>

                      </div>
                    </a>

                  </div>
                  <div className="grid__column-2-4">
                    <a className="home-product-item" href="#">
                      <div className="home-product-item-img"
                      // style={{ backgroundImage: URL('https://cf.shopee.vn/file/5c64475c9c4ab9a4a344a4d5876e12ed') }}
                      >
                      </div>
                      <h4 className="home-product-item-name">Áo thun UNDER Hà Nội 36 Phố Phường - UTS002
                      </h4>
                      <div className="home-product-item-price">
                        <span className="home-product-item-price--old">₫250.000</span>
                        <span className="home-product-item-price--simble">180.000đ</span>
                      </div>
                      <div className="home-product-item-action">
                        <span className="home-product-item-like home-product-item-liked">
                          <i className=" home-product-item-like-no-like fa-solid fa-heart"></i>
                          <Icon.Hearts size={15} color="red" style={{}} className=" home-product-item-like  fa-solid fa-heart-circle-check" />
                          {/* <i className="home-product-item-like  fa-solid fa-heart-circle-check"></i> */}
                        </span>
                        <div className="home-product-item-rating">
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          {/* <i className="home-product-item-star--gold fa-solid fa-star"></i>
                          <i className="home-product-item-star--gold fa-solid fa-star"></i>
                          <i className="home-product-item-star--gold fa-solid fa-star"></i>
                          <i className="home-product-item-star--gold fa-solid fa-star"></i> */}
                          <Icon.Star size={15} color="gray" style={{}} className=" fa-solid fa-star" />
                        </div>
                        <span className="home-product-item-sold">888 đã bán</span>
                      </div>
                      <div className="home-product-item_origin">
                        <span className="home-product-item_brand">Whoo</span>
                        <span className="home-product-item_origin-name">Nhật Bản</span>

                      </div>
                      <div className="home-product-item_favourite">
                        <Icon.Check size={15} color="white" style={{}} className=" fa-solid fa-check" />
                        {/* <i className="fa-solid fa-check"></i> */}
                        <span>Yêu Thích</span>
                      </div>
                      <div className="home-product-item-sale-off">
                        <span className="home-product-item__sale-off-percent">3%</span>
                        <span className="home-product-item__sale-off-label">Giảm</span>

                      </div>
                    </a>
                  </div>
                  <div className="grid__column-2-4">
                    <a className="home-product-item" href="#">
                      <div className="home-product-item-img"
                      // style={{ backgroundImage: URL('https://cf.shopee.vn/file/7aa4ee812dad18635a6e92f3d44d48dd') }}
                      >
                      </div>
                      <h4 className="home-product-item-name">Máy in nhiệt Shoptida SP46 in đơn hàng, phiếu
                        gửi, minicode, logo tự dán, bảo hành 12 tháng</h4>
                      <div className="home-product-item-price">
                        <span className="home-product-item-price--old">1.200.000đ</span>
                        <span className="home-product-item-price--simble">999.000đ</span>
                      </div>
                      <div className="home-product-item-action">
                        <span className="home-product-item-like home-product-item-liked">
                          <i className=" home-product-item-like-no-like fa-solid fa-heart"></i>
                          <Icon.Hearts size={15} color="red" style={{}} className=" home-product-item-like  fa-solid fa-heart-circle-check" />
                          {/* <i className="home-product-item-like  fa-solid fa-heart-circle-check"></i> */}
                        </span>
                        <div className="home-product-item-rating">
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          {/* <i className="home-product-item-star--gold fa-solid fa-star"></i>
                          <i className="home-product-item-star--gold fa-solid fa-star"></i>
                          <i className="home-product-item-star--gold fa-solid fa-star"></i>
                          <i className="home-product-item-star--gold fa-solid fa-star"></i> */}
                          <Icon.Star size={15} color="gray" style={{}} className=" fa-solid fa-star" />
                        </div>
                        <span className="home-product-item-sold">88 đã bán</span>
                      </div>
                      <div className="home-product-item_origin">
                        <span className="home-product-item_brand">Whoo</span>
                        <span className="home-product-item_origin-name">Nhật Bản</span>

                      </div>
                      <div className="home-product-item_favourite">
                        <Icon.Check size={15} color="white" style={{}} className=" fa-solid fa-check" />
                        {/* <i className="fa-solid fa-check"></i> */}
                        <span>Yêu Thích</span>
                      </div>
                      <div className="home-product-item-sale-off">
                        <span className="home-product-item__sale-off-percent">3%</span>
                        <span className="home-product-item__sale-off-label">Giảm</span>

                      </div>
                    </a>
                  </div>
                  <div className="grid__column-2-4">
                    <a className="home-product-item" href="#">
                      <div className="home-product-item-img"
                      // style={{ backgroundImage: URL('https://cf.shopee.vn/file/3e448457563df3d39d6e5a93a879ced5') }}
                      >
                      </div>
                      <h4 className="home-product-item-name">Áo thun in hình FNI0669, Thun 100% COTTON -
                        form rộng UNISEX</h4>
                      <div className="home-product-item-price">
                        <span className="home-product-item-price--old">99.000đ</span>
                        <span className="home-product-item-price--simble">239.000đ</span>
                      </div>
                      <div className="home-product-item-action">
                        <span className="home-product-item-like home-product-item-liked">
                          <i className=" home-product-item-like-no-like fa-solid fa-heart"></i>
                          <Icon.Hearts size={15} color="red" style={{}} className=" home-product-item-like  fa-solid fa-heart-circle-check" />
                          {/* <i className="home-product-item-like  fa-solid fa-heart-circle-check"></i> */}
                        </span>
                        <div className="home-product-item-rating">
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          {/* <i className="home-product-item-star--gold fa-solid fa-star"></i>
                          <i className="home-product-item-star--gold fa-solid fa-star"></i>
                          <i className="home-product-item-star--gold fa-solid fa-star"></i>
                          <i className="home-product-item-star--gold fa-solid fa-star"></i> */}
                          <Icon.Star size={15} color="gray" style={{}} className=" fa-solid fa-star" />
                        </div>
                        <span className="home-product-item-sold">88 đã bán</span>
                      </div>
                      <div className="home-product-item_origin">
                        <span className="home-product-item_brand">Whoo</span>
                        <span className="home-product-item_origin-name">Nhật Bản</span>

                      </div>
                      <div className="home-product-item_favourite">
                        <Icon.Check size={15} color="white" style={{}} className=" fa-solid fa-check" />
                        {/* <i className="fa-solid fa-check"></i> */}
                        <span>Yêu Thích</span>
                      </div>
                      <div className="home-product-item-sale-off">
                        <span className="home-product-item__sale-off-percent">3%</span>
                        <span className="home-product-item__sale-off-label">Giảm</span>

                      </div>
                    </a>
                  </div>
                  <div className="grid__column-2-4">
                    <a className="home-product-item" href="#">
                      <div className="home-product-item-img"
                      // style={{ backgroundImage: URL('https://cf.shopee.vn/file/7428f238886a72e1d179f2dc9ea9ab5a') }}
                      >
                      </div>
                      <h4 className="home-product-item-name">Áo thun nam nữ tay lỡ form rộng chữ kiễu dơi
                        Monster vải dày mịn</h4>
                      <div className="home-product-item-price">
                        <span className="home-product-item-price--old">29.900đ</span>
                        <span className="home-product-item-price--simble">39.900đ</span>
                      </div>
                      <div className="home-product-item-action">
                        <span className="home-product-item-like home-product-item-liked">
                          <i className=" home-product-item-like-no-like fa-solid fa-heart"></i>
                          <Icon.Hearts size={15} color="red" style={{}} className=" home-product-item-like  fa-solid fa-heart-circle-check" />
                          {/* <i className="home-product-item-like  fa-solid fa-heart-circle-check"></i> */}
                        </span>
                        <div className="home-product-item-rating">
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          {/* <i className="home-product-item-star--gold fa-solid fa-star"></i>
                          <i className="home-product-item-star--gold fa-solid fa-star"></i>
                          <i className="home-product-item-star--gold fa-solid fa-star"></i>
                          <i className="home-product-item-star--gold fa-solid fa-star"></i> */}
                          <Icon.Star size={15} color="gray" style={{}} className=" fa-solid fa-star" />
                        </div>
                        <span className="home-product-item-sold">88 đã bán</span>
                      </div>
                      <div className="home-product-item_origin">
                        <span className="home-product-item_brand">Whoo</span>
                        <span className="home-product-item_origin-name">Nhật Bản</span>

                      </div>
                      <div className="home-product-item_favourite">
                        <Icon.Check size={15} color="white" style={{}} className=" fa-solid fa-check" />
                        {/* <i className="fa-solid fa-check"></i> */}
                        <span>Yêu Thích</span>
                      </div>
                      <div className="home-product-item-sale-off">
                        <span className="home-product-item__sale-off-percent">3%</span>
                        <span className="home-product-item__sale-off-label">Giảm</span>

                      </div>
                    </a>
                  </div>
                  <div className="grid__column-2-4">
                    <a className="home-product-item" href="#">
                      <div className="home-product-item-img"
                      // style={{ backgroundImage: URL('https://cf.shopee.vn/file/7e32e15551d9d4f181c1c73cfeef869e') }}
                      >
                      </div>
                      <h4 className="home-product-item-name">BST áo thun mùa hè thời trang Hàn Quốc cotton
                        vải dày mịn</h4>
                      <div className="home-product-item-price">
                        <span className="home-product-item-price--old">120.000đ</span>
                        <span className="home-product-item-price--simble">39.900đ</span>
                      </div>
                      <div className="home-product-item-action">
                        <span className="home-product-item-like home-product-item-liked">
                          <i className=" home-product-item-like-no-like fa-solid fa-heart"></i>
                          <Icon.Hearts size={15} color="red" style={{}} className=" home-product-item-like  fa-solid fa-heart-circle-check" />
                          {/* <i className="home-product-item-like  fa-solid fa-heart-circle-check"></i> */}
                        </span>
                        <div className="home-product-item-rating">
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          {/* <i className="home-product-item-star--gold fa-solid fa-star"></i>
                          <i className="home-product-item-star--gold fa-solid fa-star"></i>
                          <i className="home-product-item-star--gold fa-solid fa-star"></i>
                          <i className="home-product-item-star--gold fa-solid fa-star"></i> */}
                          <Icon.Star size={15} color="gray" style={{}} className=" fa-solid fa-star" />
                        </div>
                        <span className="home-product-item-sold"> đã bán</span>
                      </div>
                      <div className="home-product-item_origin">
                        <span className="home-product-item_brand">Whoo</span>
                        <span className="home-product-item_origin-name">Nhật Bản</span>

                      </div>
                      <div className="home-product-item_favourite">
                        <Icon.Check size={15} color="white" style={{}} className=" fa-solid fa-check" />
                        {/* <i className="fa-solid fa-check"></i> */}
                        <span>Yêu Thích</span>
                      </div>
                      <div className="home-product-item-sale-off">
                        <span className="home-product-item__sale-off-percent">3%</span>
                        <span className="home-product-item__sale-off-label">Giảm</span>

                      </div>
                    </a>
                  </div>
                  <div className="grid__column-2-4">
                    <a className="home-product-item" href="#">
                      <div className="home-product-item-img"
                      // style={{ backgroundImage: URL('https://cf.shopee.vn/file/2381810753643a441c42a8d9627e5403') }}
                      >
                      </div>
                      <h4 className="home-product-item-name">Áo Thun Dễ Thương Giá Rẻ AP09(Áo Màu
                        Hồng)</h4>
                      <div className="home-product-item-price">
                        <span className="home-product-item-price--old"> ₫178.000đ</span>
                        <span className="home-product-item-price--simble">₫75.000</span>
                      </div>
                      <div className="home-product-item-action">
                        <span className="home-product-item-like home-product-item-liked">
                          <i className=" home-product-item-like-no-like fa-solid fa-heart"></i>
                          <Icon.Hearts size={15} color="red" style={{}} className=" home-product-item-like  fa-solid fa-heart-circle-check" />
                          {/* <i className="home-product-item-like  fa-solid fa-heart-circle-check"></i> */}
                        </span>
                        <div className="home-product-item-rating">
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          {/* <i className="home-product-item-star--gold fa-solid fa-star"></i>
                          <i className="home-product-item-star--gold fa-solid fa-star"></i>
                          <i className="home-product-item-star--gold fa-solid fa-star"></i>
                          <i className="home-product-item-star--gold fa-solid fa-star"></i> */}
                          <Icon.Star size={15} color="gray" style={{}} className=" fa-solid fa-star" />
                        </div>
                        <span className="home-product-item-sold">585 đã bán</span>
                      </div>
                      <div className="home-product-item_origin">
                        <span className="home-product-item_brand">Whoo</span>
                        <span className="home-product-item_origin-name">Nhật Bản</span>

                      </div>
                      <div className="home-product-item_favourite">
                        <Icon.Check size={15} color="white" style={{}} className=" fa-solid fa-check" />
                        {/* <i className="fa-solid fa-check"></i> */}
                        <span>Yêu Thích</span>
                      </div>
                      <div className="home-product-item-sale-off">
                        <span className="home-product-item__sale-off-percent">26%</span>
                        <span className="home-product-item__sale-off-label">Giảm</span>

                      </div>
                    </a>
                  </div>
                  <div className="grid__column-2-4">
                    <a className="home-product-item" href="#">
                      <div className="home-product-item-img"
                      // style={{ backgroundImage: URL('https://cf.shopee.vn/file/b4153b81509975505b560b9c753175d8') }}
                      >
                      </div>
                      <h4 className="home-product-item-name">Áo Thun Form Rộng Có Big Size Giá Rẻ
                        AP09(Áo Màu Hồng)</h4>
                      <div className="home-product-item-price">
                        <span className="home-product-item-price--old">1.200.000đ</span>
                        <span className="home-product-item-price--simble">999.000đ</span>
                      </div>
                      <div className="home-product-item-action">
                        <span className="home-product-item-like home-product-item-liked">
                          <i className=" home-product-item-like-no-like fa-solid fa-heart"></i>
                          <Icon.Hearts size={15} color="red" style={{}} className=" home-product-item-like  fa-solid fa-heart-circle-check" />
                          {/* <i className="home-product-item-like  fa-solid fa-heart-circle-check"></i> */}
                        </span>
                        <div className="home-product-item-rating">
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          {/* <i className="home-product-item-star--gold fa-solid fa-star"></i>
                          <i className="home-product-item-star--gold fa-solid fa-star"></i>
                          <i className="home-product-item-star--gold fa-solid fa-star"></i>
                          <i className="home-product-item-star--gold fa-solid fa-star"></i> */}
                          <Icon.Star size={15} color="gray" style={{}} className=" fa-solid fa-star" />
                        </div>
                        <span className="home-product-item-sold">895 đã bán</span>
                      </div>
                      <div className="home-product-item_origin">
                        <span className="home-product-item_brand">Whoo</span>
                        <span className="home-product-item_origin-name">Nhật Bản</span>

                      </div>
                      <div className="home-product-item_favourite">
                        <Icon.Check size={15} color="white" style={{}} className=" fa-solid fa-check" />
                        {/* <i className="fa-solid fa-check"></i> */}
                        <span>Yêu Thích</span>
                      </div>
                      <div className="home-product-item-sale-off">
                        <span className="home-product-item__sale-off-percent">38%</span>
                        <span className="home-product-item__sale-off-label">Giảm</span>

                      </div>
                    </a>
                  </div>
                  <div className="grid__column-2-4">
                    <a className="home-product-item" href="#">
                      <div className="home-product-item-img"
                      // style={{ backgroundImage: URL('https://cf.shopee.vn/file/b89ab7cca2d3506c71033d0d389b3c22') }}
                      >
                      </div>
                      <h4 className="home-product-item-name">Basic tee Oversize Ulzzang cá tính - Áo Thun
                        Unisex Nam Nữ SDVN BAD VIBES (V147)</h4>
                      <div className="home-product-item-price">
                        <span className="home-product-item-price--old">₫145.100</span>
                        <span className="home-product-item-price--simble">₫89.000</span>
                      </div>
                      <div className="home-product-item-action">
                        <span className="home-product-item-like home-product-item-liked">
                          <i className=" home-product-item-like-no-like fa-solid fa-heart"></i>
                          <Icon.Hearts size={15} color="red" style={{}} className=" home-product-item-like  fa-solid fa-heart-circle-check" />
                          {/* <i className="home-product-item-like  fa-solid fa-heart-circle-check"></i> */}
                        </span>
                        <div className="home-product-item-rating">
                          <Icon.Star size={15} color="gray" style={{ color: '#FFCE3e' }} className=" home-product-item-star--gold fa-solid fa-star" />
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          {/* <i className="home-product-item-star--gold fa-solid fa-star"></i>
                          <i className="home-product-item-star--gold fa-solid fa-star"></i>
                          <i className="home-product-item-star--gold fa-solid fa-star"></i>
                          <i className="home-product-item-star--gold fa-solid fa-star"></i> */}
                          <Icon.Star size={15} color="gray" style={{}} className=" fa-solid fa-star" />
                        </div>
                        <span className="home-product-item-sold">552 đã bán</span>
                      </div>
                      <div className="home-product-item_origin">
                        <span className="home-product-item_brand">Whoo</span>
                        <span className="home-product-item_origin-name">Viêt Nam</span>

                      </div>
                      <div className="home-product-item_favourite">
                        <Icon.Check size={15} color="white" style={{}} className=" fa-solid fa-check" />
                        {/* <i className="fa-solid fa-check"></i> */}
                        <span>Yêu Thích</span>
                      </div>
                      <div className="home-product-item-sale-off">
                        <span className="home-product-item__sale-off-percent">3%</span>
                        <span className="home-product-item__sale-off-label">Giảm</span>

                      </div>
                    </a>
                  </div>
                  <div className="grid__column-2-4">
                    <a className="home-product-item" href="#">
                      <div className="home-product-item-img"
                      // style={{ backgroundImage: URL('https://cf.shopee.vn/file/b89ab7cca2d3506c71033d0d389b3c22') }}
                      >
                      </div>
                      <h4 className="home-product-item-name">Basic tee Oversize Ulzzang cá tính - Áo Thun
                        Unisex Nam Nữ SDVN BAD VIBES (V147)</h4>
                      <div className="home-product-item-price">
                        <span className="home-product-item-price--old">₫145.100</span>
                        <span className="home-product-item-price--simble">₫89.000</span>
                      </div>
                      <div className="home-product-item-action">
                        <span className="home-product-item-like home-product-item-liked">
                          <i className=" home-product-item-like-no-like fa-solid fa-heart"></i>
                          <Icon.Hearts size={15} color="red" style={{}} className=" home-product-item-like  fa-solid fa-heart-circle-check" />
                          {/* <i className="home-product-item-like  fa-solid fa-heart-circle-check"></i> */}
                        </span>
                        <div className="home-product-item-rating">
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          <Icon.Star size={15} color="gray" style={{}} className=" home-product-item-star--gold fa-solid fa-star" />
                          {/* <i className="home-product-item-star--gold fa-solid fa-star"></i>
                          <i className="home-product-item-star--gold fa-solid fa-star"></i>
                          <i className="home-product-item-star--gold fa-solid fa-star"></i>
                          <i className="home-product-item-star--gold fa-solid fa-star"></i> */}
                          <Icon.Star size={15} color="gray" style={{}} className=" fa-solid fa-star" />
                          {/* <i className="fa-solid fa-star"></i> */}
                        </div>
                        <span className="home-product-item-sold">552 đã bán</span>
                      </div>
                      <div className="home-product-item_origin">
                        <span className="home-product-item_brand">Whoo</span>
                        <span className="home-product-item_origin-name">Viêt Nam</span>

                      </div>
                      <div className="home-product-item_favourite">
                        <Icon.Check size={15} color="white" style={{}} className=" fa-solid fa-check" />
                        {/* <i className="fa-solid fa-check"></i> */}
                        <span>Yêu Thích</span>
                      </div>
                      <div className="home-product-item-sale-off">
                        <span className="home-product-item__sale-off-percent">3%</span>
                        <span className="home-product-item__sale-off-label">Giảm</span>

                      </div>
                    </a>
                  </div>

                </div>
              </div>
              <ul className="pagination grid__product--pagination">
                <li className="pagination-item ">
                  <a href="#" className="pagination--link">
                    <Icon.ChevronLeft size={15} color="gray" style={{}} className="pagination-item--icon fa-solid fa-chevron-left" />
                    {/* <i href="" className="pagination-item--icon fa-solid fa-chevron-left"></i> */}
                  </a>
                </li>
                <li className="pagination-item pagination-item-active">
                  <a href="#" className="pagination--link">1</a>
                </li>
                <li className="pagination-item">
                  <a href="#" className="pagination--link">2</a>
                </li>
                <li className="pagination-item">
                  <a href="#" className="pagination--link">3</a>
                </li>
                <li className="pagination-item">
                  <a href="#" className="pagination--link">4</a>
                </li>
                <li className="pagination-item">
                  <a href="#" className="pagination--link">2</a>
                </li>
                <li className="pagination-item">
                  <a href="#" className="pagination--link">...</a>
                </li>
                <li className="pagination-item">
                  <a href="#" className="pagination--link">14</a>
                </li>
                <li className="pagination-item">
                  <a href="#" className="pagination--link">
                    <Icon.ChevronRight size={15} color="gray" style={{}} className="pagination-item--icon fa-solid fa-chevron-right" />
                    {/* <i href="" className="pagination-item--icon fa-solid fa-chevron-right"></i> */}
                  </a>
                </li>
              </ul>

            </div>
          </div>
        </div>
        <div className="footer">
          <div className="grid">
            <div className="grid__row">
              <div className="grid__column-2-4">
                <h3 className="footer-heading">Chăm sóc khách hàng</h3>
                <ul className="footer-list">
                  <li className="footer-item">
                    <a href="" className="footer-item__link">Trung Tâm Trợ Giúp</a>
                  </li>
                  <li className="footer-item">
                    <a href="" className="footer-item__link">F8-shop Mall</a>
                  </li>
                  <li className="footer-item">
                    <a href="" className="footer-item__link">Hướng dẫn mua hàng</a>
                  </li>
                </ul>
              </div>
              <div className="grid__column-2-4">
                <h3 className="footer-heading">Giới thiệu</h3>
                <ul className="footer-list">
                  <li className="footer-item">
                    <a href="" className="footer-item__link">Giới thiệu</a>

                  </li>
                  <li className="footer-item">
                    <a href="" className="footer-item__link">Tuyển dụng </a>
                  </li>
                  <li className="footer-item">
                    <a href="" className="footer-item__link">Điều khoản</a>
                  </li>
                </ul>
              </div>
              <div className="grid__column-2-4">
                <h3 className="footer-heading">Địa chỉ </h3>
                <ul className="footer-list">
                  <li className="footer-item">
                    <a href="" className="footer-item__link">Giới thiệu</a>

                  </li>
                  <li className="footer-item">
                    <a href="" className="footer-item__link">Tuyển dụng </a>
                  </li>
                  <li className="footer-item">
                    <a href="" className="footer-item__link">Điều khoản</a>
                  </li>
                </ul>
              </div>
              <div className="grid__column-2-4">
                <h3 className="footer-heading">Theo dõi</h3>
                <ul className="footer-list">
                  <li className="footer-item">
                    <a href="" className="footer-item__link">
                      <Icon.Facebook size={14} color="gray" className=" fa-brands fa-facebook footer-item-icon" />
                      {/* <i className="fa-brands fa-facebook footer-item-icon"></i> */}
                      Facebook</a>
                  </li>
                  <li className="footer-item">

                    <a href="" className="footer-item__link">
                      <Icon.Instagram size={14} color="gray" className=" fa-brands fa-instagram-square footer-item-icon" />
                      {/* <i
                        className="fa-brands fa-instagram-square footer-item-icon"></i> */}
                      Instagram</a>
                  </li>
                  <li className="footer-item">
                    <a href="" className="footer-item__link">
                      <Icon.Linkedin size={14} color="gray" className=" fa-brands fa-linkedin footer-item-icon" />
                      {/* <i
                      className="fa-brands fa-linkedin footer-item-icon"></i> */}
                      Linkedin</a>
                  </li>
                </ul>
              </div>
              {/* <!-- git --> */}
              <div className="grid__column-2-4">
                <h3 className="footer-heading">Vào của hàng trên ứng dụng</h3>
                <div className="footer-downlod">
                  <img className="footer-download-img" />
                  <div className="footer-download__App">
                    <a href="#" className="download-link">
                      <img
                        className="footer-download__img" /></a>
                    <a href="#" className="download-lick"><img
                      className="footer-download__img-appstore" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-row footer-wrap">
              <div className="footer-heading">
                <ul className="footer-heading-list">
                  <li className="heading-item">
                    <a href="#" className="heading-item-link">Chính sách bảo mật</a>
                  </li>
                  <li className="heading-item">
                    <a href="#" className="heading-item-link">Quy chế hoạt đông</a>
                  </li>
                  <li className="heading-item">
                    <a href="#" className="heading-item-link">Chính sách vận chuyển</a>
                  </li>
                  <li className="heading-item">
                    <a href="#" className="heading-item-link">Chính sách hoàn tiền trả hàng</a>
                  </li>
                </ul>
              </div>
              <div className="footer-child-mark">
                <img className="mark-img" />
                <span>Công ty TNHH TICKID</span>
                <p className="mark-locati">Địa chỉ : số 29 đường Liễu Giai, Phường Ngọc Khánh, Quận Ba Đình,
                  Thành phố Hà Nội, Việt Nam</p>
                <p className="mark-locati">Mã số doanh nghiệp:0106773786 do sở Kế hoạch {'&'} Đầu tư TP Hà Nội cấp
                  lần đầu ngày 10/02/2015</p>
                <p className="mark-locati">Địa chỉ :118/1/9 Đ. Lê Văn Thọ, Phường 11, Gò Vấp, Thành phố Hồ Chí
                  Minh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
