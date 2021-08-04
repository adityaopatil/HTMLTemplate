document.write("1st statement");

setTimeout(()=>{
    document.getElementById("obj1").innerHTML=" 2nd statement";
},5000);

document.write("<br />3rd statement");

let i=0;
let obj=setInterval(()=>{
    let obj1=new Date();
    document.getElementById("obj2").innerHTML="<br /> 4th statement "+i;
     document.getElementById('clock').innerHTML=obj1.getHours()+" : "+obj1.getMinutes()+" : "+obj1.getSeconds();
    if(i%2===0){
        document.getElementById("msg").style.color="RED";
        document.getElementById("msg").style.backgroundColor="GREEN";
    }else{
        document.getElementById("msg").style.color="WHITE";
        document.getElementById("msg").style.backgroundColor="RED";
    }
    i++;
},1000);

document.write("<br/> 3rd statement");
function stop(){
    clearInterval(obj);
}