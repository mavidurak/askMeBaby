// Navbar Menus For Titles
if (Meteor.isClient) {

    Template.layout.menus = [
        {name: 'home', title: 'Home'},
        {name: 'login', title: 'Login'},
        {name: 'profile', title: 'Profile'}
    ];

}
