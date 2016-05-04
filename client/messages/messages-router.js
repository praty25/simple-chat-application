Router.route('/messages/:id',{
	onBeforeAction: function () {
		if (Meteor.userId()) {
			this.next();
		} else {
			Router.go('/');
		}
	},
	waitOn: function () {
		console.log("this.params.id ", this.params.id);
		return [ Meteor.subscribe('messages', this.params.id), Meteor.subscribe('getOneUser', this.params.id)];
	},
	action: function () {
		this.render('messages');
	}
});