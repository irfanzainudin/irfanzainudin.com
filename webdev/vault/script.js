const centre_core = document.getElementById('centre_core');
const centre_core_shadow = document.getElementById('centre_core_shadow');
const left_wall = document.getElementById('left_wall');
const right_wall = document.getElementById('right_wall');
const unlock_btn = document.getElementById('unlock_btn');

function isVisibleInViewport(elem)
{
    var y = elem.offsetTop;
    var height = elem.offsetHeight;

    while ( elem = elem.offsetParent )
        y += elem.offsetTop;

    var maxHeight = y + height;
    var isVisible = ( y < ( window.pageYOffset + window.innerHeight ) ) && ( maxHeight >= window.pageYOffset );
    return isVisible;
}

centre_core.addEventListener('animationstart', () => {
    console.log("Animation started");
});

centre_core.addEventListener('animationend', () => {
    console.log("Animation ended");
    left_wall.classList.add('animate__animated', 'animate__slideOutLeft', 'animate__delay-1s');
    right_wall.classList.add('animate__animated', 'animate__slideOutRight', 'animate__delay-1s');
    centre_core.classList.add('exit-centre-core');
    centre_core_shadow.classList.add('animate__animated', 'animate__fadeOutRightBig', 'animate__delay-1s');

    // if (!isVisibleInViewport(centre_core)) {
    //     document.removeChild(centre_core);
    // }
});

unlock_btn.addEventListener('click', () => {
    if (unlock_btn.classList.contains('animate-centre-core')
    || unlock_btn.innerHTML == '<i class="bi bi-unlock-fill"></i>') {
        centre_core.classList.remove('animate-centre-core');
        // unlock_btn.innerHTML = '<i class="bi bi-lock-fill"></i>';
    } else {
        centre_core.classList.add('animate-centre-core');
        // unlock_btn.innerHTML = '<i class="bi bi-unlock-fill"></i>';
    }
});

// document.addEventListener('animationend', () => {
//     document.removeChild(centre_core);
//     document.removeChild(centre_core_shadow);
//     document.removeChild(left_wall);
//     document.removeChild(right_wall);
// });