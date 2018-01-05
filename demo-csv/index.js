var UserModel = Backbone.Model.extend({
  defaults: {
    'id':0,
    'name':'',
    'age':0
  }
});

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

var AddView = Backbone.View.extend({
  el: '.add-div',
  events: {
    'click button':'addUser'
  },
  addUser(){
    var $button = this.$el.find('button');
    var $input = this.$el.find('input')
    if($button.text() == 'Add user'){
      var username = $input.val();
      $input.val('');
      //create model the contructor
      var id = this.collection.length+1;
      var model = new UserModel({'name':username, 'age':10, 'id': id});
      //or use collection create function
      //this.collection.create({key: value});
      this.collection.add(model);
      userListView.render();
    }else if($button.text() == 'Edit user'){
      var edit_id = $button.data('edit-id');
      this.collection.get(edit_id).set({name: $input.val()});
      $button.text('Add user');
      $input.val('');
      userListView.render();
    }

  }

});

var UserView = Backbone.View.extend({

  events: {
    'click li': 'editUser',
    'dblclick li': 'deleteUser'
  },
  tagName: 'li',
  render: function(){//in render function, we do the job of updating data
    this.$el.html('<li>'+this.model.get('name')+'</li>');
    return this;
  },
  deleteUser(){
    this.$el.remove();
  },
  editUser(){
    $button = addView.$el.find('button');
    addView.$el.find('input').val(this.$el.text());
    $button.text('Edit user');
    $button.data('edit-id', this.model.get('id'));
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
    this.$el.html('');
    this.collection.each(function(model){
      var userView = new UserView({
        model: model //pass model to view
      });
      this.$el.append(userView.render().el);
    }, this);//add this: keep the same context in the callback function
  }
});


var userCollection = new UserCollection();
var userListView = new UserListView({collection: userCollection});
var addView = new AddView({collection: userCollection});

userCollection.fetch({
  success: function(collection, response){
    console.log(collection);
    console.log(response);
  }
});


