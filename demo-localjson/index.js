var UserModel = Backbone.Model.extend({
  defaults: {
    'id':0,
    'name':'',
    'startyear':0,
    'endyear':0
  }
});

var UserCollection = Backbone.Collection.extend({
  url: './emperor.json',
  model: UserModel,
});

var UserView = Backbone.View.extend({

  events: {
  },
  tagName: 'div',
  render: function(){
    this.$el.html('<div>'+this.model.get('name')+'</div>');
    return this;
  }
});

var UserListView = Backbone.View.extend({
  el: '.timeline',
  model: UserModel,
  initialize: function(){
    this.collection.on('sync', this.render, this);
  },
  render: function() {
    this.collection.each(function(model){
      var userView = new UserView({
        model: model
      });
      this.$el.append(userView.render().el);
    }, this);
  }
});


var userCollection = new UserCollection();
var userListView = new UserListView({collection: userCollection});

userCollection.fetch({
  success: function(collection, response){
    console.log(collection);
    console.log(response);
  }
});


