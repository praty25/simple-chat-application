Template.registration.events({
	'click .register-user': function (e) {
		e.preventDefault();
		console.log("click on registration");

		var options = {
			email: 	$('#email').val(),
			password:  $('#password').val()
		}
		
		Accounts.createUser(options,function(error){
			if(error){
				alert(error.reason);	
			}
			else{
				Router.go('/dashboard');
			}
		});

	}	
}); 

