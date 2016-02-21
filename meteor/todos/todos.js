if (Meteor.isClient) {
    // client code goes here
}

if (Meteor.isServer) {
    // server code goes here
}


todos.insert({
    name: "Walk the dog",
    completed: false,
    createdAt: new Date()
});

Template.todos.helpers({
    'todo': function() {
        return Todos.find();
    }
});

Todos = new Mongo.Collection('todos');
