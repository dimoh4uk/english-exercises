import {Exercise} from "./exercise";
import {getRandomIndex} from "./helpers";

export class ExercisesList {
    constructor(vocabulary) {
        this.vocabulary = vocabulary;
        this.keys = Object.keys(this.vocabulary);
        this.allCuantity = this.keys.length;
    }

    createExerciseConfig(key) {
        return {
            word: key,
            translate: this.vocabulary[key]
        };
    }

    next() {
        if (this.keys.length === 0) throw new Error("Exercise is empty");
        const index = getRandomIndex(0, this.keys.length - 1);
        const key = this.keys.splice(index, 1)[0];
        const config = this.createExerciseConfig(key);
        return new Exercise(config);
    }

    percentageOfCompletion() {
        const percent =  (this.allCuantity -this.keys.length) / this.allCuantity * 100;

        return Math.floor(percent);
    }
}

