


class MyClass{

    constructor(){
       console.log("myClass contructor");

    }

// function within class no need to write "let"
// if u want to write method outside class use "let" 
    fun = () => {

        console.log("myClass Fun");
    }
}


let obj = new MyClass();
obj.fun();