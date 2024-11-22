let shareWrapper = document.getElementById("sharePopUpWrapper");
let shareBtnLink = document.getElementById("shareLinkBtn");


function shareProject(){
// Check for Web Share api support

  if (navigator.share) {
// Browser supports native share api
    let shareUrl = window.location.href;
	let shareTitle = 'CodeJS ' +  fileName;
    navigator.share({
      text: shareTitle,
      url: shareUrl
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    // Fallback
    let shareUrl = encodeURI(window.location.href.split("#")[0]);
	let shareTitle = 'CodeJS ' +  fileName;
	/*const msg = encodeURIComponent(shareTitle);
	const linkShare = document.createElement("a");
	linkShare.href = `https://twitter.com/intent/tweet?text=${msg}&url=${shareUrl}&hashtags=html,css,javascript,programming`;
	shareWrapper.classList.add("sharePopUpVisible");*/
	//linkShare.href = `http://twitter.com/share?&url=${shareUrl}&text=${msg}&hashtags=javascript,programming`;
	//linkShare.click()
    //window.open(`http://twitter.com/share?&url=${shareUrl}&text=${msg}&hashtags=javascript,programming`)
    //alert("The current browser does not support the share function. Please, manually share the link")
    shareWrapper.classList.add("sharePopUpVisible");
    const link = encodeURI(window.location.href.split("#")[0]);
	const msg = encodeURIComponent(shareTitle.toString());
	const title = encodeURIComponent(shareTitle.toString());

	const fb = document.querySelector('.facebook');
	fb.href = `https://www.facebook.com/share.php?u=${link}`;

	const twitter = document.querySelector('.twitter');
	twitter.href = `http://twitter.com/share?&url=${link}&text=${msg}&hashtags=javascript,programming`;

	const linkedIn = document.querySelector('.linkedin');
	linkedIn.href = `https://www.linkedin.com/sharing/share-offsite/?url=${link}`;

	const reddit = document.querySelector('.reddit');
	reddit.href = `http://www.reddit.com/submit?url=${link}&title=${title}`;

	const whatsapp = document.querySelector('.whatsapp');
	whatsapp.href = `https://api.whatsapp.com/send?text=${msg}: ${link}`;

  }
}  



function hideShare() {
	shareWrapper.classList.remove("sharePopUpVisible");
}

function hideShareWrapper(element, event) {
	console.log(element)
	console.log(event.target)
	console.log(event)
	if(!event.target.classList.contains("sharePopUpWrapper")){
		return
	}else{
		shareWrapper.classList.remove("sharePopUpVisible");
	}
}

function backToOgBtn(){
	shareBtnLink.innerHTML = `<i class="fa-regular fa-clipboard"></i>&nbsp; Copy Page Link.`;
	shareBtnLink.classList.remove("shareLinkCopied");
	setTimeout(hideShare, 500)
}

function shareLinkHref(){
	let shareUrl = window.location.href.split("#")[0];
	navigator.clipboard.writeText(shareUrl);

	shareBtnLink.innerHTML = `<i class="fa-regular fa-circle-check"></i>&nbsp; Link copied to clipboard.`
	shareBtnLink.classList.add("shareLinkCopied");
	setTimeout(backToOgBtn, 1600)
}
