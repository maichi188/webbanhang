// =========================================================================
// PHẦN 1: CƠ SỞ DỮ LIỆU (DATABASE) - CHỈNH SỬA SẢN PHẨM Ở ĐÂY
// =========================================================================

let tuDienMauSac = { 
    "ao1": ["trắng", "đen"], "ao2": ["trắng", "xanh"], "ao3": ["be", "xanh"], "ao4": ["be", "xanh"], "ao5": ["trắng", "xanh"], 
    "ao6": ["hồng", "trắng"], "ao7": ["cam", "xanh"], "ao8": ["trắng hồng", "trắng xanh"], "ao9": ["trắng", "xanh"], 
    "ao10": ["hồng", "tím"], "ao11": ["be", "tím"], "ao12": ["đen", "xanh"], "ao13": ["be", "đỏ"], "ao14": ["đen", "đỏ"], 
    "ao15": ["trắng", "xanh"], "macDinh": ["màu 1", "màu 2"] 
};

// =========================================================================
// KHO SẢN PHẨM - NƠI BẠN TỰ CHỈNH SỬA
//  - tonKho: số lượng còn trong kho theo TỪNG MÀU và TỪNG SIZE. Muốn đổi, chỉ cần sửa con số.
//    Ví dụ  "đen": { M: 20 }  nghĩa là áo màu đen size M còn 20 chiếc. Đặt  0  thì hiện "Hết hàng".
//  - Tên màu viết thường, và phải trùng với tên trong file ảnh ("chi tiết sp/ao1_đen.png" thì viết "đen").
//    Thêm màu mới = thêm một dòng màu mới. Bớt màu = xóa dòng đó (danh sách nút màu tự theo đây).
//  - Một sản phẩm hết hàng ở ngoài Trang chủ khi TẤT CẢ màu và TẤT CẢ size đều bằng 0.
//  - gia: giá gốc (đồng). giamGia: phần trăm giảm (0 = không giảm).
// =========================================================================
const DANH_SACH_SIZE = ["XS", "S", "M", "L", "XL"];
const NGUONG_SAP_HET = 5; // size còn từ số này trở xuống sẽ hiện cảnh báo "sắp hết"
let khoSanPham = [
    // boSuuTap: 1
    { anh: "quần áo/ao1.png", ten: "Áo Polo Nữ Thể Thao", gia: 200000, giamGia: 0, boSuuTap: 1,
        tonKho: {
            "trắng": { XS: 8, S: 15, M: 23, L: 19, XL: 11 },
            "đen": { XS: 7, S: 15, M: 23, L: 18, XL: 11 }
        } },
    { anh: "quần áo/ao2.png", ten: "Áo Polo Thể Thao Nam", gia: 250000, giamGia: 10, boSuuTap: 1,
        tonKho: {
            "trắng": { XS: 10, S: 20, M: 30, L: 25, XL: 15 },
            "xanh": { XS: 10, S: 20, M: 30, L: 25, XL: 15 }
        } },
    { anh: "quần áo/ao3.png", ten: "Áo Polo Nữ Dáng Ngắn", gia: 300000, giamGia: 0, boSuuTap: 1,
        tonKho: {
            "be": { XS: 3, S: 5, M: 8, L: 6, XL: 4 },
            "xanh": { XS: 2, S: 5, M: 8, L: 6, XL: 3 }
        } },
    { anh: "quần áo/ao4.png", ten: "Áo Polo Nam Cổ V", gia: 280000, giamGia: 0, boSuuTap: 1,
        tonKho: {
            "be": { XS: 4, S: 8, M: 12, L: 10, XL: 6 },
            "xanh": { XS: 4, S: 8, M: 12, L: 10, XL: 6 }
        } },
    { anh: "quần áo/ao5.png", ten: "Áo Polo Nam Mắt Chim Cơ Bản", gia: 320000, giamGia: 20, boSuuTap: 1,
        tonKho: {
            "trắng": { XS: 6, S: 12, M: 18, L: 15, XL: 9 },
            "xanh": { XS: 6, S: 12, M: 18, L: 15, XL: 9 }
        } },
    
    // boSuuTap: 2
    { anh: "quần áo/ao6.png", ten: "Áo Thun Thể Thao Nữ", gia: 150000, giamGia: 50, boSuuTap: 2,
        tonKho: {
            "hồng": { XS: 15, S: 30, M: 45, L: 38, XL: 23 },
            "trắng": { XS: 15, S: 30, M: 45, L: 37, XL: 22 }
        } },
    { anh: "quần áo/ao7.png", ten: "Áo Polo Nữ Ponte Roma Cool Dáng Suông", gia: 180000, giamGia: 50, boSuuTap: 2,
        tonKho: {
            "cam": { XS: 2, S: 5, M: 8, L: 6, XL: 3 },
            "xanh": { XS: 2, S: 4, M: 7, L: 5, XL: 3 }
        } },
    { anh: "quần áo/ao8.png", ten: "Áo Polo Thể Thao Nữ Ponte Roma Cool", gia: 190000, giamGia: 50, boSuuTap: 2,
        tonKho: {
            "trắng hồng": { XS: 5, S: 9, M: 14, L: 11, XL: 7 },
            "trắng xanh": { XS: 4, S: 9, M: 14, L: 11, XL: 6 }
        } },
    { anh: "quần áo/ao9.png", ten: "Áo Polo Nữ Ponte Roma Cool phối lưới", gia: 220000, giamGia: 50, boSuuTap: 2,
        tonKho: {
            "trắng": { XS: 3, S: 6, M: 9, L: 8, XL: 5 },
            "xanh": { XS: 3, S: 6, M: 9, L: 7, XL: 4 }
        } },
    { anh: "quần áo/ao10.png", ten: "Áo Polo Nữ waffle co giãn dây dệt vai", gia: 350000, giamGia: 50, boSuuTap: 2,
        tonKho: {
            "hồng": { XS: 1, S: 1, M: 2, L: 1, XL: 1 },
            "tím": { XS: 0, S: 1, M: 2, L: 1, XL: 0 }
        } },
    
    // boSuuTap: 3
    { anh: "quần áo/ao11.png", ten: "Áo Thun Nữ Dream Team", gia: 380000, giamGia: 0, boSuuTap: 3,
        tonKho: {
            "be": { XS: 13, S: 25, M: 38, L: 31, XL: 19 },
            "tím": { XS: 12, S: 25, M: 38, L: 31, XL: 18 }
        } },
    { anh: "quần áo/ao12.png", ten: "Áo Thun Cổ Tim Dream Team", gia: 320000, giamGia: 0, boSuuTap: 3,
        tonKho: {
            "đen": { XS: 9, S: 18, M: 27, L: 23, XL: 14 },
            "xanh": { XS: 9, S: 18, M: 27, L: 22, XL: 13 }
        } },
    { anh: "quần áo/ao13.png", ten: "Áo Thun Nam Dream Team", gia: 450000, giamGia: 0, boSuuTap: 3,
        tonKho: {
            "be": { XS: 4, S: 8, M: 12, L: 9, XL: 6 },
            "đỏ": { XS: 3, S: 7, M: 12, L: 9, XL: 5 }
        } },
    { anh: "quần áo/ao14.png", ten: "Áo Thun Cổ Tim Dream Team", gia: 280000, giamGia: 0, boSuuTap: 3,
        tonKho: {
            "đen": { XS: 20, S: 40, M: 60, L: 50, XL: 30 },
            "đỏ": { XS: 20, S: 40, M: 60, L: 50, XL: 30 }
        } },
    { anh: "quần áo/ao15.png", ten: "Áo Thun Nam Dream Team", gia: 499000, giamGia: 0, boSuuTap: 3,
        tonKho: {
            "trắng": { XS: 1, S: 3, M: 5, L: 3, XL: 2 },
            "xanh": { XS: 1, S: 2, M: 4, L: 3, XL: 1 }
        } }
];

// TỰ ĐỘNG TÍNH TỒN KHO THỰC TẾ THEO TỪNG MÀU VÀ TỪNG SIZE DỰA VÀO LỊCH SỬ ĐÃ BÁN
let hangDaBan = JSON.parse(localStorage.getItem('daBanTheoMauSize_FashionShop') || "{}");
function khoaDaBan(tenSP, mau, size) { return tenSP + '||' + mau + '||' + size; }
khoSanPham.forEach(sp => {
    sp.tonKhoHienTai = {}; sp.tongTonKhoHienTai = 0;
    Object.keys(sp.tonKho || {}).forEach(tenMau => {
        let mau = tenMau.toLowerCase(); sp.tonKhoHienTai[mau] = {};
        DANH_SACH_SIZE.forEach(size => {
            let daBan = hangDaBan[khoaDaBan(sp.ten, mau, size)] || 0;
            let conLai = ((sp.tonKho[tenMau] && sp.tonKho[tenMau][size]) ? sp.tonKho[tenMau][size] : 0) - daBan;
            if (conLai < 0) conLai = 0;
            sp.tonKhoHienTai[mau][size] = conLai; sp.tongTonKhoHienTai += conLai;
        });
    });
});
// Tách "Tên (Size: M, Màu: Trắng)" thành tên gốc, size và màu (màu viết thường để tra kho)
function tachTenVaSize(tenMon) {
    let khop = String(tenMon).match(/^(.*?) \(Size: ([^,)]*), Màu: ([^)]*)\)$/);
    if (khop) return { ten: khop[1], size: khop[2].trim(), mau: khop[3].trim().toLowerCase() };
    return { ten: String(tenMon).split(' (Size')[0], size: null, mau: null };
}
// Bỏ dấu tiếng Việt và chữ hoa để tìm kiếm không phụ thuộc cách gõ: "Áo" = "ao" = "AO", "đen" = "den"
function boDauTiengViet(chuoi) {
    return String(chuoi).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd');
}
// Số lượng còn lại. Truyền null ở màu hoặc size nghĩa là "cộng tất cả"
function layTonKho(sp, mau, size) {
    if (!sp) return 0;
    let tong = 0;
    Object.keys(sp.tonKhoHienTai).forEach(m => {
        if (mau != null && m !== mau) return;
        DANH_SACH_SIZE.forEach(s => { if (size != null && s !== size) return; tong += sp.tonKhoHienTai[m][s] || 0; });
    });
    return tong;
}


// =========================================================================
// PHẦN 2: TỰ ĐỘNG VẼ GIAO DIỆN (HEADER, MEGA MENU, FOOTER, MODALS)
// =========================================================================

const htmlHeader = `
<header class="hd" id="hd">
    <div class="hd-trai">
        <button id="nut-danh-muc" class="hd-nut-danh-muc" aria-label="Mở danh mục sản phẩm">
            <span class="hd-icon-menu">☰</span><span class="hd-chu-danh-muc">Danh mục</span>
        </button>
        <div class="hd-tim">
            <span class="hd-tim-icon" aria-hidden="true">🔍</span>
            <input type="text" id="o-tim-kiem" placeholder="Tìm kiếm sản phẩm..." autocomplete="off" aria-label="Tìm kiếm sản phẩm">
            <div id="goi-y-tim-kiem" class="hd-goi-y"></div>
        </div>
    </div>

    <a href="index.html" class="hd-logo"><h1>Fashion Shop</h1></a>

    <div class="khu-vuc-gio-hang">
        <button id="nut-mo-modal-tai-khoan" class="hd-nut-tai-khoan">👤 Đăng nhập</button>
        <a href="giohang.html" class="hd-nut-gio">🛒 <span class="hd-chu-gio">Giỏ hàng</span><span id="so-luong-mon" class="hd-so-luong">0</span></a>
    </div>
    <div id="mega-menu">
        <div class="mega-menu-container">
            <div class="mega-menu-top-links">
                <span onclick="window.location.href='timkiem.html?timkiem=' + encodeURIComponent('BST POLO CHẠM THU')">🧥 BST POLO CHẠM THU</span>
                <span onclick="window.location.href='timkiem.html?timkiem=' + encodeURIComponent('CỬA HÀNG')">🏪 CỬA HÀNG</span>
                <span onclick="window.location.href='timkiem.html?timkiem=' + encodeURIComponent('TIN TỨC')">📰 TIN TỨC</span>
                <span onclick="window.location.href='index.html#bo-suu-tap-1'; document.getElementById('mega-menu').style.display='none'; document.getElementById('mega-menu-backdrop').style.display='none';">✨ MỚI VỀ</span>
                <span style="color: #e30019; background: #ffe6e8;" onclick="window.location.href='index.html#bo-suu-tap-2'; document.getElementById('mega-menu').style.display='none'; document.getElementById('mega-menu-backdrop').style.display='none';">🔥 ƯU ĐÃI KHỦNG</span>
                <span onclick="window.location.href='index.html#bo-suu-tap-3'; document.getElementById('mega-menu').style.display='none'; document.getElementById('mega-menu-backdrop').style.display='none';">👕 T-SHIRT</span>
            </div>
            
            <div class="mega-menu-columns">
                <div class="mega-col">
                    <h3>NAM</h3>
                    <div class="mega-item" onclick="window.location.href='timkiem.html?timkiem=' + encodeURIComponent('Áo chống nắng nam')"><div class="mega-item-trai"><img class="mega-item-icon" src="ảnh danh mục/áo chống nắng nam.png"> Áo chống nắng nam</div><span>></span></div>
                    <div class="mega-item" onclick="window.location.href='timkiem.html?timkiem=' + encodeURIComponent('Áo khoác nam')"><div class="mega-item-trai"><img class="mega-item-icon" src="ảnh danh mục/áo khoác nam.png"> Áo khoác nam</div><span>></span></div>
                    <div class="mega-item" onclick="window.location.href='timkiem.html?timkiem=' + encodeURIComponent('Áo nam')"><div class="mega-item-trai"><img class="mega-item-icon" src="ảnh danh mục/áo nam.png"> Áo nam</div><span>></span></div>
                    <div class="mega-item" onclick="window.location.href='timkiem.html?timkiem=' + encodeURIComponent('Quần nam')"><div class="mega-item-trai"><img class="mega-item-icon" src="ảnh danh mục/quần nam.png"> Quần nam</div><span>></span></div>
                    <div class="mega-item" onclick="window.location.href='timkiem.html?timkiem=' + encodeURIComponent('Đồ thể thao nam')"><div class="mega-item-trai"><img class="mega-item-icon" src="ảnh danh mục/đồ thể thao nam.png"> Đồ thể thao nam</div><span>></span></div>
                </div>
                <div class="mega-col">
                    <h3>NỮ</h3>
                    <div class="mega-item" onclick="window.location.href='timkiem.html?timkiem=' + encodeURIComponent('Áo chống nắng nữ')"><div class="mega-item-trai"><img class="mega-item-icon" src="ảnh danh mục/áo chống nắng nữ.png"> Áo chống nắng nữ</div><span>></span></div>
                    <div class="mega-item" onclick="window.location.href='timkiem.html?timkiem=' + encodeURIComponent('Áo khoác nữ')"><div class="mega-item-trai"><img class="mega-item-icon" src="ảnh danh mục/áo khoác nữ.png"> Áo khoác nữ</div><span>></span></div>
                    <div class="mega-item" onclick="window.location.href='timkiem.html?timkiem=' + encodeURIComponent('Áo nữ')"><div class="mega-item-trai"><img class="mega-item-icon" src="ảnh danh mục/áo nữ.png"> Áo nữ</div><span>></span></div>
                    <div class="mega-item" onclick="window.location.href='timkiem.html?timkiem=' + encodeURIComponent('Quần nữ')"><div class="mega-item-trai"><img class="mega-item-icon" src="ảnh danh mục/quần nữ.png"> Quần nữ</div><span>></span></div>
                    <div class="mega-item" onclick="window.location.href='timkiem.html?timkiem=' + encodeURIComponent('Đầm và chân váy nữ')"><div class="mega-item-trai"><img class="mega-item-icon" src="ảnh danh mục/đầm và chân váy nữ.png"> Đầm và chân váy nữ</div><span>></span></div>
                </div>
                <div class="mega-col">
                    <h3>TRẺ EM</h3>
                    <div class="mega-item" onclick="window.location.href='timkiem.html?timkiem=' + encodeURIComponent('Áo khoác trẻ em')"><div class="mega-item-trai"><img class="mega-item-icon" src="ảnh danh mục/áo khoác trẻ em.png"> Áo khoác trẻ em</div><span>></span></div>
                    <div class="mega-item" onclick="window.location.href='timkiem.html?timkiem=' + encodeURIComponent('Áo trẻ em')"><div class="mega-item-trai"><img class="mega-item-icon" src="ảnh danh mục/áo trẻ em.png"> Áo trẻ em</div><span>></span></div>
                    <div class="mega-item" onclick="window.location.href='timkiem.html?timkiem=' + encodeURIComponent('Quần trẻ em')"><div class="mega-item-trai"><img class="mega-item-icon" src="ảnh danh mục/quần trẻ em.png"> Quần trẻ em</div><span>></span></div>
                    <div class="mega-item" onclick="window.location.href='timkiem.html?timkiem=' + encodeURIComponent('Đồ bộ trẻ em')"><div class="mega-item-trai"><img class="mega-item-icon" src="ảnh danh mục/đồ bộ trẻ em.png"> Đồ bộ trẻ em</div><span>></span></div>
                    <div class="mega-item" onclick="window.location.href='timkiem.html?timkiem=' + encodeURIComponent('Phụ kiện trẻ em')"><div class="mega-item-trai"><img class="mega-item-icon" src="ảnh danh mục/phụ kiện trẻ em.png"> Phụ kiện trẻ em</div><span>></span></div>
                </div>
                <div class="mega-col">
                    <h3 style="border-bottom: none;">BỘ SƯU TẬP</h3>
                    <div class="mega-col-banners">
                        <img src="km/km1.png" alt="BST 1" onclick="window.location.href='index.html#bo-suu-tap-1'; document.getElementById('mega-menu').style.display='none'; document.getElementById('mega-menu-backdrop').style.display='none';">
                        <img src="km/km2.png" alt="BST 2" onclick="window.location.href='index.html#bo-suu-tap-2'; document.getElementById('mega-menu').style.display='none'; document.getElementById('mega-menu-backdrop').style.display='none';">
                        <img src="km/km3.png" alt="BST 3" onclick="window.location.href='index.html#bo-suu-tap-3'; document.getElementById('mega-menu').style.display='none'; document.getElementById('mega-menu-backdrop').style.display='none';">
                    </div>
                </div>
            </div>
            <button class="nut-dong-mega" id="nut-dong-mega">✕ Đóng</button>
        </div>
    </div>
</header>
<div id="mega-menu-backdrop"></div>
`;

const htmlFooterVaModals = `
<!-- BẢNG KÍCH THƯỚC -->
<div id="modal-bang-size" class="cua-so-noi" role="dialog" aria-modal="true" aria-labelledby="tieu-de-bang-size">
    <div class="noi-dung-cua-so cua-so-rong">
        <div class="cua-so-dau"><h3 id="tieu-de-bang-size">Bảng kích thước</h3><span id="nut-dong-size" class="nut-dong" role="button" tabindex="0" aria-label="Đóng">&times;</span></div>
        <div class="bang-size">
            <div class="luu-y-doi-tra"><span>🔄</span><span>Không hài lòng, <b>đổi trả trong 30 ngày</b></span></div>
            <div class="cac-tab-size">
                <button type="button" class="tab-size-btn active" data-tab="tab-nam">Nam</button><button type="button" class="tab-size-btn" data-tab="tab-nu">Nữ</button><button type="button" class="tab-size-btn" data-tab="tab-tre-em">Trẻ em</button><button type="button" class="tab-size-btn" data-tab="tab-phu-kien">Phụ kiện</button>
            </div>
            <div id="tab-nam" class="tab-noi-dung" style="display: block;"><h4>Áo Nam</h4><div class="bang-cuon"><table><thead><tr><th>Kích thước</th><th>S</th><th>M</th><th>L</th><th>XL</th></tr></thead><tbody><tr><td>Chiều cao</td><td>160-165</td><td>160-165</td><td>166-172</td><td>172-177</td></tr><tr><td>Cân nặng</td><td>50-54</td><td>55-61</td><td>62-68</td><td>69-75</td></tr><tr><td>Rộng Vai</td><td>41</td><td>42</td><td>43,5</td><td>45</td></tr></tbody></table></div></div>
            <div id="tab-nu" class="tab-noi-dung" style="display: none;"><h4>Áo Nữ</h4><div class="bang-cuon"><table><thead><tr><th>Kích thước</th><th>S</th><th>M</th><th>L</th><th>XL</th></tr></thead><tbody><tr><td>Chiều cao</td><td>150-155</td><td>156-160</td><td>160-164</td><td>165-170</td></tr><tr><td>Cân nặng</td><td>43-46</td><td>46-53</td><td>53-57</td><td>58-65</td></tr><tr><td>Vòng ngực</td><td>78-82</td><td>84-88</td><td>88-92</td><td>93-97</td></tr></tbody></table></div></div>
            <div id="tab-tre-em" class="tab-noi-dung" style="display: none;"><h4>Quần Áo Trẻ Em</h4><div class="bang-cuon"><table><thead><tr><th>Độ tuổi</th><th>2-3T</th><th>4-5T</th><th>6-7T</th><th>8-9T</th></tr></thead><tbody><tr><td>Chiều cao</td><td>90-98</td><td>100-110</td><td>112-122</td><td>125-130</td></tr><tr><td>Cân nặng</td><td>12-14</td><td>15-18</td><td>19-22</td><td>23-26</td></tr></tbody></table></div></div>
            <div id="tab-phu-kien" class="tab-noi-dung" style="display: none;"><h4>Phụ Kiện (Mũ, Tất...)</h4><div class="phu-kien-ghi-chu"><p>Sản phẩm Freesize. Điều chỉnh dễ dàng qua quai mũ hoặc độ giãn vải.</p></div></div>
        </div>
    </div>
</div>

<!-- TÀI KHOẢN VÀ LỊCH SỬ GIAO DỊCH -->
<div id="modal-tai-khoan" class="cua-so-noi" role="dialog" aria-modal="true" aria-labelledby="tieu-de-tai-khoan">
    <div class="noi-dung-cua-so cua-so-hep">
        <span id="nut-dong-modal" class="nut-dong" role="button" tabindex="0" aria-label="Đóng">&times;</span>
        <h2 id="tieu-de-tai-khoan" class="tieu-de-cua-so">Khách Hàng</h2>
        <div id="form-dang-nhap">
            <input type="text" id="ten-dang-nhap" class="o-nhap" placeholder="Tên tài khoản" autocomplete="username" aria-label="Tên tài khoản">
            <div class="o-mat-khau">
                <input type="password" id="mat-khau" class="o-nhap" placeholder="Mật khẩu" autocomplete="current-password" aria-label="Mật khẩu">
                <button type="button" id="nut-hien-mat-khau" class="nut-hien-mk" aria-label="Hiện mật khẩu">Hiện</button>
            </div>
            <div id="loi-dang-nhap" class="thong-diep-cua-so" role="alert"></div>
            <div class="hang-nut-cua-so">
                <button type="button" id="nut-dang-ky" class="nut-cua-so-phu">Đăng ký</button>
                <button type="button" id="nut-dang-nhap" class="nut-cua-so-chinh">Đăng nhập</button>
            </div>
        </div>
        <div id="thong-tin-nguoi-dung" style="display: none;">
            <div class="khung-nguoi-dung">
                <div id="avatar-nguoi-dung" class="avatar-nguoi-dung">K</div>
                <p class="chao-nguoi-dung">Xin chào, <b id="ten-nguoi-dung">Khách</b>!</p>
            </div>
            <button type="button" id="nut-xem-lich-su" class="nut-cua-so-chinh">📦 Lịch sử giao dịch</button>
            <button type="button" id="nut-dang-xuat" class="nut-cua-so-phu">Đăng xuất</button>
        </div>
    </div>
</div>

<!-- CỬA SỔ LỊCH SỬ -->
<div id="modal-lich-su" class="cua-so-noi" role="dialog" aria-modal="true" aria-labelledby="tieu-de-lich-su">
    <div class="noi-dung-cua-so cua-so-vua">
        <span id="nut-dong-lich-su" class="nut-dong" role="button" tabindex="0" aria-label="Đóng">&times;</span>
        <h2 id="tieu-de-lich-su" class="tieu-de-cua-so">Lịch Sử Đơn Hàng</h2>
        <div id="danh-sach-lich-su" class="danh-sach-lich-su"></div>
    </div>
</div>

<!-- CỬA SỔ XÁC NHẬN XÓA -->
<div id="modal-xac-nhan-xoa" class="cua-so-noi" role="alertdialog" aria-modal="true" aria-labelledby="tieu-de-xac-nhan">
    <div class="noi-dung-cua-so cua-so-nho">
        <div class="bieu-tuong-canh-bao">⚠️</div>
        <h3 id="tieu-de-xac-nhan" class="tieu-de-xac-nhan">Xác Nhận</h3>
        <p id="noi-dung-xac-nhan" class="noi-dung-xac-nhan"></p>
        <div class="hang-nut-cua-so">
            <button type="button" id="nut-huy-xoa" class="nut-cua-so-phu">Hủy</button>
            <button type="button" id="nut-dong-y-xoa" class="nut-cua-so-nguy-hiem">Xóa ngay</button>
        </div>
    </div>
</div>

<footer>
    <div class="footer-cam-ket">
        <div class="footer-cam-ket-muc"><span class="fck-icon">🔄</span><div><b>Đổi trả trong 30 ngày</b><span>Không hài lòng, đổi trả dễ dàng</span></div></div>
        <div class="footer-cam-ket-muc"><span class="fck-icon">🚚</span><div><b>Freeship đơn từ 498k</b><span>Giao hàng trong 3-5 ngày</span></div></div>
        <div class="footer-cam-ket-muc"><span class="fck-icon">🛡️</span><div><b>Bảo mật thông tin</b><span>Cam kết bảo mật dữ liệu khách hàng</span></div></div>
    </div>
    <div class="footer-container">
        <div class="footer-cot"><h4>Về Fashion Shop</h4><p>Với sứ mệnh "Đưa sản phẩm thời trang Việt có chất liệu tốt, dịch vụ tốt đến tận tay khách hàng", chúng tôi luôn nỗ lực không ngừng từng ngày.</p></div>
        <div class="footer-cot"><h4>Hỗ Trợ Khách Hàng</h4><a href="#" class="nut-mo-size-footer">Hướng dẫn chọn size</a><a href="#">Chính sách khách hàng</a><a href="#">Đổi trả 30 ngày</a></div>
        <div class="footer-cot"><h4>Liên Hệ</h4><p>📍 <a href="https://www.google.com/maps/search/?api=1&amp;query=H%C3%A0%20%C4%90%C3%B4ng%2C%20H%C3%A0%20N%E1%BB%99i" target="_blank" rel="noopener">Hà Đông, Hà Nội</a></p><p>📞 <a href="tel:0987654321">0987.654.321</a></p></div>
    </div><div class="footer-bottom">&copy; 2026 Cửa Hàng Thời Trang Fashion Shop. Thiết kế độc quyền.</div>
</footer>
<button id="nut-len-dau-trang" aria-label="Lên đầu trang">↑</button>
`;
document.body.insertAdjacentHTML('afterbegin', htmlHeader);
document.body.insertAdjacentHTML('beforeend', htmlFooterVaModals);

// =========================================================================
// PHẦN 2B: HEADER THÔNG MINH (THU GỌN KHI CUỘN - GỢI Ý TÌM KIẾM - SỐ GIỎ NẢY)
// =========================================================================
(function() {
    // 1. Header thu gọn khi cuộn xuống (có độ trễ để không bị giật)
    const header = document.getElementById('hd');
    if (header) {
        const khiCuon = function() {
            if (window.scrollY > 60) header.classList.add('thu-gon');
            else if (window.scrollY < 20) header.classList.remove('thu-gon');
        };
        window.addEventListener('scroll', khiCuon, { passive: true });
        khiCuon();
    }

    // 2. Số trên nút giỏ hàng nảy lên mỗi khi thay đổi
    const oSoLuong = document.getElementById('so-luong-mon');
    if (oSoLuong && 'MutationObserver' in window) {
        setTimeout(function() {
            let giaTriCu = oSoLuong.textContent;
            new MutationObserver(function() {
                if (oSoLuong.textContent === giaTriCu) return;
                giaTriCu = oSoLuong.textContent;
                oSoLuong.classList.remove('nay'); void oSoLuong.offsetWidth; oSoLuong.classList.add('nay');
            }).observe(oSoLuong, { childList: true, characterData: true, subtree: true });
        }, 0);
    }

    // 3. Gợi ý tìm kiếm tức thì
    const oTim = document.getElementById('o-tim-kiem');
    const hopGoiY = document.getElementById('goi-y-tim-kiem');
    if (oTim && hopGoiY && typeof khoSanPham !== 'undefined') {
        let viTriChon = -1;
        const thoatHTML = function(s) { return String(s).replace(/[&<>"']/g, function(c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
        const tinhGia = function(sp) { return sp.giamGia > 0 ? sp.gia * (1 - sp.giamGia / 100) : sp.gia; };
        const dinhDangTien = function(so) { return so.toLocaleString('vi-VN') + ' đ'; };
        const layCacDong = function() { return hopGoiY.querySelectorAll('.hd-goi-y-dong, .hd-goi-y-xem-het'); };
        const dongGoiY = function() { hopGoiY.classList.remove('mo'); viTriChon = -1; };
        const danhDauDong = function(viTriMoi) {
            const cacDong = layCacDong(); if (cacDong.length === 0) return;
            cacDong.forEach(function(d) { d.classList.remove('chon'); });
            viTriChon = (viTriMoi + cacDong.length) % cacDong.length;
            cacDong[viTriChon].classList.add('chon');
        };

        const veGoiY = function() {
            const tuKhoa = oTim.value.trim();
            viTriChon = -1;
            if (tuKhoa === '') { dongGoiY(); return; }
            const cacTu = boDauTiengViet(tuKhoa).split(' ').filter(function(t) { return t.trim() !== ''; });
            const ketQua = khoSanPham.filter(function(sp) { const ten = boDauTiengViet(sp.ten); return cacTu.every(function(t) { return ten.includes(t); }); });
            let html = '';
            if (ketQua.length === 0) {
                html = '<div class="hd-goi-y-rong">Không có sản phẩm khớp với "' + thoatHTML(tuKhoa) + '".<br>Thử từ khóa ngắn hơn, ví dụ "áo polo".</div>';
            } else {
                ketQua.slice(0, 5).forEach(function(sp) {
                    const gia = tinhGia(sp);
                    const link = 'sp.html?ten=' + encodeURIComponent(sp.ten) + '&gia=' + gia + '&anh=' + encodeURIComponent(sp.anh);
                    const giaHTML = sp.giamGia > 0 ? dinhDangTien(gia) + '<s>' + dinhDangTien(sp.gia) + '</s>' : dinhDangTien(gia);
                    html += '<a class="hd-goi-y-dong" href="' + thoatHTML(link) + '"><img src="' + thoatHTML(sp.anh) + '" alt=""><div class="hd-goi-y-thong-tin"><div class="hd-goi-y-ten">' + thoatHTML(sp.ten) + '</div><div class="hd-goi-y-gia">' + giaHTML + '</div></div></a>';
                });
                html += '<a class="hd-goi-y-xem-het" href="timkiem.html?timkiem=' + encodeURIComponent(tuKhoa) + '">Xem tất cả ' + ketQua.length + ' kết quả</a>';
            }
            hopGoiY.innerHTML = html;
            hopGoiY.classList.add('mo');
        };

        oTim.addEventListener('input', veGoiY);
        oTim.addEventListener('focus', function() { if (oTim.value.trim() !== '') veGoiY(); });
        oTim.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowDown') { e.preventDefault(); danhDauDong(viTriChon + 1); }
            else if (e.key === 'ArrowUp') { e.preventDefault(); danhDauDong(viTriChon - 1); }
            else if (e.key === 'Enter' && viTriChon >= 0) { e.preventDefault(); const cacDong = layCacDong(); if (cacDong[viTriChon]) window.location.href = cacDong[viTriChon].getAttribute('href'); }
            else if (e.key === 'Escape') { dongGoiY(); oTim.blur(); }
        });
        document.addEventListener('click', function(e) { if (!e.target.closest('.hd-tim')) dongGoiY(); });
    }

    // 4. Bấm phím Esc để đóng Mega Menu
    document.addEventListener('keydown', function(e) {
        if (e.key !== 'Escape') return;
        const mega = document.getElementById('mega-menu'); const nen = document.getElementById('mega-menu-backdrop');
        if (mega) mega.style.display = 'none'; if (nen) nen.style.display = 'none';
    });
})();



// =========================================================================
// PHẦN 2C: NÚT LÊN ĐẦU TRANG (CHỈ HIỆN KHI ĐÃ CUỘN XUỐNG)
// =========================================================================
(function() {
    const nut = document.getElementById('nut-len-dau-trang');
    if (!nut) return;
    const kiemTraViTri = function() { nut.classList.toggle('hien', window.scrollY > 600); };
    window.addEventListener('scroll', kiemTraViTri, { passive: true });
    kiemTraViTri();
    nut.addEventListener('click', function() {
        const tatHieuUng = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        window.scrollTo({ top: 0, behavior: tatHieuUng ? 'auto' : 'smooth' });
    });
})();

// =========================================================================
// PHẦN 2D: CỬA SỔ NỔI THÔNG MINH (ESC ĐỂ ĐÓNG - KHÓA CUỘN NỀN - TỰ ĐẶT CON TRỎ)
// =========================================================================
(function() {
    const cacCuaSo = document.querySelectorAll('.cua-so-noi');
    if (cacCuaSo.length === 0) return;
    const dangMo = function(cs) { return cs.style.display === 'block'; };
    const trangThaiTruoc = new Map(); const phanTuTruocKhiMo = new Map();
    const tuyChonFocus = function(cs) {
        if (cs.id === 'modal-tai-khoan') { let form = document.getElementById('form-dang-nhap'); return (form && form.style.display !== 'none') ? document.getElementById('ten-dang-nhap') : document.getElementById('nut-xem-lich-su'); }
        if (cs.id === 'modal-xac-nhan-xoa') return document.getElementById('nut-huy-xoa'); // mặc định chọn "Hủy" cho an toàn
        return cs.querySelector('.nut-dong');
    };
    cacCuaSo.forEach(function(cs) {
        trangThaiTruoc.set(cs, false);
        new MutationObserver(function() {
            let mo = dangMo(cs); let truoc = trangThaiTruoc.get(cs);
            document.body.classList.toggle('khoa-cuon', Array.prototype.some.call(cacCuaSo, dangMo)); // cửa sổ mở thì trang phía sau không cuộn được
            if (mo && !truoc) { phanTuTruocKhiMo.set(cs, document.activeElement); let o = tuyChonFocus(cs); if (o) setTimeout(function() { o.focus(); }, 30); }
            if (!mo && truoc) { let cu = phanTuTruocKhiMo.get(cs); if (cu && cu.focus && document.body.contains(cu)) cu.focus(); }
            trangThaiTruoc.set(cs, mo);
        }).observe(cs, { attributes: true, attributeFilter: ['style'] });
    });
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') { cacCuaSo.forEach(function(cs) { if (dangMo(cs)) cs.style.display = 'none'; }); return; }
        let moRoi = Array.prototype.find.call(cacCuaSo, dangMo); if (!moRoi) return;
        if ((e.key === 'Enter' || e.key === ' ') && e.target.classList && e.target.classList.contains('nut-dong')) { e.preventDefault(); e.target.click(); return; }
        if (e.key === 'Tab') { // giữ phím Tab xoay vòng trong cửa sổ đang mở
            let cacO = Array.prototype.filter.call(moRoi.querySelectorAll('button, input, [tabindex="0"], a[href]'), function(o) { return o.offsetParent !== null && !o.disabled; });
            if (cacO.length === 0) return; let dau = cacO[0]; let cuoi = cacO[cacO.length - 1];
            if (e.shiftKey && document.activeElement === dau) { e.preventDefault(); cuoi.focus(); } else if (!e.shiftKey && document.activeElement === cuoi) { e.preventDefault(); dau.focus(); }
        }
    });
    // Ô đăng nhập: Enter để đăng nhập, nút Hiện/Ẩn mật khẩu
    let oTen = document.getElementById('ten-dang-nhap'); let oMatKhau = document.getElementById('mat-khau'); let nutHien = document.getElementById('nut-hien-mat-khau'); let nutDN = document.getElementById('nut-dang-nhap');
    [oTen, oMatKhau].forEach(function(o) { if (!o) return; o.addEventListener('keydown', function(e) { if (e.key === 'Enter' && nutDN) { e.preventDefault(); nutDN.click(); } }); o.addEventListener('input', function() { if (typeof datThongDiepCuaSo === 'function') datThongDiepCuaSo(''); }); });
    if (nutHien && oMatKhau) nutHien.addEventListener('click', function() { let dangAn = oMatKhau.type === 'password'; oMatKhau.type = dangAn ? 'text' : 'password'; nutHien.innerText = dangAn ? 'Ẩn' : 'Hiện'; nutHien.setAttribute('aria-label', dangAn ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'); oMatKhau.focus(); });
})();

// =========================================================================
// PHẦN 3: LÕI LOGIC HOẠT ĐỘNG THƯƠNG MẠI ĐIỆN TỬ
// =========================================================================

// --- 3.1. AUTO RENDER: TỰ ĐỘNG XUẤT BẢN SẢN PHẨM LÊN TRANG CHỦ ---
let khuVucSP1 = document.getElementById('khu-vuc-sp-1');
let khuVucSP2 = document.getElementById('khu-vuc-sp-2');
let khuVucSP3 = document.getElementById('khu-vuc-sp-3');

if (khuVucSP1 || khuVucSP2 || khuVucSP3) {
    khoSanPham.forEach(function(sp) {
        let theGiaHTML = ""; let giaTruyenVao = sp.gia; 

        if (sp.giamGia > 0) {
            let giaGiam = sp.gia * (1 - sp.giamGia / 100);
            giaTruyenVao = giaGiam;
            theGiaHTML = `<div class="khung-gia"><span class="gia-giam">${giaGiam.toLocaleString('vi-VN')} đ</span><span class="gia-goc">${sp.gia.toLocaleString('vi-VN')} đ</span><span class="nhan-giam-gia">-${sp.giamGia}%</span></div>`;
        } else {
            theGiaHTML = `<p>${sp.gia.toLocaleString('vi-VN')} VNĐ</p>`;
        }

        // Ngoài Trang chủ chỉ báo "Còn hàng" hoặc "Hết hàng" (số lượng từng size xem ở trang chi tiết)
        let conLai = sp.tongTonKhoHienTai;
        let theTonKho = conLai === 0
            ? `<div class="the-ton-kho ton-kho-het"><div class="ton-kho-chu"><span class="cham-trang-thai"></span><span>Hết hàng</span></div></div>`
            : `<div class="the-ton-kho ton-kho-con"><div class="ton-kho-chu"><span class="cham-trang-thai"></span><span>Còn hàng</span></div></div>`;

        let htmlSP = `
            <div class="hop-san-pham${conLai === 0 ? ' het-hang' : ''}">
                <div class="hop-san-pham-anh"><img src="${sp.anh}" alt="${sp.ten}" onclick="event.stopPropagation(); window.location.href='sp.html?ten=${encodeURIComponent(sp.ten)}&gia=${giaTruyenVao}&anh=${encodeURIComponent(sp.anh)}'"></div>
                <h3>${sp.ten}</h3>
                ${theGiaHTML}
                ${theTonKho}
                <button class="nut-mua-hang" onclick="event.stopPropagation(); window.location.href='sp.html?ten=${encodeURIComponent(sp.ten)}&gia=${giaTruyenVao}&anh=${encodeURIComponent(sp.anh)}'">Chi tiết sản phẩm</button>
            </div>
        `;
        if (sp.boSuuTap === 1 && khuVucSP1) khuVucSP1.innerHTML += htmlSP;
        else if (sp.boSuuTap === 2 && khuVucSP2) khuVucSP2.innerHTML += htmlSP;
        else if (sp.boSuuTap === 3 && khuVucSP3) khuVucSP3.innerHTML += htmlSP;
    });

    // Thẻ sản phẩm trượt nhẹ vào khi cuộn tới (tự bỏ qua nếu trình duyệt không hỗ trợ hoặc người dùng tắt hiệu ứng)
    if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        let quanSatThe = new IntersectionObserver(function(cacMuc) {
            cacMuc.forEach(function(muc) {
                if (!muc.isIntersecting) return;
                let the = muc.target; let thuTu = Array.prototype.indexOf.call(the.parentNode.children, the);
                the.style.animationDelay = ((thuTu % 5) * 70) + 'ms';
                the.classList.remove('cho-hien'); the.classList.add('dang-hien');
                the.addEventListener('animationend', function() { the.classList.remove('dang-hien'); the.style.animationDelay = ''; }, { once: true });
                quanSatThe.unobserve(the);
            });
        }, { threshold: 0.12 });
        document.querySelectorAll('.hop-san-pham').forEach(function(the) { the.classList.add('cho-hien'); quanSatThe.observe(the); });
    }
}


// --- 3.2. ĐÓNG MỞ MODALS & SỬA LỖI Z-INDEX CHO MEGA MENU ---
let nutDanhMuc = document.getElementById('nut-danh-muc'); let megaMenu = document.getElementById('mega-menu'); let nutDongMega = document.getElementById('nut-dong-mega'); let megaBackdrop = document.getElementById('mega-menu-backdrop');
if (nutDanhMuc != null) { nutDanhMuc.onclick = function() { megaMenu.style.display = "block"; megaBackdrop.style.display = "block"; } }
if (nutDongMega != null) { nutDongMega.onclick = function() { megaMenu.style.display = "none"; megaBackdrop.style.display = "none"; } }
if (megaBackdrop != null) { megaBackdrop.onclick = function() { megaMenu.style.display = "none"; megaBackdrop.style.display = "none"; } }

let cuaSoTaiKhoan = document.getElementById('modal-tai-khoan'); let nutMoCuaSo = document.getElementById('nut-mo-modal-tai-khoan'); let nutDongCuaSo = document.getElementById('nut-dong-modal');
let cuaSoXacNhan = document.getElementById('modal-xac-nhan-xoa'); let nutHuyXoa = document.getElementById('nut-huy-xoa'); let nutDongYXoa = document.getElementById('nut-dong-y-xoa'); let dongChuXacNhan = document.getElementById('noi-dung-xac-nhan');
let modalSize = document.getElementById('modal-bang-size'); let nutDongSize = document.getElementById('nut-dong-size'); let cacNutMoSize = document.querySelectorAll('#nut-mo-size, .nut-mo-size-footer');
let modalLichSu = document.getElementById('modal-lich-su'); let nutXemLichSu = document.getElementById('nut-xem-lich-su'); let nutDongLichSu = document.getElementById('nut-dong-lich-su');

// Bấm đăng nhập sẽ tự đóng Mega Menu
if (nutMoCuaSo != null) { 
    nutMoCuaSo.onclick = function() { 
        if (megaMenu) megaMenu.style.display = "none";
        if (megaBackdrop) megaBackdrop.style.display = "none";
        cuaSoTaiKhoan.style.display = "block"; 
    } 
}
if (nutDongCuaSo != null) nutDongCuaSo.onclick = function() { cuaSoTaiKhoan.style.display = "none"; }

// Bật Lịch sử giao dịch
if (nutXemLichSu != null) {
    nutXemLichSu.onclick = function() {
        cuaSoTaiKhoan.style.display = "none"; 
        modalLichSu.style.display = "block"; 
        veBangLichSu();
    }
}
if (nutDongLichSu != null) nutDongLichSu.onclick = function() { modalLichSu.style.display = "none"; }

cacNutMoSize.forEach(nut => { nut.onclick = function(e) { e.preventDefault(); if (modalSize != null) modalSize.style.display = "block"; }});
if (nutDongSize != null) nutDongSize.onclick = function() { if (modalSize != null) modalSize.style.display = "none"; }

window.onclick = function(suKien) {
    if (cuaSoTaiKhoan != null && suKien.target == cuaSoTaiKhoan) cuaSoTaiKhoan.style.display = "none";
    if (cuaSoXacNhan != null && suKien.target == cuaSoXacNhan) cuaSoXacNhan.style.display = "none";
    if (modalSize != null && suKien.target == modalSize) modalSize.style.display = "none";
    if (modalLichSu != null && suKien.target == modalLichSu) modalLichSu.style.display = "none";
}

let cacNutTabSize = document.querySelectorAll('.tab-size-btn'); let cacNoiDungTab = document.querySelectorAll('.tab-noi-dung');
cacNutTabSize.forEach(nut => { nut.onclick = function() { cacNutTabSize.forEach(n => n.classList.remove('active')); cacNoiDungTab.forEach(nd => nd.style.display = 'none'); this.classList.add('active'); let idTab = this.getAttribute('data-tab'); if(document.getElementById(idTab)) document.getElementById(idTab).style.display = 'block'; } });

// --- 3.3. BĂNG CHUYỀN VÀ TOAST ---
let bangChuyen = document.getElementById('bang-chuyen'); let nutLui = document.getElementById('nut-lui'); let nutToi = document.getElementById('nut-toi');
if (bangChuyen != null && nutLui != null && nutToi != null) {
    let viTriHienTai = 0; let tongSoSlide = bangChuyen.children.length; let dongHoTuDong; let chuotDangRe = false;
    let khuVucCham = document.getElementById('cham-chuyen'); let cacCham = [];
    function chuyenSlide() { 
        bangChuyen.style.transform = 'translateX(-' + (viTriHienTai * 100) + '%)'; 
        cacCham.forEach(function(cham, i) { cham.classList.toggle('active', i === viTriHienTai); });
    }
    function tienLenPhiaTruoc() { viTriHienTai++; if (viTriHienTai >= tongSoSlide) viTriHienTai = 0; chuyenSlide(); }
    function luiVePhiaSau() { viTriHienTai--; if (viTriHienTai < 0) viTriHienTai = tongSoSlide - 1; chuyenSlide(); }
    function khoiDongLaiDongHo() { clearInterval(dongHoTuDong); if (!chuotDangRe) dongHoTuDong = setInterval(tienLenPhiaTruoc, 4000); }

    // Chấm tròn báo đang xem ảnh nào, bấm vào để nhảy tới ảnh đó
    if (khuVucCham != null) {
        for (let i = 0; i < tongSoSlide; i++) {
            let cham = document.createElement('button'); cham.className = 'cham'; cham.setAttribute('aria-label', 'Xem ảnh số ' + (i + 1));
            cham.onclick = function() { viTriHienTai = i; chuyenSlide(); khoiDongLaiDongHo(); };
            khuVucCham.appendChild(cham); cacCham.push(cham);
        }
    }
    chuyenSlide();
    dongHoTuDong = setInterval(tienLenPhiaTruoc, 4000);
    nutToi.onclick = function() { tienLenPhiaTruoc(); khoiDongLaiDongHo(); };
    nutLui.onclick = function() { luiVePhiaSau(); khoiDongLaiDongHo(); };

    // Dừng tự chạy khi rê chuột vào
    let khungChuyen = bangChuyen.parentElement;
    khungChuyen.addEventListener('mouseenter', function() { chuotDangRe = true; clearInterval(dongHoTuDong); });
    khungChuyen.addEventListener('mouseleave', function() { chuotDangRe = false; khoiDongLaiDongHo(); });
}

let khuVucThongBao = document.createElement('div'); khuVucThongBao.id = 'khu-vuc-thong-bao'; document.body.appendChild(khuVucThongBao);
function hienThongBao(loiNhan, laLoi) {
    let thongBao = document.createElement('div'); thongBao.className = 'thong-bao-dep'; if (laLoi === true) thongBao.classList.add('loi');
    thongBao.setAttribute('role', laLoi === true ? 'alert' : 'status');
    let bieuTuong = document.createElement('span'); bieuTuong.textContent = laLoi === true ? '⚠️' : '✅'; let noiDung = document.createElement('span'); noiDung.textContent = loiNhan;
    thongBao.appendChild(bieuTuong); thongBao.appendChild(noiDung); khuVucThongBao.appendChild(thongBao);
    let anDi = function() { if (thongBao.classList.contains('dang-an')) return; thongBao.classList.add('dang-an'); setTimeout(function() { thongBao.remove(); }, 300); };
    thongBao.addEventListener('click', anDi); setTimeout(anDi, laLoi === true ? 4500 : 3000); // lỗi hiện lâu hơn một chút, bấm vào để tắt ngay
}

// --- 3.4. QUẢN LÝ TÀI KHOẢN VÀ VẼ LỊCH SỬ ---
let boNhoSoHoKhau = localStorage.getItem('soHoKhauCuaCuaHang'); let danhSachTaiKhoan = [];
if (boNhoSoHoKhau != null) danhSachTaiKhoan = JSON.parse(boNhoSoHoKhau);
let nguoiDungHienTai = sessionStorage.getItem('aiDangDangNhap');

function capNhatGiaoDienTaiKhoan() {
    let formDangNhap = document.getElementById('form-dang-nhap'); let thongTinNguoiDung = document.getElementById('thong-tin-nguoi-dung'); let tenHienThi = document.getElementById('ten-nguoi-dung'); let nutGioHang = document.querySelector('a[href="giohang.html"]');
    if (formDangNhap == null || thongTinNguoiDung == null) return; 
    if (nguoiDungHienTai != null) {
        formDangNhap.style.display = 'none'; thongTinNguoiDung.style.display = 'block'; tenHienThi.innerText = nguoiDungHienTai; let oAvatar = document.getElementById('avatar-nguoi-dung'); if (oAvatar) oAvatar.innerText = String(nguoiDungHienTai).trim().charAt(0).toUpperCase() || 'K';
        if (nutGioHang != null) nutGioHang.style.display = "inline-flex"; if (nutMoCuaSo != null) nutMoCuaSo.innerText = "👤 Xin chào, " + nguoiDungHienTai;
    } else {
        formDangNhap.style.display = 'block'; thongTinNguoiDung.style.display = 'none';
        if (nutGioHang != null) nutGioHang.style.display = "none"; if (nutMoCuaSo != null) nutMoCuaSo.innerText = "👤 Đăng nhập";
    }
}
capNhatGiaoDienTaiKhoan();

let oLoiDangNhap = document.getElementById('loi-dang-nhap');
function datThongDiepCuaSo(chu, laThanhCong) { if (oLoiDangNhap) { oLoiDangNhap.innerText = chu; oLoiDangNhap.classList.toggle('ok', laThanhCong === true); } }
let nutDangKy = document.getElementById('nut-dang-ky');
if (nutDangKy != null) { nutDangKy.onclick = function() { let tenTaiKhoan = document.getElementById('ten-dang-nhap').value.trim(); let matKhau = document.getElementById('mat-khau').value; if (tenTaiKhoan === "" || matKhau === "") { datThongDiepCuaSo("Vui lòng nhập đầy đủ Tên và Mật khẩu!"); hienThongBao("Vui lòng nhập đầy đủ Tên và Mật khẩu!", true); return; } for (let i = 0; i < danhSachTaiKhoan.length; i++) { if (danhSachTaiKhoan[i].ten === tenTaiKhoan) { datThongDiepCuaSo("Tên này đã có người xài!"); hienThongBao("Tên này đã có người xài!", true); return; } } danhSachTaiKhoan.push({ ten: tenTaiKhoan, pass: matKhau }); localStorage.setItem('soHoKhauCuaCuaHang', JSON.stringify(danhSachTaiKhoan)); datThongDiepCuaSo("Đăng ký thành công! Hãy bấm Đăng nhập nhé.", true); hienThongBao("Đăng ký thành công! Hãy Đăng nhập nhé.", false); }; }
let nutDangNhap = document.getElementById('nut-dang-nhap');
if (nutDangNhap != null) { nutDangNhap.onclick = function() { let tenTaiKhoan = document.getElementById('ten-dang-nhap').value.trim(); let matKhau = document.getElementById('mat-khau').value; let daTimThay = false; for (let i = 0; i < danhSachTaiKhoan.length; i++) { if (danhSachTaiKhoan[i].ten === tenTaiKhoan && danhSachTaiKhoan[i].pass === matKhau) { daTimThay = true; break; } } if (daTimThay) { sessionStorage.setItem('aiDangDangNhap', tenTaiKhoan); nguoiDungHienTai = tenTaiKhoan; datThongDiepCuaSo(""); document.getElementById('mat-khau').value = ""; hienThongBao("Đăng nhập thành công!", false); capNhatGiaoDienTaiKhoan(); if (cuaSoTaiKhoan != null) cuaSoTaiKhoan.style.display = "none"; } else { datThongDiepCuaSo("Sai tên tài khoản hoặc mật khẩu!"); hienThongBao("Sai tên tài khoản hoặc mật khẩu!", true); } }; }
let nutDangXuat = document.getElementById('nut-dang-xuat');
if (nutDangXuat != null) { nutDangXuat.onclick = function() { sessionStorage.removeItem('aiDangDangNhap'); nguoiDungHienTai = null; danhSachGioHang = []; localStorage.removeItem('gioHangCuaToi'); capNhatGiaoDienGioHang(); hienThongBao("Đã đăng xuất!", false); capNhatGiaoDienTaiKhoan(); if (document.getElementById('danh-sach-mua') != null) setTimeout(function() { window.location.href = "index.html"; }, 1500); }; }

// Chống chèn mã độc khi in chữ người dùng nhập (tên, địa chỉ...) ra màn hình
function thoatKyTuHTML(chuoi) { return String(chuoi).replace(/[&<>"']/g, function(c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }

function veBangLichSu() {
    let khLichSu = document.getElementById('danh-sach-lich-su');
    if(!khLichSu) return;
    let lichSuAll = JSON.parse(localStorage.getItem('lichSu_FashionShop') || "[]");
    let lichSuCaNhan = lichSuAll.filter(dh => dh.nguoiMua === nguoiDungHienTai);
    
    if (lichSuCaNhan.length === 0) {
        khLichSu.innerHTML = '<div class="lich-su-trong"><div class="bieu-tuong">📦</div><p>Bạn chưa có giao dịch nào.</p></div>'; return;
    }
    // Mã đơn cố định: đơn mới có sẵn mã, đơn cũ thì tính từ thời gian đặt (xem lần nào cũng ra cùng một mã)
    let layMaDon = function(dh) { if (dh.maDon) return dh.maDon; let h = 0; let k = String(dh.thoiGian) + '|' + dh.tongTien; for (let i = 0; i < k.length; i++) { h = (h * 31 + k.charCodeAt(i)) % 9000; } return '#FS' + (1000 + h); };
    let html = "";
    lichSuCaNhan.reverse().forEach((dh) => {
        let spHtml = dh.danhSach.map(sp => {
            let ten = sp.ten; let nhan = ''; let khop = String(sp.ten).match(/^(.*?) \(Size: (.*?), Màu: (.*?)\)$/);
            if (khop) { ten = khop[1]; nhan = '<div class="phan-loai-gio"><span class="chip-phan-loai">Size ' + thoatKyTuHTML(khop[2]) + '</span><span class="chip-phan-loai">Màu ' + thoatKyTuHTML(khop[3]) + '</span></div>'; }
            return `<div class="don-mon"><div><div class="don-mon-ten">${thoatKyTuHTML(ten)}</div>${nhan}</div><div class="don-mon-sl">x${sp.soLuong}</div></div>`;
        }).join("");
        let giaoHangHtml = "";
        if (dh.giaoHang) { giaoHangHtml = `<div class="don-giao-hang"><b>Người nhận:</b> ${thoatKyTuHTML(dh.giaoHang.nguoiNhan || '')} - ${thoatKyTuHTML(dh.giaoHang.soDienThoai || '')}<br><b>Địa chỉ:</b> ${thoatKyTuHTML(dh.giaoHang.diaChi || '')}` + (dh.giaoHang.ghiChu ? `<br><b>Ghi chú:</b> ${thoatKyTuHTML(dh.giaoHang.ghiChu)}` : '') + (dh.phuongThucThanhToan ? `<br><b>Thanh toán:</b> ${thoatKyTuHTML(dh.phuongThucThanhToan)}` : '') + `</div>`; }
        html += `
            <div class="the-don-hang">
                <div class="don-dau"><span class="don-ma">Mã đơn ${layMaDon(dh)}</span><span class="don-thoi-gian">${thoatKyTuHTML(dh.thoiGian)}</span></div>
                ${spHtml}
                ${giaoHangHtml}
                <div class="don-cuoi"><span class="don-ship">${dh.phiVanChuyen ? 'Vận chuyển: ' + thoatKyTuHTML(dh.phiVanChuyen) : ''}</span><span class="don-tong">Tổng: ${dh.tongTien.toLocaleString('vi-VN')} đ</span></div>
            </div>`;
    });
    khLichSu.innerHTML = html;
}

// --- 3.5. GIỎ HÀNG CHUYÊN NGHIỆP ---
let khuVucDanhSachMua = document.getElementById('danh-sach-mua'); let danhSachGioHang = []; let boNhoCu = localStorage.getItem('gioHangCuaToi'); if (boNhoCu != null) danhSachGioHang = JSON.parse(boNhoCu);
let tenMonCanXoa = "";

const MUC_FREESHIP = 498000;

function capNhatGiaoDienGioHang() {
    let soLuongGoc = document.getElementById('so-luong-mon'); let tongSoAo = 0; for (let i = 0; i < danhSachGioHang.length; i++) { tongSoAo += danhSachGioHang[i].soLuong; } if (soLuongGoc != null) soLuongGoc.innerText = tongSoAo; 
    let khuVucTongTien = document.getElementById('tong-tien'); if (khuVucDanhSachMua == null || khuVucTongTien == null) return; 

    let khungGio = khuVucDanhSachMua.closest('.khu-vuc-thanh-toan');
    let oDemSanPham = document.getElementById('so-san-pham-gio'); if (oDemSanPham) oDemSanPham.innerText = tongSoAo > 0 ? '(' + tongSoAo + ' sản phẩm)' : '';

    if (danhSachGioHang.length === 0) {
        if (khungGio) khungGio.classList.add('rong');
        khuVucDanhSachMua.innerHTML = '<div class="gio-trong"><div class="gio-trong-icon">🛍️</div><h3>Giỏ hàng của bạn đang trống</h3><p>Chọn vài món bạn thích rồi quay lại đây nhé.</p><a href="index.html" class="nut-thanh-toan-moi">Bắt đầu mua sắm</a></div>'; khuVucTongTien.innerText = '0';
        let nutCheckAllTrong = document.getElementById('check-all'); if (nutCheckAllTrong) nutCheckAllTrong.checked = false; return; 
    }
    if (khungGio) khungGio.classList.remove('rong');

    let htmlDanhSach = ''; let tongTien = 0; let soMonDuocChon = 0; let tatCaDuocChon = true; 
    for (let i = 0; i < danhSachGioHang.length; i++) {
        let monHang = danhSachGioHang[i]; let thanhTien = monHang.gia * monHang.soLuong; let anhHienThi = monHang.anh || 'quần áo/ao1.png'; let tichChon = monHang.duocChon ? 'checked' : '';
        if (monHang.duocChon === false) tatCaDuocChon = false; if (monHang.duocChon === true) { tongTien += thanhTien; soMonDuocChon += monHang.soLuong; }

        // Tách "Tên (Size: M, Màu: Trắng)" thành tên và các nhãn phân loại cho gọn mắt
        let tenHienThi = monHang.ten; let nhanPhanLoai = '';
        let khop = monHang.ten.match(/^(.*?) \(Size: (.*?), Màu: (.*?)\)$/);
        if (khop) { tenHienThi = khop[1]; nhanPhanLoai = '<div class="phan-loai-gio"><span class="chip-phan-loai">Size ' + khop[2] + '</span><span class="chip-phan-loai">Màu ' + khop[3] + '</span></div>'; }

        // Cảnh báo sớm nếu số lượng trong giỏ vượt quá tồn kho
        let thongTinMon = tachTenVaSize(monHang.ten); let spTrongKho = khoSanPham.find(function(s) { return s.ten === thongTinMon.ten; }); let canhBao = '';
        if (spTrongKho) {
            let tonCuaLoai = layTonKho(spTrongKho, thongTinMon.mau, thongTinMon.size); let tongCungLoai = 0;
            danhSachGioHang.forEach(function(m) { let t = tachTenVaSize(m.ten); if (t.ten === thongTinMon.ten && t.size === thongTinMon.size && t.mau === thongTinMon.mau) tongCungLoai += m.soLuong; });
            if (tongCungLoai > tonCuaLoai) { canhBao = '<div class="gio-canh-bao">' + (tonCuaLoai === 0 ? 'Loại này đã hết hàng' : 'Loại này chỉ còn ' + tonCuaLoai + ' chiếc, hãy giảm số lượng') + '</div>'; }
        }

        htmlDanhSach += `
            <div class="dong-san-pham-moi gio-luoi">
                <div class="gio-o-chon"><input type="checkbox" class="hop-checkbox" ${tichChon} onchange="chonMonHang(${i}, this.checked)" aria-label="Chọn mua"></div>
                <div class="gio-o-sp"><img class="anh-sp-gio-hang" src="${anhHienThi}" alt=""><div class="thong-tin-sp-gio"><div class="ten-sp-gio">${tenHienThi}</div>${nhanPhanLoai}${canhBao}</div></div>
                <div class="gio-o-gia don-gia-gio">${Number(monHang.gia).toLocaleString('vi-VN')} đ</div>
                <div class="gio-o-sl so-luong-gio"><button onclick="thayDoiSoLuongTrongGio('${monHang.ten}', -1)" aria-label="Giảm số lượng">−</button><span>${monHang.soLuong}</span><button onclick="thayDoiSoLuongTrongGio('${monHang.ten}', 1)" aria-label="Tăng số lượng">+</button></div>
                <div class="gio-o-tien thanh-tien-gio">${thanhTien.toLocaleString('vi-VN')} đ</div>
                <div class="gio-o-xoa"><button class="nut-xoa-gio" onclick="xoaMonHang('${monHang.ten}')" aria-label="Xóa sản phẩm">🗑️</button></div>
            </div>`;
    }
    khuVucDanhSachMua.innerHTML = htmlDanhSach;
    
    let nutCheckAll = document.getElementById('check-all');
    if (nutCheckAll) { nutCheckAll.checked = tatCaDuocChon; nutCheckAll.onchange = function() { let chonHet = this.checked; for (let j = 0; j < danhSachGioHang.length; j++) danhSachGioHang[j].duocChon = chonHet; localStorage.setItem('gioHangCuaToi', JSON.stringify(danhSachGioHang)); capNhatGiaoDienGioHang(); }; }
    khuVucTongTien.innerText = tongTien.toLocaleString('vi-VN');

    // Số món đang chọn và trạng thái nút thanh toán
    let oSoMonChon = document.getElementById('so-mon-chon'); if (oSoMonChon) oSoMonChon.innerText = soMonDuocChon > 0 ? 'Đã chọn ' + soMonDuocChon + ' sản phẩm' : '';
    let nutTT = document.getElementById('nut-thanh-toan'); if (nutTT) nutTT.classList.toggle('chua-chon', soMonDuocChon === 0);

    // Thanh tiến độ miễn phí vận chuyển (tính trên các món đang được chọn)
    let khungFreeship = document.getElementById('thanh-freeship'); let chuFreeship = document.getElementById('freeship-chu'); let thanhFreeship = document.getElementById('freeship-tien');
    if (khungFreeship && chuFreeship && thanhFreeship) {
        if (tongTien >= MUC_FREESHIP) { chuFreeship.innerHTML = '🎉 Đơn hàng của bạn được <b>miễn phí vận chuyển</b>'; khungFreeship.classList.add('dat'); }
        else if (tongTien === 0) { chuFreeship.innerHTML = '🚚 Chọn sản phẩm để xem ưu đãi vận chuyển'; khungFreeship.classList.remove('dat'); }
        else { chuFreeship.innerHTML = '🚚 Mua thêm <b>' + (MUC_FREESHIP - tongTien).toLocaleString('vi-VN') + ' đ</b> để được miễn phí vận chuyển'; khungFreeship.classList.remove('dat'); }
        thanhFreeship.style.width = Math.min(100, Math.round(tongTien / MUC_FREESHIP * 100)) + '%';
    }
}

window.chonMonHang = function(viTriMon, kieuChon) { danhSachGioHang[viTriMon].duocChon = kieuChon; localStorage.setItem('gioHangCuaToi', JSON.stringify(danhSachGioHang)); capNhatGiaoDienGioHang(); };
window.thayDoiSoLuongTrongGio = function(tenAoCanSua, soLuongSua) { for (let i = 0; i < danhSachGioHang.length; i++) { if (danhSachGioHang[i].ten === tenAoCanSua) { danhSachGioHang[i].soLuong += soLuongSua; if (danhSachGioHang[i].soLuong <= 0) { xoaMonHang(tenAoCanSua); danhSachGioHang[i].soLuong = 1; } break; } } localStorage.setItem('gioHangCuaToi', JSON.stringify(danhSachGioHang)); capNhatGiaoDienGioHang(); };
window.xoaMonHang = function(tenAoCanXoa) { tenMonCanXoa = tenAoCanXoa; if (cuaSoXacNhan != null && dongChuXacNhan != null) { dongChuXacNhan.innerHTML = "Bạn có chắc chắn muốn xóa <b>" + tenAoCanXoa + "</b> khỏi giỏ không?"; cuaSoXacNhan.style.display = "block"; } };
if (nutHuyXoa != null) nutHuyXoa.onclick = function() { cuaSoXacNhan.style.display = "none"; };
if (nutDongYXoa != null) { nutDongYXoa.onclick = function() { for (let i = 0; i < danhSachGioHang.length; i++) { if (danhSachGioHang[i].ten === tenMonCanXoa) { danhSachGioHang.splice(i, 1); break; } } localStorage.setItem('gioHangCuaToi', JSON.stringify(danhSachGioHang)); capNhatGiaoDienGioHang(); cuaSoXacNhan.style.display = "none"; hienThongBao("Đã xóa sản phẩm thành công!", false); }; }

let nutThanhToan = document.getElementById('nut-thanh-toan');
if (nutThanhToan != null) {
    nutThanhToan.onclick = function() {
        if (nguoiDungHienTai == null) return;
        let coMuaMonNaoKhong = false; for (let i = 0; i < danhSachGioHang.length; i++) { if (danhSachGioHang[i].duocChon === true) coMuaMonNaoKhong = true; }
        if (danhSachGioHang.length === 0) { hienThongBao("Giỏ hàng trống, hãy chọn đồ nhé!", true); } else if (coMuaMonNaoKhong === false) { hienThongBao("Bạn chưa tích chọn mua sản phẩm nào!", true); } else { window.location.href = "thanhtoan.html"; }
    };
}
capNhatGiaoDienGioHang();

// --- 3.6. TRANG CHI TIẾT SẢN PHẨM (SP.HTML) VÀ KIỂM TRA TỒN KHO TRƯỚC KHI THÊM GIỎ ---
let spTen = document.getElementById('sp-ten');
if (spTen != null) {
    let thamSoURL = new URLSearchParams(window.location.search); let tenNhanVao = decodeURIComponent(thamSoURL.get('ten') || "Sản phẩm"); let giaNhanVao = Number(thamSoURL.get('gia') || 0); let anhNhanVao = decodeURIComponent(thamSoURL.get('anh') || ""); 
    let spGia = document.getElementById('sp-gia'); spTen.innerText = tenNhanVao; 
    
    // Lấy thông tin Tồn kho
    let tenGoc = tenNhanVao.split(" (Size")[0];
    let spHienTai = khoSanPham.find(sp => sp.ten === tenGoc);

    if (spGia != null) {
        let mucGiamGia = spHienTai ? spHienTai.giamGia : 0;
        let giaGocTien = spHienTai ? spHienTai.gia : giaNhanVao;
        
        if (mucGiamGia > 0) {
            spGia.innerHTML = `<div class="khung-gia" style="justify-content: flex-start;"><span style="color: #e30019;">${giaNhanVao.toLocaleString('vi-VN')} đ</span><span class="gia-goc">${giaGocTien.toLocaleString('vi-VN')} đ</span><span class="nhan-giam-gia">-${mucGiamGia}%</span></div>`;
        } else {
            spGia.innerText = giaNhanVao.toLocaleString('vi-VN') + " VNĐ";
        }
        // Chỗ hiện tồn kho của size đang chọn (được điền ở phần chọn size bên dưới)
        let khungGiaCha = spGia.closest('.gia-ca-khu-vuc') || spGia;
        khungGiaCha.insertAdjacentHTML('afterend', '<div id="trang-thai-kho" class="the-ton-kho-sp"></div>');
    }

    let maGoc = "ao1"; if (anhNhanVao.includes('/')) { let tenFile = anhNhanVao.split('/').pop(); maGoc = tenFile.split('.')[0]; }
    // Danh sách màu lấy từ khoSanPham (nếu không có thì dùng từ điển màu cũ)
    let danhSachMau = (spHienTai && Object.keys(spHienTai.tonKhoHienTai).length > 0) ? Object.keys(spHienTai.tonKhoHienTai) : (tuDienMauSac[maGoc] || tuDienMauSac["macDinh"]);
    let hoaChuDau = function(t) { return t.charAt(0).toUpperCase() + t.slice(1); };
    let khuVucChonMau = document.getElementById('chon-mau'); let khuVucAnhNho = document.querySelector('.danh-sach-anh-nho'); let spAnhChinh = document.getElementById('sp-anh');
    let oMauDangChon = document.getElementById('mau-dang-chon'); let oSizeDangChon = document.getElementById('size-dang-chon');
    let khuVucChonSize = document.getElementById('chon-size'); let cacNutSize = [];

    // Mặc định chọn màu đầu tiên còn hàng, và size đầu tiên còn hàng của màu đó
    let viTriMauMacDinh = danhSachMau.findIndex(function(m) { return layTonKho(spHienTai, m, null) > 0; }); if (viTriMauMacDinh < 0) viTriMauMacDinh = 0;
    let mauKhoaDaChon = danhSachMau[viTriMauMacDinh] || ""; let mauDaChon = mauKhoaDaChon ? hoaChuDau(mauKhoaDaChon) : "Trắng";
    let sizeDaChon = DANH_SACH_SIZE[0]; let coSizeConHang = false;
    let chonSizeMacDinh = function() { // giữ nguyên size đang chọn nếu màu mới vẫn còn size đó, không thì lấy size đầu còn hàng
        coSizeConHang = false;
        if (layTonKho(spHienTai, mauKhoaDaChon, sizeDaChon) > 0) { coSizeConHang = true; return; }
        for (let s of DANH_SACH_SIZE) { if (layTonKho(spHienTai, mauKhoaDaChon, s) > 0) { sizeDaChon = s; coSizeConHang = true; break; } }
    };

    let capNhatTrangThaiKho = function() {
        let oKho = document.getElementById('trang-thai-kho'); let nutMuaHang = document.getElementById('sp-nut-mua');
        let ton = coSizeConHang ? layTonKho(spHienTai, mauKhoaDaChon, sizeDaChon) : 0;
        let muc = ton === 0 ? 'het' : (ton <= NGUONG_SAP_HET ? 'sap-het' : 'con');
        let nhan = 'Màu ' + mauDaChon + ', size ' + sizeDaChon;
        let chu = !coSizeConHang ? 'Màu ' + mauDaChon + ' đã hết hàng' : (ton <= NGUONG_SAP_HET ? nhan + ': sắp hết, chỉ còn <b>' + ton + '</b>' : nhan + ': còn <b>' + ton + '</b> sản phẩm');
        if (oKho) { oKho.className = 'the-ton-kho-sp ton-kho-' + muc; oKho.innerHTML = '<div class="ton-kho-chu"><span class="cham-trang-thai"></span><span>' + chu + '</span></div>'; }
        if (nutMuaHang) nutMuaHang.classList.toggle('het-hang', ton === 0);
        if (oSizeDangChon) oSizeDangChon.innerText = coSizeConHang ? sizeDaChon : '';
    };

    // Nút size: hiện số lượng còn lại của size đó TRONG MÀU ĐANG CHỌN, size hết hàng bị mờ và không chọn được
    let veLaiNutSize = function() {
        if (khuVucChonSize == null) return;
        khuVucChonSize.innerHTML = ''; cacNutSize = [];
        DANH_SACH_SIZE.forEach(function(s) {
            let ton = layTonKho(spHienTai, mauKhoaDaChon, s);
            let nut = document.createElement('div'); nut.className = 'nut-chon nut-size' + (ton === 0 ? ' het' : (ton <= NGUONG_SAP_HET ? ' sap-het' : ''));
            nut.innerHTML = '<span class="nut-size-ten">' + s + '</span><small>' + (ton === 0 ? 'Hết hàng' : 'Còn ' + ton) + '</small>';
            if (coSizeConHang && s === sizeDaChon) nut.classList.add('active');
            nut.onclick = function() {
                if (ton === 0) { hienThongBao('Size ' + s + ' của màu ' + mauDaChon + ' đã hết hàng, bạn hãy chọn loại khác nhé!', true); return; }
                cacNutSize.forEach(function(n) { n.classList.remove('active'); }); nut.classList.add('active'); sizeDaChon = s; capNhatTrangThaiKho();
            };
            khuVucChonSize.appendChild(nut); cacNutSize.push(nut);
        });
    };

    if (khuVucChonMau != null && khuVucAnhNho != null) {
        khuVucChonMau.innerHTML = ''; khuVucAnhNho.innerHTML = ''; 
        for (let i = 0; i < danhSachMau.length; i++) {
            let tenMau = danhSachMau[i]; let tenMauVietHoa = hoaChuDau(tenMau); let linkAnh = "chi tiết sp/" + maGoc + "_" + tenMau + ".png"; 
            let heMau = layTonKho(spHienTai, tenMau, null) === 0;
            let nut = document.createElement('div'); nut.className = 'nut-chon nut-mau' + (heMau ? ' het' : ''); if (i === viTriMauMacDinh) nut.classList.add('active');
            nut.innerHTML = tenMauVietHoa + (heMau ? '<small>Hết hàng</small>' : ''); khuVucChonMau.appendChild(nut);
            let anh = document.createElement('img'); anh.src = linkAnh; anh.alt = tenMauVietHoa; if (i === viTriMauMacDinh) anh.classList.add('active'); khuVucAnhNho.appendChild(anh);
            if (i === viTriMauMacDinh && spAnhChinh != null) { spAnhChinh.src = linkAnh; }
            let xuLyChon = function() {
                mauDaChon = tenMauVietHoa; mauKhoaDaChon = tenMau;
                if (spAnhChinh != null) { spAnhChinh.src = linkAnh; spAnhChinh.classList.remove('doi-anh'); void spAnhChinh.offsetWidth; spAnhChinh.classList.add('doi-anh'); } if (oMauDangChon) oMauDangChon.innerText = tenMauVietHoa;
                let cacNut = khuVucChonMau.querySelectorAll('.nut-chon'); let cacAnh = khuVucAnhNho.querySelectorAll('img');
                cacNut.forEach(n => n.classList.remove('active')); cacAnh.forEach(a => a.classList.remove('active'));
                nut.classList.add('active'); anh.classList.add('active');
                chonSizeMacDinh(); veLaiNutSize(); capNhatTrangThaiKho(); // đổi màu thì số lượng các size đổi theo
            };
            nut.onclick = xuLyChon; anh.onclick = xuLyChon;
        }
    }
    if (oMauDangChon) oMauDangChon.innerText = mauDaChon;
    chonSizeMacDinh(); veLaiNutSize(); capNhatTrangThaiKho();

    let nutTru = document.getElementById('nut-tru-sp'); let nutCong = document.getElementById('nut-cong-sp'); let oNhapSo = document.getElementById('so-luong-sp');
    if (nutTru && nutCong && oNhapSo) { nutTru.onclick = function() { let sl = parseInt(oNhapSo.value); if (sl > 1) oNhapSo.value = sl - 1; }; nutCong.onclick = function() { let sl = parseInt(oNhapSo.value); oNhapSo.value = sl + 1; }; }

    let spNutMua = document.getElementById('sp-nut-mua');
    if (spNutMua) {
        spNutMua.onclick = function() {
            if (nguoiDungHienTai == null) { hienThongBao("Bạn phải Đăng nhập mới có thể mua hàng nhé!", true); if (cuaSoTaiKhoan != null) cuaSoTaiKhoan.style.display = "block"; return; }
            let soLuongMuonMua = parseInt(oNhapSo.value) || 1; 
            
            // LƯỚI BẢO VỆ: CẤM MUA QUÁ TỒN KHO CỦA TỪNG MÀU VÀ TỪNG SIZE
            let tonCuaLoai = layTonKho(spHienTai, mauKhoaDaChon, sizeDaChon); let slDangCoTrongGio = 0;
            danhSachGioHang.forEach(mon => { let t = tachTenVaSize(mon.ten); if (t.ten === tenGoc && t.size === sizeDaChon && t.mau === mauKhoaDaChon) slDangCoTrongGio += mon.soLuong; });
            if (tonCuaLoai === 0) { hienThongBao(`Rất tiếc! Màu ${mauDaChon} size ${sizeDaChon} đã hết hàng, bạn hãy chọn loại khác nhé.`, true); return; }
            if (slDangCoTrongGio + soLuongMuonMua > tonCuaLoai) {
                hienThongBao(`Rất tiếc! Màu ${mauDaChon} size ${sizeDaChon} chỉ còn ${tonCuaLoai} chiếc` + (slDangCoTrongGio > 0 ? ` (bạn đã có ${slDangCoTrongGio} chiếc trong giỏ)` : '') + `. Hãy giảm số lượng.`, true); return;
            }

            let tenGopLai = tenNhanVao + " (Size: " + sizeDaChon + ", Màu: " + mauDaChon + ")"; let hinhAnhHienTai = spAnhChinh.getAttribute('src'); let daCoRoi = false;
            for (let j = 0; j < danhSachGioHang.length; j++) { if (danhSachGioHang[j].ten === tenGopLai) { danhSachGioHang[j].soLuong += soLuongMuonMua; daCoRoi = true; break; } }
            if (daCoRoi === false) { danhSachGioHang.push({ ten: tenGopLai, gia: giaNhanVao, soLuong: soLuongMuonMua, anh: hinhAnhHienTai, duocChon: true }); }
            localStorage.setItem('gioHangCuaToi', JSON.stringify(danhSachGioHang)); hienThongBao("Đã thêm " + soLuongMuonMua + " sản phẩm vào giỏ!", false); capNhatGiaoDienGioHang();
        }
    }

    // Giao diện: rê chuột để phóng to ảnh
    let khungAnhChinh = document.querySelector('.anh-chinh-wrapper');
    if (khungAnhChinh && spAnhChinh) {
        khungAnhChinh.addEventListener('mousemove', function(e) { let h = khungAnhChinh.getBoundingClientRect(); spAnhChinh.style.transformOrigin = ((e.clientX - h.left) / h.width * 100) + '% ' + ((e.clientY - h.top) / h.height * 100) + '%'; spAnhChinh.style.transform = 'scale(1.8)'; });
        khungAnhChinh.addEventListener('mouseleave', function() { spAnhChinh.style.transform = 'scale(1)'; });
    }

    let soCuaAo = maGoc.replace('ao', ''); if (soCuaAo.length === 1) soCuaAo = "0" + soCuaAo; let tenFileText = "text chi tiết/sp" + soCuaAo + ".txt"; 
    let khuVucMoTa = document.getElementById('noi-dung-chi-tiet');
    if (khuVucMoTa) {
        let duongDanAnToan = encodeURI(tenFileText) + "?v=" + new Date().getTime();
        fetch(duongDanAnToan).then(function(phanHoi) { if (phanHoi.ok === false) throw new Error("File không tồn tại"); return phanHoi.text(); }).then(function(vanBanText) { khuVucMoTa.innerHTML = "<p>" + vanBanText.replace(/\n/g, '<br>') + "</p>"; }).catch(function(loi) { khuVucMoTa.innerHTML = "<p style='color: #888; font-style: italic;'>Chưa có bài viết chi tiết cho sản phẩm này.</p>"; });
    }
}

// --- 3.7. BỘ TÌM KIẾM ---
let tatCaThanhTimKiem = document.querySelectorAll('input[placeholder="Tìm kiếm sản phẩm..."]');
tatCaThanhTimKiem.forEach(thanh => { thanh.addEventListener('keypress', function(e) { if (e.key === 'Enter') { let tuKhoa = this.value.trim(); if (tuKhoa !== "") window.location.href = "timkiem.html?timkiem=" + encodeURIComponent(tuKhoa); } }); });

let khuVucKetQua = document.getElementById('ket-qua-tim-kiem'); let tieuDeKetQua = document.getElementById('tieu-de-ket-qua'); let thanhLocTimKiem = document.getElementById('thanh-loc-tim-kiem');
if (khuVucKetQua != null && tieuDeKetQua != null) {
    let thamSoURL = new URLSearchParams(window.location.search); let tuKhoa = (thamSoURL.get('timkiem') || "").trim();
    let thoatKyTu = function(s) { return String(s).replace(/[&<>"']/g, function(c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };

    // Gợi ý từ khóa lấy từ chính tên sản phẩm (hai từ đầu, ví dụ "Áo Polo", "Áo Thun"), cái nào nhiều sản phẩm nhất xếp trước
    let taoGoiYTuKhoa = function() {
        let dem = {}; khoSanPham.forEach(function(sp) { let hai = sp.ten.split(' ').slice(0, 2).join(' '); dem[hai] = (dem[hai] || 0) + 1; });
        return Object.keys(dem).sort(function(a, b) { return dem[b] - dem[a]; }).slice(0, 4).map(function(t) { return '<a href="timkiem.html?timkiem=' + encodeURIComponent(t) + '">' + thoatKyTu(t) + '</a>'; }).join('');
    };

    if (tuKhoa !== "") {
        tieuDeKetQua.innerText = "Kết quả tìm kiếm cho: '" + tuKhoa + "'"; 
        let oTimTrenHeader = document.getElementById('o-tim-kiem'); if (oTimTrenHeader) oTimTrenHeader.value = tuKhoa; // ô tìm kiếm ở Header giữ lại từ khóa
        let cacTuKhoa = boDauTiengViet(tuKhoa).split(" ").filter(function(tu) { return tu.trim() !== ""; }); // tìm không cần gõ dấu: "ao polo" vẫn ra "Áo Polo"
        let dsKhop = khoSanPham.filter(function(sp) { let ten = boDauTiengViet(sp.ten); return cacTuKhoa.every(function(t) { return ten.includes(t); }); });
        let tinhGia = function(sp) { return (sp.giamGia || 0) > 0 ? sp.gia * (1 - sp.giamGia / 100) : sp.gia; };

        if (dsKhop.length === 0) {
            if (thanhLocTimKiem) thanhLocTimKiem.innerHTML = '';
            khuVucKetQua.innerHTML = '<div class="khong-co-ket-qua"><div class="bieu-tuong">🔍</div><h3>Rất tiếc, không tìm thấy sản phẩm nào cho "' + thoatKyTu(tuKhoa) + '"</h3><p>Hãy thử từ khóa ngắn hơn hoặc chọn một gợi ý bên dưới:</p><div class="goi-y-tu-khoa">' + taoGoiYTuKhoa() + '</div><a href="index.html" class="nut-quay-lai-cua-hang">Quay lại cửa hàng</a></div>';
        } else {
            let boLoc = { sapXep: 'lienQuan', chiConHang: false };
            let veKetQua = function() {
                let ds = dsKhop.slice(); if (boLoc.chiConHang) ds = ds.filter(function(sp) { return sp.tongTonKhoHienTai > 0; });
                if (boLoc.sapXep === 'giaTang') ds.sort(function(a, b) { return tinhGia(a) - tinhGia(b); }); else if (boLoc.sapXep === 'giaGiam') ds.sort(function(a, b) { return tinhGia(b) - tinhGia(a); });

                if (thanhLocTimKiem) {
                    let chip = function(giaTri, chu) { return '<button class="chip-loc' + (boLoc.sapXep === giaTri ? ' active' : '') + '" data-sap-xep="' + giaTri + '">' + chu + '</button>'; };
                    thanhLocTimKiem.innerHTML = '<div class="loc-dem">Tìm thấy <b>' + ds.length + '</b> sản phẩm</div><div class="loc-nhom">' + chip('lienQuan', 'Liên quan') + chip('giaTang', 'Giá thấp → cao') + chip('giaGiam', 'Giá cao → thấp') + '<button class="chip-loc' + (boLoc.chiConHang ? ' active' : '') + '" data-con-hang="1" aria-pressed="' + boLoc.chiConHang + '">Chỉ còn hàng</button></div>';
                }
                if (ds.length === 0) { khuVucKetQua.innerHTML = '<div class="khong-co-ket-qua"><div class="bieu-tuong">📦</div><h3>Tất cả sản phẩm tìm thấy hiện đã hết hàng</h3><p>Hãy bỏ chọn "Chỉ còn hàng" để xem toàn bộ kết quả.</p></div>'; return; }

                let ketQuaHTML = "";
                ds.forEach(function(sp) {
                    let mucGiamGia = sp.giamGia || 0; let giaHienThi = tinhGia(sp); let heHang = sp.tongTonKhoHienTai === 0;
                    let giaHtml = mucGiamGia > 0 ? `<div class="khung-gia"><span class="gia-giam">${giaHienThi.toLocaleString('vi-VN')} đ</span><span class="gia-goc">${sp.gia.toLocaleString('vi-VN')} đ</span><span class="nhan-giam-gia">-${mucGiamGia}%</span></div>` : `<p>${sp.gia.toLocaleString('vi-VN')} VNĐ</p>`;
                    let trangThai = `<div class="trang-thai-tim-kiem ${heHang ? 'het' : 'con'}"><span class="cham-trang-thai"></span>${heHang ? 'Hết hàng' : 'Còn hàng'}</div>`;
                    let linkSP = `sp.html?ten=${encodeURIComponent(sp.ten)}&gia=${giaHienThi}&anh=${encodeURIComponent(sp.anh)}`;
                    ketQuaHTML += `<div class="dong-sp-tim-kiem${heHang ? ' het-hang' : ''}" onclick="window.location.href='${linkSP}'"><img src="${sp.anh}" alt="${sp.ten}"><div class="thong-tin"><h3>${sp.ten}</h3>${giaHtml}${trangThai}</div><button class="nut-xem-chi-tiet" onclick="event.stopPropagation(); window.location.href='${linkSP}'">Xem chi tiết</button></div>`;
                });
                khuVucKetQua.innerHTML = ketQuaHTML;
            };
            if (thanhLocTimKiem) thanhLocTimKiem.addEventListener('click', function(e) {
                let nut = e.target.closest('.chip-loc'); if (!nut) return;
                if (nut.getAttribute('data-sap-xep')) boLoc.sapXep = nut.getAttribute('data-sap-xep'); else if (nut.getAttribute('data-con-hang')) boLoc.chiConHang = !boLoc.chiConHang;
                veKetQua();
            });
            veKetQua();
        }
    } else {
        tieuDeKetQua.innerText = "Vui lòng nhập từ khóa để tìm kiếm!";
        if (thanhLocTimKiem) thanhLocTimKiem.innerHTML = '';
        khuVucKetQua.innerHTML = '<div class="khong-co-ket-qua"><div class="bieu-tuong">🔍</div><p>Bạn có thể gõ vào ô tìm kiếm ở trên, hoặc thử một gợi ý:</p><div class="goi-y-tu-khoa">' + taoGoiYTuKhoa() + '</div></div>';
    }
}

// --- 3.8. TRANG THANH TOÁN (TÍNH TOÁN VÀ TRỪ TỒN KHO) ---
let khuVucDanhSachThanhToan = document.getElementById('danh-sach-thanh-toan'); let nutXacNhanDatHang = document.getElementById('nut-xac-nhan-dat-hang');
if (khuVucDanhSachThanhToan != null) {
    if (nguoiDungHienTai == null) { hienThongBao("Vui lòng đăng nhập trước khi thanh toán!", true); setTimeout(function() { window.location.href = "index.html"; }, 1500); } else {
        let tongTienThanhToan = 0; let htmlDonHang = ""; let coMonDeThanhToan = false; let tongSoCai = 0;
        for (let i = 0; i < danhSachGioHang.length; i++) {
            if (danhSachGioHang[i].duocChon === true) {
                coMonDeThanhToan = true; let monHang = danhSachGioHang[i]; let thanhTien = monHang.gia * monHang.soLuong; tongTienThanhToan += thanhTien; tongSoCai += monHang.soLuong;
                // Tách "Tên (Size: M, Màu: Trắng)" thành tên và nhãn cho gọn mắt (giống trang giỏ hàng)
                let tenHienThi = monHang.ten; let nhanPhanLoai = ''; let khop = monHang.ten.match(/^(.*?) \(Size: (.*?), Màu: (.*?)\)$/);
                if (khop) { tenHienThi = khop[1]; nhanPhanLoai = '<div class="phan-loai-gio"><span class="chip-phan-loai">Size ' + khop[2] + '</span><span class="chip-phan-loai">Màu ' + khop[3] + '</span></div>'; }
                let anhHienThi = monHang.anh || 'quần áo/ao1.png';
                htmlDonHang += `<div class="dong-don-hang"><img class="anh-don-hang" src="${anhHienThi}" alt=""><div class="thong-tin-don-hang"><div class="ten-don-hang">${tenHienThi}</div>${nhanPhanLoai}<div class="sl-don-hang">Số lượng: ${monHang.soLuong}</div></div><div class="tien-don-hang">${thanhTien.toLocaleString('vi-VN')} đ</div></div>`;
            }
        }
        // Phí vận chuyển: đơn từ mức freeship thì miễn phí, đơn nhỏ hơn thì phí do đơn vị vận chuyển tính (không cộng vào tổng)
        const CHU_PHI_SHIP = "Phí ship sẽ được tính bởi đơn vị vận chuyển"; let chuVanChuyen = "Miễn phí";
        if (coMonDeThanhToan && tongTienThanhToan < MUC_FREESHIP) {
            chuVanChuyen = CHU_PHI_SHIP;
            let oGiaTriVC = document.getElementById('gia-tri-van-chuyen'); if (oGiaTriVC) { oGiaTriVC.innerText = CHU_PHI_SHIP; oGiaTriVC.classList.add('co-phi'); }
            let oGoiY = document.getElementById('goi-y-freeship'); if (oGoiY) oGoiY.innerHTML = '🚚 Mua thêm <b>' + (MUC_FREESHIP - tongTienThanhToan).toLocaleString('vi-VN') + ' đ</b> để được miễn phí vận chuyển';
        }
        if (coMonDeThanhToan) { khuVucDanhSachThanhToan.innerHTML = htmlDonHang; document.getElementById('tong-tien-thanh-toan').innerText = tongTienThanhToan.toLocaleString('vi-VN'); }
        else { khuVucDanhSachThanhToan.innerHTML = "<div class='don-hang-trong'>Chưa có sản phẩm nào để thanh toán.<br><a href='giohang.html'>← Chọn sản phẩm trong giỏ hàng</a></div>"; if (nutXacNhanDatHang) nutXacNhanDatHang.classList.add('chua-san-pham'); }

        // Chuyển khoản QR tạm thời chưa hỗ trợ: bấm vào sẽ báo, vẫn giữ thanh toán khi nhận hàng
        let theChuyenKhoan = document.getElementById('the-chuyen-khoan');
        if (theChuyenKhoan) theChuyenKhoan.addEventListener('click', function(e) { e.preventDefault(); hienThongBao("Chuyển khoản qua mã QR tạm thời chưa hỗ trợ. Bạn vui lòng chọn thanh toán khi nhận hàng nhé!", true); });

        // Kiểm tra từng ô ngay khi nhập: báo lỗi ngay bên dưới ô, không cần chờ bấm đặt hàng
        let quyTacKiemTra = {
            'ten-khach-hang': function(v) { return v.length >= 2 ? '' : 'Vui lòng nhập họ và tên người nhận'; },
            'sdt-khach-hang': function(v) { let so = v.replace(/[\s.\-]/g, '').replace(/^\+84/, '0'); return /^0[0-9]{9}$/.test(so) ? '' : (v === '' ? 'Vui lòng nhập số điện thoại' : 'Số điện thoại chưa đúng (gồm 10 số, ví dụ 0901234567)'); },
            'dia-chi-khach-hang': function(v) { return v.length >= 6 ? '' : 'Vui lòng nhập địa chỉ nhận hàng đầy đủ (số nhà, phường/xã, quận/huyện, tỉnh/thành)'; }
        };
        let kiemTraMotO = function(idO) {
            let oNhap = document.getElementById(idO); if (!oNhap) return true;
            let loi = quyTacKiemTra[idO](oNhap.value.trim()); let oLoi = oNhap.nextElementSibling;
            oNhap.classList.toggle('khong-hop-le', loi !== ''); oNhap.setAttribute('aria-invalid', loi !== '' ? 'true' : 'false');
            if (oLoi && oLoi.classList.contains('loi-o')) oLoi.innerText = loi;
            return loi === '';
        };
        Object.keys(quyTacKiemTra).forEach(function(idO) {
            let oNhap = document.getElementById(idO); if (!oNhap) return;
            oNhap.addEventListener('blur', function() { kiemTraMotO(idO); });
            oNhap.addEventListener('input', function() { if (oNhap.classList.contains('khong-hop-le')) kiemTraMotO(idO); });
        });
        
        nutXacNhanDatHang.onclick = function() {
            let tenKH = document.getElementById('ten-khach-hang').value.trim(); let sdtKH = document.getElementById('sdt-khach-hang').value.trim(); let diaChiKH = document.getElementById('dia-chi-khach-hang').value.trim();
            let ghiChuKH = document.getElementById('ghi-chu-khach-hang') ? document.getElementById('ghi-chu-khach-hang').value.trim() : '';
            let oPhuongThuc = document.querySelector('input[name="pttt"]:checked'); let phuongThucTT = oPhuongThuc ? oPhuongThuc.value : '';
            let oDauTienLoi = null; Object.keys(quyTacKiemTra).forEach(function(idO) { if (!kiemTraMotO(idO) && oDauTienLoi === null) oDauTienLoi = document.getElementById(idO); });
            if (oDauTienLoi !== null) {
                hienThongBao((tenKH === "" || sdtKH === "" || diaChiKH === "") ? "Vui lòng điền đầy đủ thông tin giao hàng (có dấu *)!" : "Vui lòng kiểm tra lại thông tin giao hàng!", true);
                oDauTienLoi.focus(); return;
            }
            if (!coMonDeThanhToan) { hienThongBao("Đơn hàng rỗng, không thể đặt hàng!", true); return; }
            
            // XÁC NHẬN LẠI TỒN KHO TỪNG MÀU VÀ TỪNG SIZE LẦN CUỐI TRƯỚC KHI CHỐT ĐƠN (CHỐNG MUA QUÁ LỐ)
            let duHang = true; let tongTheoLoai = {};
            for (let mon of danhSachGioHang) { if (mon.duocChon) { let t = tachTenVaSize(mon.ten); let k = khoaDaBan(t.ten, t.mau, t.size); tongTheoLoai[k] = (tongTheoLoai[k] || 0) + mon.soLuong; } }
            for (let mon of danhSachGioHang) {
                if (!mon.duocChon) continue;
                let t = tachTenVaSize(mon.ten); let spCheck = khoSanPham.find(s => s.ten === t.ten);
                if (spCheck) {
                    let tonCuaLoai = layTonKho(spCheck, t.mau, t.size);
                    if (tongTheoLoai[khoaDaBan(t.ten, t.mau, t.size)] > tonCuaLoai) {
                        hienThongBao(`Lỗi: "${t.ten}"` + (t.mau ? ` màu ${t.mau}` : '') + (t.size ? ` size ${t.size}` : '') + ` chỉ còn ${tonCuaLoai} chiếc. Hãy giảm số lượng ở giỏ hàng!`, true); duHang = false; break;
                    }
                }
            }
            if(!duHang) return;

            // KHÓA NÚT NGAY: tránh bấm đúp làm đặt hai đơn và trừ kho hai lần
            nutXacNhanDatHang.disabled = true; nutXacNhanDatHang.innerText = "Đang xử lý...";

            // XỬ LÝ TRỪ TỒN KHO & LƯU LỊCH SỬ
            let danhSachDaMua = []; let gioHangMoi = []; 
            for (let i = 0; i < danhSachGioHang.length; i++) { 
                if (danhSachGioHang[i].duocChon === false) { gioHangMoi.push(danhSachGioHang[i]); } 
                else {
                    let tSize = tachTenVaSize(danhSachGioHang[i].ten); let khoa = khoaDaBan(tSize.ten, tSize.mau, tSize.size);
                    hangDaBan[khoa] = (hangDaBan[khoa] || 0) + danhSachGioHang[i].soLuong; // Ghi sổ hàng đã bán của từng màu và size
                    danhSachDaMua.push(danhSachGioHang[i]); // Lưu vết lịch sử
                }
            }
            
            // Cập nhật Database ảo
            localStorage.setItem('daBanTheoMauSize_FashionShop', JSON.stringify(hangDaBan));
            
            // Lưu Lịch sử đơn hàng (kèm thông tin giao hàng và phương thức thanh toán)
            let lichSuDonHang = JSON.parse(localStorage.getItem('lichSu_FashionShop') || "[]");
            lichSuDonHang.push({ maDon: '#FS' + Date.now().toString().slice(-6), nguoiMua: nguoiDungHienTai, thoiGian: new Date().toLocaleString('vi-VN'), tongTien: tongTienThanhToan, danhSach: danhSachDaMua, giaoHang: { nguoiNhan: tenKH, soDienThoai: sdtKH, diaChi: diaChiKH, ghiChu: ghiChuKH }, phuongThucThanhToan: phuongThucTT, phiVanChuyen: chuVanChuyen });
            localStorage.setItem('lichSu_FashionShop', JSON.stringify(lichSuDonHang));

            localStorage.setItem('gioHangCuaToi', JSON.stringify(gioHangMoi)); // Xóa đồ trong giỏ
            
            nutXacNhanDatHang.innerText = "✓ Đặt hàng thành công";
            hienThongBao("🎉 Đặt hàng thành công! Đã lưu vào Lịch sử giao dịch.", false);
            setTimeout(function() { window.location.href = "index.html"; }, 2500);
        };
    }
}