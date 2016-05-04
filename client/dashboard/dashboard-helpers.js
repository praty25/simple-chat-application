Template.userList.helpers({
	'users':function (){
		return Meteor.users.find().fetch();
	},
	getEmail: function () {
		return this.emails[0].address;
	}	
});   