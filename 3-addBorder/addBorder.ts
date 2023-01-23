export function addBorder(picture: string[]): string[] {
  const wall = '*'.repeat(picture[0].length + 2);

  for (let i=0; i<picture.length; i++) {
    picture[i] = '*'.concat(picture[i], '*');
  }

  picture.push(wall);
  picture.unshift(wall);

  return picture;
}

// console.log(addBorder(["abc", "ded"]));
