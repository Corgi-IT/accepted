"use strict";
require('should');
const accepted = require('../app');

describe('accepted', function () {

    describe('error', function() {
        it('Should throw an error if the first parameter is not an Object', function() {
            const result = accepted([], []);

            result.should.be.a.String();
        });

        it('Should throw an error if the second parameter is not an Array or String', function() {
            let result = accepted({}, {});

            result.should.be.a.String();
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

        it('Should return true if the second parameter is a String', function() {
            const result = accepted(obj, 'foo');
            result.should.be.a.Boolean();
            result.should.equal(true);
        });

        it('Should return false if the second parameter is a non existent String', function() {
            const result = accepted(obj, 'non-existend');
            result.should.be.a.Boolean();
            result.should.equal(true);
        });

        it('Should return true if a custom object has a required property', function() {
            const result = accepted(new Foo(), 'foo');
            result.should.be.a.Boolean();
            result.should.equal(true);
        })
    })
});

class Foo {
    constructor() {
        this.foo = 'bar'
    }
}
