Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function(){
	//home route
	this.route('questions', {
		path: '/',
		template: 'questions'
	})
});