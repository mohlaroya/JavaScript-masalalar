function capitalizeWords(str) {
  let words = str.split(" ");

  let capitalized = words.map(function (word) {
    if (word.length === 0) return ""; // bo'sh so'z bo'lsa, bo'sh qaytaradi
    let firstLetter = word.charAt(0).toUpperCase();
    let rest = word.slice(1).toLowerCase();
    return firstLetter + rest;
  });

  return capitalized.join(" ");
}

console.log(capitalizeWords("salom dunyo")); // "Salom Dunyo"


// 2. Massivdagi har bir ismni katta harfga o'tkazing
function toUpperNames(names) {
  // 1. map() yordamida har bir ismdan yangi massiv yaratamiz
  // 2. Har bir ismni toUpperCase() bilan yozamiz
  return names.map(function (name) {
      return name.toUpperCase();
  });
}
console.log(toUpperNames(["ali", "vali", "hasan"])); // ["ALI", "VALI", "HASAN"]


// 3. Massivda nechta musbat son borligini toping
function countPositive(numbers) {
  // 1. filter() yordamida musbat sonlargina ajratib oling
  // 2. filter() natijasining uzunligini qaytaring
  return numbers.filter(function (num) {
      return num > 0;
  }).length;
}
console.log(countPositive([1, -3, 4, 0, 6])); // 3


// 4. Stringdagi boâ€˜sh joylarni olib tashlang
function removeSpaces(str) {
  // 1. trim() yordamida bosh va oxiridagi boâ€˜sh joylarni oling
  // 2. replaceAll() bilan oradagi boâ€˜sh joylarni ham olib tashlang
    return str.trim().replaceAll(" ", "");

}
console.log(removeSpaces("  salom  dunyo  ")); // "salomdunyo"


// 5. Berilgan sonlar orasidan biror juft son bor-yoâ€˜qligini tekshiring
function hasEvenNumber(arr) {
  // 1. some() yordamida bironta son juft ekanligini tekshiring
    return arr.some(function (num) {
      return num % 2 === 0;
  });
}
console.log(hasEvenNumber([1, 3, 5, 8])); // true


// 6. Massivdagi 0 qiymatli elementlarni olib tashlang
function removeZeros(arr) {
  // 1. filter() yordamida faqat 0 ga teng boâ€˜lmagan qiymatlarni oling
    return arr.filter(function (num) {
        return num !== 0;
    });
}
console.log(removeZeros([0, 1, 2, 0, 3])); // [1, 2, 3]


// 7. Har bir soâ€˜zni teskari qilib qaytaring
function reverseWords(str) {
  // 1. split() bilan soâ€˜zlarga ajrating
  // 2. map() orqali har bir soâ€˜zni teskari qilib chiqing
  // 3. Soâ€˜zlarni yana birlashtiring
    return str.split(" ").map(function (word) {
        return word.split("").reverse().join("");
    });
}
console.log(reverseWords("salom dunyo")); // "molas oynud"


// 8. Faqat 3 harfli soâ€˜zlarni qoldiring
function threeLetterWords(words) {
  // 1. filter() yordamida uzunligi 3 ga teng soâ€˜zlarni ajrating
  return words.filter(function (word) {
      return word.length === 3;
  });
}
console.log(threeLetterWords(["sal", "olma", "koâ€˜r", "bor"])); // ["sal", "koâ€˜r", "bor"]


// 9. Massivdagi sonlarni 2 ga koâ€˜paytiring
function doubleNumbers(numbers) {
  // 1. map() yordamida har bir elementni 2 ga koâ€˜paytiring
    return numbers.map(function (num) {
        return num * 2;
    });
}
console.log(doubleNumbers([1, 2, 3])); // [2, 4, 6]


// 10. Matndagi har bir harfni alohida massivga oling
function splitChars(str) {
  // 1. split('') orqali harflarga boâ€˜ling
    return str.split("");
}
console.log(splitChars("hello")); // ['h','e','l','l','o']


// 11. Massivdagi butun sonlarni saqlang
function onlyIntegers(arr) {
  // 1. filter() yordamida Number.isInteger bilan tekshiring
    return arr.filter(function (num) {
        return Number.isInteger(num);
    });
}
console.log(onlyIntegers([1.5, 2, 3.1, 4])); // [2, 4]


// 12. Massivdagi har bir elementga uning indexini qoâ€˜shing
function addIndex(arr) {
  // 1. map() yordamida qiymatga uning indeksini qoâ€˜shing
    return arr.map(function (num, index) {
        return num + index;
    });
}
console.log(addIndex([10, 20, 30])); // [10, 21, 32]


// 13. Stringda nechta 'a' harfi borligini sanang
function countA(str) {
  // 1. toLowerCase() qiling
  // 2. split() bilan harflarga boâ€˜ling
  // 3. filter() orqali faqat 'a' harflarini oling va uzunligini toping
    return str.toLowerCase().split("").filter(function (char) {
        return char === 'a';
    }).length;
}
console.log(countA("Ananas")); // 3


// 14. Har bir soâ€˜zdan faqat birinchi harfni oling
function getInitials(str) {
  // 1. split() orqali soâ€˜zlarga boâ€˜ling
  // 2. map() orqali har bir soâ€˜zdan faqat birinchi harfni oling
  // 3. join('') bilan birlashtiring
    return str.split(" ").map(function (word) {
        return word.charAt(0).toUpperCase();
    }).join("");
}
console.log(getInitials("Hello World From JS")); // "HWFJ"


// 15. Ichma-ich massivlarni tekislashtiring
function flattenArray(arr) {
  // 1. flat() metodidan foydalaning
  return arr.flat();
}
console.log(flattenArray([1, [2, 3], [4, 5]])); // [1,2,3,4,5]


// 16. Faqat harflardan iborat stringlarni ajrating
function onlyWords(arr) {
  // 1. filter() bilan faqat /^[a-zA-Z]+$/ ga mos stringlarni ajrating
    return arr.filter(function (word) {
      return /^[a-zA-Z]+$/.test(word);
  });
}
console.log(onlyWords(["hello", "123", "world!", "JS"])); // ["hello", "JS"]


// 17. Stringdagi raqamlarni sonlarga aylantiring
function extractNumbers(str) {
  // 1. split('') bilan harflarga boâ€˜ling
  // 2. filter() bilan faqat raqamlar ajrating
  // 3. map() bilan ularni Number ga aylantiring
    return str.split("").filter(function (char) {
        return !isNaN(char) && char !== " ";
    }).map(function (char) {
        return Number(char);
    });
}
console.log(extractNumbers("ab1c3d2")); // [1,3,2]


// 18. Har bir soâ€˜zni teskari qilib, oxirgi soâ€˜zni katta harf bilan qaytaring
function specialReverse(str) {
  // 1. split() orqali soâ€˜zlarga boâ€˜ling
  // 2. map() orqali har birini teskari qiling
  // 3. oxirgi soâ€˜zni toUpperCase() qiling
    return str.split(" ").map(function (word, index, arr) {
        if (index === arr.length - 1) {
            return word.toUpperCase();
        }
        return word.split("").reverse().join("");
    });
}
console.log(specialReverse("salom dunyo js")); // ['molas', 'oynud', 'SJ']


// 19. 2-qavatgacha boâ€˜lgan ichki massivlarni flatten qiling (flatMap bilan)
function flatMapExample(arr) {
  // 1. flatMap() yordamida birinchi qatlamni yoying
  // 2. Ichidagi yana bitta massiv boâ€˜lsa, uni ham yoying
  return arr.flatMap(function (item) {
      if (Array.isArray(item)) {
          return item;
      }
      return [item];
  });
}
console.log(flatMapExample([1, [2, [3, 4]], 5])); // [1,2,[3,4],5]


// 20. Massivda barcha qiymatlar son ekanligini tekshiring
function allNumbers(arr) {
  // 1. every() yordamida typeof qiymat 'number' ekanligini tekshiring
  return arr.every(function (num) {
      return typeof num === 'number';
  });
}
console.log(allNumbers([1, 2, 3])); // true
