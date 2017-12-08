app.ItemModel = Backbone.Model.extend({
	defaults:{
		'content': '',
		'completed': false
	},
	toggle: function(){
		console.log(this);
	}
});