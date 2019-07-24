document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.datepicker');
    let instances = M.Datepicker.init(elems, options);
});

let options ={
	"format" : "yyyy mm dd",
    yearRange: [1950, 2009]
}

document.querySelectorAll('.modal__show').forEach(function (element) {
    element.onclick = showModal;
});

document.querySelectorAll('.modal_project_close').forEach(function (element) {
    //закрываем окно на кнопке закрыть
    element.onclick = closeModal;
});

document.querySelectorAll('.modal__wrap').forEach(function (element) {
    //закрываем окно на клике в области серой
    element.onclick = closeModal;
});


function showModal() {
    let modalId = this.dataset.modal;
    document.querySelector(modalId).classList.remove('hide');
    document.onkeydown = function (event) {
        //закрываем окно на кнопку Esc
        if (event.keyCode == 27) closeModal();
    }
}

function closeModal() {
    document.querySelectorAll('.modal__wrap').forEach(function (element) {
        element.classList.add('hide');
    });
    document.onkeydown = null;
}

document.querySelector('#log__in .modal__project').onclick = function(event) {
	event.stopPropagation();
}

document.querySelector('#sign__up .modal__project').onclick = function(event) {
	event.stopPropagation();
}

document.querySelector('.read__rules').onclick = function(){
	document.querySelector('.modal__slider').style.marginLeft = '-345px';
}

document.querySelectorAll('.read__rules__back').forEach(function(element){
    element.onclick = modalSlide;
});

//Переключатель слайдера по клику правой и левой стрелки клавиатуры
document.onkeydown = function(e){
    if(e.key == 'ArrowLeft'){
    	modalSlide();//Используем функцию для возврата слайдера в исходное значение 
    } else if(e.key == 'ArrowRight'){
    	document.querySelector('.modal__slider').style.marginLeft = '-345px';
    }
}

//функция возврата слайдера в исходное значение
function modalSlide(){
    document.querySelector('.modal__slider').style.marginLeft = 0;
}

document.querySelector('#agree__rules').onchange = function(){
	if(this.checked){
		console.log('checked');
		document.querySelector('#signup__submit').classList.remove('disabled');
	} else{
		document.querySelector('#signup__submit').classList.add('disabled');
	}
}