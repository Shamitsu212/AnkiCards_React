export interface AppData {
    selectedTrainIndex: number; // index in mixedCards:
    selectedEditCardId: number | null; // id 

    selectedMode: string;

    mixedCards: number[];
}