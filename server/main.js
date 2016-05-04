Meteor.methods({
	sendMessage: function (message, sendTo) {
		console.log("message ios ", message);
		console.log("sendTo ", sendTo);
		
		a = Messages.insert({
			message: message,
			sentBy: this.userId,
			receivedBy: sendTo,
			sentAt: new Date()
		});
		console.log("mesage id is ", a);
		return a;
	}
});

Meteor.publish('users', function () {
	if (this.userId) {
		return Meteor.users.find({}, {fields: {emails: 1, createdAt: 1}});		
	} else {
		return [];
	}
});

Meteor.publish('getOneUser', function (id) {
	if (this.userId) {
		return Meteor.users.find({_id: id}, {fields: {emails: 1, createdAt: 1}});		
	} else {
		return [];
	}
});


Meteor.publish('messages', function (userId) {
	console.log("inside messages publish");
	if (this.userId) {
		var ids = [this.userId, userId];
		console.log("ids aer ", ids);
		console.log("messages are ",  Messages.find({$and: [{ sentBy: { $in: ids } },{ receivedBy: { $in: ids } }]}).fetch()   );

		return Messages.find({
			$and: [
				{ sentBy: { $in: ids } },
				{ receivedBy: { $in: ids } }
			]
		});
	} else {
		return [];
	}
});