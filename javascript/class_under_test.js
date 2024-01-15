class ClassUnderTest{
    constructor(someVariable) {
        this._someVariable = someVariable;
    }

    equals(other) {
        return this._someVariable == other._someVariable;
    }
}

module.exports = {ClassUnderTest}