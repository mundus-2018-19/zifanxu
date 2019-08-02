var assert = require('assert');
const Tissu = require('./tissu').tissu;
const Plongeur = require('./plongeur').plongeur;


tissu=new Tissu(4);
tissu.setPn(1000);
tissu.setNewP(10);
plongeur=new Plongeur();
plongeur.setDepth();


describe('For tissu', function() {

    it('should tell us the max pressure that a man can bear with a given pressure', function() {
        assert.equal(tissu.getPambtol().toFixed(2), 32.18);
    });
    it('should tell us the half-life of the tissu', function () {
        assert.equal(tissu.getTht(),4);
    });
    it('should tell us the state of his body', function () {
        tissu.setEtat();
        assert.equal(tissu.getEtat(),'sample is feeling good.\n');
    });
});
describe('For Plongeur',function () {
    it('should be 100', function () {
        assert.equal(plongeur.getDepth(),100);
    });
});
