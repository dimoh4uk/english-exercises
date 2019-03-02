export function getRandomIndex(from, to) {
    return Math.floor(from + Math.random() * (to + 1 - from));
}

export function domElCreate(el) {
    return document.createElement(el);
}
