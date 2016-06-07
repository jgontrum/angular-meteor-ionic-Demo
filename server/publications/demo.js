Meteor.publish('demo', () => {
    return Demo.find();
});
