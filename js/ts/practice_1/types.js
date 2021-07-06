var isFetching = true;
var isLoading = false;
var int = 42;
var float = 3.2;
var message = 'Hello TS';
var numberArray = [1, 1, 2, 3, 5, 8, 13];
var numberArray2 = [1, 1, 2, 3, 5, 8, 13];
var numberArray3 = [123, 23, 1, 2, 4, 1, 4];
var some = ['some', 'some2', 'one more'];
var words = ['Hello', 'Typescript'];
// Tuple
var contact = ['Viktor', 380661424668];
var someTMP = [221, false];
// Any
var variable = 42;
variable = 'New String';
// ====
var sayHello = function (name) {
    console.log("Hello " + name + ", i glad you here for me!");
};
function sayMyName(name) {
    console.log(name);
}
sayMyName('Alucard');
sayHello('Viktor');
// Never
function throwError(message) {
    throw new Error(message);
}
var login = 'admin';
var id1 = 123;
var id2 = 'some';
