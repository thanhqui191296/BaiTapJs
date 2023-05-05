const KM_DAU_50 = 500;
const KM_KE_50 = 650;
const KM_KE_100 = 850;
const KM_KE_150 = 1100;
const CON_LAI = 1300;

function main() {
    var soKW = document.getElementById('soKW').value;
    var ten = document.getElementById('hoTen').value;
    var total = 0;
    
    switch (ten) {
        case ten:
            total = calcTotalKW(soKW,KM_DAU_50,KM_KE_50,KM_KE_100,KM_KE_150,CON_LAI)
            break;
    
        default:
            break;
    }
    console.log(total)
    document.getElementById("txtMoney").innerHTML=ten +" ;" + "Tiền điện: "+total.toLocaleString() 
   
}
function calcTotalKW(soKW,giakw_dau,giakw_ke_50,giakw_ke_100,giakw_ke_150,gia_con_lai) {
    if(0 < soKW  && soKW <= 50){
        
        return soKW * giakw_dau;
    }else if(soKW > 50 && soKW <= 99){
        
        return giakw_dau * 50 + (soKW - 50) * giakw_ke_50
    }else if(soKW > 99 && soKW <= 199){
        
        return giakw_dau *50 + giakw_ke_50 *50 + (soKW -100) * giakw_ke_100
    }else if(soKW > 199 && soKW <= 349){
        
        return giakw_dau * 50 +  giakw_ke_50 *50 +  giakw_ke_100*100 + (soKW-200)*giakw_ke_150;
    }else if(soKW > 349){
        
        return giakw_dau *50 +  giakw_ke_50*50 + giakw_ke_100*100 +  giakw_ke_150*150 + (soKW-350)*gia_con_lai;
    }else{
        alert ("Bạn nhập sai số kw");
        return 0;
    }
    
}