//let suggestionsIndex = 0;


function listOneLiSelected(){
  suggestionsIndex = 0;
  liSelected = ul.getElementsByTagName('li')[0];
  addClass(liSelected, 'selected');
}


function suggestionsInsert(event){
/*var ul = document.getElementById('list');
var liSelected;*/
//let suggestionsIndex = 0;


//document.addEventListener('keydown', function(event) {
  var len = ul.getElementsByTagName('li').length - 1;
  console.log(ul.getElementsByTagName('li').length);
  console.log(document.activeElement.className);
  if (event.which === 40) {
    suggestionsIndex++;
    //down 
    if (liSelected) {
      removeClass(liSelected, 'selected');
      next = ul.getElementsByTagName('li')[suggestionsIndex];
      if (typeof next !== undefined && suggestionsIndex <= len) {

        liSelected = next;
      } else {
        suggestionsIndex = 0;
        liSelected = ul.getElementsByTagName('li')[0];
      }
      addClass(liSelected, 'selected');
      console.log(suggestionsIndex);
    } else {
      suggestionsIndex = 0;

      liSelected = ul.getElementsByTagName('li')[0];
      addClass(liSelected, 'selected');
    }
  } else if (event.which === 38) {

    //up
    if (liSelected) {
      removeClass(liSelected, 'selected');
      suggestionsIndex--;
      console.log(suggestionsIndex);
      next = ul.getElementsByTagName('li')[suggestionsIndex];
      if (typeof next !== undefined && suggestionsIndex >= 0) {
        liSelected = next;
      } else {
        index = len;
        liSelected = ul.getElementsByTagName('li')[len];
      }
      addClass(liSelected, 'selected');
    } else {
      suggestionsIndex = 0;
      liSelected = ul.getElementsByTagName('li')[len];
      addClass(liSelected, 'selected');
    }
  }
}//, false);

function removeClass(el, className) {
  if (el.classList) {
    el.classList.remove(className);
  } else {
    el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }
};

function addClass(el, className) {
  if (el.classList) {
    el.classList.add(className);
  } else {
    el.className += ' ' + className;
  }
};
//}