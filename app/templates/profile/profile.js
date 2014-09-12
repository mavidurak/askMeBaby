if (Meteor.isClient) {

    Template.profile.name = function()
    {
        return Meteor.user().profile.name
    }

    Template.profile.githubUserName = function()
    {
        return Meteor.user().services.github.username;
    }

    Template.profile.email = function()
    {
        return Meteor.user().services.github.email;
    }


}