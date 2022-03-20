// regex atualizado 19/01/2022  
const acceptedCreditCards = {
    Amex: /^3[47][0-9]{13}$/,
    Aura: /^((?!504175))^((?!5067))(^50[0-9])/,
    BaneseCard: /^636117/,
    Cabal: /(60420[1-9]|6042[1-9][0-9]|6043[0-9]{2}|604400)/,
    Diners: /(36[0-8][0-9]{3}|369[0-8][0-9]{2}|3699[0-8][0-9]|36999[0-9])/,
    Discover: /^6(?:011|5[0-9]{2})[0-9]{12}/,
    Elo: /^4011(78|79)|^43(1274|8935)|^45(1416|7393|763(1|2))|^50(4175|6699|67[0-6][0-9]|677[0-8]|9[0-8][0-9]{2}|99[0-8][0-9]|999[0-9])|^627780|^63(6297|6368|6369)|^65(0(0(3([1-3]|[5-9])|4([0-9])|5[0-1])|4(0[5-9]|[1-3][0-9]|8[5-9]|9[0-9])|5([0-2][0-9]|3[0-8]|4[1-9]|[5-8][0-9]|9[0-8])|7(0[0-9]|1[0-8]|2[0-7])|9(0[1-9]|[1-6][0-9]|7[0-8]))|16(5[2-9]|[6-7][0-9])|50(0[0-9]|1[0-9]|2[1-9]|[3-4][0-9]|5[0-8]))/,
    FortBrasil: /^628167/,
    GrandCard: /^605032/,
    Hipercard: /^606282|^3841(?:[0|4|6]{1})0/,
    JCB: /^(?:2131|1800|35\d{3})\d{11}/,
    Mastercard: /^((5(([1-2]|[4-5])[0-9]{8}|0((1|6)([0-9]{7}))|3(0(4((0|[2-9])[0-9]{5})|([0-3]|[5-9])[0-9]{6})|[1-9][0-9]{7})))|((508116)\\d{4,10})|((502121)\\d{4,10})|((589916)\\d{4,10})|(2[0-9]{15})|(67[0-9]{14})|(506387)\\d{4,10})/,
    PersonalCard: /^636085/,
    Sorocred: /^627892|^636414/,
    Valecard: /^606444|^606458|^606482/,
    Visa: /^4[0-9]{15}/,
    Maestro: /^(5018|5081|5044|5020|5038|603845|6304|6759|676[1-3]|6799|6220|504834|504817|504645)[0-9]{8,15}$/
}

const validateCard = (value) => {
    // remove all non digit characters
    var value = value.replace(/\D/g, '');
    var sum = 0;
    var shouldDouble = false;
    // loop through values starting at the rightmost side
    for (var i = value.length - 1; i >= 0; i--) {
        var digit = parseInt(value.charAt(i));

        if (shouldDouble) {
        if ((digit *= 2) > 9) digit -= 9;
        }

        sum += digit;
        shouldDouble = !shouldDouble;
    }
    
    var valid = (sum % 10) == 0;
    var accepted = false;
    
    // loop through the keys (visa, mastercard, amex, etc.)
    Object.keys(acceptedCreditCards).forEach(function(key) {
        var regex = acceptedCreditCards[key];
        if (regex.test(value)) {
            accepted = key;
        }
    });
    
    return valid && accepted;
}

const validateCVV = (card, cardCVV) => {

    const creditCard = card.replace(/\D/g, '');
    const cvv = cardCVV.replace(/\D/g, '');

    if ((acceptedCreditCards.Amex).test(creditCard)) {
      if((/^\d{4}$/).test(cvv))
        return true;
    } else if ((/^\d{3}$/).test(cvv)) {
      return true;
    }
    return false;

}

export {
    acceptedCreditCards,
    validateCard,
    validateCVV
}