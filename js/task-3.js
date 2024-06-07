class StringBuilder {
    #value;
    constructor(initialValue) {
        this.#value = initialValue;
    }
    getValue() {
        return this.#value;
    }

    padEnd(str) {
        if (this.#isInputValueValid(str)) {
            this.#value += str;
        }
    }

    #isInputValueValid(str) {
        if (str != null && typeof str === 'string') {
            return true;
        } else {
            console.warn(`Input parameter: "str = ${str}" required String type`);
            return false;
        }
    }

    padStart(str) {
        if (this.#isInputValueValid(str)) {
            this.#value = str + this.#value;
        }
    }

    padBoth(str) {
        if (this.#isInputValueValid(str)) {
            this.#value = str + this.#value + str;
        }
    }
}


const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="