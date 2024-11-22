function skipCssPoints(e){let t,n,s,d,i;event.preventDefault(),cssUpdateToSelectionChild=cssCodeEdit.firstChild,cssCodeEdit.focus(),n=window.getSelection(),s=document.createRange(),s.setStart(cssUpdateToSelectionChild,preceding.length),s.setEnd(cssUpdateToSelectionChild,preceding.length+1),n.removeAllRanges(),n.addRange(s);let o=document.createTextNode(e);s.insertNode(o),s.setStartAfter(o),s.deleteContents(),runCssLight(),t=document.getSelection().getRangeAt(0);t.startContainer,t.startOffset;cssCodeEdit.textContent=localStorage[thisFileId+"css_code"],cssCodeEdit.focus();let l=cssCodeEdit.childNodes[0],c=cssCodeEdit.childNodes[0];d=window.getSelection(),i=document.createRange(),i.setStart(l,preceding.length+2+lastPrecedingLineIndent),i.setEnd(c,preceding.length+2+lastPrecedingLineIndent),d.removeAllRanges(),d.addRange(i),removeElements(),scrollCss(),runCss()}function insertCssTabAtCursor(e){let t,n;t=window.getSelection(),n=t.getRangeAt(0),n.deleteContents();let s=document.createTextNode(e);n.insertNode(s),n.setStartAfter(s),t.removeAllRanges(),t.addRange(n),runCssLight(),cssCodeEdit.textContent=localStorage[thisFileId+"css_code"],cssCodeEdit.focus();let d=cssCodeEdit.childNodes[0],i=cssCodeEdit.childNodes[0];initSel=window.getSelection(),initRange=document.createRange(),initRange.setStart(d,preceding.length+e.length),initRange.setEnd(i,preceding.length+e.length),initSel.removeAllRanges(),initSel.addRange(initRange),scrollCss(),removeElements(),runCss()}function insertCssTextAtCursor(e){let t,n;t=window.getSelection(),n=t.getRangeAt(0),n.deleteContents();let s=document.createTextNode(e);n.insertNode(s),n.setStartAfter(s),t.removeAllRanges(),t.addRange(n),runCssLight(),cssCodeEdit.textContent=localStorage[thisFileId+"css_code"],cssCodeEdit.focus();let d=cssCodeEdit.childNodes[0],i=cssCodeEdit.childNodes[0];initSel=window.getSelection(),initRange=document.createRange(),initRange.setStart(d,preceding.length+e.length),initRange.setEnd(i,preceding.length+e.length),initSel.removeAllRanges(),initSel.addRange(initRange),scrollCss(),removeElements(),runCss()}function insertCssTextAtCaret(e){let t,n,s,d,i;event.preventDefault(),cssUpdateToSelectionChild=cssCodeEdit.firstChild,cssCodeEdit.focus(),n=window.getSelection(),s=document.createRange(),s.setStart(cssUpdateToSelectionChild,preceding.length-lastCodeWord.length),s.setEnd(cssUpdateToSelectionChild,preceding.length+0),n.removeAllRanges(),n.addRange(s);let o=document.createTextNode(e);s.insertNode(o),s.setStartAfter(o),s.deleteContents(),runCssLight(),t=document.getSelection().getRangeAt(0);t.startContainer,t.startOffset;cssCodeEdit.textContent=localStorage[thisFileId+"css_code"],cssCodeEdit.focus();let l=cssCodeEdit.childNodes[0],c=cssCodeEdit.childNodes[0];d=window.getSelection(),i=document.createRange(),i.setStart(l,preceding.length-2+(e.length-lastCodeWord.length)),i.setEnd(c,preceding.length-2+(e.length-lastCodeWord.length)),d.removeAllRanges(),d.addRange(i),scrollCss(),removeElements(),runCss()}function insertCssVarAtCaret(e){let t,n,s,d,i;event.preventDefault(),cssUpdateToSelectionChild=cssCodeEdit.firstChild,cssCodeEdit.focus(),n=window.getSelection(),s=document.createRange(),s.setStart(cssUpdateToSelectionChild,preceding.length-lastCodeWord.length),s.setEnd(cssUpdateToSelectionChild,preceding.length+0),n.removeAllRanges(),n.addRange(s);let o=document.createTextNode(e.trim());s.insertNode(o),s.setStartAfter(o),s.deleteContents(),runCssLight(),t=document.getSelection().getRangeAt(0);t.startContainer,t.startOffset;cssCodeEdit.textContent=localStorage[thisFileId+"css_code"],cssCodeEdit.focus();let l=cssCodeEdit.childNodes[0],c=cssCodeEdit.childNodes[0];d=window.getSelection(),i=document.createRange(),i.setStart(l,preceding.length+(e.length-lastCodeWord.length)),i.setEnd(c,preceding.length+(e.length-lastCodeWord.length)),d.removeAllRanges(),d.addRange(i),removeElements(),runCss()}function insertCssSpaceEnterAtCursor(e){let t,n;t=window.getSelection(),n=t.getRangeAt(0),n.deleteContents();let s=document.createTextNode(e);n.insertNode(s),n.setStartAfter(s),t.removeAllRanges(),t.addRange(n),runCssLight(),cssCodeEdit.textContent=localStorage[thisFileId+"css_code"],cssCodeEdit.focus();let d=cssCodeEdit.childNodes[0],i=cssCodeEdit.childNodes[0];initSel=window.getSelection(),initRange=document.createRange(),initRange.setStart(d,preceding.length+(e.length-lastPrecedingLineIndent-1)),initRange.setEnd(i,preceding.length+(e.length-lastPrecedingLineIndent-1)),initSel.removeAllRanges(),initSel.addRange(initRange),scrollCss(),removeElements(),runCss()}function insertNewCssLineEnterAtCursor(e){let t,n;t=window.getSelection(),n=t.getRangeAt(0),n.deleteContents();let s=document.createTextNode(e);n.insertNode(s),n.setStartAfter(s),t.removeAllRanges(),t.addRange(n),runCssLight(),cssCodeEdit.textContent=localStorage[thisFileId+"css_code"],cssCodeEdit.focus();let d=cssCodeEdit.childNodes[0],i=cssCodeEdit.childNodes[0];initSel=window.getSelection(),initRange=document.createRange(),initRange.setStart(d,preceding.length+e.length-1),initRange.setEnd(i,preceding.length+e.length-1),initSel.removeAllRanges(),initSel.addRange(initRange),removeElements(),scrollCss(),runCss()}function insertCssBrackets(e){let t,n;t=window.getSelection(),n=t.getRangeAt(0),n.deleteContents();let s=document.createTextNode(e);n.insertNode(s),n.setStartAfter(s),t.removeAllRanges(),t.addRange(n),runCssLight(),cssCodeEdit.textContent=localStorage[thisFileId+"css_code"],css_code.textContent=localStorage[thisFileId+"css_code"],cssCodeEdit.focus();let d=cssCodeEdit.childNodes[0],i=cssCodeEdit.childNodes[0];initSel=window.getSelection(),initRange=document.createRange(),initRange.setStart(d,preceding.length+e.length-1),initRange.setEnd(i,preceding.length+e.length-1),initSel.removeAllRanges(),initSel.addRange(initRange),scrollCss(),removeElements()}