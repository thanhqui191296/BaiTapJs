const KHU_VUC_A = 2;
const KHU_VUC_B = 1;
const KHU_VUC_C = 0.5;

const DOI_TUONG_1 = 2.5;
const DOI_TUONG_2 = 1.5;
const DOI_TUONG_3 = 1;

function ketquaDiem (){
    var diemChuan = document.getElementById("inputDiem").value;
    var diem1 = document.getElementById("inputOne").value;
    var diem2 = document.getElementById("inputTwo").value;
    var diem3 = document.getElementById("inputThree").value;
    var khuVuc = document.getElementById("inputKhuvuc").value;
    var doiTuong = document.getElementById("inputDoituong").value;

    var diemKv = "";
    switch (khuVuc) {
        case "A":
            diemKv = 2;
            break;
        case "B":
            diemKv = 1;
            break;
        case "A":
            diemKv = 0.5;
            break;
         case "X":
            diemKv = 0;
            break;
    
        default:
            alert ("Bạn chưa chọn khu vực")
            return "";
            
    }
    var diemDT = "";
    switch (doiTuong) {
        case "1":
            diemDT = 2.5;
            break;
        case "2":
            diemDT = 1.5;
            break;
        case "3":
            diemDT = 1;
            break;
         case "0":
            diemKv = 0;
            break;
    
        default:
            alert ("Bạn chưa chọn đối tượng")
            return "";
            
    }
    var tongDiem = 0;
    tongDiem = Number(diem1) + Number(diem2) + Number(diem3) +(Number(diemKv) + Number(diemDT));
    if (diem1 == 0 || diem2 == 0 || diem3 == 0 ){
        document.getElementById("txtResult").innerHTML = "Tổng điểm đạt được: " + tongDiem + ";" + "Thí sinh rớt vì có môn 0 điểm."

    }else if(tongDiem >= diemChuan){
        document.getElementById("txtResult").innerHTML = "Tổng điểm đạt được: " + tongDiem + ";" + "Thí sinh đậu."
    }else{
        document.getElementById("txtResult").innerHTML = "Tổng điểm đạt được: " + tongDiem + ";" + "Thí sinh rớt."
    }
}