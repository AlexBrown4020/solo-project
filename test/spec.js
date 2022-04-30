const expect = chai.expect;
import db from 'knex';
describe('Database', function () {
    it('actors should exist', function () {
        console.log(db)
        expect(1).to.equal(2)
    })
});