Router.route('/',{
	onBeforeAction: function () {
		if (Meteor.userId()) {
			Router.go('/dashboard');
		} else {
			this.next();
		}
	},
	action: function () {
		this.render('login');
	}
}); 	