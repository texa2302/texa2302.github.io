const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelectorAll('.body');

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
        currentPopup.classList.add('open');
        document.querySelector('.wrapper').classList.add('blur');

        document.addEventListener('click', function(e){
            if (e.target.className !== 'popup-link') {
                if (!e.target.closest('.popup')) {
                    popupClose(currentPopup);
                }
                //e.preventDefault(); обновление страницы на крестик
            }
        });
       // popupClose(popAct);
}


function popupClose(popupActive) {
    popupActive.classList.remove('open');
    document.querySelector('.wrapper').classList.remove('blur');
}

///////////////////////////////////////// */
//const PopupListener = document.querySelector('.header__chat');
//const Popup = document.getElementById('popupRs');
//const Bg = document.querySelector('.wrapper');
//console.log(Bg);
//console.log(PopupListener);
//console.log(Popup);

//PopupListener.addEventListener('click', function(e){
//    Popup.classList.add('open');
//    document.querySelector('.wrapper').classList.add('blur');
//})  



