// Input:
function taxiBill(km) {
    // Xử lý và in ra kết quả
    for (let i = 0; i < km.length; i++) {
        let money = 0;
        if(km[i] < 0){
            console.log("Số km không hợp lệ");
        }
        else
        if (km[i] <= 1) {
            money = 5000;
            console.log(`Số tiền phải trả cho ${i + 1} chuyến đi là: ${money}đ`);
        } else if (km[i] <= 30) {
            money = 5000 + (km[i] - 1) * 4000;
            console.log(`Số tiền phải trả cho ${i + 1} chuyến đi là: ${money}đ`);
        } else {
            money = 5000 + 29 * 4000 + (km[i] - 30) * 3000;
            console.log(`Số tiền phải trả cho ${i + 1} chuyến đi là: ${money}đ`);
        }
       
    }
  }
  km = prompt("Nhập số km đi được của các chuyến đi (cách nhau bởi dấu phẩy):").split(",").map(Number);
  taxiBill(km);