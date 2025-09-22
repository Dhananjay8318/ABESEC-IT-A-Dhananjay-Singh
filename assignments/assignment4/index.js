// function set(){
//     console.log("hello every one ");
// }
// console.log("hi baby");
// setTimeout(set,5000);
// console.log("my name is ")


class rectangel{
    constructor(height,width,color){
        this.height=height;
        this.width=width;
        this.color=color;

    }
    area(){
        const area=this.height*this.width;
        return area;


    }
    paint(){
        console.log(``)
    }

}
const rect= new rectangel(5,9);
const area=rect.area();
console.log(area);