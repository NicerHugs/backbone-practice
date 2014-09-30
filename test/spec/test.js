/* global describe, it */

(function () {
    'use strict';

    describe('the ListView View', function () {
        it('should make a ul element when rendered', function() {
            var list = new ListView({id: 'fish'});
            list.render();

            expect($('ul#fish').length).to.equal(1);
        });
    });

    describe('the ListItemView View', function () {
        it('should make a li element when rendered', function() {
            var listItem = new ListItemView({className: 'fish'});
            listItem.render();

            expect($('li.fish').length).to.equal(1);
        });

        it('should make 10 items when called over a list of 10 items', function(){
            var tenItems = _.range(10);
            _.each(tenItems, function(item){
                var listItem = new ListItemView({
                    className: 'giggle',
                    id: item});
                listItem.render();
            });

            expect($('li.giggle').length).to.equal(10);
        });

        it('should show the info I feed into it', function() {
            _.each(cats, function(cat) {
                _.extend(cat, {className: 'kitty'});
                var listItem = new ListItemView(cat);
            });
            expect($('.kitty:first').text()).to.contain('Uncle Walter Cat Scientist');
        });

        it('should have a model that feeds it data', function() {
            //make list items w/class 'cat' using a model.
            _.each(cats, function(cat) {
                var listItem = new ListItem(cat);
                console.log(listItem);
                new ListItemView(listItem);
            });

            expect($('.cat').text()).to.contain('Kapers');
        });

        it('should re-render when its model changes', function() {
            //make list items w/class .num and model NumModel
            var fourItems = _.range(4);
            _.each();
            var listItem = new ListItemView({className: 'num'});

            expect($('.num').length).to.equal(4);
            //change the model to be 4 things
            expect($('.num').length).to.equal(3);
            //change the model to be 5 things
            expect($('.num').length).to.equal(3);
        });
    });

    describe('the SearchView View', function() {
        it('should make search box', function() {
            var search = new SearchView({id: 'goop'});
            search.render();

            expect($('input[type=search]#goop').length).to.equal(1);
        });

        it('should watch for search events in itself', function() {
            $('#goop').val('hi');
            $('#goop').trigger('search');

            expect(searchTerm).to.equal('hi');
        });
    });
})();
