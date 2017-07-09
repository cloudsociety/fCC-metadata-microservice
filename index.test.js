var request = require('supertest');
var expect = require('expect');

var {app} = require('./index.js');

describe('Server', () => {
  describe('GET /', () => {
    it('should return index.html response', (done) => {
      request(app)
      .get('/')
      .expect(200)
      .end(done);
    });
  });


  describe('POST /getsize', () => {
    it('should return valid JSON object', (done) => {
      var path = './freecodecamp_logo.svg';
      request(app)
      .post(`/getsize`)
      .attach('file', path)
      .expect(200)
      .expect((res) => {
        expect(res.body.size).toBe(12416);
      })
      .end(done);
    });

    it('should return 500 if no file submitted', (done) => {
      request(app)
      .post(`/getsize`)
      .expect(500)
      .end(done);
    });
  });

  describe('GET /getsize', () => {
    it('should return valid JSON object', (done) => {
      request(app)
      .get(`/getsize`)
      .expect(404)
      .end(done);
    });
  });

});
