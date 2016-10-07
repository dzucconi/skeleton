import hello from '../../app/javascripts/lib/hello';

describe('hello', () => {
  it('says hello', () => {
    hello().should.equal('abracadabra');
  });
});
