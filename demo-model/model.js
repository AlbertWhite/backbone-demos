var Model = Backbone.Model.extend({
	initialize: function(){
		this.bind("change", function(){
			console.log(this.changedAttributes());
		});
		this.on("change:id", function(){
			console.log("id is changed", this.get('id'));
		})

	},
	defaults:{
		id: 123
	}
});

var modelInstance = new Model({
	title: 'title'
});