const fileId = document.getElementById('fileId').innerText;
const fileName = document.getElementById('fileName').innerText;
const fileAuthor = document.getElementById('fileAuthor').innerText;
const fileAuthorId = document.getElementById('fileAuthorId').innerText;
/*const htmlData = document.getElementById('htmlData').innerText;
const cssData = document.getElementById('cssData').innerText;
const jsData = document.getElementById('jsData').innerText;*/
const previewImage = document.getElementById('previewImage').innerText;
const librariesData = document.getElementById('librariesData');
const customTagsData = document.getElementById('customTagsData');
const todoDataSet = document.getElementById('todoDataSet').innerText;
const comments = document.getElementById('comments').innerText;
const fileInitDate = document.getElementById('fileInitDate').innerText;
const fileLastSavedDate = document.getElementById('fileLastSavedDate').innerText;
const readMeTXTFile = document.getElementById('readMeTXTFile').innerText;

localStorage[thisFileId+'todo-list'] = todoDataSet;
