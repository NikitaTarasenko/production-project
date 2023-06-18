export function checkAmountOfCards() {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    let amountCards = 10;

    if (windowWidth > 2140) {
        if (windowHeight > 960) {
            amountCards = 21;
        } else if (windowHeight < 960) {
            amountCards = 14;
        } else if (windowHeight < 560) {
            amountCards = 7;
        } else {
            amountCards = 5;
        }
    } else if (windowWidth < 2140) {
        if (windowHeight > 960) {
            amountCards = 15;
        } else if (windowHeight < 960) {
            amountCards = 10;
        } else if (windowHeight < 560) {
            amountCards = 5;
        } else {
            amountCards = 5;
        }
    } else if (windowWidth < 1600) {
        if (windowHeight > 960) {
            amountCards = 12;
        } else if (windowHeight < 960) {
            amountCards = 8;
        } else if (windowHeight < 560) {
            amountCards = 4;
        } else {
            amountCards = 4;
        }
    } else if (windowWidth < 1330) {
        if (windowHeight > 960) {
            amountCards = 9;
        } else if (windowHeight < 960) {
            amountCards = 6;
        } else if (windowHeight < 560) {
            amountCards = 3;
        } else {
            amountCards = 3;
        }
    }

    return amountCards;
}
