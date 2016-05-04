Template.messages.events({
	'click #sendMessage': function () {
		var message = $('#enter_message').val();
		$('#enter_message').val('');
		Meteor.call('sendMessage', message, Iron.Location.get().path.split('/')[2], function (error, result) {
			if (error) {
				alert('Some Error while sending the message, Please try after sometime');
			}
		})
	}
})