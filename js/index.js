const links = document.querySelectorAll('.menu__item a');

links.forEach(link => {
    link.addEventListener('click', function(){
        links.forEach(lk => lk.classList.remove('active'));
        this.classList.add('active');
    });
});

console.log('Test for git is completed');