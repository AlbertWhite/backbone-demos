app.InputView = Backbone.View.extend({
	el: '.input-div',
	initialize: function(){
		this.render(); //if it is binded to a DOM element, render while initializing
	},
	events:{ //register events
 		'click button': 'addTodo'
	},
	addTodo: function(){
		//this -> view
		var content = this.$el.find('input').val();
		this.$el.find('input')[0].value = '';
		app.itemsCollection.create({
			content: content,
			completed: false
		});
	}
})

app.inputView = new app.InputView();