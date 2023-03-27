// import React from "react";

const choice = (items) => {
    const randIdx = Math.floor(Math.random() * items.length);
    return items[randIdx];
}

const remove = (items, item) => {
    const idx = items.indexOf(item);
    if (idx === -1) return undefined;
    items.splice(idx, 1);
    return items;
}

export { choice, remove };