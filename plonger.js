const plonger =
    {
        // la construction va calculer Pn lui-même
        init : function ( depth , te )
        {
            this.depth=depth;
            this.te=te;
            this.pn=this.setPn(this.depth);
        }
    };

//formule pour calculer Pn dans une certaine profondeur
plonger.setPn = function( depth )
{
    return 0.79*((10.34+depth)/10.34);
};

plonger.toString = function()
{
    return `He has stay at ${this.depth.toFixed(2)} meters under water for ${this.te} minutes, `
        +`\nthe partial pressure of Nitrogen inside is ${this.pn.toFixed(2)} atm.`;
};

exports.plonger=plonger;