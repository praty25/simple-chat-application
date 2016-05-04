Template.messages.helpers({
	messages: function () {
		return Messages.find().fetch();
	},
	messageSentBy: function () {
		console.log("messageSentBy ", this.sentBy);
		return Meteor.users.findOne(this.sentBy).emails[0].address;
	}
});