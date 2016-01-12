Router.route('/studyD', {
    path: '/studyD/:_id',
    onRun: function() {
        Session.set('userId', this.params._id);
        this.next();
    }
});

Template.studyD.helpers({
    userObj: function() {
        var userId = Session.get('userId');
        var userObj = study.findOne({_id: userId});
        //Boards.find({_id: userId}).fetch();
        return userObj;
    }
});