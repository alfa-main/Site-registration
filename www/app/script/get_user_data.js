 document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.datepicker');
    let instances = M.Datepicker.init(elems, options);
  });

  let options = {
    "format" : "yyyy mm dd",
    yearRange : [1950,2009]
  }

let userEmail = getCookie('email');
ajax('core/get_user_data.php', 'POST', getUserData, {"email" : userEmail});

console.log(userEmail);

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function getUserData(result){
  result = JSON.parse(result);
  console.log(result);
  document.querySelector('#signup__name').value = result.name;
  document.querySelector('#signup__pass').value = result.password;
  document.querySelector('#signup__birthday').value = result.birthday;
  M.updateTextFields();
}



function getRadioValue() {
  let sex = document.querySelectorAll('.sex');
  for(i = 0; i < sex.length; i++){
    if(sex[i].checked){ 
      return sex[i].value;
    }
  }
}
console.log(getRadioValue());

document.querySelector('#signup__submit').onclick = function(event){
  event.preventDefault();
  let updateData = {
    'email' : userEmail,
    'name' : document.querySelector('#signup__name').value,
    'pass' : document.querySelector('#signup__pass').value,
    'birthday' : document.querySelector('#signup__birthday').value,
    'sex' : getRadioValue(),
  }

  ajax('core/update_user_data.php', 'POST', updateUserData, updateData);
}

function updateUserData(result){
  console.log(result);
  if(result == 1) M.toast({html: 'Данные успешно обновлены'});
  else{
    M.toast({html: 'Ошибка обновления'});
  }
}