const hydrate = (string) => {
  const splitString = string.split('');
  let glassOfWater = 0;

  for (let i = 0; i < splitString.length; i += 1) {
    const parsedCharacter = parseInt(splitString[i]);

    if (parsedCharacter) {
        glassOfWater += parsedCharacter;
    }
  }

  let glass = 'copo';

  if (glassOfWater > 1) {
    glass = 'copos'
  }

  return `${glassOfWater} ${glass} de água`;
}

module.exports = hydrate;