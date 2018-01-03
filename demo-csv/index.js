var UserModel = Backbone.Model.extend();

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
  render: function(){//in render function, we do the job of updating data
    this.$el.html('<li>'+this.model.get('name')+'</li>');
    return this;
  }
});

var UserListView = Backbone.View.extend({
  el: '#users',
  model: UserModel,
  initialize: function(){//get data and render
    //on function, callback no need for ()
    this.collection.on('sync', this.render, this); //add listener for collection
  },
  render: function() {
    this.collection.each(function(model){
      var userView = new UserView({
        model: model
      });
      this.$el.append(userView.render().el);
    }, this);//add this: keep the same context in the callback function
  }
});


var userCollection = new UserCollection();
var UserListView = new UserListView({collection: userCollection});

userCollection.fetch({
  success: function(collection, response){
    console.log(collection);
    console.log(response);
  }
});


