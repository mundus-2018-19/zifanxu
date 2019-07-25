const plongee=class
{
    constructor()
    {
        this.p0=0.79;
        this.pcomp=this.p0;
        this.pn=null;
    }

    setPn( depth )
    {
        this.pn=0.79*((10.34+depth)/10.34);
    }

    setNewP( te , tht )
    {
        var p0=this.pcomp;
        var index=(-te)/tht;
        this.pcomp=p0+(this.pn+p0)*(1-Math.pow(2,index));
    }

    getPcomp()
    {
        return this.pcomp;
    }
};

exports.plongee=plongee;