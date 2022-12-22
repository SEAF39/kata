

  const checkAir = function (samples, threshold)
    // Code here! 
  {
    let dirtyCount = 0;
    for (const sample of samples) {
      if (sample === 'dirty') {
        dirtyCount += 1;
      }
    }
    const proportionDirty = dirtyCount / samples.length;
    if (proportionDirty >= threshold) {
      return 'Polluted';
    } else {
      return 'Clean';
    }
  };
  
console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))

