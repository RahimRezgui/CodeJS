const bracketsArray = ['{', '}', '(', ')', '[', ']'];
let isBracket = false;
  let bracketsHighlightEl;
  let bracketsClickEl;
  let topElementHide;
  let searchDivHide;
// let bracketsArray = ["{", "}", "(", ")", "[", "]", "\"", "\'"];

function getHighlightWord(containerEl, event) {


    if(containerEl.className == "htmlCodeBlock"){
      bracketsHighlightEl = document.getElementById("htmltextSearchDiv");
      bracketsClickEl = htmlH;
      topElementHide = htmlCodeEdit;
      searchDivHide = htmlCodeF;
    }else if(containerEl.className == "cssCodeBlock"){
      bracketsHighlightEl = document.getElementById("csstextSearchDiv");
      bracketsClickEl = cssH;
      topElementHide = cssCodeEdit;
      searchDivHide = cssCodeF;
    }else if(containerEl.className == "jsCodeBlock"){
      bracketsHighlightEl = document.getElementById("jstextSearchDiv");
      bracketsClickEl = jsH;
      topElementHide = jsCodeEdit;
      searchDivHide = jsCodeF;
    }

    bracketsHighlightEl.innerHTML = "";

    var sel;
    let word;
    
    if (window.getSelection && (sel = window.getSelection()).modify) {
        var selectedRange = sel.getRangeAt(0);
        sel.collapseToStart();
        //sel.modify("move", "backward", "word");
        sel.modify("extend", "forward", "word");
        
        word = sel.toString().trim().replaceAll(/[\r\n<>,."'(/\s]/g, '');
        console.log(sel)
        console.log("==========================================================")

        
        // Restore selection
        sel.removeAllRanges();
        sel.addRange(selectedRange);
        console.log(word)
        
    }
    let isBracket = true;
    //let isBracket = !bracketsArray.includes(word);
    console.log(word)
    console.log(isBracket)
    /*if(word == "(" || word == ")" || word == "{" || word == "}" || word == "[" || word == "]"){
          isBracket = true;
    }*/
    console.log(isBracket)
    if(bracketsArray.includes(word) || bracketsArray.some(substring=>word.includes(substring)) && !/[a-z0-9]/i.test(word.split("")[0])  ){
      console.log(event.offsetX)
      console.log(event.offsetY)
      let x = event.offsetX;
      let y = event.offsetY;

      const simulateClick = (x, y) => {
      const click_event = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true,
        screenX: x,
        screenY: y
      })

      topElementHide.classList.add("bracketFunc");
      searchDivHide.classList.add("bracketFunc");
      //const element = bracketsClickEl.elementFromPoint(x, y)
      setTimeout(function(){
        let braces = document.querySelectorAll(".brace-hover");
        braces.forEach((brace)=>{
          brace.classList.add("brace-selected");
          brace.classList.remove("brace-hover");
        })
        //bracketsClickEl.dispatchEvent(click_event);
        //topElementHide.classList.remove("bracketFunc");
        //searchDivHide.classList.remove("bracketFunc");
      }, 20)
      //bracketsClickEl.dispatchEvent(click_event);
      //topElementHide.classList.remove("bracketFunc");
      //searchDivHide.classList.remove("bracketFunc");
      console.log(bracketsClickEl)
      console.log("CLICK SUMULATED")
      }
      simulateClick(x, y);

    }else{
        highlightSearchedText(word, bracketsHighlightEl);
    }

   //highlightSearchedText(word, bracketsHighlightEl);
}


function doLog(event){
  //event.preventDefault();
  topElementHide.classList.remove("bracketFunc");
  searchDivHide.classList.remove("bracketFunc");
  //checkBrackets();
  console.log("CLICK IS WORKING =============================")
  console.log(event.offsetX)
  console.log(event.offsetY)
}

function checkBrackets(){
  let braces = document.querySelectorAll(".brace-selected");
  braces.forEach((brace)=>{
      //brace.classList.remove("brace-selected");
      //brace.classList.remove("brace-hover");
  })
  console.log(braces)
}
//console.log(word);

function highlightSearchedText(text, bracketsHighlightEl) {
  console.log("working ////////////////////////")
  console.log(text)
  text = text.trim();
  //text = text.replaceAll(/[\r\n<>,."'()[\]{}=+/_\s]/g, ''); 
  text = text.replaceAll(/[\r\n<>()"=+;',./\s]/g, ' ');
  text = text.trim();
  if(text == "" || text == " "){
    return
  }
  //const inputDiv = document.getElementById("InputTextSearch");
  const searchTextDiv = document.activeElement;

  highlightResults = searchTextDiv.innerText.replaceAll(/[<>()"=+;',./]/g, " ");
  bracketsHighlightEl.innerHTML = highlightResults.replaceAll(text, "<mark id=\"mark\">" + text + "</mark>");
  //bracketsHighlightEl.innerHTML = searchTextDiv.innerText.split(text).join("<mark id=\"mark\">" + text + "</mark>");
  //console.log(newValue)
  //searchTextDiv.innerhtml = newValue;
  if(bracketsHighlightEl.id.includes("html")){
    scrollHtml();
  }else if(bracketsHighlightEl.id.includes("css")){
    scrollCss();
  }else if(bracketsHighlightEl.id.includes("js")){
    scrollJs();
  }
  console.log(text)
  console.log(searchTextDiv.innerHTML)

}

function cleanHighlight(containerEl){
  let bracketsHighlightEl;
  if(containerEl.className == "htmlCodeBlock"){
      bracketsHighlightEl = document.getElementById("htmltextSearchDiv");
    }else if(containerEl.className == "cssCodeBlock"){
      bracketsHighlightEl = document.getElementById("csstextSearchDiv");
    }else if(containerEl.className == "jsCodeBlock"){
      bracketsHighlightEl = document.getElementById("jstextSearchDiv");
    }

    bracketsHighlightEl.innerHTML = "";
    let braces = document.querySelectorAll(".brace-selected");
  braces.forEach((brace)=>{
      brace.classList.remove("brace-selected");
      brace.classList.remove("brace-hover");
  })
    //checkBrackets();
}



function getHighlight(containerEl, event) {
    let precedingText;
    let preProcessedText;
    let bracketsHighlightEl;

    if(containerEl.className == "htmlCodeBlock"){
      bracketsHighlightEl = document.getElementById("htmltextSearchDiv");
      getHighlightWord()
    }else if(containerEl.className == "cssCodeBlock"){
      bracketsHighlightEl = document.getElementById("csstextSearchDiv");
      getHighlightWord()
    }else if(containerEl.className == "jsCodeBlock"){
      bracketsHighlightEl = document.getElementById("jstextSearchDiv");
      getHighlightWord()
    }
}


function getBrackets(containerEl, event) {
    let precedingText;
    let preProcessedText;

    if(containerEl.className == "htmlCodeBlock"){
      bracketsHighlightEl = document.getElementById("htmltextSearchDiv");
    }else if(containerEl.className == "cssCodeBlock"){
      bracketsHighlightEl = document.getElementById("csstextSearchDiv");
    }else if(containerEl.className == "jsCodeBlock"){
      bracketsHighlightEl = document.getElementById("jstextSearchDiv");
    }

    console.log(event)
    var
    sel,
    range,
    precedingRange;
    precedingText = "";
  if (window.getSelection) {
    sel = window.getSelection();
    if (sel.rangeCount > 0) {
      range = sel.getRangeAt(0).cloneRange();
      range.collapse(true);
      range.setStart(containerEl, 0);
      precedingText = range.toString();
    }
  } else if ((sel = document.selection) && sel.type != "Control") {
    range = sel.createRange();
    precedingRange = range.duplicate();
    precedingRange.moveToElementText(containerEl);
    precedingRange.setEndPoint("EndToStart", range);
    precedingText = precedingRange.text;
  }

  let remainingCode = containerEl.innerText.replace(precedingText, '');


  let w = precedingText.split(/[<,.\s]/g);
  lastCodeWord = w[w.length - 1];
  lastInputChar = w[w.length - 0];

  let strippedLastCodeWord = precedingText.replaceAll(' ', '');
  let lastCharOfLastCodeWord = strippedLastCodeWord.charAt(strippedLastCodeWord.length -1);

  let remainingCodeWord = remainingCode.split(/\r?\n/).filter(item => item);
  let firstRemainingCodeWord = remainingCodeWord[0];

  let beginningOfLastRemainingCodeWord;
  let firstCharOfLastRemainingCodeWord;
  let strippedFirstRemainingCodeWord; 
  if(remainingCode.replaceAll(/[\r\n<>,./\s]/g, '').length >= 1){
    beginningOfLastRemainingCodeWord = firstRemainingCodeWord.replaceAll(' ', '').substring(0, 2);
    firstCharOfLastRemainingCodeWord = firstRemainingCodeWord.replaceAll(' ', '').substring(0, 1);
    strippedFirstRemainingCodeWord = firstRemainingCodeWord.replaceAll(/[\r\n<>,./\s]/g, '');
  };


  //console.log(precedingText)
  //console.log(remainingCode)

  let lastChar = precedingText.charAt(precedingText.length - 1);

  if(lastChar === ")") {
      let oppositeChar = '(';
      let occurrences = remainingCode.split(lastChar).length - 1;
      //let remainingOppositeOccurrences = remainingCode.split(oppositeChar).length - 1;
      //let closingOccurrences = precedingText.split(oppositeChar).length - 1;
      let preceeding_text_total_opening_brackets = precedingText.split(oppositeChar).length - 1;
      let preceeding_text_total_closing_brackets = (precedingText.split(lastChar).length - 1) - 1;

      let openBrackets = preceeding_text_total_opening_brackets - preceeding_text_total_closing_brackets;
      let openBracketsToReplace = preceeding_text_total_opening_brackets - openBrackets;



      //console.log(precedingOppositeOccurrences, precedingOccurrences)


      //occurrences = (closingOccurrences - openingOccurrences) + (occurrences - oppositeOccurrences);
      //occurrences = (remainingOppositeOccurrences + precedingOppositeOccurrences) - (occurrences + 1);
      //occurrences = (precedingOppositeOccurrences - precedingOccurrences) ;
      for(let i = 1; i < occurrences; i++){
        precedingText = precedingText.replace(oppositeChar, '%');
      }
      precedingText = precedingText.replace(new RegExp("&", "g"), "&amp;").replace(new RegExp("<", "g"), "&lt;");

      precedingText = precedingText.replace(oppositeChar, "<mark id=\"mark\">" + oppositeChar + "</mark>") + remainingCode;
      //precedingText = precedingText.replace(new RegExp("&", "g"), "&amp;").replace(new RegExp("<", "g"), "&lt;");
      bracketsHighlightEl.innerHTML = precedingText;
      //console.log(1*1000002637*12*2445*2*455667)
      //console.log(bracketsHighlightEl.innerHTML)


      console.log(lastChar + " LAST CHAR")
      //console.log(precedingText + " PRECEDING CODE")
      //console.log(remainingCode + " REMAINING CODE")
      console.log(occurrences + " OCCURRENCES")
      //console.log(preProcessedText + " PRE PROCESSED TEXT")
  }else if(lastChar == "}"){
    occurrences = remainingCode.split(lastChar).length - 1;
  }else if(lastChar == "]"){
    occurrences = remainingCode.split(lastChar).length - 1;
  }else if(lastChar == "(") {
    occurrences = precedingText.split(lastChar).length - 1;
  }else if(lastChar == "{") {
    occurrences = precedingText.split(lastChar).length - 1;
  }else if(lastChar == "[") {
    occurrences = precedingText.split(lastChar).length - 1;
  }









  //console.log(remainingCodeWord)
  //console.log(firstRemainingCodeWord)
  //console.log(firstCharOfLastRemainingCodeWord)
  //console.log(lastInputChar)
  //console.log(event.key)



  /*let precdingLine = precedingText.split(/\r?\n/);
  let lastPrecedingLine = precdingLine[precdingLine.length -1];

  lastPrecedingLineIndent = lastPrecedingLine.length - lastPrecedingLine.trimLeft().length;

  firstWordOfLastPrecedingLine = lastPrecedingLine.trimLeft().split(/[>,.\s]/g)[0];
  let untrimmedLastWordOfLastPrecedingLine = lastPrecedingLine.split(/[>,.\s]/g)[lastPrecedingLine.length -1]; // remove if not in use
  console.log(untrimmedLastWordOfLastPrecedingLine)
  trimmedLastPrecedingLine = lastPrecedingLine.trimLeft();
  let beginningOfFirstWordOfLastPrecedingLine = firstWordOfLastPrecedingLine.substring(0, 2);

  let splitLastPrecedingLine = lastPrecedingLine.split(/[<]/g);
  console.log(splitLastPrecedingLine)
  let lastWordOfLastPrecedingLine = splitLastPrecedingLine[splitLastPrecedingLine.length -1].trim();
  trimmedLastWordOfLastPrecedingLine = lastWordOfLastPrecedingLine.replaceAll(/[\r\n<>,.\s]/g, '');
  console.log(trimmedLastWordOfLastPrecedingLine)
  console.log(lastWordOfLastPrecedingLine)

  let strippedFirstWordOfLastPrecedingLine = firstWordOfLastPrecedingLine.replaceAll(/[\r\n<>,.\s]/g, '');


  console.log(beginningOfFirstWordOfLastPrecedingLine)
  console.log(lastCharOfLastCodeWord)
  console.log(beginningOfLastRemainingCodeWord)
  console.log(strippedFirstRemainingCodeWord)
  console.log(strippedFirstWordOfLastPrecedingLine)
  console.log(firstWordOfLastPrecedingLine)
  console.log(lastPrecedingLineIndent)
  console.log(remainingCodeWord)
  console.log(lastPrecedingLine)
  console.log(trimmedLastPrecedingLine)
  console.log(precdingLine)
  console.log(firstRemainingCodeWord)
  console.log(precedingText.toString())
  console.log(w)
  console.log(remainingCode)
  console.log(remainingCode.replaceAll(' ', '').substring(0, 2))
  console.log(lastCodeWord.length)
  console.log(lastCodeWord)
  console.log(precedingText.length)
  console.log(precedingText)
  console.log(containerEl.textContent.length)
  console.log(document.activeElement.className)
  console.log(document.activeElement.classList)
  console.log(range)
  console.log(iframe.className)*/

}
