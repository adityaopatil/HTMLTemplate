let section=document.querySelectorAll(".section");
let sections={};
section.forEach(function(e){
    // console.log(e.id,e.offsetTop)
    sections[e.id]=e.offsetTop;
});

window.onscroll=function(){
    let scrollPos=document.documentElement.scrollTop||document.body.scrollTop;
    
    console.log(scrollPos);

    for(let x in sections){
        if(sections[x]<=scrollPos){
            document.querySelector('.active').setAttribute('class','');
            document.querySelector('a[href*='+X+']').setAttribute('class','active');
        }
    }
}
console.log(section);
console.log("Hello world")

function greeting(fname,callback){
    return "Welcome "+callback(fname);
}

function maleInfo(fname){
    return "Mr. "+fname;
}

function femaleInfo(fname){
    return "Miss. "+fname;
}

document.write(greeting("aditya",maleInfo));
document.write("<br>");
document.write(greeting("Dipti",femaleInfo));

document.write("<br>");
document.write("1");
setTimeout(()=>{document.write("<b> 2")},5000);
document.write("3");