const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 42;
const float: number = 3.2;


const message: string = 'Hello TS';

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13];
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13];

const words: string[] = ['Hello', 'Typescript'];

// Tuple
const contact: [string, number] = ['Viktor', 380661424668];

// Any
let variable: any = 42;
variable = 'New String';


// ====
function sayMyName(name: string): void {
   console.log(name);
}

sayMyName('Alucard');

// Never

function throwError(message: string): never {
   throw new Error(message);
}

// Type
type Login = string;

const login: Login = 'admin';

type ID = string | number;
const id1: ID = 123;
const id2: ID = 'some';

type SomeType = string | null | undefined;
