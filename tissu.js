const tissu = class
{
    constructor( tht )
    {
        this.nom='sample';
        this.etat='Good';
        this.tht=tht;
        this.pambtol=null;
        this.p0=0.79;
        this.pcomp=this.p0;
        this.pn=null;
    }

    setPambtol()
    {
        var a=2*Math.pow(this.tht,-1/3);
        var b=1.005-Math.pow(this.tht,-1/2);
        this.pambtol=(this.pcomp-a)*b;
    }

    getPambtol()
    {
        return this.pambtol;
    }

    getTht()
    {
        return this.tht
    }

    setEtat()
    {
        if(this.pcomp>1.5*this.pambtol)
        {
            this.etat='good';
        }
        else if (this.pcomp>=this.pambtol)
        {
            this.etat='not so good';
        }
        else
        {
            this.etat='dying soon';
        }
    }

    getEtat()
    {
        return `${this.nom} is feeling ${this.etat}.\n`;
    }

    setPn( depth )
    {
        this.pn=0.79*((10.34+depth)/10.34);
    }

    setNewP(te,depth)
    {
        this.setPn(depth);
        var p0=this.pcomp;
        var index=(-te)/this.tht;
        this.pcomp=p0+(this.pn-p0)*(1-Math.pow(2,index));
        this.setPambtol()
        this.setEtat();
    }

    getPcomp()
    {
        return this.pcomp;
    }
};

exports.tissu = tissu;
/*
tissuu=new tissu(4);
tissuu.setNewP(5000,500);
console.log(tissuu.pn);
console.log(tissuu.getEtat()+tissuu.getPambtol()+'  '+tissuu.pcomp);
*/