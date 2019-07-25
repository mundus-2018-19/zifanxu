const tissu = class
{
    constructor()
    {
        this.nom='sample 1';
        this.etat='Good';
        this.tht=4;
        this.pambtol=null;
    }

    setPambtol(pcomp)
    {
        var a=2*Math.pow(this.tht,-1/3);
        var b=1.005-Math.pow(this.tht,-1/2);
        this.pambtol=(pcomp-a)*b;
    }

    getPambtol()
    {
        return this.pambtol;
    }

    getTht()
    {
        return this.tht
    }

    setEtat( pcomp )
    {
        if(pcomp>1.5*this.pambtol)
        {
            this.etat='good';
        }
        else if (pcomp>=this.pambtol)
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
};

exports.tissu = tissu;
