import {domElCreate} from "./helpers";

const wrapperTemplate = `<div class="columns is-centered">
    <div class="column is-narrow">
        <form class="form-card box">
            <div class="media-content">
            </div>
        </form>
    </div>
</div>
`;

export class Exercise {
    constructor({word, translate}) {
        this.word = word;
        this.translate = translate;
        this.listeners = [];
    }

    onCheck(listener) {
        this.listeners.push(listener);
    }

    createExerciseDOMElement() {
        const main = this.createWrapper();
        const header = this.createHeader();
        const control = this.createControl();

        const mediaContent = main.querySelector(".media-content");
        mediaContent.appendChild(header);
        mediaContent.appendChild(control);

        return main;
    }

    createWrapper() {
        const div = domElCreate('div');
        div.innerHTML = wrapperTemplate.trim();
        return div;
    }

    createHeader() {
        const content = this.createWrapElement("content", "has-text-centered");
        const wrapper = this.createWrapElement("field");

        content.appendChild(this.createTitle());
        content.appendChild(this.createTagWithWord());
        wrapper.appendChild(content);

        return wrapper;
    }

    createControl() {
        const inputWrapper = this.createWrapElement("control", "is-expanded");
        const buttonWrapper = this.createWrapElement("control");
        const field = this.createWrapElement("field", "has-addons");

        inputWrapper.appendChild(this.createInput());
        buttonWrapper.appendChild(this.createButton());

        field.appendChild(inputWrapper);
        field.appendChild(buttonWrapper);

        return field;
    }

    createWrapElement(...classList) {
        const field = domElCreate("div");
        field.classList.add(...classList);
        return field;
    }

    createTitle() {
        const title = domElCreate("h1");
        title.innerText = "Do translate";
        return title;
    }

    createInput() {
        const input = domElCreate("input");
        input.classList.add("input");
        input.type = "text";
        input.placeholder = "write translate";
        this.input = input;
        return input;
    }

    createButton() {
        const button = domElCreate("button");
        button.type = "button";
        button.innerText = "check";
        button.classList.add("button", "is-primary");
        button.addEventListener("click", () => this.check());
        return button;
    }

    createTagWithWord() {
        const tagClasses = ["tag", "is-info", "is-large"];
        const tag = domElCreate("span");
        tag.innerText = this.word;
        tag.classList.add(...tagClasses);
        return tag;
    }

    check() {
        const result = this.input.value === this.translate;
        alert(result ? "верно" : `не верно!верно =>  ${this.translate}`);
        this.toNotifyListeners(result)
    }

    toNotifyListeners(result) {
        this.listeners.forEach((listener) => listener(result));
    }
}
