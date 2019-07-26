const Tissu = require('./tissu').tissu;

const plongeur=class
{
   constructor()
   {
       this.vitesse=10;
       this.te=10;
       this.corps=new Array();
       this.setCorps();
       this.depth=0;
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

   setDepth()
   {
       this.depth=this.vitesse*this.te;
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

   checkCorps(pcomp)
   {
       var pMin=0.79;
       this.corps.forEach(function (item,index) {
           item.setPambtol(pcomp);
           item.setEtat(pcomp);
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

const sam=new plongeur();
sam.checkCorps(1.5);
sam.checkCorps(15);// un autre example
