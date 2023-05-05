const PHI_HD_ND = 4.5;
const PHI_DV_ND = 20.5;
const PHI_THUE_KENH_ND = 7.5;

const PHI_HD_DN = 15;
const PHI_DV_DN = 75
const PHI_THUE_KENH_DN = 50
function caclCap() {
    var khachHang = document.getElementById("inputKH").value;
    var maKhach = document.getElementById("inputMa").value;
    var soKenh = document.getElementById("inputKenh").value;
    var ketNoi = document.getElementById("inputKetNoi").value;
    var total = 0;
    switch (khachHang) {
        case "Nhà Dân":
                total = PHI_HD_ND + PHI_DV_ND + PHI_THUE_KENH_ND * soKenh; 
            break;
        case "Doanh Nghiệp":
            if (ketNoi < 10){
                total =  PHI_DV_DN + PHI_HD_DN + PHI_THUE_KENH_DN * soKenh;
            }else{
                total = PHI_DV_DN + (ketNoi - 10) * 5 + PHI_HD_DN + PHI_THUE_KENH_DN * soKenh;
            }
            break;
        default:
            alert("Vui lòng chọn loại khách")
            return "";
    }
    total = new Intl.NumberFormat("en-US", {style:"currency", currency: "USD"}).format(total);
    document.getElementById("txtTinh").innerHTML = "Mã khác hàng: " + maKhach + ";" + "Tiền thuê cáp: " + total 
}