
const plongeur=class
{
   constructor()
   {
       this.vitesse=10;
       this.te=10;
       this.tissus=null;
       this.depth=0;
   }

   setDepth()
   {
       this.depth=this.vitesse*this.te;
   }

   getDepth()
   {
       return this.depth;
   }

};

exports.plongeur=plongeur;