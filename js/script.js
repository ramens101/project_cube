const registerButtons = document.querySelectorAll('.register-btn')

function popupOpen(popupId) {
    document.getElementById(popupId).classList.add('active')
}

function popupClose(e) 
{
    e.stopPropagation()

    if ((e.target.closest('.popup__window') == null) || (e.target.closest('.popup__btn-close') != null))
        this.classList.remove('active')
}

function mobileMenuOpen()
{
    const menuBtn = document.querySelector('.header__menu-btn-mobile')
    menuBtn.classList.toggle('active')
    document.querySelector('.menu-mobile').classList.toggle('active')

    if (menuBtn.classList.contains('active'))
        menuBtn.src = '../images/btn_popup_close.svg'

    else
        menuBtn.src = '../images/btn_header_menu_mobile.svg'
}

function selectInputChange ()
{
    let caseSelect = document.querySelector('#register__case-select')
    console.log(caseSelect)

    for (let i = 1; i < caseSelect.length; i++)
        caseSelect[i].remove()

    let optionsValues = []
    let optionDescriptions = []

    if (this.value == 'engineering')
    {
        optionsValues = ['siesta', 'zme', 'botsad']
        optionDescriptions = ['Siesta - Производство системы Cold Brew', 'ЗМЭ - Кастом станка для плазменной резки', 'БотСад - Мониторинг потухших букв']
    }

    else if (this.value == 'it')
    {
        optionsValues = ['nevada', 'css', 'vilki-palki']
        optionDescriptions = ['Невада групп - Решение для учета рабочего времени ИТ сотрудников', 'ЦСС - Международный портал для B2B предприятий', 'Вилки-Палки - POS система + мобильное приложение для ресторана']
    }

    for (let i = 1; i <= optionsValues.length; i++)
    {
        caseSelect[i] = new Option(optionDescriptions[i-1], optionsValues[i-1])
    }
}

for (let i = 0; i < registerButtons.length; i++)
{
    registerButtons[i].onclick = popupOpen.bind(null, 'register')
}

document.querySelector('#case-siesta-btn').onclick = popupOpen.bind(null, 'case-siesta')
document.querySelector('#case-zme-btn').onclick = popupOpen.bind(null, 'case-zme')
document.querySelector('#case-botsad-btn').onclick = popupOpen.bind(null, 'case-botsad')
document.querySelector('#case-nevada-btn').onclick = popupOpen.bind(null, 'case-nevada')
document.querySelector('#case-css-btn').onclick = popupOpen.bind(null, 'case-css')
document.querySelector('#case-vilki-palki-btn').onclick = popupOpen.bind(null, 'case-vilki-palki')

document.querySelector('.header__menu-btn-mobile').addEventListener('click', mobileMenuOpen);

document.querySelectorAll('.menu-mobile__item').forEach(item => {item.addEventListener('click', mobileMenuOpen)})

const popupList = document.querySelectorAll('.popup')

for (let i = 0; i < popupList.length; i++) 
{
    popupList[i].addEventListener('click', popupClose)
}

document.querySelector('#register__sphere-select').addEventListener('change', selectInputChange)

document.addEventListener('DOMContentLoaded', function()
{
    const swiper = new Swiper('.partners__slider', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 5,
    spaceBetween: 16,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    });
})

document.addEventListener('DOMContentLoaded', function() 
{
    initMap();
        async function initMap() {
            await ymaps3.ready;
    
            const {YMap, YMapDefaultSchemeLayer, YMapMarker, YMapDefaultFeaturesLayer} = ymaps3;

            const {YMapZoomControl} = await ymaps3.import('@yandex/ymaps3-controls@0.0.1');
            const {YMapDefaultMarker} = await ymaps3.import('@yandex/ymaps3-markers@0.0.1');
    
            const map = new YMap(
                document.getElementById('feedback__map'),
                {
                    location: {
                        center: [135.065069, 48.478804],
                        zoom: 15,
                    }, 
                });
    
                map.addChild((scheme = new YMapDefaultSchemeLayer()));
                map.addChild(new YMapDefaultFeaturesLayer({id: 'features'}));
    
                map.addChild(new YMapDefaultMarker({
                    coordinates: [135.065069, 48.478804], 
                    title: '<strong>RASA</strong>',
                    subtitle: 'ул.Дзержинского, 52'
                }
            ));
    }
})

    
    