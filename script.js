// =========================================================================
// BỘ NÃO VÀ TRÍ NHỚ (BẢN TỐI ƯU HÓA HOÀN HẢO - DATA-DRIVEN RENDERING)
// =========================================================================

// --- 1. TỰ ĐỘNG VẼ HEADER, MEGA MENU, FOOTER VÀ MODAL ---
const htmlHeader = `
<header style="background-color: white; color: #111; padding: 15px 30px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #eee; position: sticky; top: 0; z-index: 1002; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
    
    <div style="flex: 1; display: flex; align-items: center; gap: 20px;">
        <button id="nut-danh-muc" style="background: #f4f4f4; border: 1px solid #eee; font-size: 16px; cursor: pointer; color: #111; font-weight: bold; display: flex; align-items: center; gap: 10px; padding: 10px 20px; border-radius: 25px; transition: 0.2s;">
            <span style="font-size: 22px; line-height: 1;">☰</span> DANH MỤC
        </button>
        <div style="position: relative; max-width: 350px; width: 100%;">
            <span style="position: absolute; left: 15px; top: 50%; transform: translateY(-50%);">🔍</span>
            <input type="text" placeholder="Tìm kiếm sản phẩm..." style="width: 100%; padding: 12px 20px 12px 40px; border-radius: 25px; border: 1px solid #e0e0e0; outline: none; font-size: 14px; background-color: #f8f9fa; box-sizing: border-box;">
        </div>
    </div>
    
    <div style="flex: 1; text-align: center;">
        <a href="index.html" style="text-decoration: none;">
            <h1 style="color: #fcaf17; margin: 0; font-size: 38px; cursor: pointer; display: inline-block; font-family: Arial, sans-serif; font-weight: bold;">bodoi</h1>
        </a>
    </div>

    <div class="khu-vuc-gio-hang" style="flex: 1; justify-content: flex-end;">
        <button id="nut-mo-modal-tai-khoan" style="background-color: transparent; color: #333; border: none; font-size: 15px; cursor: pointer; font-weight: normal;">👤 Đăng nhập</button>
        <a href="giohang.html" style="background-color: #fcaf17; color: #003366; text-decoration: none; font-size: 15px; padding: 10px 20px; border-radius: 20px; font-weight: bold;">🛒 Giỏ Hàng (<span id="so-luong-mon" style="color: #e30019;">0</span>)</a>
    </div>

    <div id="mega-menu">
        <div class="mega-menu-container">
            <div class="mega-menu-top-links">
                <span onclick="window.location.href='timkiem.html?timkiem=' + encodeURIComponent('BST POLO CHẠM THU')">🧥 BST POLO CHẠM THU</span>
                <span onclick="window.location.href='timkiem.html?timkiem=' + encodeURIComponent('CỬA HÀNG')">🏪 CỬA HÀNG</span>
                <span onclick="window.location.href='timkiem.html?timkiem=' + encodeURIComponent('TIN TỨC')">📰 TIN TỨC</span>
                <span onclick="window.location.href='index.html#bo-suu-tap-1'; document.getElementById('mega-menu').style.display='none'; document.getElementById('mega-menu-backdrop').style.display='none';">✨ MỚI VỀ</span>
                <span style="color: #e30019; background: #ffe6e8;" onclick="window.location.href='index.html#bo-suu-tap-2'; document.getElementById('mega-menu').style.display='none'; document.getElementById('mega-menu-backdrop').style.display='none';">🔥 ƯU ĐÃI -50%</span>
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
<div id="modal-bang-size" class="cua-so-noi"><div class="noi-dung-cua-so" style="width: 550px; max-width: 95%; padding: 0; overflow: hidden; border-radius: 12px;"><div style="display: flex; justify-content: space-between; align-items: center; padding: 20px; border-bottom: 1px solid #eee;"><h3 style="margin: 0; font-size: 18px; color: #333;">Bảng kích thước</h3><span id="nut-dong-size" class="nut-dong" style="margin: 0; float: none; line-height: 1;">&times;</span></div><div class="bang-size" style="padding: 20px; max-height: 70vh; overflow-y: auto;"><div style="background-color: #fbf8f1; padding: 12px; border-radius: 8px; font-size: 14px; margin-bottom: 20px; display: flex; align-items: center; gap: 10px;"><span>🔄</span><span>Không hài lòng, <b>đổi trả trong 30 ngày</b></span></div><div style="display: flex; background: #f4f4f4; border-radius: 8px; padding: 5px; margin-bottom: 20px;"><div class="tab-size-btn active" data-tab="tab-nam">Nam</div><div class="tab-size-btn" data-tab="tab-nu">Nữ</div><div class="tab-size-btn" data-tab="tab-tre-em">Trẻ em</div><div class="tab-size-btn" data-tab="tab-phu-kien">Phụ kiện</div></div><div id="tab-nam" class="tab-noi-dung" style="display: block;"><h4 style="margin: 0 0 15px 0; font-size: 16px; color: #111;">Áo Nam</h4><table><thead><tr><th>Kích thước</th><th>S</th><th>M</th><th>L</th><th>XL</th></tr></thead><tbody><tr><td>Chiều cao</td><td>160-165</td><td>160-165</td><td>166-172</td><td>172-177</td></tr><tr><td>Cân nặng</td><td>50-54</td><td>55-61</td><td>62-68</td><td>69-75</td></tr><tr><td>Rộng Vai</td><td>41</td><td>42</td><td>43,5</td><td>45</td></tr></tbody></table></div><div id="tab-nu" class="tab-noi-dung" style="display: none;"><h4 style="margin: 0 0 15px 0; font-size: 16px; color: #111;">Áo Nữ</h4><table><thead><tr><th>Kích thước</th><th>S</th><th>M</th><th>L</th><th>XL</th></tr></thead><tbody><tr><td>Chiều cao</td><td>150-155</td><td>156-160</td><td>160-164</td><td>165-170</td></tr><tr><td>Cân nặng</td><td>43-46</td><td>46-53</td><td>53-57</td><td>58-65</td></tr><tr><td>Vòng ngực</td><td>78-82</td><td>84-88</td><td>88-92</td><td>93-97</td></tr></tbody></table></div><div id="tab-tre-em" class="tab-noi-dung" style="display: none;"><h4 style="margin: 0 0 15px 0; font-size: 16px; color: #111;">Quần Áo Trẻ Em</h4><table><thead><tr><th>Độ tuổi</th><th>2-3T</th><th>4-5T</th><th>6-7T</th><th>8-9T</th></tr></thead><tbody><tr><td>Chiều cao</td><td>90-98</td><td>100-110</td><td>112-122</td><td>125-130</td></tr><tr><td>Cân nặng</td><td>12-14</td><td>15-18</td><td>19-22</td><td>23-26</td></tr></tbody></table></div><div id="tab-phu-kien" class="tab-noi-dung" style="display: none;"><h4 style="margin: 0 0 15px 0; font-size: 16px; color: #111;">Phụ Kiện (Mũ, Tất...)</h4><div style="padding: 20px; text-align: center; border: 1px dashed #ccc; border-radius: 8px; color: #555;"><p>Sản phẩm Freesize. Điều chỉnh dễ dàng qua quai mũ hoặc độ giãn vải.</p></div></div></div></div></div>
<div id="modal-tai-khoan" class="cua-so-noi"><div class="noi-dung-cua-so"><span id="nut-dong-modal" class="nut-dong">&times;</span><h2 style="text-align: center; color: #003366; margin-top: 0;">Khách Hàng</h2><div id="form-dang-nhap" style="display: flex; flex-direction: column;"><input type="text" id="ten-dang-nhap" placeholder="Tên tài khoản"><input type="password" id="mat-khau" placeholder="Mật khẩu"><div style="display: flex; gap: 10px; margin-top: 10px;"><button id="nut-dang-ky" style="flex: 1;">Đăng ký</button><button id="nut-dang-nhap" style="flex: 1;">Đăng nhập</button></div></div><div id="thong-tin-nguoi-dung" style="display: none; text-align: center;"><p style="font-size: 18px;">Xin chào, <b id="ten-nguoi-dung" style="color: #e30019;">Khách</b>!</p><button id="nut-dang-xuat" style="background-color: #6c757d; width: 100%; border: none; padding: 14px; color: white; border-radius: 8px; cursor: pointer;">Đăng xuất</button></div></div></div>
<div id="modal-xac-nhan-xoa" class="cua-so-noi"><div class="noi-dung-cua-so" style="text-align: center; width: 320px;"><h3 style="color: #e30019; margin-top: 0; font-size: 24px;">⚠️ Xác Nhận</h3><p id="noi-dung-xac-nhan" style="margin: 20px 0; color: #333; line-height: 1.5; font-size: 16px;"></p><div style="display: flex; gap: 10px; justify-content: center; margin-top: 25px;"><button id="nut-huy-xoa" style="background-color: #f0f0f0; color: #333; flex: 1; border: none; padding: 12px; border-radius: 8px; cursor: pointer; font-weight: bold;">Hủy</button><button id="nut-dong-y-xoa" style="background-color: #e30019; color: white; flex: 1; border: none; padding: 12px; border-radius: 8px; cursor: pointer; font-weight: bold;">Xóa ngay</button></div></div></div>
<footer>
    <div class="footer-container">
        <div class="footer-cot"><h4>Về Cửa Hàng BODOI</h4><p>Với sứ mệnh "Đưa sản phẩm thời trang Việt có chất liệu tốt, dịch vụ tốt đến tận tay khách hàng", chúng tôi luôn nỗ lực không ngừng từng ngày.</p></div>
        <div class="footer-cot"><h4>Hỗ Trợ Khách Hàng</h4><a href="#" class="nut-mo-size-footer">Hướng dẫn chọn size</a><a href="#">Chính sách khách hàng</a><a href="#">Đổi trả 30 ngày</a></div>
        <div class="footer-cot"><h4>Liên Hệ</h4><p>📍 Hà Đông, Hà Nội</p><p>📞 0987.654.321</p></div>
    </div><div class="footer-bottom">&copy; 2026 Cửa Hàng Thời Trang BODOI. Thiết kế độc quyền.</div>
</footer>
`;
document.body.insertAdjacentHTML('afterbegin', htmlHeader);
document.body.insertAdjacentHTML('beforeend', htmlFooterVaModals);


// --- 2. DỮ LIỆU SẢN PHẨM: "NGUỒN CHÂN LÝ DUY NHẤT" (SSOT) ---
// Nếu em muốn thêm một chiếc áo mới, chỉ cần gõ thêm 1 dòng vào đây!
let tuDienMauSac = { "ao1": ["trắng", "đen"], "ao2": ["trắng", "xanh"], "ao3": ["be", "xanh"], "ao4": ["be", "xanh"], "ao5": ["trắng", "xanh"], "ao6": ["hồng", "trắng"], "ao7": ["cam", "xanh"], "ao8": ["trắng hồng", "trắng xanh"], "ao9": ["trắng", "xanh"], "ao10": ["hồng", "tím"], "ao11": ["be", "tím"], "ao12": ["đen", "xanh"], "ao13": ["be", "đỏ"], "ao14": ["đen", "đỏ"], "ao15": ["trắng", "xanh"], "macDinh": ["màu 1", "màu 2"] };

let khoSanPham = [
    // boSuuTap: 1 -> Hiện ở khu vực BỘ SƯU TẬP MỚI
    { anh: "quần áo/ao1.png", ten: "Áo Polo Nữ Thể Thao", gia: 200000, giam50: false, boSuuTap: 1 },
    { anh: "quần áo/ao2.png", ten: "Áo Polo Thể Thao Nam", gia: 250000, giam50: false, boSuuTap: 1 },
    { anh: "quần áo/ao3.png", ten: "Áo Polo Nữ Dáng Ngắn", gia: 300000, giam50: false, boSuuTap: 1 },
    { anh: "quần áo/ao4.png", ten: "Áo Polo Nam Cổ V", gia: 280000, giam50: false, boSuuTap: 1 },
    { anh: "quần áo/ao5.png", ten: "Áo Polo Nam Mắt Chim Cơ Bản", gia: 320000, giam50: false, boSuuTap: 1 },
    
    // boSuuTap: 2 -> Hiện ở khu vực ƯU ĐÃI TỰU TRƯỜNG
    { anh: "quần áo/ao6.png", ten: "Áo Thun Thể Thao Nữ", gia: 150000, giam50: true, boSuuTap: 2 },
    { anh: "quần áo/ao7.png", ten: "Áo Polo Nữ Ponte Roma Cool Dáng Suông", gia: 180000, giam50: true, boSuuTap: 2 },
    { anh: "quần áo/ao8.png", ten: "Áo Polo Thể Thao Nữ Ponte Roma Cool", gia: 190000, giam50: true, boSuuTap: 2 },
    { anh: "quần áo/ao9.png", ten: "Áo Polo Nữ Ponte Roma Cool phối lưới", gia: 220000, giam50: true, boSuuTap: 2 },
    { anh: "quần áo/ao10.png", ten: "Áo Polo Nữ waffle co giãn dây dệt vai", gia: 350000, giam50: true, boSuuTap: 2 },
    
    // boSuuTap: 3 -> Hiện ở khu vực THOÁNG MÁT NĂNG ĐỘNG
    { anh: "quần áo/ao11.png", ten: "Áo Thun Nữ Dream Team", gia: 380000, giam50: false, boSuuTap: 3 },
    { anh: "quần áo/ao12.png", ten: "Áo Thun Cổ Tim Dream Team", gia: 320000, giam50: false, boSuuTap: 3 },
    { anh: "quần áo/ao13.png", ten: "Áo Thun Nam Dream Team", gia: 450000, giam50: false, boSuuTap: 3 },
    { anh: "quần áo/ao14.png", ten: "Áo Thun Cổ Tim Dream Team", gia: 280000, giam50: false, boSuuTap: 3 },
    { anh: "quần áo/ao15.png", ten: "Áo Thun Nam Dream Team", gia: 499000, giam50: false, boSuuTap: 3 }
];


// --- 3. AUTO RENDER: TỰ ĐỘNG XUẤT BẢN SẢN PHẨM LÊN TRANG CHỦ ---
let khuVucSP1 = document.getElementById('khu-vuc-sp-1');
let khuVucSP2 = document.getElementById('khu-vuc-sp-2');
let khuVucSP3 = document.getElementById('khu-vuc-sp-3');

// Nếu đang đứng ở trang chủ thì tiến hành "bày hàng"
if (khuVucSP1 || khuVucSP2 || khuVucSP3) {
    khoSanPham.forEach(function(sp) {
        let theGiaHTML = "";
        let giaTruyenVao = sp.gia; // Giá sẽ truyền sang trang chi tiết

        if (sp.giam50) {
            let giaGiam = sp.gia / 2;
            giaTruyenVao = giaGiam;
            theGiaHTML = `
                <div class="khung-gia">
                    <span style="color: #e30019;">${giaGiam.toLocaleString('vi-VN')} đ</span>
                    <span class="gia-goc">${sp.gia.toLocaleString('vi-VN')} đ</span>
                    <span class="nhan-giam-gia">-50%</span>
                </div>
            `;
        } else {
            theGiaHTML = `<p>${sp.gia.toLocaleString('vi-VN')} VNĐ</p>`;
        }

        // Tự động đóng gói HTML cho 1 cái áo
        let htmlSP = `
            <div class="hop-san-pham">
                <img src="${sp.anh}" alt="${sp.ten}" onclick="event.stopPropagation(); window.location.href='sp.html?ten=${encodeURIComponent(sp.ten)}&gia=${giaTruyenVao}&anh=${encodeURIComponent(sp.anh)}'">
                <h3>${sp.ten}</h3>
                ${theGiaHTML}
                <button class="nut-mua-hang" onclick="event.stopPropagation(); window.location.href='sp.html?ten=${encodeURIComponent(sp.ten)}&gia=${giaTruyenVao}&anh=${encodeURIComponent(sp.anh)}'">Chi tiết sản phẩm</button>
            </div>
        `;

        // Xem áo này thuộc bộ sưu tập nào thì nhét vào hộp đó
        if (sp.boSuuTap === 1 && khuVucSP1) khuVucSP1.innerHTML += htmlSP;
        else if (sp.boSuuTap === 2 && khuVucSP2) khuVucSP2.innerHTML += htmlSP;
        else if (sp.boSuuTap === 3 && khuVucSP3) khuVucSP3.innerHTML += htmlSP;
    });
}


// --- 4. LOGIC ĐÓNG MỞ CÁC MODALS (MEGA MENU, ĐĂNG NHẬP, BẢNG SIZE) ---
let nutDanhMuc = document.getElementById('nut-danh-muc'); let megaMenu = document.getElementById('mega-menu'); let nutDongMega = document.getElementById('nut-dong-mega'); let megaBackdrop = document.getElementById('mega-menu-backdrop');
if (nutDanhMuc != null) { nutDanhMuc.onclick = function() { megaMenu.style.display = "block"; megaBackdrop.style.display = "block"; } }
if (nutDongMega != null) { nutDongMega.onclick = function() { megaMenu.style.display = "none"; megaBackdrop.style.display = "none"; } }
if (megaBackdrop != null) { megaBackdrop.onclick = function() { megaMenu.style.display = "none"; megaBackdrop.style.display = "none"; } }

let cuaSoTaiKhoan = document.getElementById('modal-tai-khoan'); let nutMoCuaSo = document.getElementById('nut-mo-modal-tai-khoan'); let nutDongCuaSo = document.getElementById('nut-dong-modal');
let cuaSoXacNhan = document.getElementById('modal-xac-nhan-xoa'); let nutHuyXoa = document.getElementById('nut-huy-xoa'); let nutDongYXoa = document.getElementById('nut-dong-y-xoa'); let dongChuXacNhan = document.getElementById('noi-dung-xac-nhan');
let modalSize = document.getElementById('modal-bang-size'); let nutDongSize = document.getElementById('nut-dong-size'); let cacNutMoSize = document.querySelectorAll('#nut-mo-size, .nut-mo-size-footer');

if (nutMoCuaSo != null) nutMoCuaSo.onclick = function() { cuaSoTaiKhoan.style.display = "block"; }
if (nutDongCuaSo != null) nutDongCuaSo.onclick = function() { cuaSoTaiKhoan.style.display = "none"; }
cacNutMoSize.forEach(nut => { nut.onclick = function(e) { e.preventDefault(); if (modalSize != null) modalSize.style.display = "block"; }});
if (nutDongSize != null) nutDongSize.onclick = function() { if (modalSize != null) modalSize.style.display = "none"; }

window.onclick = function(suKien) {
    if (cuaSoTaiKhoan != null && suKien.target == cuaSoTaiKhoan) cuaSoTaiKhoan.style.display = "none";
    if (cuaSoXacNhan != null && suKien.target == cuaSoXacNhan) cuaSoXacNhan.style.display = "none";
    if (modalSize != null && suKien.target == modalSize) modalSize.style.display = "none";
}

let cacNutTabSize = document.querySelectorAll('.tab-size-btn'); let cacNoiDungTab = document.querySelectorAll('.tab-noi-dung');
cacNutTabSize.forEach(nut => { nut.onclick = function() { cacNutTabSize.forEach(n => n.classList.remove('active')); cacNoiDungTab.forEach(nd => nd.style.display = 'none'); this.classList.add('active'); let idTab = this.getAttribute('data-tab'); if(document.getElementById(idTab)) document.getElementById(idTab).style.display = 'block'; } });


// --- 5. LOGIC CHẠY BĂNG CHUYỀN QUẢNG CÁO, THÔNG BÁO ---
let bangChuyen = document.getElementById('bang-chuyen'); let nutLui = document.getElementById('nut-lui'); let nutToi = document.getElementById('nut-toi');
if (bangChuyen != null && nutLui != null && nutToi != null) {
    let viTriHienTai = 0; let tongSoSlide = 3; let dongHoTuDong; 
    function chuyenSlide() { bangChuyen.style.transform = 'translateX(-' + (viTriHienTai * 100) + '%)'; }
    function tienLenPhiaTruoc() { viTriHienTai++; if (viTriHienTai >= tongSoSlide) viTriHienTai = 0; chuyenSlide(); }
    function khoiDongLaiDongHo() { clearInterval(dongHoTuDong); dongHoTuDong = setInterval(tienLenPhiaTruoc, 4000); }
    dongHoTuDong = setInterval(tienLenPhiaTruoc, 4000);
    nutToi.onclick = function() { tienLenPhiaTruoc(); khoiDongLaiDongHo(); };
    nutLui.onclick = function() { viTriHienTai--; if (viTriHienTai < 0) viTriHienTai = tongSoSlide - 1; chuyenSlide(); khoiDongLaiDongHo(); };
}

let khuVucThongBao = document.createElement('div'); khuVucThongBao.id = 'khu-vuc-thong-bao'; document.body.appendChild(khuVucThongBao);
function hienThongBao(loiNhan, laLoi) { let thongBao = document.createElement('div'); thongBao.className = 'thong-bao-dep'; if (laLoi === true) thongBao.classList.add('loi'); thongBao.innerText = loiNhan; khuVucThongBao.appendChild(thongBao); setTimeout(function() { thongBao.remove(); }, 3000); }


// --- 6. LOGIC TÀI KHOẢN KHÁCH HÀNG ---
let boNhoSoHoKhau = localStorage.getItem('soHoKhauCuaCuaHang'); let danhSachTaiKhoan = [];
if (boNhoSoHoKhau != null) danhSachTaiKhoan = JSON.parse(boNhoSoHoKhau);
let nguoiDungHienTai = sessionStorage.getItem('aiDangDangNhap');

function capNhatGiaoDienTaiKhoan() {
    let formDangNhap = document.getElementById('form-dang-nhap'); let thongTinNguoiDung = document.getElementById('thong-tin-nguoi-dung'); let tenHienThi = document.getElementById('ten-nguoi-dung'); let nutGioHang = document.querySelector('a[href="giohang.html"]');
    if (formDangNhap == null || thongTinNguoiDung == null) return; 
    if (nguoiDungHienTai != null) {
        formDangNhap.style.display = 'none'; thongTinNguoiDung.style.display = 'block'; tenHienThi.innerText = nguoiDungHienTai;
        if (nutGioHang != null) nutGioHang.style.display = "inline-flex"; if (nutMoCuaSo != null) nutMoCuaSo.innerText = "👤 Xin chào, " + nguoiDungHienTai;
    } else {
        formDangNhap.style.display = 'block'; thongTinNguoiDung.style.display = 'none';
        if (nutGioHang != null) nutGioHang.style.display = "none"; if (nutMoCuaSo != null) nutMoCuaSo.innerText = "👤 Đăng nhập";
    }
}
capNhatGiaoDienTaiKhoan();

let nutDangKy = document.getElementById('nut-dang-ky');
if (nutDangKy != null) { nutDangKy.onclick = function() { let tenTaiKhoan = document.getElementById('ten-dang-nhap').value; let matKhau = document.getElementById('mat-khau').value; if (tenTaiKhoan === "" || matKhau === "") { hienThongBao("Vui lòng nhập đầy đủ Tên và Mật khẩu!", true); return; } for (let i = 0; i < danhSachTaiKhoan.length; i++) { if (danhSachTaiKhoan[i].ten === tenTaiKhoan) { hienThongBao("Tên này đã có người xài!", true); return; } } danhSachTaiKhoan.push({ ten: tenTaiKhoan, pass: matKhau }); localStorage.setItem('soHoKhauCuaCuaHang', JSON.stringify(danhSachTaiKhoan)); hienThongBao("Đăng ký thành công! Hãy Đăng nhập nhé.", false); }; }
let nutDangNhap = document.getElementById('nut-dang-nhap');
if (nutDangNhap != null) { nutDangNhap.onclick = function() { let tenTaiKhoan = document.getElementById('ten-dang-nhap').value; let matKhau = document.getElementById('mat-khau').value; let daTimThay = false; for (let i = 0; i < danhSachTaiKhoan.length; i++) { if (danhSachTaiKhoan[i].ten === tenTaiKhoan && danhSachTaiKhoan[i].pass === matKhau) { daTimThay = true; break; } } if (daTimThay) { sessionStorage.setItem('aiDangDangNhap', tenTaiKhoan); nguoiDungHienTai = tenTaiKhoan; hienThongBao("Đăng nhập thành công!", false); capNhatGiaoDienTaiKhoan(); if (cuaSoTaiKhoan != null) cuaSoTaiKhoan.style.display = "none"; } else { hienThongBao("Sai tên tài khoản hoặc mật khẩu!", true); } }; }
let nutDangXuat = document.getElementById('nut-dang-xuat');
if (nutDangXuat != null) { nutDangXuat.onclick = function() { sessionStorage.removeItem('aiDangDangNhap'); nguoiDungHienTai = null; danhSachGioHang = []; localStorage.removeItem('gioHangCuaToi'); capNhatGiaoDienGioHang(); hienThongBao("Đã đăng xuất!", false); capNhatGiaoDienTaiKhoan(); if (document.getElementById('danh-sach-mua') != null) setTimeout(function() { window.location.href = "index.html"; }, 1500); }; }


// --- 7. LOGIC GIỎ HÀNG CHUYÊN NGHIỆP ---
let khuVucDanhSachMua = document.getElementById('danh-sach-mua'); let danhSachGioHang = []; let boNhoCu = localStorage.getItem('gioHangCuaToi'); if (boNhoCu != null) danhSachGioHang = JSON.parse(boNhoCu);
let tenMonCanXoa = "";

function capNhatGiaoDienGioHang() {
    let soLuongGoc = document.getElementById('so-luong-mon'); let tongSoAo = 0; for (let i = 0; i < danhSachGioHang.length; i++) { tongSoAo += danhSachGioHang[i].soLuong; } if (soLuongGoc != null) soLuongGoc.innerText = tongSoAo; 
    let khuVucTongTien = document.getElementById('tong-tien'); if (khuVucDanhSachMua == null || khuVucTongTien == null) return; 
    
    let thanhTieuDe = document.querySelector('.thanh-tieu-de-gio');
    if (thanhTieuDe && !thanhTieuDe.hasAttribute('da-can-chinh')) {
        thanhTieuDe.setAttribute('da-can-chinh', 'true'); thanhTieuDe.style.gap = '0';
        thanhTieuDe.innerHTML = `<div style="width: 5%; display: flex; justify-content: center;"><input type="checkbox" id="check-all" class="hop-checkbox" title="Chọn tất cả"></div><div style="width: 45%; font-weight: bold; padding-left: 10px;">Sản phẩm</div><div style="width: 15%; text-align: center; font-weight: bold;">Đơn giá</div><div style="width: 15%; text-align: center; font-weight: bold;">Số lượng</div><div style="width: 15%; text-align: right; font-weight: bold;">Thành tiền</div><div style="width: 5%;"></div>`;
    }

    if (danhSachGioHang.length === 0) {
        khuVucDanhSachMua.innerHTML = '<div style="text-align: center; color: #888; padding: 50px;">Giỏ hàng của bạn đang trống...</div>'; khuVucTongTien.innerText = '0';
        let nutCheckAll = document.getElementById('check-all'); if (nutCheckAll) nutCheckAll.checked = false; return; 
    }

    khuVucDanhSachMua.innerHTML = ''; let tongTien = 0; let tatCaDuocChon = true; 
    for (let i = 0; i < danhSachGioHang.length; i++) {
        let monHang = danhSachGioHang[i]; let thanhTien = monHang.gia * monHang.soLuong; let anhHienThi = monHang.anh || 'quần áo/ao1.png'; let tichChon = monHang.duocChon ? 'checked' : '';
        if (monHang.duocChon === false) tatCaDuocChon = false; if (monHang.duocChon === true) tongTien += thanhTien; 
        khuVucDanhSachMua.innerHTML += `
            <div class="dong-san-pham-moi" style="display: flex; align-items: center; padding: 20px 0; border-bottom: 1px dashed #eee; gap: 0;">
                <div style="width: 5%; display: flex; justify-content: center;"><input type="checkbox" class="hop-checkbox" ${tichChon} onchange="chonMonHang(${i}, this.checked)"></div>
                <div style="width: 45%; display: flex; align-items: center; gap: 15px; padding-left: 10px; box-sizing: border-box;"><img src="${anhHienThi}" style="width: 70px; height: 90px; object-fit: contain; border-radius: 6px; border: 1px solid #ddd;"><div style="font-weight: bold; font-size: 15px; color: #333; line-height: 1.4;">${monHang.ten}</div></div>
                <div style="width: 15%; text-align: center; color: #888; font-size: 15px;">${Number(monHang.gia).toLocaleString('vi-VN')} đ</div>
                <div style="width: 15%; display: flex; align-items: center; justify-content: center; gap: 8px;"><button onclick="thayDoiSoLuongTrongGio('${monHang.ten}', -1)" style="width: 28px; height: 28px; cursor: pointer;">-</button><span style="width: 20px; text-align: center; font-weight: bold;">${monHang.soLuong}</span><button onclick="thayDoiSoLuongTrongGio('${monHang.ten}', 1)" style="width: 28px; height: 28px; cursor: pointer;">+</button></div>
                <div style="width: 15%; text-align: right; color: #e30019; font-weight: bold; font-size: 16px;">${thanhTien.toLocaleString('vi-VN')} đ</div>
                <div style="width: 5%; text-align: right;"><button style="background: transparent; border: none; font-size: 20px; cursor: pointer; color: #aaa;" onclick="xoaMonHang('${monHang.ten}')">🗑️</button></div>
            </div>`;
    }
    
    let nutCheckAll = document.getElementById('check-all');
    if (nutCheckAll) { nutCheckAll.checked = tatCaDuocChon; nutCheckAll.onchange = function() { let chonHet = this.checked; for (let j = 0; j < danhSachGioHang.length; j++) danhSachGioHang[j].duocChon = chonHet; localStorage.setItem('gioHangCuaToi', JSON.stringify(danhSachGioHang)); capNhatGiaoDienGioHang(); }; }
    khuVucTongTien.innerText = tongTien.toLocaleString('vi-VN');
}

window.chonMonHang = function(viTriMon, kieuChon) { danhSachGioHang[viTriMon].duocChon = kieuChon; localStorage.setItem('gioHangCuaToi', JSON.stringify(danhSachGioHang)); capNhatGiaoDienGioHang(); };
window.thayDoiSoLuongTrongGio = function(tenAoCanSua, soLuongSua) { for (let i = 0; i < danhSachGioHang.length; i++) { if (danhSachGioHang[i].ten === tenAoCanSua) { danhSachGioHang[i].soLuong += soLuongSua; if (danhSachGioHang[i].soLuong <= 0) { xoaMonHang(tenAoCanSua); danhSachGioHang[i].soLuong = 1; } break; } } localStorage.setItem('gioHangCuaToi', JSON.stringify(danhSachGioHang)); capNhatGiaoDienGioHang(); };
window.xoaMonHang = function(tenAoCanXoa) { tenMonCanXoa = tenAoCanXoa; if (cuaSoXacNhan != null && dongChuXacNhan != null) { dongChuXacNhan.innerHTML = "Bạn có chắc chắn muốn xóa <b>" + tenAoCanXoa + "</b> khỏi giỏ không?"; cuaSoXacNhan.style.display = "block"; } };
if (nutHuyXoa != null) nutHuyXoa.onclick = function() { cuaSoXacNhan.style.display = "none"; };
if (nutDongYXoa != null) { nutDongYXoa.onclick = function() { for (let i = 0; i < danhSachGioHang.length; i++) { if (danhSachGioHang[i].ten === tenMonCanXoa) { danhSachGioHang.splice(i, 1); break; } } localStorage.setItem('gioHangCuaToi', JSON.stringify(danhSachGioHang)); capNhatGiaoDienGioHang(); cuaSoXacNhan.style.display = "none"; hienThongBao("Đã xóa sản phẩm thành công!", false); }; }

capNhatGiaoDienGioHang();


// --- 8. LOGIC TRANG CHI TIẾT SẢN PHẨM ---
let spTen = document.getElementById('sp-ten');
if (spTen != null) {
    let thamSoURL = new URLSearchParams(window.location.search); let tenNhanVao = decodeURIComponent(thamSoURL.get('ten') || "Sản phẩm"); let giaNhanVao = Number(thamSoURL.get('gia') || 0); let anhNhanVao = decodeURIComponent(thamSoURL.get('anh') || ""); 
    let spGia = document.getElementById('sp-gia'); spTen.innerText = tenNhanVao; 
    
    if (spGia != null) {
        let laHangGiam50 = false;
        for(let i=0; i<khoSanPham.length; i++) {
            if(khoSanPham[i].ten === tenNhanVao.split(" (Size")[0] && khoSanPham[i].giam50 === true) { laHangGiam50 = true; break; }
        }
        
        if (laHangGiam50) {
            let giaGoc = giaNhanVao * 2;
            spGia.innerHTML = `<div class="khung-gia" style="justify-content: flex-start;"><span style="color: #e30019;">${giaNhanVao.toLocaleString('vi-VN')} đ</span><span class="gia-goc">${giaGoc.toLocaleString('vi-VN')} đ</span><span class="nhan-giam-gia">-50%</span></div>`;
        } else {
            spGia.innerText = giaNhanVao.toLocaleString('vi-VN') + " VNĐ";
        }
    }

    let maGoc = "ao1"; if (anhNhanVao.includes('/')) { let tenFile = anhNhanVao.split('/').pop(); maGoc = tenFile.split('.')[0]; }
    let danhSachMau = tuDienMauSac[maGoc] || tuDienMauSac["macDinh"]; 
    let khuVucChonMau = document.getElementById('chon-mau'); let khuVucAnhNho = document.querySelector('.danh-sach-anh-nho'); let spAnhChinh = document.getElementById('sp-anh'); let mauDaChon = danhSachMau[0] ? (danhSachMau[0].charAt(0).toUpperCase() + danhSachMau[0].slice(1)) : "Trắng"; 

    if (khuVucChonMau != null && khuVucAnhNho != null) {
        khuVucChonMau.innerHTML = ''; khuVucAnhNho.innerHTML = ''; 
        for (let i = 0; i < danhSachMau.length; i++) {
            let tenMau = danhSachMau[i]; let tenMauVietHoa = tenMau.charAt(0).toUpperCase() + tenMau.slice(1); let linkAnh = "chi tiết sp/" + maGoc + "_" + tenMau + ".png"; 
            let nut = document.createElement('div'); nut.className = 'nut-chon'; if (i === 0) nut.classList.add('active'); nut.innerText = tenMauVietHoa; khuVucChonMau.appendChild(nut);
            let anh = document.createElement('img'); anh.src = linkAnh; anh.alt = tenMauVietHoa; if (i === 0) anh.classList.add('active'); khuVucAnhNho.appendChild(anh);
            if (i === 0 && spAnhChinh != null) { spAnhChinh.src = linkAnh; mauDaChon = tenMauVietHoa; }
            let xuLyChon = function() {
                mauDaChon = tenMauVietHoa; if (spAnhChinh != null) spAnhChinh.src = linkAnh;
                let cacNut = khuVucChonMau.querySelectorAll('.nut-chon'); let cacAnh = khuVucAnhNho.querySelectorAll('img');
                cacNut.forEach(n => n.classList.remove('active')); cacAnh.forEach(a => a.classList.remove('active'));
                nut.classList.add('active'); anh.classList.add('active');
            };
            nut.onclick = xuLyChon; anh.onclick = xuLyChon;
        }
    }

    let sizeDaChon = "XS"; let cacNutSize = document.querySelectorAll('#chon-size .nut-chon');
    cacNutSize.forEach(nut => { nut.onclick = function() { cacNutSize.forEach(n => n.classList.remove('active')); this.classList.add('active'); sizeDaChon = this.innerText; } });

    let nutTru = document.getElementById('nut-tru-sp'); let nutCong = document.getElementById('nut-cong-sp'); let oNhapSo = document.getElementById('so-luong-sp');
    if (nutTru && nutCong && oNhapSo) { nutTru.onclick = function() { let sl = parseInt(oNhapSo.value); if (sl > 1) oNhapSo.value = sl - 1; }; nutCong.onclick = function() { let sl = parseInt(oNhapSo.value); oNhapSo.value = sl + 1; }; }

    let spNutMua = document.getElementById('sp-nut-mua');
    if (spNutMua) {
        spNutMua.onclick = function() {
            if (nguoiDungHienTai == null) { hienThongBao("Bạn phải Đăng nhập mới có thể mua hàng nhé!", true); if (cuaSoTaiKhoan != null) cuaSoTaiKhoan.style.display = "block"; return; }
            let soLuongMuonMua = parseInt(oNhapSo.value) || 1; let tenGopLai = tenNhanVao + " (Size: " + sizeDaChon + ", Màu: " + mauDaChon + ")"; let hinhAnhHienTai = spAnhChinh.getAttribute('src'); let daCoRoi = false;
            for (let j = 0; j < danhSachGioHang.length; j++) { if (danhSachGioHang[j].ten === tenGopLai) { danhSachGioHang[j].soLuong += soLuongMuonMua; daCoRoi = true; break; } }
            if (daCoRoi === false) { danhSachGioHang.push({ ten: tenGopLai, gia: giaNhanVao, soLuong: soLuongMuonMua, anh: hinhAnhHienTai, duocChon: true }); }
            localStorage.setItem('gioHangCuaToi', JSON.stringify(danhSachGioHang)); hienThongBao("Đã thêm " + soLuongMuonMua + " sản phẩm vào giỏ!", false); capNhatGiaoDienGioHang();
        }
    }

    let soCuaAo = maGoc.replace('ao', ''); if (soCuaAo.length === 1) soCuaAo = "0" + soCuaAo; let tenFileText = "text chi tiết/sp" + soCuaAo + ".txt"; 
    let khuVucMoTa = document.getElementById('noi-dung-chi-tiet');
    if (khuVucMoTa) {
        let duongDanAnToan = encodeURI(tenFileText) + "?v=" + new Date().getTime();
        fetch(duongDanAnToan).then(function(phanHoi) { if (phanHoi.ok === false) throw new Error("File không tồn tại"); return phanHoi.text(); }).then(function(vanBanText) { khuVucMoTa.innerHTML = "<p>" + vanBanText.replace(/\n/g, '<br>') + "</p>"; }).catch(function(loi) { khuVucMoTa.innerHTML = "<p style='color: #888; font-style: italic;'>Chưa có bài viết chi tiết cho sản phẩm này.</p>"; });
    }
}


// --- 9. TÌM KIẾM THÔNG MINH (TRÊN HEADER CHUNG) ---
let tatCaThanhTimKiem = document.querySelectorAll('input[placeholder="Tìm kiếm sản phẩm..."]');
tatCaThanhTimKiem.forEach(thanh => { thanh.addEventListener('keypress', function(e) { if (e.key === 'Enter') { let tuKhoa = this.value.trim(); if (tuKhoa !== "") window.location.href = "timkiem.html?timkiem=" + encodeURIComponent(tuKhoa); } }); });

let khuVucKetQua = document.getElementById('ket-qua-tim-kiem'); let tieuDeKetQua = document.getElementById('tieu-de-ket-qua');
if (khuVucKetQua != null && tieuDeKetQua != null) {
    let thamSoURL = new URLSearchParams(window.location.search); let tuKhoa = thamSoURL.get('timkiem') || "";
    if (tuKhoa !== "") {
        tieuDeKetQua.innerText = "Kết quả tìm kiếm cho: '" + tuKhoa + "'"; 
        let ketQuaHTML = ""; let tuKhoaThuong = tuKhoa.toLowerCase(); let cacTuKhoa = tuKhoaThuong.split(" ").filter(tu => tu.trim() !== "");
        for (let i = 0; i < khoSanPham.length; i++) {
            let tenSPThuong = khoSanPham[i].ten.toLowerCase(); let thoaMan = true;
            for (let j = 0; j < cacTuKhoa.length; j++) { if (!tenSPThuong.includes(cacTuKhoa[j])) { thoaMan = false; break; } }
            if (thoaMan) {
                let giaHienThi = khoSanPham[i].giam50 ? khoSanPham[i].gia / 2 : khoSanPham[i].gia;
                let giaHtml = khoSanPham[i].giam50 ? `
                    <div class="khung-gia" style="justify-content: flex-start; margin-top: 5px;">
                        <span style="color: #e30019; font-weight: bold;">${giaHienThi.toLocaleString('vi-VN')} đ</span>
                        <span class="gia-goc">${khoSanPham[i].gia.toLocaleString('vi-VN')} đ</span>
                        <span class="nhan-giam-gia">-50%</span>
                    </div>
                ` : `<p style="margin: 5px 0 0 0; color: #e30019; font-weight: bold;">${khoSanPham[i].gia.toLocaleString('vi-VN')} VNĐ</p>`;

                ketQuaHTML += `<div class="dong-sp-tim-kiem" onclick="window.location.href='sp.html?ten=${encodeURIComponent(khoSanPham[i].ten)}&gia=${giaHienThi}&anh=${encodeURIComponent(khoSanPham[i].anh)}'"><img src="${khoSanPham[i].anh}" alt="${khoSanPham[i].ten}"><div class="thong-tin"><h3>${khoSanPham[i].ten}</h3>${giaHtml}</div><button class="nut-xem-chi-tiet" onclick="event.stopPropagation(); window.location.href='sp.html?ten=${encodeURIComponent(khoSanPham[i].ten)}&gia=${giaHienThi}&anh=${encodeURIComponent(khoSanPham[i].anh)}'">Xem chi tiết</button></div>`;
            }
        }
        if (ketQuaHTML === "") { khuVucKetQua.innerHTML = `<div style="text-align: center; padding: 50px 0;"><p style="color: #888; font-size: 18px;">Rất tiếc, chúng tôi không tìm thấy sản phẩm nào.</p><a href="index.html" style="display: inline-block; margin-top: 20px; background-color: #003366; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; font-weight: bold;">Quay lại cửa hàng</a></div>`; } else { khuVucKetQua.innerHTML = ketQuaHTML; }
    } else { tieuDeKetQua.innerText = "Vui lòng nhập từ khóa để tìm kiếm!"; }
}

// --- 10. TRANG THANH TOÁN ---
let nutThanhToanNgay = document.getElementById('nut-thanh-toan');
if (nutThanhToanNgay != null && document.getElementById('danh-sach-mua') != null) {
    nutThanhToanNgay.onclick = function() {
        if (nguoiDungHienTai == null) return;
        let coMuaMonNaoKhong = false; for (let i = 0; i < danhSachGioHang.length; i++) { if (danhSachGioHang[i].duocChon === true) coMuaMonNaoKhong = true; }
        if (danhSachGioHang.length === 0) { hienThongBao("Giỏ hàng trống, hãy chọn đồ nhé!", true); } else if (coMuaMonNaoKhong === false) { hienThongBao("Bạn chưa tích chọn mua sản phẩm nào!", true); } else { window.location.href = "thanhtoan.html"; }
    };
}

let khuVucDanhSachThanhToan = document.getElementById('danh-sach-thanh-toan'); let nutXacNhanDatHang = document.getElementById('nut-xac-nhan-dat-hang');
if (khuVucDanhSachThanhToan != null) {
    if (nguoiDungHienTai == null) { hienThongBao("Vui lòng đăng nhập trước khi thanh toán!", true); setTimeout(function() { window.location.href = "index.html"; }, 1500); } else {
        let tongTienThanhToan = 0; let htmlDonHang = ""; let coMonDeThanhToan = false;
        for (let i = 0; i < danhSachGioHang.length; i++) {
            if (danhSachGioHang[i].duocChon === true) {
                coMonDeThanhToan = true; let monHang = danhSachGioHang[i]; let thanhTien = monHang.gia * monHang.soLuong; tongTienThanhToan += thanhTien;
                htmlDonHang += `<div style="display: flex; justify-content: space-between; margin-bottom: 15px; border-bottom: 1px solid #eee; padding-bottom: 15px;"><div style="flex: 2; font-size: 14px;"><b>${monHang.ten}</b><br><span style="color: #888;">SL: ${monHang.soLuong}</span></div><div style="flex: 1; text-align: right; color: #e30019; font-weight: bold;">${thanhTien.toLocaleString('vi-VN')} đ</div></div>`;
            }
        }
        if (coMonDeThanhToan) { khuVucDanhSachThanhToan.innerHTML = htmlDonHang; document.getElementById('tong-tien-thanh-toan').innerText = tongTienThanhToan.toLocaleString('vi-VN'); } else { khuVucDanhSachThanhToan.innerHTML = "<p style='color: #888; text-align: center;'>Chưa có sản phẩm nào để thanh toán.</p>"; }
        nutXacNhanDatHang.onclick = function() {
            let tenKH = document.getElementById('ten-khach-hang').value.trim(); let sdtKH = document.getElementById('sdt-khach-hang').value.trim(); let diaChiKH = document.getElementById('dia-chi-khach-hang').value.trim();
            if (tenKH === "" || sdtKH === "" || diaChiKH === "") { hienThongBao("Vui lòng điền đầy đủ Tên, SĐT và Địa chỉ giao hàng (có dấu *)!", true); return; }
            if (!coMonDeThanhToan) { hienThongBao("Đơn hàng rỗng, không thể đặt hàng!", true); return; }
            hienThongBao("🎉 Đặt hàng thành công! Cảm ơn " + tenKH + " đã mua sắm.", false);
            let gioHangMoi = []; for (let i = 0; i < danhSachGioHang.length; i++) { if (danhSachGioHang[i].duocChon === false) gioHangMoi.push(danhSachGioHang[i]); }
            localStorage.setItem('gioHangCuaToi', JSON.stringify(gioHangMoi)); setTimeout(function() { window.location.href = "index.html"; }, 2500);
        };
    }
}