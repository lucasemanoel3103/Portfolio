const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click',()=> {document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', document.body.classList.contains('dark-theme')?'dark': 'light:');
});

document.addEventListener('DOMContentLoaded', ()=> {
    if(localStorage.getItem('theme') === 'dark'){
        document.body.classList.add('dark-theme');
    }
})



