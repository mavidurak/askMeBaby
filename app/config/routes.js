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
    this.route('profile', {path: '/profile'});
    this.route('askQuestion', {path: '/ask/question'});
    this.route('questionDetail', {path: '/question/:_id'});
});