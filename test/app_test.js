"use strict";
require('should');
const accepted = require('../app');

describe('accepted', function () {

    describe('error', function() {
        it('Should throw an error if the first parameter is not an object', function() {
            let check = 1;
            try {
                accepted([], []);
                check = 2;
            } catch (e) {
                check = 3;
            }

            check.should.equal(3);
        });

        it('Should throw an error if the second parameter is not an array', function() {
            let check = 1;
            try {
                accepted({}, {});
                check = 2;
            } catch (e) {
                check = 3;
            }

            check.should.equal(3);
        });
    });

    describe('success', function() {
        const obj = {
            foo : 'bar',
            baz : 'qux',
            nope : null,
            obj : { exists: 'Yup'},
            arr : ['element']
        };

        it('Should return true of all required properties exist and are not null or undefined', function() {
            const result = accepted(obj, ['foo', 'baz']);
            result.should.be.a.Boolean();
            result.should.equal(true);
        });

        it('Should return false if one of the required properties is null', function() {
            const result = accepted(obj, ['foo', 'nope', 'obj']);
            result.should.be.a.Boolean();
            result.should.equal(false);
        });

        it('Should return false if one of the required properties is undefined', function() {
            const result = accepted(obj, ['foo', 'non-existend', 'obj']);
            result.should.be.a.Boolean();
            result.should.equal(false);
        });
    })
});
