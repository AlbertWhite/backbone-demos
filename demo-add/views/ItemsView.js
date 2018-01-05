app.ItemsView = Backbone.View.extend({
	el: 'ul',
	initialize: function(){
		//register event in model
		app.itemsCollection.on('add', this.addAll, this);
	

	},
	addAll: function(){
		this.$('ul').html();
		app.itemsCollection.map(function(item){
			var item = new app.ItemView({model: item});//pass key-value pair into view
			this.$('ul').append(item.render().el);
		});
	}
	
})

app.itemsView = new app.ItemsView();