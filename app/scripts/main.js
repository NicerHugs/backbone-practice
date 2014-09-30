var cats = [
    {
        name: 'Uncle Walter Cat Scientist',
        age: 3,
        type: 'tabby',
        color: 'orange'
    }, {
        name: 'Ink'
    }, {
        name: 'Leela',
        type: 'siamese'
    }, {
        name: 'Kapers',
        type: 'calico'
    }, {
        name: 'Smoke',
        color: 'grey'
    }, {
        name: 'Stripes',
        type: 'tabby'
    }

];

var filteredCats;
var searchTerm;
//==============================================================================
                                    //Views
//==============================================================================

var ListView = Backbone.View.extend({
    tagName: 'ul',
    render: function() {
        $('body').append(this.el);},
    initialize: function() {
        this.render();
        _.each(cats, function(cat) {
            _.extend(cat, {className: 'cats'});
            new ListItemView(cat);
        });
    }
});

var ListItemView = Backbone.View.extend({
    tagName: 'li',
    render: function() {
        this.$el.text(this.name);
        $('#catsList').append(this.el);},
    initialize: function(options) {
        this.name = options.name;
        this.render();
        this.listenTo(this.model || $('.search'), 'change', function(){
            // var that = this;
            // _.each(filteredCats, function(cat){that.render(cat);});
        });
    }
  });


var SearchView = Backbone.View.extend({
    tagName: 'input',
    attributes: {type: 'search'},
    render: function() {
        $('body').prepend(this.el);},
    initialize: function() {
        this.render();
        var that = this;},
    events: {
        'search' : 'search'
    },
    search: function() {
        searchTerm = this.$el.val();
        filteredCats = _.filter(cats, function(cat) {
            return cat.name === searchTerm;
        });
        $('.cats').remove();
        _.each(filteredCats, function(cat) {
            new ListItemView(cat);
        });
    }
});



//==============================================================================
                                    //Models (that do nothing right now)
//==============================================================================

var ListItem = Backbone.Model.extend({
    defaults: {
        name: 'unnamed',
        age: 'unknown',
        type: 'unknown',
        color: 'multi'
    },
    className: 'cat',
    initialize: function(){
        //render the ListItemView instance.
    }
});

var List = Backbone.Collection.extend ({
    defaults:{}
});


//==============================================================================
                                    //Do stuff
//==============================================================================

new ListView({id: 'catsList'});

new SearchView({id: 'search'});









//
