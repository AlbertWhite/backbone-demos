### todo list
Example from http://adrianmejia.com/blog/2012/09/11/backbone-dot-js-for-absolute-beginners-getting-started/

### my todo
Example from myself

Backbone is like a structured Jquery. 
In Jquery, we detect event from DOM and change data. 

Backbone helps us organize the dom in 'view', we can register events in view. 

Render method in view takes the template, pass object as values, return this for chained functions.

Another kind of view is templated based component. We can CRUD them. 

Backbone use 'model' and 'Collecion' to help with managing the data. We can add 'events' listener for the collections. 

### View
View is structured dom element, with id, attributes, className, registered events, el (dom). With $el, view can be played with jquery.
View can be linked with a existing dom element, or an empty element which will be appended dynamically leter.

Use unnderscore template with backbone view, template can be used to interpolate values.

### Model
Model attributes: get, set, attributes, has, unset, clear()
Defaults set default attributes.
bind change function, changedAttributes() get changed attributes.
Use model.toJSON() to parse to object.
Three ways to set attributes: 1. new Model({attributes}) 2. defaults 3. set()
model.sync(method, model) method: create, read, update, delete.