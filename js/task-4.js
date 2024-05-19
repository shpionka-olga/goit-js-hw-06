'use strict';
function getShippingCost(country) {
    const mapContryCost = new Map();

    mapContryCost.set('China', 100);
    mapContryCost.set('Chile', 250);
    mapContryCost.set('Australia', 170);
    mapContryCost.set('Jamaica', 120);

    const iteratorContryCost = mapContryCost.keys();

    switch (country) {
        case iteratorContryCost.next().value:
        case iteratorContryCost.next().value:
        case iteratorContryCost.next().value:
        case iteratorContryCost.next().value:
            return `Shipping to ${country} will cost ${mapContryCost.get(country)} credits`;
        default:
            return `Sorry, there is no delivery to your country`;
    }

}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"