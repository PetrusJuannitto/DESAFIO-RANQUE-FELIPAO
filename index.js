let performance = 25;
let win = 55
let defeat = 13

function winRate (win, defeat) {
	return win - defeat;
}		

function rank(performance) {
    if (performance < 10) {
        return "Iron";
    } else if (performance >= 10 && performance < 21) {
        return "Bronze";
    } else if (performance >= 21 && performance < 51) {
        return "Silver";
    } else if (performance >= 51 && performance < 81) {
        return "Gold";
    } else if (performance >= 81 && performance < 91) {
        return "Diamond";
    } else if (performance >= 91 && performance < 101) {
        return "Legendary";
    } else if (performance >= 101) {
        return "Imortal";
    }
}

let wr = winRate (win, defeat);
let pr = rank (performance);

console.log ("O Herói tem de saldo de vitória de " + wr + " e está no ranque " + pr)