const plonger= require('./plonger').plonger;

const tissu =
    {
        nom : 'the sample',
        init : function (p0,tht)
        {
            this.pcomp=p0;
            this.tht=tht;
            this.pambtol=this.setPambtol( this.pcomp );
        }
    };

//formule pour calculer la Pambtol
tissu.setPambtol = function( pcomp )
{
    var a=2*Math.pow(this.tht,-1/3);
    var b=1.005-Math.pow(this.tht,-1/2);
    return (pcomp-a)*b;
};

//calculer la nouvelle pression partielle d'azote pour ce moment là
tissu.setNewP = function( plonger )
{
    var p0=this.pcomp;
    var index=(-plonger.te)/this.tht;
    this.pcomp=p0+(plonger.pn+p0)*(1-Math.pow(2,index));
    this.pambtol=this.setPambtol(this.pcomp);
};

//transférer la pression en metre
tissu.pressureToDepth = function()
{
    var depth = ((10.34*this.pambtol)/0.79)-10.34;
    if (depth<=0.79)
    {
        return 'he could directly come out of water.';
    }
    else
    {
        return `he could only go up to the level of ${depth.toFixed(2)} meters.`;
    }
};

tissu.toString = function( plonger )
{
    return `${plonger.toString()}\nSo the max pressure he can bear is ${this.pambtol.toFixed(2)} atm,`
        +`\nwhich means that ${this.pressureToDepth()}`;

};


tissu.init(0.79,4);// 0.79 atm est la pression partielle d'azote au niveau de mer
plongeur=Object.create(plonger);
plongeur.init(1000,10);
tissu.setNewP(plongeur);
tissu.pressureToDepth()
console.log(tissu.toString(plongeur));