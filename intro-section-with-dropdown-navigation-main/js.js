


const
    navButton = document.querySelectorAll('nav button'),
    navButtonMobile = document.querySelector('.nav-mobile'),
    navList1 = document.querySelector('.nav-list'),
    navList2 = document.querySelector('.nav-list2'),
    navListMobile = document.querySelector('.nav-list-mobile'),
    xButton = document.querySelector('.nav-list-mobile img');

 navList2.style.display =
        navList2.style.display == 'block' ? 'none' : 'block';
navButton[0].addEventListener('click', () => {

    navList1.style.display =
        navList1.style.display == 'block' ? 'none' : 'block';

})

navButton[1].addEventListener('click', () => {

    navList2.style.display =
        navList2.style.display == 'block' ? 'none' : 'block';
})

navButtonMobile.addEventListener('click', () => {
    navListMobile.style.display =
        navListMobile.style.display == 'block' ? 'none' : 'block';
})

xButton.addEventListener('click', () => {
    console.log('eeee')
    navListMobile.style.display =
        navListMobile.style.display == 'none' ? 'block' : 'none';
})