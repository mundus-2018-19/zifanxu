const Tissu = require('./tissu').tissu;

const plongeur=class
{
    constructor()
    {
        this.vitesse=1;
        this.te=0;
        this.corps=[];
        this.setCorps();
        this.depth=0;
        this.flag=0
    }

    setCorps()//just les 5 première pour l'instant
    {
        const tissu1=new Tissu(4);
        const tissu2=new Tissu(8);
        const tissu3=new Tissu(12.5);
        const tissu4=new Tissu(18.5);
        const tissu5=new Tissu(27);
        this.corps.push(tissu1);
        this.corps.push(tissu2);
        this.corps.push(tissu3);
        this.corps.push(tissu4);
        this.corps.push(tissu5);
    }

    flagOn()
    {
        this.flag=0;
    }

    flagOff()
    {
        this.flag=1;
    }

    counting()
    {
        if (this.flag===0) {
            console.log(`${this.te}`);
            this.te++;
            this.setDepth();
            setTimeout(() => {
                this.counting();
            }, 1000)
        }
        else
        {
            console.log(`counting is stopped, `);
            console.log(`te : ${this.te}  depth : ${this.depth} vitesse : ${this.vitesse}`);
        }
    }

    changeVitess(vitesse)
    {
        this.vitesse=vitesse;
    }

    stayTime(temps)
    {
        this.te+=parseInt(temps);
        this.pRefresh(temps,this.getDepth());
    }

    setDepth()
    {
        this.depth+=parseInt(this.vitesse);
        var profondeur=this.getDepth()-0.5*parseInt(this.vitesse);
        this.pRefresh(1,parseInt(profondeur));
    }

    getDepth()
    {
        return this.depth;
    }

    pToDepth(pambtol)
    {
        var depth = ((10.34*pambtol)/0.79)-10.34;
        if (depth<=0.79)
        {
            return 'sealevel';
        }
        else
        {
            return `${depth.toFixed(2)} m under water`;
        }
    }

    pRefresh(temps,profondeur)
    {
        this.corps.forEach(function (item,index) {
            item.setNewP(temps,profondeur);
        });
    }

    checkCorps()
    {
        var pMin=0.79;
        var profondeur=this.getDepth();
        var temps=this.te
        console.log(`now he is ${this.getDepth()} m under water`);
        this.corps.forEach(function (item,index) {
            item.setNewP(temps,profondeur);
            if (item.getPambtol()>0.79)
            {
                pMin=item.getPambtol();
            }
            console.log(`tissu_`+index+' : '+ item.getEtat()
                +`Pambtol : ${item.getPambtol().toFixed(2)}`);
        });
        console.log(`so the pMin is ${pMin.toFixed(2)}, `+`meaning he can go up to ${this.pToDepth(pMin)}.\n`);
    }
};

exports.plongeur=plongeur;
/*
const sam=new plongeur();
sam.checkCorps();
*/