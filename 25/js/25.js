let box = document.querySelector('.box'),
    btn = document.querySelector('button');

let width = box.scrollWidth,
    height = box.scrollHeight;

console.log(width);
console.log(height);
console.log(box.getBoundingClientRect());
console.log('box.getBoundingClientRect().top: ', box.getBoundingClientRect().top);

console.log('document.documentElement.clientWidth: ', document.documentElement.clientWidth);
console.log('document.documentElement.clientHeight: ', document.documentElement.clientHeight);
console.log('document.documentElement.scrollTop: ', document.documentElement.scrollTop);

btn.addEventListener('click', function() {
    //box.style.height = box.scrollHeight + 'px';
    //console.log(box.scrollTop);
    box.scrollTop = 0;
});

//scrollBy(0, 100);
// By - сдвинет на x, y
//scrollTo(0, 200);
// To = сдвинет на эти координаты как #