if(Meteor.isClient){
Template.nameT.events ({
  "mousedown #save" : function(event){
    event.preventDefault();
    //StudentMaster.insert({
    StudentMaster.insert({'admtype':document.getElementById('admtype').value}),
    StudentMaster.insert({'Enroll. No':document.getElementById('enrollno').value}),
    StudentMaster.insert({'This Year Admissions':document.getElementById('thisyradm').value})
    //});
    },
  "click #update" : function(event){
  	event.preventDefault();
  	rs = StudentMaster.find();
    }
  })
}
