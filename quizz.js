const prompt = require('prompt-sync')()

const questions = [
    {
        question: "Quel français est le meilleure buteur de l'histoire en coupe du monde de football ?",
        reponses: ["Zinedine Zidane", "Thierry Henry", "Just Fontaine", "Kylian Mbappé"],
        bonneReponse: 2,
        points: 4,
    },
    {
        question: "Quel est la capitale de la Finlande ?",
        reponses: ["Oslo", "Helsinki", "La Havane", "Paris"],
        bonneReponse: 1,
        points: 4
    },
    {
        question: "Quel monument ne fait pas partie des 7 merveilles du monde ?",
        reponses: ["Taj Mahal en Inde", "Grande Muraille de Chine","Le Colisée en Italie", "Tour Eiffel en France"],
        bonneReponse: 3,
        points: 4
    },
    {
        question: "Quel est le fleuve le plus long du monde?",
        reponses: ["Le Nil", "L'Amazone","Le Brazos", "La Seine"],
        bonneReponse: 1,
        points: 4
    },
    {
        question: "Quel est le tableau le plus cher du monde ?",
        reponses: ["La Jaconde", "Salvator Mundi", "Le Rêve", "Les Femmes d'Alger"],
        bonneReponse: 1,
        points: 4
    }
];

let score = 0;

function projetQuizz(question) {
    console.log(question.question);
    for (let i = 0; i < question.reponses.length; i++) {
        console.log((i + 1) + " : " + question.reponses[i]);
    }
    console.log("Valeur : " + question.points + " points par bonne réponse .");
    const rep = prompt("Entrez le numéro de votre choix : ");
    if (rep - 1 === question.bonneReponse) {
        score = score + question.points;
        console.log("Correct ! Vous avez gagné " + question.points + " points.");
    } else {
        console.log("Erreur ! La bonne réponse était " + question.reponses[question.bonneReponse]+ ".");
    }
}

for (let i = 0; i < questions.length; i++) {
    projetQuizz(questions[i]);
}

console.log("Vous avez obtenu " + score + " points sur 20 points possibles. ");
if (score > 14) {
    console.log("BRAVO vous êtes le meilleur !!!");
} else if (score > 7) {
    console.log("Mouai tu peux mieux faire !!! ");
} else {
    console.log("Tu dois te ressaisir petit padawan");
}

