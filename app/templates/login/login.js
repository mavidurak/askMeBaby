if (Meteor.isClient) {

    Template.login.events({
        'click #login': function(event, template) {
            alert(1);
        },
    });

}
