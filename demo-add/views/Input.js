//in view, render(), initialize, events, initialize className, tagName, id, el(find existing element), attributes

app.InputView = Backbone.View.extend({
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


app.AddButtonView = Backbone.View.extend({
	tagName: 'button',
	initialize: function(){
		this.render();
	},
	render: function(){
		this.$el.html('add'); //if empty div, append or give html content
	}

})

//pass model, collection, el, id, className, tagName.. as params
app.inputView = new app.InputView({
	el: '.input-div',
});

app.addButtonView = new app.AddButtonView();

//create view and append to existing view dynamaically
app.inputView.$el.append(app.addButtonView.el);