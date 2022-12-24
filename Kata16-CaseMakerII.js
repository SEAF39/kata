const camelCase = function(input,pascal) {
  let words = input.split(' ');
  //Capitalize all but the first word
  for (let i = 0; i < words.length; i++){
    if ((i > 0) || pascal){
      words[i]=words[i][0].toUpperCase() + words[i].slice(1);
    } else {
      words[i]=words[i].toLowerCase();
    }
  }
  return words.join('');
};

const snakeCase = function(input,kebab){
  let words = input.split(' ');
  let t;
  kebab ? t = '-' : t = '_';
  return words.join(t);
}

const titleCase = function(input,upper){
  let words = input.split(' ');
  for (let i=0; i<words.length; i++){
    if (upper){
      words[i]=words[i].toUpperCase();
    } else {
      words[i]=words[i].substr(0,1).toUpperCase()+words[i].substr(1);
    }
  }
  return words.join(' ');
}

const vowelCase = function(input,consonant){
  let output = "";
  let vowels = ["a", "e", "i", "o", "u"];
  for (char of input){
    if ((vowels.indexOf(char) !== -1 && !consonant) || (vowels.indexOf(char) === -1 && consonant)) {
      output += char.toUpperCase();
    } else {
      output += char;
    }
  }  
  return output;
}

const makeJobList = function(cse){
  let cases = [];
  if (typeof(cse)==="string"){
    cases.push(cse);
  } else {
    cases = cse;
  }
  return cases;
}

const makeCase = function(input, cse) {
  // Put your solution here
  let cases = makeJobList(cse);
  let output = input;
  for (c of cases){
    switch (c){
      case "camel":
        output = camelCase(output);
        break;
      case "pascal":
        output = camelCase(output,true);
        break;
      case "snake":
        output = snakeCase(output);
        break;
      case "kebab":
        output = snakeCase(output,true);
        break;
      case "title":
        output = titleCase(output);
        break;
      case "upper":
        output = titleCase(output,true);
        break;
      case "vowel":
        output = vowelCase(output,false);
        break;
      case "consonant":
        output = vowelCase(output,true);
        break;
      }
  }
  return output;
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));


/*
Expected output:

thisIsAString
ThisIsAString
this_is_a_string
this-is-a-string
This Is A String
thIs Is A strIng
THiS iS a STRiNG
THIS_IS_A_STRING

*/