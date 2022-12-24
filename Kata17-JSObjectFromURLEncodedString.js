const urlDecode = function(text) {
  // Split the text into an array of key-value pairs
  const pairs = text.split('&');

  // Create an object to store the decoded key-value pairs
  const decoded = {};

  // Iterate over the pairs
  for (const pair of pairs) {
    // Split the pair into a key and a value
    const [key, value] = pair.split('=');

    // Decode the key and value and add them to the decoded object
    decoded[decodeURIComponent(key)] = decodeURIComponent(value);
  }

  // Return the decoded object
  return decoded;
};


console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);