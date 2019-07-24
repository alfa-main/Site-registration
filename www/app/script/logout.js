document.querySelector('#logout').onclick = function() {
	let c = document.cookie;
	let d = new Date();
    d.setTime(d.getTime() - (10 * 60 * 1000));
    let expires = d.toUTCString();
    document.cookie = `email=${c}; expires=${expires}; path=/`;
    location.href = "cabinet.php";
	location.reload();
}