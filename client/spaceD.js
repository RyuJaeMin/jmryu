Router.route('/spaceD', {
    path: '/spaceD/:_id',
    onRun: function() {
        Session.set('userId', this.params._id);
        this.next();
    }
});

Template.spaceD.helpers({
    userObj: function() {
        var userId = Session.get('userId');
        var userObj = space.findOne({_id: userId});
        //Boards.find({_id: userId}).fetch();
        return userObj;
    }
});