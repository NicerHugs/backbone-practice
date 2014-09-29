/* global describe, it */

(function () {
    'use strict';

    describe('the ListView View', function () {
        it('should make a ul element when rendered', function() {
            var list = new ListView({id: 'fish'});
            list.render();

            expect($('#fish').length).to.equal(1);
        });
    });

    describe('the ListView View', function () {
        it('should make a ul element when rendered', function() {
            var list = new ListView({id: 'fish'});
            list.render();

            expect($('#fish').length).to.equal(1);
        });
    });
})();
