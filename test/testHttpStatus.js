var expect = require('chai').expect;

var request = require('request');

it('HomePage should be online', function (done) {
    request('http://localhost:3000', function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});

it('Wrong page should return 404 status', function (done) {
    request('http://localhost:3000/wrong-page', function (error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
    });
});