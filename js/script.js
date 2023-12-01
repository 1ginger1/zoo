'use strict';

document.addEventListener('DOMContentLoaded', () => {
    // Табы на странице продукта
    if(window.location.toString().indexOf('product.html') > 0) {
        const tabs = document.querySelectorAll('.info__tab'),
              tabContent = document.querySelectorAll('.info__content');

        function hideTabContent() {
            tabContent.forEach(content => {
                content.classList.add('hide');
                content.classList.remove('show');
            });

            tabs.forEach(tab => {
                tab.classList.remove('active')
            });
        }

        hideTabContent();

        function showTabContent(i = 0) {
            tabs[i].classList.add('active');
            
            tabContent[i].classList.remove('hide');
            tabContent[i].classList.add('show');
        }

        showTabContent();

        tabs.forEach((tab, i) => {
            tab.addEventListener('click', () => {
                hideTabContent();
                showTabContent(i);
            });
        });
    }

    if(window.location.toString().indexOf('cart.html') > 0) {
        const modal = document.querySelector('.order__form'),
              substrate = document.querySelector('.substrate'),
              closeBtn = document.querySelector('.order__form-close div'),
              openBtn = document.querySelector('.delivery__btn');

        function hideModalWindowOrder() {
            modal.classList.add('hide');
            substrate.classList.add("hide");
            modal.classList.remove('show');
            substrate.classList.remove("show");
        }

        function showModalWindowOrder() {
            modal.classList.remove('hide');
            substrate.classList.remove("hide");
            modal.classList.add('show');
            substrate.classList.add("show");
        }

        closeBtn.addEventListener('click', () => {
            hideModalWindowOrder();
        });

        openBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showModalWindowOrder();
        })

    }
});