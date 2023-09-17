import fileSys from "fs";

export default function loadData(pathfile) {
  return new Promise((resolve, reject) => {
    fileSys.readFile(pathfile, "utf-8", (err, data) => {
      if (err) {
        console.error("File read error: ", err);
        reject(err);
        return;
      }

      return resolve(processData(data));
    });
  });
}

function processData(data) {
  let elements = [];
  const rows = data.trim().split(" \r\n");

  for (let row of rows) {
    const rowValues = row.split(",");
    elements.push(...rowValues);
  }

  return elements.map((value) => parseInt(value));
}

// loadData(`./data/data-for-search/ordered/${sizeInstance}.txt`).then(data =>{

//     function algorithm(){

//         // console.log("\n Busca Quadrática____________")
//         // console.log(quadraticSearch(targetValue, data))

//         // console.log("\n Busca Cubica____________")
//         // console.log(cubicSearch(targetValue, data))

//         // console.log("\n Busca Sequencial____________")
//         // console.log(sequentialSearch_v2(targetValue, data))

//         // console.log("\n Busca Binaria____________")
//         // console.log(binarySearch(targetValue, data, 0, data.length))

//         console.log("\n Busca Ternaria____________")
//         console.log(ternarySearch(targetValue, data))

//     }

//     measureComplexity(algorithm, iterations, `${note}`)

// });
