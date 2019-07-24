document.querySelector('#signup__submit').onclick = function(event){
	event.preventDefault();
	let name = document.querySelector('#signup__name').value;
	let pass = document.querySelector('#signup__pass').value;
	let pass2 = document.querySelector('#signup__pass2').value;
	let email = document.querySelector('#signup__email').value;
	let birthday = document.querySelector('#signup__birthday').value;
	let sex = document.querySelectorAll('.sex');
	for(let i = 0; i < sex.length; i++){
		if(sex[i].checked){
			sex = sex[i].value;
			break;
		}
	} 
	console.log(sex);
	let data = {
		'name' : name,
		'pass' : pass,
		'pass2' : pass2,
		'email' : email,
		'birthday' : birthday,
		'sex' : sex,
	}

	ajax('core/signup.php', 'POST', signup, data);

	function signup(result){
        console.log(result);
        if(pass2 !== pass){ 
            M.toast({html: 'Пароли не совпадают'});//проверка совпадения паролей
        } else if(result == 2){
        	M.toast({html: 'Заполните все поля'});
        } else if(result == 1){
            M.toast({html: 'Успех. Теперь можно войти'});
            closeModal();
        } else{
        	M.toast({html: 'Ошибка. Повторите регистрацию позже'});
        }
	}
}

document.querySelector('#login__submit').onclick = function(event){
	event.preventDefault();
	let pass = document.querySelector('#login__pass').value;
	let email = document.querySelector('#login__email').value;
	
	let data = {
		'pass' : pass,
		'email' : email,
	}

	ajax('core/login.php', 'POST', login, data);

	function login(result){
        if(result == 2){
        	 M.toast({html: 'Заполните все поля'});
        } else if(result == 0){
             M.toast({html: 'Пользователь не найден'});
        } else{
        	console.log(result);
        	result = JSON.parse(result);
            let d = new Date();
            d.setTime(d.getTime() + (10 * 60 * 1000));
            let expires = d.toUTCString();
            document.cookie = `email=${result.email}; expires=${expires}; path=/`;
            location.href = "cabinet.php";
        }
	}
}

