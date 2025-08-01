// What is a callback function?
// A callback function is an anonymous function (no name) that is passed as an argument to another function.

// What is Synchronous and Asynchronous code?
// Synchronous stands for events occuring at the same time. In programming, synchronous code is executed line by line in order.
// Synchronous code is blocking, meaning that it will block further execution of code until it is done with the current line.

// Asynchronous ccode stands for events occuring at different times. In programming, asynchronous code is executed out of order and can be executed at the same time.
// Asynchronous code is non-blocking, meaning that it will not block further execution of code while running in the background.

console.log("Before");

function getUser(id, callbackFunctionToCalled) {
  // setTimeout is a function that operates asynchronously
  // Simulate a database call using setTimeout
  setTimeout(() => {
    // mock database call
    console.log("Retrieving user with id: " + id);
    // get user from database
    var user = { id: id, githubUsername: "ShareghYusefi" };
    // Once we have our user from the database, we call the callback function and give it the result for processing.
    callbackFunctionToCalled(user);
  }, 2000);
}

// A callback function takes the result of an asynchronous operation and does something with it.
// In this case, we are passing a function that takes a user object and logs it to the console.
getUser(1, (user) => {
  console.log("User: ", user);
});
console.log("After");
