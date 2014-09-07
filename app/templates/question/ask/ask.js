// Collection Defination
Questions = new Meteor.Collection('questions');

if (Meteor.isClient) {

	// Ask Question Events
	Template.askQuestion.events({
		// Insert
		'click #save': function(event, template) {
			var title = $('#title').val();
			$('#title').val('');
			Questions.insert({title: title});
		},
		// Delete
		'click #delete': function(event, template) {
			Questions.remove(this._id);	
		}
	});

	// All Questions
	Template.askQuestion.questions = function() {
		return Questions.find();
	};

}