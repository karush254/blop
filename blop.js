button.onclick = function () {
  let table = document.getElementById("table");
  table.style.display = "table";
  let tr = document.createElement("tr");
  tr.style.backgroundColor = "#CC3333";
  let th1 = document.createElement("th");
  let th2 = document.createElement("th");
  let th3 = document.createElement("th");
  let th4 = document.createElement("th");
  let th5 = document.createElement("th");
  let th6 = document.createElement("th");
  tr.append(th1, th2, th3, th4, th5, th6);
  table.append(tr);
  
  let file = document.getElementById("file").files[0];
  let reader = new FileReader();
  reader.readAsText(file);
  reader.onload = function () {
      let splitToxadarc = reader.result.split("\r\n");
      let splitSpace = [];
      for (let index = 0; index < splitToxadarc.length; index++) {
          splitSpace.push(splitToxadarc[index].split(" "));
      };
      let lastArray = [];
      for (let index = 0; index < splitSpace.length; index++) {
          for (let i = 0; i < splitSpace[index].length; i++) {
              lastArray.push(splitSpace[index][i])
          }
      };
      console.log(lastArray);
      let variableLet = lastArray.filter((fn) => fn.startsWith("let"));
      let variableLet2 = lastArray.filter((fn) => fn.startsWith("(let"));
      let variableConst = lastArray.filter((fn) => fn.startsWith("const"));
      let variableConst2 = lastArray.filter((fn) => fn.startsWith("(const"));
      let func = lastArray.filter((fn) => fn.startsWith("function"));
      let generator = lastArray.filter((fn) => fn.startsWith("function*"));
      let classCount = lastArray.filter((fn) => fn.startsWith("class"));
      let cycleCount1 = lastArray.filter((fn) => fn.startsWith("for"));
      let cycleCount2 = lastArray.filter((fn) => fn.startsWith("while"));
      let cycleCount3 = lastArray.filter((fn) => fn.startsWith("array.forEach"));
      let name = lastArray.filter((fn) => fn.startsWith("name"));

      th1.innerText = `${func.length}`;
      th2.innerText = `${variableLet.length + variableLet2.length}`;
      th3.innerText = `${variableConst.length + variableConst2.length}`;
      th4.innerText = `${generator.length}`;
      th5.innerText = `${classCount.length}`;
      th6.innerText = `${cycleCount1.length + cycleCount2.length + cycleCount3.length}`
  }
};


