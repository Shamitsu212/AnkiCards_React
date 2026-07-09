import { store } from "../store/store"

export function exportCards() {

    const cards = store.getState().cards;

    const json = JSON.stringify(cards, null, 2);

    const blob = new Blob([json], {
        type: "application/json",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "cards.json";
    a.click();

    URL.revokeObjectURL(url);
}