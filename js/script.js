console.log(`Score: 150 / 150:
- вёрстка валидная (10/10)
- вёрстка семантическая (20/20): aside, figure, footer, header, main, nav, section, h1, h2, h3, h4
- для оформления СV используются css-стили (10/10)
- контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет, если он есть, тянется во всю ширину страницы (10/10)
- вёрстка адаптивная (10/10)
- есть адаптивное бургер-меню (10/10)
- на странице СV присутствует изображение - фото или аватарка автора CV, пропорции изображения не искажены, у изображения есть атрибут alt (может быть пустым) (10/10)
- контакты для связи и перечень навыков оформлены в виде списка ul > li (10/10)
- CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского (10/10)
- CV содержит пример вашего кода (например, решение задачи с сайта codewars) с подсветкой кода (10/10)
- CV содержит изображения-ссылки на выполненные вами проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название, небольшое описание, указан перечень используемых технологий (10/10)
- CV выполнено на английском языке (10/10)
- выполнены требования к Pull Request: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, выполнена самооценка (самооценку расписываем по пунктам критериев оценки, указывая балл за каждый пункт) (10/10)
- дизайн, оформление, качество выполнения CV не ниже чем в примерах CV (10/10)
`);

$(document).ready(function() {
	$('.burger-menu').click(function(){
        $('.burger-menu').toggleClass('open-menu');
        $('.navigator').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
	});
    $('.nav_item').click(function(){
        $('.burger-menu').toggleClass('open-menu');
        $('.navigator').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
	});
});