var ListView = Backbone.View.extend({
    tagName: 'ul',
    render: function() {
        $('body').append(this.el);}
});
