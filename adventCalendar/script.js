const pic1 = document.querySelector(".pic1")
const pic2 = document.querySelector(".pic2")
const pic3 = document.querySelector(".pic3")
const pic4 = document.querySelector(".pic4")
const pic5 = document.querySelector(".pic5")
const pic6 = document.querySelector(".pic6")

const presents = [
    "https://media.entertainmentearth.com/assets/images/e622c513ef664c6cbae9dd100640fdeaxl.jpg",
    "https://cdn11.bigcommerce.com/s-r7rkk91ha4/images/stencil/1280x1280/products/372/3295/FreddyFazbear_1__65028.1698937230.jpg?c=1",
    "https://www.barbie-secondlife.com/wp-content/uploads/2019/05/Barbie_Tymea_Original.png",
    "https://www.cars.com/i/large/in/v2/stock_photos/b0166084-0c08-4363-8085-9db74ec77027/148cfdcc-1c07-4a79-8988-a59d1fecff1d.png",
    "https://cdn.vox-cdn.com/thumbor/73N9bbloH2p8vCPf25bOLQ4g-3c=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/25125289/vlcsnap_2023_12_01_10h37m31s394.jpg",
    "https://rgbcustompc.com/cdn/shop/products/SY-PCBuild-PinkOdysseyAirflow.png?v=1658745133"
]

function present(num){
    if(num == 0){
        pic1.src = presents[0];
    }
    else if(num == 1){
        pic2.src = presents[1];
    }
    else if(num == 2){
        pic3.src = presents[2];
    }
    else if(num == 3){
        pic4.src = presents[3];
    }
    else if(num == 4){
        pic5.src = presents[4];
    }
    else if(num == 5){
        pic6.src = presents[5];
    }
}