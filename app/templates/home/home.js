if (Meteor.isClient) {

    $(document).ready(function(){
        setTimeout(function(){
            $('.login-text-and-button').addClass('navbar-btn');
        }, 300);
    });

    Template.home.logged = function() {
        return (Meteor.user() !== null);
    }; 

}