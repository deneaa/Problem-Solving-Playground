function replaceWords(dictionary: string[], sentence: string): string {
  let group = sentence.split(" ");

  group.forEach((word, index) => {
    let root = "";
    for (let i = 0; i < dictionary.length; i++) {
      if (word.startsWith(dictionary[i])) {
        if (root === "" || dictionary[i].length < root.length) {
          root = dictionary[i];
        }
      }
    }

    if (root !== "") {
      group[index] = root;
    }
  });

  return group.join(" ");
}
