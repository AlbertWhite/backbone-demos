var UserModel = Backbone.Model.extend();

var jsonData = [
    {
        "id": 1,
        "title": "Pulp Fiction"
    },
    {
        "id": 2,
        "title": "The Usual Suspects"
    },
]


var UserCollection = Backbone.Collection.extend({
  url: 'http://5a4a7c58b652640012c2bcb4.mockapi.io/users',
  model: UserModel,
  //in this version of localstorage.min.js, no LocalStorage but Store
  // initialize: function() {
  //       this.on('sync', function(collection, options) {
  //           console.info('~ Fetch complete `sync` triggered', collection, options);
  //       });
        
  //       this.on('add', function(model, collection, options) {
  //           console.info('~ Fetch complete `add` triggered on each model in collection', model, collection, options);
  //       });
  // }
});


var UserView = Backbone.View.extend({
  el: '#users',
  render: function() {
    
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

userCollection.fetch({
  success: function(collection, response){
    console.log(collection);
    console.log(response);
  }
});


