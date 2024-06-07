const prompt = require('prompt-sync')()
const respOui = "oui"
const respNon = "non"
let resp = ""

console.log("Bienvenu dans le monde merveilleux de OuI Non");


resp = prompt("Tu es le plus chanceux du monde, Veux tu savoir pourquoi espèce de BG ? " + respOui + " ou " + respNon + " : ")
while (resp != 'oui' && resp != 'non') {
    console.log("Erreur !!! Veuillez choisir la réponse oui ou la réponse non.");
    resp = prompt("Veuillez choisir entre " + respOui + " ou " + respNon)
}

if (resp == "oui") {
    console.log("Excellent choix, Maintenant ta vie va changer, et tu sais pourquoi ? Car je t'offre la possibilité de changer le monde.") + "\n";
    resp = prompt("Souhaites-tu avoir le pouvoir de VOLER (1) ou de te TÉLÉPORTER comme Sangoku(2).  ");
    while (resp != '1' && resp != '2') {
        console.log("Erreur !!! Veuillez choisir la réponse 1 ou la réponse 2.");
        resp = prompt("Veuillez choisir entre " + 1 + " ou " + 2);
    }
    if (resp == 1) {
        console.log("Tu as choisi le pouvoir de VOLER, bien joué maintenant sache que tu es vulnérable face au dragon ");
        resp = prompt("Souhaites-tu devenir INVISIBLE (1) ou d'etre INVINCIBLE (2) ? ");
        //while
        while (resp != '1' && resp != '2') {
            console.log("Erreur !!! Veuillez choisir la réponse 1 ou la réponse 2.");
            resp = prompt("Veuillez choisir entre " + 1 + " ou " + 2);
        }
        if (resp == 1) {
            console.log("Nice, maintenant tu es INVISIBLE et tu peux VOLER .. \n \n Sache Viserion peut toujours te sentir !! IL TE TRAQUE ");
            resp = prompt("Que vas tu faire ??? rester INVISIBLE et chialler dans ton froc (1) ou d'etre INVINCIBLE (2).  ");
            while (resp != '1' && resp != '2') {
                console.log("Erreur !!! Veuillez choisir la réponse 1 ou la réponse 2.");
                resp = prompt("Veuillez choisir entre " + 1 + " ou " + 2);
            }
            if (resp == 1) {
                console.log("PLEURS PLEURS ca fait di bieng, tu veux des mouchoirs ");

            } else if (resp == 2) {
                console.log("AHAH Maintenant tu es INVINCIBLE et tu peux VOLER à ta guise, byebye Viserion");
            }
        } else if (resp == 2) {
            console.log("AHAH Maintenant tu es INVINCIBLE et tu peux VOLER à ta guise, byebye Viserion");
        }


    } else if (resp == 2) {
        console.log("Tu as choisi le pouvoir de te TÉLÉPORTER n'importe où dans le monde c'est cool heiiiin .. attention car rien n'est pas acté \n ");
        resp = prompt("Souhaites-tu profiter de ton pouvoir et te TÉLÉPORTER n'importe où dans le monde (1) ou d'être INVINCIBLE comme SANGOKU (2). ");

        while (resp != '1' && resp != '2') {
            console.log("Erreur !!! Veuillez choisir la réponse 1 ou la réponse 2.");
            resp = prompt("Veuillez choisir entre " + 1 + " ou " + 2);
        }
        if (resp == 1) {
            console.log("GigaNice, maintenant que tu souhaites te TÉLÉPORTER n'importe où dans le monde ");
            resp = prompt("Que va tu faire ? ? Ou souhaites-tu aller ??  Ri7  (1) ou aller au Maldives (2). ?");
            //while 
            while (resp != '1' && resp != '2') {
                console.log("Erreur !!! Veuillez choisir la réponse 1 ou la réponse 2.");
                resp = prompt("Veuillez choisir entre " + 1 + " ou " + 2);
            }
            if (resp == 1) {
                console.log("Ri7, tu es deja à l'école laAaAaA tronche de bacon ");

            } else if (resp == 2) {
                resp = prompt(" Choix Interessant, mais est ce que tu as prévu ton masque de plongé et ton tuba ? " + respOui + " ou " + respNon + " : ")
                if (resp == "oui") {
                    console.log("Bravo tu vas pouvoir contempler les plus beaux poissons du monde et SURTOUT NAGER AVEC EUX, spéctacle garanti donc profites en !!! ")
                } else {
                    console.log("Bravo tu vas pouvoir contempler le TSUNAMI de plus pres et te noyer avec les plus beaux poissons du monde donc profites en !!!  ")
                }
            }
        }

        else if (resp == 2) {
            console.log("Molo champion tu n'es pas SANGOKU et nous ne sommes pas dans DBZ \n" + "Devenir un SuperSAIEN, ça se mérite");
            resp = prompt(" Le mérites tu ? " + respOui + " ou " + respNon + " : ")
            while (resp != 'oui' && resp != 'non') {
                console.log("Erreur !!! Veuillez choisir la réponse oui ou la réponse non.");
                resp = prompt("Veuillez choisir entre " + respOui + " ou " + respNon)
            }
            if (resp == 1) {
                console.log("Ri7, tu es deja à l'école laAaAaA tronche de bacon ");

            } else if (resp == 2) {
                resp = prompt(" Choix Interessant, mais est ce que tu as prévu ton masque de plongé et ton tuba ? " + respOui + " ou " + respNon + " : ")
                while (resp != 'oui' && resp != 'non') {
                    console.log("Erreur !!! Veuillez choisir la réponse oui ou la réponse non.");
                    resp = prompt("Veuillez choisir entre " + respOui + " ou " + respNon)
                }
                if (resp == "oui") {
                    console.log("Bravo tu vas pouvoir contempler les plus beaux poissons du monde et SURTOUT NAGER AVEC EUX, spéctacle garanti donc profites en !!! ")
                } else {
                    console.log("Bravo tu vas pouvoir contempler le TSUNAMI de plus pres et te noyer avec les plus beaux poissons du monde donc profites en !!!  ")
                }
            }
            if (resp == "oui") {
                console.log("Retournes dans la salle du temps GrandPère, NO PAIN NO GAIN !!! ")
            } else {
                console.log(" C'est bien tu es digne et tu mérites d'avoir un haricot magique !!! en attendant retourne t'entrainer...")
            }
        }
    }

} else if (resp == "non") {
    console.log("Quel dommage ! tu avais la possibilité d'avoir des pouvoirs insoupçonné !!! A Bientot pour de nouvelle AvEnTuRe.:!");
}
