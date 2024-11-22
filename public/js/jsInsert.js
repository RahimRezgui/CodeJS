function insertJsTabAtCursor(text){
            let sel, range, html; 
            sel = window.getSelection();
            range = sel.getRangeAt(0); 
            range.deleteContents(); 
            let textNode = document.createTextNode(text);
            range.insertNode(textNode);
            range.setStartAfter(textNode);
            sel.removeAllRanges();
            sel.addRange(range);
            runJsLight();
            jsCodeEdit.textContent = localStorage[thisFileId+'js_code']; 
            js_code.textContent = localStorage[thisFileId+'js_code'];
            jsCodeEdit.focus();
            let lastNodeStart = jsCodeEdit.childNodes[0];
            let lastNodeEnd = jsCodeEdit.childNodes[0];
            initSel = window.getSelection();
            initRange = document.createRange();
            initRange.setStart(lastNodeStart, preceding.length + text.length );
            initRange.setEnd(lastNodeEnd, preceding.length + text.length );
            initSel.removeAllRanges();
            initSel.addRange(initRange);
            scrollJs();
            removeElements();
            runJs();
}

function insertJsTextAtCaret(text) {  
            event.preventDefault();
            let jsResetSel, jsLastRange, jsDeleteSel, jsDeleteRange, jsInitSel, jsInitRange;
            jsUpdateToSelectionChild = jsCodeEdit.firstChild;
            jsCodeEdit.focus();
            jsDeleteSel = window.getSelection();
            jsDeleteRange = document.createRange();
            jsDeleteRange.setStart(jsUpdateToSelectionChild, preceding.length - lastCodeWord.length);
            jsDeleteRange.setEnd(jsUpdateToSelectionChild, preceding.length + 0 ); 
            jsDeleteSel.removeAllRanges();
            jsDeleteSel.addRange(jsDeleteRange);
            let typeAssistString = document.createTextNode(text);
            jsDeleteRange.insertNode(typeAssistString);
            jsDeleteRange.setStartAfter(typeAssistString);
            jsDeleteRange.deleteContents(); 
            runJsLight();
            jsLastRange = document.getSelection().getRangeAt(0)
            let lastNode = jsLastRange.startContainer;
            let lastOffset = jsLastRange.startOffset;
            jsCodeEdit.textContent = localStorage[thisFileId+'js_code'];
            jsCodeEdit.focus();
            let lastNodeStart = jsCodeEdit.childNodes[0];
            let lastNodeEnd = jsCodeEdit.childNodes[0];
            jsInitSel = window.getSelection(); 
            jsInitRange = document.createRange();
            jsInitRange.setStart(lastNodeStart, (preceding.length - 1) + (text.length - lastCodeWord.length) + 1);
            jsInitRange.setEnd(lastNodeEnd, (preceding.length - 1) + (text.length - lastCodeWord.length) + 1);
            jsInitSel.removeAllRanges();
            jsInitSel.addRange(jsInitRange);
            scrollJs();
            removeElements();
            runJs();

       
    }

    function insertJsVarAtCaret(text) {  
            event.preventDefault();
            let jsResetSel, jsLastRange, jsDeleteSel, jsDeleteRange, jsInitSel, jsInitRange;
            jsUpdateToSelectionChild = jsCodeEdit.firstChild;
            jsCodeEdit.focus();
            jsDeleteSel = window.getSelection();
            jsDeleteRange = document.createRange();
            jsDeleteRange.setStart(jsUpdateToSelectionChild, preceding.length - lastCodeWord.length);
            jsDeleteRange.setEnd(jsUpdateToSelectionChild, preceding.length + 0 );
            jsDeleteSel.removeAllRanges();
            jsDeleteSel.addRange(jsDeleteRange);
            let typeAssistString = document.createTextNode(text);
            jsDeleteRange.insertNode(typeAssistString);
            jsDeleteRange.setStartAfter(typeAssistString);
            jsDeleteRange.deleteContents(); 
            runJsLight();
            jsLastRange = document.getSelection().getRangeAt(0)
            let lastNode = jsLastRange.startContainer;
            let lastOffset = jsLastRange.startOffset;
            jsCodeEdit.textContent = localStorage[thisFileId+'js_code'];
            jsCodeEdit.focus();
            let lastNodeStart = jsCodeEdit.childNodes[0];
            let lastNodeEnd = jsCodeEdit.childNodes[0];
            jsInitSel = window.getSelection(); 
            jsInitRange = document.createRange();
            jsInitRange.setStart(lastNodeStart, preceding.length + (text.length - lastCodeWord.length));
            jsInitRange.setEnd(lastNodeEnd, preceding.length + (text.length - lastCodeWord.length));
            jsInitSel.removeAllRanges();
            jsInitSel.addRange(jsInitRange);
            scrollJs();
            removeElements();
            runJs();
             
    } 

    function insertJsSpaceEnterAtCursor(text) {
            let sel, range, html; 
            sel = window.getSelection();
            range = sel.getRangeAt(0); 
            range.deleteContents(); 
            let textNode = document.createTextNode(text);
            range.insertNode(textNode);
            range.setStartAfter(textNode);
            sel.removeAllRanges();
            sel.addRange(range);
            runJsLight();
            jsCodeEdit.textContent = localStorage[thisFileId+'js_code']; 
            js_code.textContent = localStorage[thisFileId+'js_code'];
            jsCodeEdit.focus()
            let lastNodeStart = jsCodeEdit.childNodes[0];
            let lastNodeEnd = jsCodeEdit.childNodes[0];
            initSel = window.getSelection();
            initRange = document.createRange();
            initRange.setStart(lastNodeStart, preceding.length + ((text.length -lastPrecedingLineIndent )-1));
            initRange.setEnd(lastNodeEnd, preceding.length + ((text.length -lastPrecedingLineIndent )-1));
            initSel.removeAllRanges();
            initSel.addRange(initRange);
            scrollJs();
            removeElements();
            runJs();
        }

function insertJsTextAtCursor(text) { 
            let sel, range, html; 
            sel = window.getSelection();
            range = sel.getRangeAt(0); 
            range.deleteContents(); 
            let textNode = document.createTextNode(text);
            range.insertNode(textNode);
            range.setStartAfter(textNode);
            sel.removeAllRanges();
            sel.addRange(range); 
            runJsLight();
            jsCodeEdit.textContent = localStorage[thisFileId+'js_code']; 
            htmlCodeEdit.focus();
            let lastNodeStart = jsCodeEdit.childNodes[0];
            let lastNodeEnd = jsCodeEdit.childNodes[0];
            initSel = window.getSelection();
            initRange = document.createRange();
            initRange.setStart(lastNodeStart, preceding.length + text.length );
            initRange.setEnd(lastNodeEnd, preceding.length + text.length );
            initSel.removeAllRanges();
            initSel.addRange(initRange);
            scrollJs();
            removeElements();
            runJs();
}

function insertPalJsTextAtCursor(text){
    let selection = window.getSelection();
    let range = selection.getRangeAt(0);
    range.deleteContents();
    let node = document.createTextNode(text);
    range.insertNode(node);
    selection.removeAllRanges();
    selection.addRange(range);
    runJsLight();
    jsCodeEdit.textContent = localStorage[thisFileId+'js_code']; 
    jsCodeEdit.focus();
    let lastNodeStart = jsCodeEdit.childNodes[0];
    let lastNodeEnd = jsCodeEdit.childNodes[0];
    initSel = window.getSelection();
    initRange = document.createRange();
    initRange.setStart(lastNodeStart, preceding.length + text.length );
    initRange.setEnd(lastNodeEnd, preceding.length + text.length );
    initSel.removeAllRanges();
    initSel.addRange(initRange);
    scrollJs();
    removeElements();
    runJs();

    /*for(let position = 0; position != text.length; position++)
    {
        selection.modify(move, right, character);
    };*/
    runJs()
}


function insertNewJsLineEnterAtCursor(text) { 
            let sel, range, html; 
            sel = window.getSelection();
            range = sel.getRangeAt(0); 
            range.deleteContents(); 
            let textNode = document.createTextNode(text);
            range.insertNode(textNode);
            range.setStartAfter(textNode);
            sel.removeAllRanges();
            sel.addRange(range); 
            runJsLight();
            jsCodeEdit.textContent = localStorage[thisFileId+'js_code']; 
            js_code.textContent = localStorage[thisFileId+'js_code'];
            jsCodeEdit.focus();
            let lastNodeStart = jsCodeEdit.childNodes[0];
            let lastNodeEnd = jsCodeEdit.childNodes[0];
            initSel = window.getSelection();
            initRange = document.createRange();
            initRange.setStart(lastNodeStart, preceding.length + text.length -1);
            initRange.setEnd(lastNodeEnd, preceding.length + text.length -1);
            initSel.removeAllRanges();
            initSel.addRange(initRange);
            scrollJs();
            removeElements();
            runJs();
        }


function insertJsBrackets(text) { 
            let sel, range, html; 
            sel = window.getSelection();
            range = sel.getRangeAt(0); 
            range.deleteContents(); 
            let textNode = document.createTextNode(text);
            range.insertNode(textNode);
            range.setStartAfter(textNode);
            sel.removeAllRanges();
            sel.addRange(range);
            runJsLight();
            jsCodeEdit.textContent = localStorage[thisFileId+'js_code']; 
            jsCodeEdit.focus();
            let lastNodeStart = jsCodeEdit.childNodes[0];
            let lastNodeEnd = jsCodeEdit.childNodes[0];
            initSel = window.getSelection();
            initRange = document.createRange();
            initRange.setStart(lastNodeStart, preceding.length + text.length -1);
            initRange.setEnd(lastNodeEnd, preceding.length + text.length -1);
            initSel.removeAllRanges();
            initSel.addRange(initRange);
            scrollJs();
            removeElements();
            runJs();

        }



