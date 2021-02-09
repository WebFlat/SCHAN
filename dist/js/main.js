window.onload = function(){
	
	function setDateTime(elem, setDate) {
		var now = new Date();
		now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
		document.getElementById(elem).value = now.toISOString().slice(0,16);
		var dateTime = document.getElementById(setDate);
		dateTime.innerHTML = document.getElementById(elem).value.toString().replace('T', ' ');
		
	};
	
	setDateTime('time-arrival', 'time-arrivalOut');
	setDateTime('time-unloading', 'time-unloadingOut');



	document.getElementById('time-unloading').addEventListener('change', function(event) {
		var dateTime = document.getElementById('time-unloadingOut');
		dateTime.innerHTML = event.target.value.toString().replace('T', ' ');
	});
	document.getElementById('time-arrival').addEventListener('change', function(event) {
		var dateTime = document.getElementById('time-arrivalOut');
		dateTime.innerHTML = event.target.value.toString().replace('T', ' ');
	});

	

};