let item=[
    {
        img:"images/1.jpg",
        caption: "1.Mersal"
    },
    {
        img:"images/2.jpg",
        caption: "2.Vetri Maaran"
    },
    {
        img:"images/3.jpg",
        caption: "3.Alaporan Tamizhan"
    },
    {
        img:"images/4.jpg",
        caption: "4.Vijay Planting"
    },
    {
        img:"images/5.jpg",
        caption: "5.Beast"
    },
    {
        img:"images/6.jpg",
        caption: "6.Audio Launch"
    },
    {
        img:"images/7.jpg",
        caption: "7.Beast Thalapathy"
    },
    {
        img:"images/8.jpg",
        caption: "8.Vijay planting"
    },
    {
        img:"images/9.jpg",
        caption: "9.Vijay planting"
    },
    {
        img:"images/10.jpg",
        caption: "10.Thala Thalapthy"
    },
]
item.push({
        img:"images/11.jpg",
        caption:"11.Balaguru"})
 
 let myImage = document.getElementById('myImage');
 let caption = document.getElementById('caption');
 let prev = document.getElementById('prev');
 let random = document.getElementById('random');
 let next = document.getElementById('next');

let initial=0;

function gallery(){
    menu = item[initial]
   myImage.src=menu.img;
   caption.innerHTML=`* ${menu.caption}`;
}


window.addEventListener('DOMContentLoaded',()=>{gallery()})


prev.addEventListener('click',()=>{
    initial--;
    if(initial<0){
        initial = item.length-1;
    }
    gallery(initial)    
    console.log(initial)
});

next.addEventListener('click',()=>{
    initial++;
    if(initial>item.length-1){
        initial=0;
    }
    gallery(initial)
    console.log(initial)
})
random.addEventListener('click',()=>{

     initial = Math.floor(Math.random()*item.length)

    gallery(initial)
})