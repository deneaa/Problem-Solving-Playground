function kthCharacter(k: number, operations: number[]): string {
  let string = "a";
  for (let i = 0; i < operations.length; i++){
    if (operations[i] === 0){
      string = string.concat(...string);
    } else {
      let str = "";
      for (const letter of string){
        str += nextChar(letter);
      }
      string += str;
    }
  } 

  return string[k];
};

function nextChar(c: string): string {
  return c === "z" ? "a" : String.fromCharCode(c.charCodeAt(0) + 1);
}