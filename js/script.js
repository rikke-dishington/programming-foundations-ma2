// Question 1
var pets = [
  {
    type: "cat",
    age: 5.5,
  },
  {
    type: "dog",
    age: 3.8,
  },
  {
    type: "parrot",
    age: 4.0,
  },
];

for (var i = 0; i < pets.length; i++) {
  var age = pets[i].age;
  var type = pets[i].type;

  if (age >= 4.0) {
    console.log(type);
  }
}

// Question 2
function myFirstFunction(input) {
  var typeofValue = typeof input;

  if (typeofValue !== "boolean") {
    return "Please pass a boolean value in";
  } else {
    return input;
  }
}

var result = myFirstFunction("This is not a boolean value");
console.log(result);

// Question 3
var subheading = document.querySelector("h2");
var button = document.querySelector("button");

function changeSubheadingStyle() {
  subheading.style.color = "blue";
  subheading.innerHTML = "Updated subheading";
}

button.onclick = changeSubheadingStyle;
