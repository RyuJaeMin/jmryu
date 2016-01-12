Meteor.methods({

  'removeStudy': function(obj) {
    study.remove({
      _id: obj._id
    });
  },
  'removeSpace': function(obj) {
    space.remove({
      _id: obj._id
    });
  },
});