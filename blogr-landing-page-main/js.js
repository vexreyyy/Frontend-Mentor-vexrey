



const
    list = document.querySelectorAll('.list');


list.forEach((element, index, all) => {
    console.log(element)
    element.addEventListener('click', () => {
        console.log('eeeee');
        element.style.display =
            element.style.display == 'block' ? 'none' : 'block';
    })
});