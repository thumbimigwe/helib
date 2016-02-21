Template.login.events({

    'submit #login-form': function(e, t) {
        e.preventDefault();
        // retrieve the input field values
        var email = t.find('#login-email').value,
            password = t.find('#login-password').value;

        // Trim and validate your fields here....

        // If validation passes, supply the appropriate fields to the
        // Meteor.loginWithPassword() function.
        Meteor.loginWithPassword(email, password, function(err) {
            if (err)
            // The user might not have been found, or their passwword
            // could be incorrect. Inform the user that their
            // login attempt has failed.
            else
            // The user has been logged in.
        });
        return false;
    }
});



// if (Meteor.isClient) {
//   // counter starts at 0
//   Session.setDefault('counter', 0);
//
//   Template.hello.helpers({
//     counter: function () {
//       return Session.get('counter');
//     }
//   });
//
//   Template.hello.events({
//     'click button': function () {
//       // increment the counter when button is clicked
//       Session.set('counter', Session.get('counter') + 1);
//     }
//   });
// }
//
// if (Meteor.isServer) {
//   Meteor.startup(function () {
//     // code to run on server at startup
//   });
// }
