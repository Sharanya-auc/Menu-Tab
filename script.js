let title_1 = document.querySelector(".title-1");
let title_2 = document.querySelector(".title-2");
let title_3 = document.querySelector(".title-3");
let part_1 = document.querySelector(".part-1");
let part_2 = document.querySelector(".part-2");
let part_3 = document.querySelector(".part-3");
 
title_1.addEventListener('click', ()=>{
    part_1.style.display = 'block';
    title_1.style.backgroundColor = 'white';
    part_2.style.display = 'none';
    title_2.style.backgroundColor = 'rgb(132, 209, 248)';
    part_3.style.display = 'none';
    title_3.style.backgroundColor = 'rgb(132, 209, 248)';
})

title_2.addEventListener('click' , ()=>{
    part_2.style.display = 'block';
    title_2.style.backgroundColor = 'white';
    title_1.style.backgroundColor = 'rgb(132, 209, 248)';
    title_3.style.backgroundColor = 'rgb(132, 209, 248)';
    part_1.style.display = 'none';
    part_3.style.display = 'none';
})

title_3.addEventListener('click',()=>{
    part_3.style.display='block';
    title_3.style.backgroundColor='white';
    title_1.style.backgroundColor = 'rgb(132, 209, 248)';
    title_2.style.backgroundColor = 'rgb(132, 209, 248)';
    part_1.style.display = 'none';
    part_2.style.display = 'none';
})


      