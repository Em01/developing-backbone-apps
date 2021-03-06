//Define a Todo Model
var Todo = Backbone.Model.extend({
	// Default todo attribute values
	defaults: {
		title: '',
		completed: false
	}
});

//Instantiate the Todo Model with a title, with the completed attribute
//defaulting to false
var myTodo = new Todo({
	title: 'Check attributes property of the logged models in the console.'
});

//view
var TodoView = Backbone.view.extend({
	tagName: 'li',

	//Cache the template function for a single item
	todoTpl: _.template( $('#item-template').html() ),

	events: {
		'dbclick label': 'edit',
		'keypress .edit': 'updateOnEnter',
		'blur .edit': 'close'
	},

	//Called when the view is first created
	initialize: function() {
		this.$el = $('#todo');
	},

	//Re-render the titles of the todo item.
	render: function() {
		this.$el.html( this.todoTpl( this.model.attributes) );
		//$el here is a reference to the jQuery element
		//associated with the view, todoTpl is a reference
		//to an Underscore template and model.attributes
		//contains the attributes of the model
		//Altogether the statement is replacing the HTML of 
		//a DOM elelment with the result of instantiating a 
		//template with the model's attributes

		this.input = this.$('.edit');
		return this;
	},

	edit: function() {
		//executed when todo label is double clicked
	},

	close: function() {
		//executed when todo loses focus
	},

	updateOnEnter: function( e ) {
		//executed on each keypress when in todo edit mode,
	}
});

//create a view for a todo
var todoView = new TodoView({model: myTodo});