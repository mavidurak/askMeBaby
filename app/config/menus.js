// Navbar Menus For Titles
if (Meteor.isClient) {

    Template.layout.menus = [
        {name: 'home', title: 'Home'},
        {name: 'profile', title: 'Profile'}
    ];

}
