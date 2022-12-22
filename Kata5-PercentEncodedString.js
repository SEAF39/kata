const urlEncode = function(text)
// Put your solution here
{
  return encodeURIComponent(text);
};

console.log(urlEncode("Lighthouse Labs"));
// Output: "Lighthouse%20Labs"

console.log(urlEncode(" Lighthouse Labs "));
// Output: "%20Lighthouse%20Labs%20"

console.log(urlEncode("blue is greener than purple for sure"));
// Output: "blue%20is%20greener%20than%20purple%20for%20sure"