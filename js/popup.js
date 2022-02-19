const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelectorAll('.body');
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0){
    for(let i = 0 ; i < popupLinks.length ; i++) {
        const popupLink = popupLinks[i];
        popupLink.addEventListener("click" ,function(e) {
            const popupName = popupLink.getAttribute('href').replace('#','');
            const currentPopup = document.getElementById(popupName);
            popupOpen(currentPopup);
            e.preventDefault();
        });
    }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
    for (let i = 0; i < popupCloseIcon.length ; i++){
        const el = popupCloseIcon[i];
        el.addEventListener('click', function(e){
            popupClose(el.closest('.popup'));
            e.preventDefault();
        });
    }
}


function popupOpen(currentPopup) {
    console.log(currentPopup);
        currentPopup.classList.add('open');
        console.log(currentPopup);
        document.querySelector('.wrapper').classList.add('blur');

        const popAct = document.querySelector('.popup.open'); 

        document.addEventListener('click', function(e){
            if (e.target.className !== 'popup-link') {
                if (!e.target.closest('.popup')) {
                    console.log('1');
                    popupClose(currentPopup);
                }
                e.preventDefault();
            }
        });
       // popupClose(popAct);
}



function popupClose(popupActive) {
    console.log(popupActive);
    popupActive.classList.remove('open');
    document.querySelector('.wrapper').classList.remove('blur');
    console.log(popupActive);
}

