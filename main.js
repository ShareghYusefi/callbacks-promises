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
  }, 500);
}

// *** A callback function takes the result of an asynchronous operation and does something with it. ***
// In this case, we are passing a function that takes a user object and logs it to the console.
getUser(1, (user) => {
  console.log("User: ", user);
});
console.log("After");

// What is callback hell?
// Callback hell is when you have multiple nested callback functions.
function step1(callback) {
  setTimeout(() => {
    console.log("Step 1 Complete.");
    callback();
  }, 1000);
}

function step2(callback) {
  setTimeout(() => {
    console.log("Step 2 Complete.");
    callback();
  }, 1000);
}

function step3(callback) {
  setTimeout(() => {
    console.log("Step 3 Complete.");
    callback();
  }, 1000);
}

step1(() => {
  step2(() => {
    step3(() => {
      console.log("All Steps completed!");
    });
  });
});

// What is a Promise?
// A promise is an object that represents the eventual completion (or failture) of an asynchronous operation.
// A primise can be in one of three states: pending, fulfilled, or rejected.
// A new promise starts off in a pending state.

console.log("Before Promise");

function getUserPromise(id) {
  return new Promise((resolve, reject) => {
    // Simulate a database call using setTimeout
    setTimeout(() => {
      // mock database call
      console.log("Retrieving user with id: " + id);
      // get user from database
      var user = { id: id, githubUsername: "ShareghYusefi" };

      // if we have a user
      if (user) {
        // we resolve the promise and return the user object -> fulfilled
        resolve(user);
      } else {
        // else we reject the promise -> rejected
        reject(new Error("User not found."));
      }
    }, 4000);
  });
}

getUserPromise(2)
  .then((user) => {
    console.log("User: ", user);
  })
  .catch((error) => {
    console.log(error);
  });

console.log("After Promise");
