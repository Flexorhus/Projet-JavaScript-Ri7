const prompt = require('prompt-sync')()



const guerrierDuFeu = {
    name: "Guerrier du Feu",
    pv: 100,
    attaques: [
        { nom: "Frappe Rapide", puissance: 10, chanceToucher: 0.50 },
        { nom: "Soin Léger", puissance: -15, chanceToucher: 0.33 },
        { nom: "Coup Puissant", puissance: 20, chanceToucher: 0.33 },
        { nom: "Frappe Dévastatrice", puissance: 30, chanceToucher: 0.25 },
    ]
};

const sombreLutin = {
    name: "Sombre Lutin",
    pv: 100,
    attaques: [
        { nom: "Frappe Rapide", puissance: 10, chanceToucher: 0.50 },
        { nom: "Soin Léger", puissance: -15, chanceToucher: 0.33 },
        { nom: "Coup Puissant", puissance: 20, chanceToucher: 0.33 },
        { nom: "Frappe Dévastatrice", puissance: 30, chanceToucher: 0.25 },
    ]
};

console.log("Combat entre le Guerrier du Feu et le Sombre Lutin !");

while (guerrierDuFeu.pv > 0 && sombreLutin.pv > 0) {
    console.log("PV du Guerrier du Feu : " + guerrierDuFeu.pv + " PV");
    console.log("PV du Sombre Lutin : " + sombreLutin.pv + " PV");

    console.log("Choisissez une attaque pour le Guerrier du Feu :");
    for (let i = 0; i < guerrierDuFeu.attaques.length; i++) {
        console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''");
        console.log((i + 1) + ".: " + guerrierDuFeu.attaques[i].nom + " ( Puissance : " + guerrierDuFeu.attaques[i].puissance + "," + " Précision : " + guerrierDuFeu.attaques[i].chanceToucher * 100 + "% )");
        console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''");
    }
    let choix = 0;
    while (!choix || choix < 1 || choix > guerrierDuFeu.attaques.length) {
        choix = prompt("Entrez le numéro de l'attaque (1-" + guerrierDuFeu.attaques.length + ") :");
        choix = parseInt(choix);
    }
    const attaqueGuerrier = guerrierDuFeu.attaques[choix - 1];


    const hasard = Math.random();
    if (hasard < attaqueGuerrier.chanceToucher) {
        if (attaqueGuerrier.puissance > 0) {
            sombreLutin.pv = sombreLutin.pv - attaqueGuerrier.puissance;
            console.log(attaqueGuerrier.nom + " inflige " + attaqueGuerrier.puissance + " PV de dégâts à " + sombreLutin.name + "!");
        } else {
            guerrierDuFeu.pv = guerrierDuFeu.pv + -attaqueGuerrier.puissance;
            console.log(attaqueGuerrier.nom + " soigne " + attaqueGuerrier.puissance + " PV à lui même !");
        }
    } else {
        console.log(attaqueGuerrier.nom + " rate sa cible ! ");
    }

    if (sombreLutin.pv <= 0){
        break;
    } 

    console.log("Tour du Sombre Lutin ...");

    const choixLutin = Math.floor(Math.random() * sombreLutin.attaques.length);
    const attaqueLutin = sombreLutin.attaques[choixLutin];

    const hasardLutin = Math.random();
    if (hasardLutin < attaqueLutin.chanceToucher) {
        if (attaqueLutin.puissance > 0) {
            guerrierDuFeu.pv = guerrierDuFeu.pv - attaqueLutin.puissance;
            console.log(attaqueLutin.nom + " inflige " + attaqueLutin.puissance + " PV de dégâts à " + guerrierDuFeu.name + "!");
        } else {
            sombreLutin.pv = sombreLutin.pv + -attaqueLutin.puissance;
            console.log(attaqueLutin.nom + " soigne " + attaqueGuerrier.puissance + " PV à lui même !");
        }
    } else {
        console.log(attaqueLutin.nom + " rate sa cible!");
    }
}

if (guerrierDuFeu.pv <= 0) {
    console.log("Le Guerrier du Feu est vaincu ! Le Sombre Lutin remporte le combat !");
} else {
    console.log("Le Sombre Lutin est vaincu ! Le Guerrier du Feu remporte le combat !");
}
