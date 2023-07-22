const assert = require('chai').assert;
const  app  = require('../app.js');
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe("VALIDACION DE SERVIDOR", () => {
  it("El servidor debería responder con el código 200", (done) => {
    chai.request(app)
      .get("/")
      .end((err, res) => {
        assert.equal(res.status, 200);
        done();
      });
  });
});
