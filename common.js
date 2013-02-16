_.extend(Meteor, {
  hashid: function() {
    var hash, uuid;
    uuid = new Hashids(Meteor.uuid());
    return hash = uuid.encrypt(Date.now());
  }
});
