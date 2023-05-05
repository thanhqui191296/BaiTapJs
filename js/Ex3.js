const TAX0_60 = 0.05;
const TAX60_120 = 0.1;
const TAX120_210 = 0.15;
const TAX210_384 = 0.2;
const TAX384_624 = 0.25;
const TAX624_960 = 0.3;
const TAX_TREN960 = 0.35;
function calcThue() {
    var name = document.getElementById("hoTen").value;
    var tongThu = document.getElementById("inputThuNhap").value;
    

    var total = 0;
    if (0 < tongThu && tongThu <= 60e6) {
        total = (tongThu * TAX0_60);
    }else if (60e+6 < tongThu && tongThu <= 120e6) {
        total = 60e+6 * TAX0_60 + (tongThu - 60e+6) * TAX60_120;
    }else if (120e+6 < tongThu && tongThu <= 210e6) {
        total = 60e6 * TAX0_60 + 60e6 * TAX60_120 + (tongThu - 120e6) * TAX120_210;
    }else if (210e+6 < tongThu && tongThu <= 384e6) {
        total = 60e+6 * TAX0_60 + 60e6 * TAX60_120 + 90e6 * TAX120_210 + (tongThu - 210e+6) * TAX210_384;
    }else if (384e+6 < tongThu && tongThu <= 624e6) {
        total = 60e+6 * TAX0_60 + 60e6 * TAX60_120 + 90e6 * TAX120_210 + 174e6 * TAX210_384 + (tongThu - 384e+6) * TAX384_624;
    }else if (624e+6 < tongThu && tongThu <= 960e6) {
        total = 60e+6 * TAX0_60 + 60e6 * TAX60_120 + 90e6 * TAX120_210 + 174e6 * TAX210_384 + 240e6 * TAX384_624 + (tongThu - 624e+6) * TAX624_960;
    }else if (tongThu > 960e+6) {
        total = 60e+6 * TAX0_60 + 60e6 * TAX60_120 + 90e6 * TAX120_210 + 174e6 * TAX210_384 + 240e6 * TAX384_624 + 336e6 * TAX624_960 + (tongThu - 960e+6) * TAX_TREN960;
    }   else {
        alert("Bạn nhập số thu nhập không hợp lệ!")
        return "";
    }
    total = new Intl.NumberFormat("vn-VN").format(total)
    document.getElementById("txtThu").innerHTML = "Họ Tên: " + name + ";" + "Tiền thuế thu nhập cá nhân: " + total + "VNĐ";
}