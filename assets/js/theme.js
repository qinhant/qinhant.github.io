const button=document.getElementById('theme-toggle');
function setTheme(theme){document.documentElement.dataset.theme=theme;button.innerHTML=theme==='dark'?'<i class="fa-solid fa-sun" aria-hidden="true"></i>':'<i class="fa-solid fa-moon" aria-hidden="true"></i>';button.setAttribute('aria-label',theme==='dark'?'Switch to light mode':'Switch to dark mode');}
let saved;try{saved=localStorage.getItem('theme')}catch{}
setTheme(saved||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'));
button.addEventListener('click',()=>{const next=document.documentElement.dataset.theme==='dark'?'light':'dark';setTheme(next);try{localStorage.setItem('theme',next)}catch{}});
