const byteSize = (str) => {
  // Create a Blob object with the string data
  const blob = new Blob([str]);

  // Retrieve the size of the Blob in bytes
  const byteLength = blob.size;

  // Return the size in bytes
  return byteLength;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
