;

function tabs(infoHeaderTabClassSelector, infoHeaderParentClassSelector, infoTabContentSelector) {
    window.addEventListener('DOMContentLoaded', function () {

        'use strict';

        let tab = document.querySelectorAll(infoHeaderTabClassSelector),
            info = document.querySelector(infoHeaderParentClassSelector),
            tabContent = document.querySelectorAll(infoTabContentSelector);

        function hideTabContent(a) {
            for (let i = a; i < tabContent.length; i++) {
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
            }
        }

        hideTabContent(1);

        function showTabContent(b) {
            if (tabContent[b].classList.contains('hide')) {
                tabContent[b].classList.remove('hide');
                tabContent[b].classList.add('show');
            }
        }
        
        info.addEventListener('click', function (e) {
            let target = e.target,
                classType = infoHeaderTabClassSelector.replace(/\./gi, "");
            if (target && target.classList.contains(classType)) {
                for (let i = 0; i < tab.length; i++) {
                    if (target == tab[i]) {
                        hideTabContent(0);
                        showTabContent(i);
                        break;
                    }
                }
            } 
        });

    });
}

module.exports = tabs;