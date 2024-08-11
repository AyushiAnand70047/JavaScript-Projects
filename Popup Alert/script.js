let showBtn = document.getElementById('showBtn');
let closeBtn = document.getElementById('closeBtn');
let popup = document.querySelector('.popup');
let heading = document.getElementById('heading');

showBtn.addEventListener('click',()=>{
    showBtn.style.display = 'none';
    heading.style.display = 'none';
    popup.style.display = "block";
})

closeBtn.addEventListener('click',()=>{
    popup.style.display = 'none';
    showBtn.style.display = 'none';
    heading.innerText = "😍 Thank you for subscribing";
    heading.style.display = "block";
})