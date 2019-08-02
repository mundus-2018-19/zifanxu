const readline = require('readline');
const Plongeur = require('./plongeur').plongeur;

function start(plongeur)
{
    console.log('\nGive an order\ns : start\np : pause\ne : end');
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.on('line', function(line){
        switch(line.trim()) {
            case 's':
                console.log('counting!');
                plongeur.flagOn();
                plongeur.counting();
                break;
            case 'p':
                rl.pause();
                break;
            case 'e':
                rl.close();
                break;
            default:
                console.log(`${line.trim()} is a wrong commend`);
                break;
        }
    });
    rl.on('pause',function()
    {
        // console.log('pause');
        plongeur.flagOff();
        setTimeout(() => {
            rl.question('\nwhat do you want？ \n1 : change speed \n2 : stay \n3 : check body\n4 : nothing\ne : end\n', (answer) => {
                switch (answer) {
                    case '1':
                        rl.question('you\'ve chosen 1,what speed do you want?\n', (speed) => {
                            console.log(`changing speed：${speed}...\n`);
                            plongeur.changeVitess(speed);
                            console.log('Give an order\ns : start\np : pause\ne : end');
                        });
                        break;
                    case '2':
                        rl.question('you\'ve chosen 2, how long do you want to stay\n', (time) => {
                            console.log(`staying for ：${time}...\n`);
                            plongeur.stayTime(time);
                            console.log('Give an order\ns : start\np : pause\ne : end');
                        });
                        break;
                    case '3':
                        console.log('you\'ve chosen 3, we are checking body...\n');
                        plongeur.checkCorps();
                        break;
                    case '4':
                        console.log('you\'ve chosen 4, we do nothing, plunge continues\n');
                        plongeur.flagOn();
                        plongeur.counting();
                        break;
                    case 'e':
                        rl.close();
                        break;
                    default:
                        console.log(`${answer} is a wrong commend, plunge continue`);
                        console.log('Give an order\ns : start\np : pause\ne : end');
                        break;
                }
            });
        }, 750);
        rl.resume();
    });
    rl.on('close', function()
    {
        console.log('bye bye');
        process.exit(0);
    });
}


console.log('begin');
const sam=new Plongeur();
start(sam);
