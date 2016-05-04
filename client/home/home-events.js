Template.login.events({
	'submit #form':function(e){
		e.preventDefault();
		var user = $("#user").val();
		var	pass = $("#pass").val();
		Meteor.loginWithPassword(user,pass,function(error){
			if(error){
				alert(error.reason)
			}
			else
			{
				Router.go('/dashboard')
			}
		})
	}
}); 