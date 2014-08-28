// Route Configuration
Router.configure({
    layoutTemplate:'layout',
    load: function () {
        $('.navbar-menu-li').each(function() {
            $(this).removeClass('active');
        });
        $("ul").find("[data-menu-key='" + this.route.name +"']")
               .parent()
               .addClass('active');
    }   
});

// Routes
Router.map(function() {
    this.route('home', {path: '/'});
    this.route('login', {path: '/login'});
    this.route('register', {path: '/register'});
    this.route('profile', {path: '/profile'});
    this.route('askQuestion', {path: '/question/ask'});
});

// Navbar Menus For Titles
if (Meteor.isClient) {

    Template.layout.menus = [
        {name: 'home', title: 'Home'},
        {name: 'login', title: 'Login'},
        {name: 'register', title: 'Register'},
        {name: 'profile', title: 'Profile'}
    ];

}
