import {ExercisesList} from "./exercises-list";
import {HttpService} from "./http.service";


export class App {
    constructor(selector) {
        this.selector = document.querySelector(selector);
        this.progress = document.querySelector("#progress");
    }

    async init() {
        this.vocabulary = await this.loadVocabulary();
        this.exercises = new ExercisesList(this.vocabulary);
        this.next();
    }

    async loadVocabulary() {
        return JSON.parse(await HttpService.get("./vocabulary.json"));
    }

    next() {
        const exercise = this.exercises.next();
        this.setCurrentExercise(exercise);
        this.selector.innerHTML = "";
        this.selector.appendChild(exercise.createExerciseDOMElement());
        this.progress.setAttribute("value", this.exercises.percentageOfCompletion());
        console.log(this.exercises.percentageOfCompletion())
    }

    setCurrentExercise(exercise) {
        this.exercise = exercise;
        this.exercise.onCheck((result) => {
            if (result) {
                this.next();
            }
        })
    }
}
