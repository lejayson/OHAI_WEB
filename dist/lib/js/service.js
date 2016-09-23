function setService(chk){
	if(chk == true){
		localStorage.setItem('value', chk);
		localStorage.getItem('value');
	}
}
function getService(){
	return localStorage.getItem('value');
}
function noService(){
	localStorage.setItem('value', false);
}