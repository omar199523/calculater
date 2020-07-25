//this is number array button.
let myArr=document.getElementsByClassName("num");
//this is calculator input and output box.
let calInput= document.getElementById("calInput")
//this loop to creat function to number button works to add the number in the button and add it to the entry box.
for(let i=0;i<myArr.length;i++){
    myArr[i].addEventListener("click",function(){
        if(arr[4]==="active"){
            calInput.innerHTML="";
            arr[4]="";
        }
        calInput.innerHTML +=myArr[i].innerHTML;
    });
}
//this array is my memory
let arr=[];
console.log(arr[0])
//this event work when click in method button , it takes the number in input box and pace in arr[0].
//and add 1 or 2 or 3 or 4 in arr[1] 
document.getElementById("div").addEventListener("click",function(){
    if(arr[1]==undefined){
        arr[0]=calInput.innerHTML;
    }else{
        equal();
    }
    arr[1]=1;
    arr[4]="active";
});
document.getElementById("mul").addEventListener("click",function(){
    if(arr[1]==undefined){
        arr[0]=calInput.innerHTML;
    }else{
        equal();
    }
    arr[1]=2;
    arr[4]="active";
});
document.getElementById("sub").addEventListener("click",function(){
    if(arr[1]==undefined){
        arr[0]=calInput.innerHTML;

    }else{
        equal();
    }
    arr[1]=3;
    arr[4]="active";
});
document.getElementById("add").addEventListener("click",function(){
    if(arr[1]==undefined){
        arr[0]=calInput.innerHTML;
    }else{
        equal();
    }
    arr[1]=4;
    arr[4]="active";
});

//this c button event work when click deleats my mwmory and input box
document.getElementById("c").addEventListener("click",function(){
    calInput.innerHTML="";
    arr[0]=undefined;
    arr[1]=undefined;
    arr[2]=undefined;
    
});
//this ds button event work when click Convert from dollars to shekels
document.getElementById("ds").addEventListener("click",function(){
    calInput.innerHTML=tofixed(calInput.innerHTML*3.5,4);
    arr[4]="active";
    arr[0]=calInput.innerHTML;
    arr[2]=undefined
});
//this sd button event work when Convert from shekels to dollars 
document.getElementById("sd").addEventListener("click",function(){
    calInput.innerHTML=tofixed(calInput.innerHTML/3.5,4);
    arr[4]="active";
    arr[0]=calInput.innerHTML;
    arr[2]=undefined
});
//this es button event work when click Convert from Euro to NIS
document.getElementById("es").addEventListener("click",function(){
    calInput.innerHTML=tofixed(calInput.innerHTML*3.91,4);
    arr[4]="active";
    arr[0]=calInput.innerHTML;
    arr[2]=undefined
});
//this ds button event work when click Convert from NIS to Euro
document.getElementById("se").addEventListener("click",function(){
    calInput.innerHTML=tofixed(calInput.innerHTML/3.91,4);
    arr[4]="active";
    arr[0]=calInput.innerHTML;
    arr[2]=undefined
});
//this 1/x button event work when click Gives you the inverted number
document.getElementById("x").addEventListener("click",function(){
    calInput.innerHTML=tofixed(1/calInput.innerHTML,4);
    arr[4]="active";
    arr[0]=calInput.innerHTML;
    arr[2]=undefined
});
//this per button event work when click Gives you the percentage of the number
document.getElementById("per").addEventListener("click",function(){
    calInput.innerHTML=tofixed(calInput.innerHTML/100,4);
    arr[4]="active";
    arr[0]=calInput.innerHTML;
    arr[2]=undefined
});
//this squ button event work when click Gives you the square root of the number
document.getElementById("squ").addEventListener("click",function(){
    calInput.innerHTML=tofixed(Math.sqrt(calInput.innerHTML),4);
    arr[4]="active";
    arr[0]=calInput.innerHTML;
    arr[2]=undefined
});
//this equal button event work when click It gives you the result of a two-digit basic operation
document.getElementById("equal").onclick=equal;

function equal(){
    
    arr[2]=calInput.innerHTML;
   
    let a=Number(arr[0]);
    let b=Number(arr[2]);

    if(arr[1]===1){
        calInput.innerHTML=tofixed(a/b,5);
    }else if(arr[1]===2){
        calInput.innerHTML=tofixed(a*b,5)
    }else if(arr[1]===3){
        calInput.innerHTML=tofixed(a-b,5)
    }else if(arr[1]===4){
        calInput.innerHTML=tofixed(a+b,5)    
    }
    arr[0]=calInput.innerHTML;
    arr[2]=undefined
}
function tofixed(num,dig){
    if(Number.isInteger(num)){
        return num;
    }else{
        return num.toFixed(dig)
    }
}