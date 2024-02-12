const soal1 = (input) => {
  const string = input.toLowerCase();

  const array = string
    .split("")
    .filter((word) => word.match(/[a-z]/))
    .reduce((acc, word) => {
      let index = acc.findIndex((item) => item[0] === word);
      if (index !== -1) {
        acc[index][1]++;
      } else {
        acc.push([word, 1]);
      }
      return acc;
    }, []);

  //   console.log({ array });
  let output = array.map((word) => word.join("=")).join(", ");
  //   console.log({ output });
  return output;
};

const soal2 = (input) => {
  const string = input.join("");

  const array = [...string]
    .filter((huruf) => huruf.match(/[A-Za-z]/))
    .reduce((acc, huruf) => ((acc[huruf] = (acc[huruf] || 0) + 1), acc), {});
  //   console.log({ array });

  let hurufUrut = Object.keys(array).sort((a, b) => {
    if (array[b] === array[a]) {
      if (a.toUpperCase() === a && b.toUpperCase() !== b) {
        return -1;
      } else if (b.toUpperCase() === b && a.toUpperCase() !== a) {
        return 1;
      }
      return a.localeCompare(b);
    }
    return array[b] - array[a];
  });

  const output = hurufUrut.join("");
  //   console.log({ output });
  return output;
};

const input1 = "We Always Mekar";
const input2 = "coding is fun";
const input3 = ["Abc", "bCd"];
const input4 = ["Oke", "One"];
const input5 = ["Pendanaan", "Terproteksi", "Untuk", "Dampak", "Berarti"];

const output1 = soal1(input1);
const output2 = soal1(input2);
const output3 = soal2(input3);
const output4 = soal2(input4);
const output5 = soal2(input5);

console.log(output1);
console.log(output2);
console.log(output3);
console.log(output4);
console.log(output5);
