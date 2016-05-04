Router.route('/dashboard',{
	onBeforeAction: function () {
		if (Meteor.userId()) {
			this.next();
		} else {
			Router.go('/');
		}		
	},
	waitOn: function () {
		return Meteor.subscribe('users');
	},
	action: function () {
		this.render('dashboard');
	}

});  																																																																																																																																																																																																																																													