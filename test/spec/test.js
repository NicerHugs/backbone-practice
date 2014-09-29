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
                    className: 'cat',
                    id: item});
                listItem.render();
            });

            expect($('li.cat').length).to.equal(10);
        });
    });
    describe('the SearchView View', function() {
        it('should make search box', function() {
            var search = new SearchView({id: 'goop'});
            search.render();

            expect($('input[type=search]#goop').length).to.equal(1);
        });
    });
})();
