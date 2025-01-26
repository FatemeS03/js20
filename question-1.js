/*
   what is the difference between an asynchronous function and a synchronous function?
*/

// ! Answer

// The main difference between asynchronous and synchronous functions lies in how they handle operations that take time to complete, such as reading a file, making a network request, or querying a database

// Synchronous Function:
// 1-Blocking: A synchronous function blocks the execution of further code until it completes. The program waits for the current function to finish before moving on to the next line of code.
// 2-Execution Flow: The functions are executed one after another in sequence, and the program doesn’t continue to the next step until the current step is done.
     
//Asynchronous Function:
//1- Non-blocking: An asynchronous function does not block the execution of further code. Instead, it allows the program to continue executing other tasks while waiting for the operation to complete.
// 2- Execution Flow: It often works with callbacks, promises, or async/await syntax, and once the operation is finished, it typically triggers some kind of callback or resolves a promise to handle the result.
