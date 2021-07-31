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