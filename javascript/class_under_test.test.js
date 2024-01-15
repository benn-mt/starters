const { ClassUnderTest } = require("./class_under_test");

describe('Class Under Test...', () => {
    test('is equal to another class under test when initiated with the same data', () =>{
        let myClass = new ClassUnderTest(1996);
        let myOtherClass = new ClassUnderTest(1996);
        expect(myClass.equals(myOtherClass)).toEqual(true);
        expect(myOtherClass.equals(myClass)).toEqual(true);
    })

    test('is not equal to another class under test when initiated with different data', () =>{
        let myClass = new ClassUnderTest(304);
        let myOtherClass = new ClassUnderTest(123);
        expect(myClass.equals(myOtherClass)).toEqual(false);
        expect(myOtherClass.equals(myClass)).toEqual(false);
    })
})