var assert = require('assert');
const Tissu = require('./tissu').tissu;
const Plongee = require('./plongee').plongee;
const Plongeur = require('./plongeur').plongeur;

plongee=new Plongee();
plongee.setPn(1000);
plongee.setNewP(10,4);
tissu=new Tissu();
tissu.setPambtol(plongee.getPcomp());
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
        tissu.setEtat(32.19);
        assert.equal(tissu.getEtat(),'sample 1 is feeling not so good.\n');
        tissu.setEtat(1000);
        assert.equal(tissu.getEtat(),'sample 1 is feeling good.\n');
        tissu.setEtat(10);
        assert.equal(tissu.getEtat(),'sample 1 is feeling dying soon.\n')
    });
});

describe('For Plongee', function(){

    it('should be 77.19 atm', function () {
        assert.equal(plongee.getPcomp().toFixed(2),64.99);
    });
});

describe('For Plongeur',function () {
    it('should be 100', function () {
        assert.equal(plongeur.getDepth(),100);
    });
});
