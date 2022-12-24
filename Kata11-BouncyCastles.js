
// Use the value below whenever you need the value of Pi
const PI = 3.14159 ;

const sphereVolume = function (radius) 
// Code here!

{
  return (4/3) * PI * Math.pow(radius, 3);
}

const coneVolume = function (radius, height) {
  return (1/3) * PI * Math.pow(radius, 2) * height;
}

const prismVolume = function (height, width, depth) {
  return height * width * depth;
}


const totalVolume = function (solids) {
  let totalVolume = 0;
  solids.forEach(solid => {
    if (solid.type === 'sphere') {
      totalVolume += sphereVolume(solid.radius);
    } else if (solid.type === 'cone') {
      totalVolume += coneVolume(solid.radius, solid.height);
    } else if (solid.type === 'prism') {
      totalVolume += prismVolume(solid.height, solid.width, solid.depth);
    }
  });

 
  return totalVolume;
}


const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}


const duck = [
  largeSphere,
  smallSphere,
  cone
]


console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);

