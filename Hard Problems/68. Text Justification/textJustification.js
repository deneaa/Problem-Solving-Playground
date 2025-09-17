/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    let result = [];
       let currentLine = [];
       let currentLength = 0;
   
       for (let i = 0; i < words.length; i++) {
           if (currentLength + words[i].length + currentLine.length > maxWidth) {
               result.push(justifyLine(currentLine, currentLength, maxWidth, false));
               currentLine = [words[i]];
               currentLength = words[i].length;
           } else {
               currentLine.push(words[i]);
               currentLength += words[i].length;
           }
       }
   
       result.push(justifyLine(currentLine, currentLength, maxWidth, true));
       return result;
   };
   
   function justifyLine(line, length, maxWidth, isLastLine) {
       if (isLastLine) {
           let result = line.join(' ');
           let padding = maxWidth - result.length;
           return result + ' '.repeat(padding);
       } else {
           let spacesNeeded = maxWidth - length;
           let spaceSlots = line.length - 1;
   
           if (spaceSlots > 0) {
               let spacePerSlot = Math.floor(spacesNeeded / spaceSlots);
               let extraSpaces = spacesNeeded % spaceSlots;
   
               let result = line[0];
               for (let i = 1; i < line.length; i++) {
                   let spaces = ' '.repeat(spacePerSlot + (i <= extraSpaces ? 1 : 0));
                   result += spaces + line[i];
               }
               return result;
           } else {
               return line[0] + ' '.repeat(spacesNeeded);
           }
       }
   }