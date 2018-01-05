app.ItemsCollection = Backbone.Collection.extend({
	model: app.ItemModel,
	localStorage: new Store('backbone-todolist')
});

app.itemsCollection = new app.ItemsCollection();