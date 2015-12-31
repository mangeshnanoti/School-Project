Enroll = new Mongo.Collection("enroll");
StudentMaster = new Mongo.Collection("studentmaster");
StudentMaster.allow({
  insert: function (doc, userId) {
    // the user must be logged in, and the document must be owned by the user
    return true;
  },
  update: function (userId, doc, fields, modifier) {
    // can only change your own documents
    return true;
  },
  remove: function (userId, doc) {
    // can only remove your own documents
    return true;
  },
  //fetch: ['owner']
});