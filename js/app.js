const width = "250px";
const height = "60px";
const borderR = "100%";
const bgColor = "orange"
var div = document.getElementById('cake');

class Cake{
    constructor(w,h,br,bg){
        this.w = w;
        this.h = h;
        this.br = br;
        this.bg = bg;
        this.bodyCake()
    }
    bodyCake(){
        div.style.width = this.w;
        div.style.height = this.h;
        div.style.borderRadius = this.br;
        div.style.backgroundColor = this.bg;
    }
}
new Cake(width,height,borderR,bgColor);
const cake2 = new Cake("100px",height,borderR,"tomato");

