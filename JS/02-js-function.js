function fun(){
    console.log("This is a function")
}
fun();


let fun2 = () => {
    console.log("fun2 look");
};
fun2();



let fun3 = (a,b) => {
    console.log(a + b);
};
fun3(10, 20);



fun3();              //NaN
fun3(20);            //NaN
fun3(10, 20);        //30
fun3(10,20,30);     //30
fun3('Sonu' , 'Monu'); //Sonu Monu



//DOM - Document Object Model