'use strict';
let app = require('../app');
let chai = require('chai');
let request = require('supertest');
let expect = chai.expect;

let input ={
    post: 'Integration Test'
}

// Supertest && Chai GET Test
describe('GET /challengeApi', function () {
    it('respond with json with the object  express', function (done) {
        request(app)
            .get('/challengeApi')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});


/// Supertest  && Chai POST TEST
describe('POST /challengeApi', function () {
    it('respond with a string ', function (done) {
        request(app)
            .post('/challengeApi').send(input) .end (function(err, res) {
            expect(res.statusCode).to.equal(200);
            done();
        });
    });


});