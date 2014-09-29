var ListView = Backbone.View.extend({
    tagName: 'ul',
    render: function() {
        $('body').append(this.el);}
});

var ListItemView = Backbone.View.extend({
    tagName: 'li',
    render: function() {
        $('#fish').append(this.el);}
});

var SearchView = Backbone.View.extend({
    tagName: 'input',
    attributes: {type: 'search'},
    render: function() {
        $('body').prepend(this.el);}
});


$('input[type=search]').on('keyup', function() {console.log('hello');});
