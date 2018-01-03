var UserModel = Backbone.Model.extend({
});

var UserCollection = Backbone.Collection.extend({
  model: UserModel,
  url: 'http://5a4a7c58b652640012c2bcb4.mockapi.io/users',
  //in this version of localstorage.min.js, no LocalStorage but Store
  localStorage: new Store('UserCollection')
});


var UserView = Backbone.View.extend({
  el: '#users',
  render: function() {
    debugger;
  }
});

var userCollection = new UserCollection();
var userView = new UserView({model: userCollection});

userCollection.bind('reset', function(){
  console.log("reset");
  console.log(userCollection);
  debugger;
  userView.render();
});

userCollection.fetch();


