Template.dashboard.events({
	'click #btn-logout':function(e){
		e.preventDefault();
		Meteor.logout();
	}
}) 