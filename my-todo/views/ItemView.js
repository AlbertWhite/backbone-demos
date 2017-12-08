let template = `<div class='view'>
      <input class='toggle' type='checkbox' <%= completed? 'checked' : ''%>>
      <label><%= content%></label>
      <input class='edit' value='<%= content%>'/>
      <button class='destroy'>remove</button>
    </div>`

//template = $.parseHTML(template)[0]; //transfer to a DOM object
//console.log(template)

app.ItemView = Backbone.View.extend({
	tagname: 'li',
	template: _.template(template),//load template
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));//in render function, pass the variable
		return this;
	}
});