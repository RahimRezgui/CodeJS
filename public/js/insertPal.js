async function insertPal(jsTxt, delay = 50){
	let jsTxtData = jsTxt; ///*js_beautify(*/document.getElementById("recTextJs").innerText.split("\n");//.innerText, jsBeautifyPreRec); //document.getElementById("recTextJs").innerText;
	//dispatchReturn(document.activeElement);
	console.log(jsTxtData)
	let jsDataArray = [];
	for(let i = 0; i <= jsTxtData.length; i++){
		console.log(jsTxtData[i])
		if(!jsTxtData[i] || jsTxtData[i] === undefined){
			let jsline = " ";
			jsDataArray.push(jsline);
		}else if(jsTxtData[i].startsWith("const ") || jsTxtData[i].startsWith("let ") || jsTxtData[i].startsWith("var ") || jsTxtData[i].includes(" =") || jsTxtData[i].includes(" +=") || jsTxtData[i].includes(" -=")){
			if(jsTxtData[i].endsWith(",") || jsTxtData[i].endsWith("(") || jsTxtData[i].endsWith("[") || jsTxtData[i].endsWith(".") || jsTxtData[i].endsWith("|") || jsTxtData[i].endsWith("{") || 
				jsTxtData[i].endsWith("?") || jsTxtData[i].endsWith("!") || jsTxtData[i].endsWith("=") || jsTxtData[i].endsWith("+") || jsTxtData[i].endsWith("-") || jsTxtData[i].endsWith("*") || 
				jsTxtData[i].endsWith(";") || jsTxtData[i].endsWith(":") || jsTxtData[i].endsWith("^") || jsTxtData[i].endsWith("&")){
				jsDataArray.push(jsTxtData[i]);
				console.log(jsTxtData[i])
			}else{
				jsline = jsTxtData[i]+";";
				jsDataArray.push(jsline);
			}
		}else if(jsTxtData[i].endsWith(")") || jsTxtData[i].endsWith("}")){
			if(!jsTxtData[i + 1] || jsTxtData[i + 1] === undefined){
				let jsline = jsTxtData[i]+";";//" ";
				jsDataArray.push(jsline);
			}else if(jsTxtData[i + 1].trim().startsWith("=") || jsTxtData[i + 1].trim().startsWith("+") || jsTxtData[i + 1].trim().startsWith("-") || jsTxtData[i + 1].trim().startsWith("*") || jsTxtData[i + 1].trim().startsWith("/") || 
				jsTxtData[i + 1].trim().startsWith("?") || jsTxtData[i + 1].trim().startsWith(".") || jsTxtData[i + 1].trim().startsWith("|") || jsTxtData[i + 1].trim().startsWith("{") || jsTxtData[i + 1].trim().startsWith("!") || 
				jsTxtData[i + 1].trim().startsWith(";") || jsTxtData[i + 1].trim().startsWith("^") || jsTxtData[i + 1].trim().startsWith(":") || jsTxtData[i + 1].trim().startsWith(",") || jsTxtData[i + 1].trim().startsWith("&")){
				jsDataArray.push(jsTxtData[i]);
			}else{
				jsline = jsTxtData[i]+";";
				jsDataArray.push(jsline);
			}
				
		}else{
			jsDataArray.push(jsTxtData[i]);
		}
	}
	await waitAlwaysForMs(300);
	let newJsTxtData = jsDataArray.join("\n");
	
	
	await waitAlwaysForMs(delay);
	let uncommentedJS;
	let jsTxtNoComments = await modifyText("https://codejs.com/removeComments", {data: newJsTxtData/*.replace(/\*\//g, "\n \*\/").replace(/\/\/ /g, "\n  \n  \n \/\/ ")*/}).then((data) => {
  	console.log(data); // JSON data parsed by `data.json()` call
  	console.log(data);
  	console.log(JSON.parse(data)[0])
  	console.log(JSON.parse(data)[0].txtProcess)
  	uncommentedJS = JSON.parse(data)[0].txtProcess;
  	//console.log(jsTxtNoComments);
	});
	console.log(jsTxtNoComments);
	await waitAlwaysForMs(200);
	let preSpaceTempJS = uncommentedJS.replace(/\s\s+/g, "");
	await waitAlwaysForMs(delay);
	let preTempJs = preSpaceTempJS.replace(/[\t]/gm, '');
	await waitAlwaysForMs(delay);
	const jsTextRec = js_beautify(preTempJs, jsBeautifyRecOptions)
	const jsResults = await prepRecText(jsTextRec);
	const jsSplitText = await prepRecTextReturn(jsResults);
	const jsTextFinal = await prepRecTextFinalJs(jsSplitText);

	typeJsSentence(jsTextFinal, jsCodeEdit);
	//typeJsCodeRec(jsTextFinal, jsCodeEdit);
}

async function typeJsSentence(sentence, eleRef, delay = 25){
	const rect = eleRef.getBoundingClientRect();
  	let docEl = document.documentElement;
  	const disLeft = rect.left /*+ (window.pageXOffset || docEl.scrollLeft || 0)*/;
  	const disTop = rect.top /*+ (window.pageYOffset || docEl.scrollTop || 0)*/;
  	/*const selection = window.getSelection();
  	const range = document.createRange();
  	selection.removeAllRanges();
  	range.selectNodeContents(eleRef);
  	range.collapse(false);
  	selection.addRange(range);*/
  	//eleRef.focus();


  	const letters = sentence.split("");
  	let i = 0;
  	while(i < letters.length) {

  			typeJsCodeRec(eleRef, letters[i])

  			await waitForMs(delay);
  	
  	const caretGlobalPosition = await getCaretGlobalPosition();
  	console.log(eleRef.offsetWidth); // "Outer" Width
		console.log(eleRef.clientWidth); // "Inner" Width
		console.log(document.activeElement.scrollLeft);
		console.log(caretGlobalPosition.left)
		console.log(disLeft)

  	if(eleRef.clientWidth < (caretGlobalPosition.left - disLeft) && letters[i] != "\n" /*- eleRef.scrollLeft*/){
  	eleRef.scrollLeft = caretGlobalPosition.left - disLeft - eleRef.clientWidth + 20/*- eleRef.scrollLeft*/;
  	}else if(letters[i] == "\n" && lastPrecedingLineIndent < 24){
  		eleRef.scrollLeft = 0;
  	}
  	await waitForMs(25);

    i++;
  };



}









