Meteor.publish('tamagotchi', () => {
    return Tamagotchi.find();
});
