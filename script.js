//your JS code here. If required.
// Create the student object with a name property
const student = {
  name: "John"
};

// Add a method to the Object prototype to return all keys of the object
Object.prototype.getKeys = function() {
  return Object.keys(this);
};

// Example usage
const keys = student.getKeys();
console.log(keys); // Output: ["name"]

