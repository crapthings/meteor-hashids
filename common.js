//if (typeof Package !== "undefined") Hashids = this.Hashids;

_.extend(Meteor, {
  hashid: function() {
    var hash, uuid;
    uuid = new Hashids(Meteor.uuid());
    return hash = uuid.encrypt(Date.now());
  }
});
