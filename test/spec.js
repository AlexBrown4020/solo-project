const expect = chai.expect;
const chaiHttp = require('chai-http');
const { db } = require('./knex')


describe('Database', function () {
    it('actors should exist', function () {
        console.log(db)
        expect(1).to.equal(2)
    })
});
