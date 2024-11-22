let loadingHtml = `
        
<div></div>
<div class="searchPopUpContainer">
  <form onsubmit="" action="" method="post" class="searchForm" autocomplete="off">
        <div class="search-bar"><input type="text" placeholder="Search CodeJS" name="q" class="searchBar" id="searchBar">
        <button onsubmit="searchDirectingMain(event); removeSuggest()" onclick="searchDirectingMain(event); removeSuggest()" type="submit"><i class="fas fa-search"></i></button></div>
        <ul class="searchSuggestList hiddenResults" id="suggestListElement"></ul>
  </form>
</div>


<!-- BEGINNING OF IN EDITOR SEARCH SUGGEST -->
<div class="inEditorResultsWrapper" id="inEditorResultsWrapper" onclick="closeInEditorResultsOrBar(event)">
<section class="resultSectionWrapper hiddenResults" id="resultSectionWrapper">

<div class="searchBarPopupWrapper">
  <form action="" method="" class="search-bar searchBarPopUp" autocomplete="off">
        <input type="text" placeholder="Search CodeJS" name="q" class="searchBarOpen" id="searchBarOpen">
        <button onsubmit="searchDirecting(event)" onclick="searchDirecting(event)" type="submit"><i class="fas fa-search"></i></button>
        <ul class="searchSuggestListOpen hiddenResults"></ul>
    </form>
    <!--<ul class="searchSuggestListOpen hiddenResults"></ul>-->
  <span onclick="closeResultSection()" class="closeResultSection"><i class="fa-solid fa-xmark"></i></span>
</div>

<div class="wrapper">



      <div class="icon"><i id="left" class="fa-solid fa-angle-left"></i></div>
      <ul class="tabs-box">
        <li onclick="searchDirectingClick(event)" class="tab searchTabBtn active">CodeJS Projects</li>
        <li onclick="searchDirectingClick(event)" class="tab searchTabBtn">Web Search</li>
        <li onclick="searchDirectingClick(event)" class="tab searchTabBtn" id="webImagesTabBtn">Web Images</li>
        <li onclick="searchDirectingClick(event)" class="tab searchTabBtn">Videos</li>
        <li onclick="searchDirectingClick(event)" class="tab searchTabBtn">StackOverflow</li>
        <li onclick="searchDirectingClick(event)" class="tab searchTabBtn">Snippets</li>
        <li class="tab disableBtnCarousel">JavaScript</li>
        <li class="tab disableBtnCarousel">HTML</li>
        <li class="tab disableBtnCarousel">CSS</li>
        <li class="tab disableBtnCarousel">DOM</li>
        <li class="tab disableBtnCarousel">Web Api</li>
        <li class="tab disableBtnCarousel">Tutorials</li>
        <li class="tab disableBtnCarousel">Q&A</li>
        <li class="tab disableBtnCarousel">Articles</li>
        <li class="tab disableBtnCarousel">Most Popular</li>
        <li class="tab disableBtnCarousel">Most Forked</li>
        <li class="tab disableBtnCarousel">Most Upvoted</li>
      </ul>
      <div class="icon"><i id="right" class="fa-solid fa-angle-right"></i></div>
</div>



<div class="resultContainer hiddenResults hiddenElement" id="resultContainer">

  <div class="snippetsResults hiddenResults hiddenElement" id="snippetsResults">
    <iframe class="snippetsFrame" id="snippetsFrame" name="snippetsFrame" src="about:blank"></iframe>
  </div>

  <div class="webResultWrapper hiddenResults hiddenElement" id="webResultWrapper">
    <div class="webResultMain" id="webResultMain">


    </div>
    <div class="webResultSide">
      <div class="relatedWrapper" id="relatedWebWrapper">
        <h3 class="relatedHeading">Related searches</h3>
        <span class="relatedElement"><span class="relatedSearchIcon"><i class="fas fa-search"></i></span><h4 class="relatedText">Related search term</h4></span>
        <span class="relatedElement"><span class="relatedSearchIcon"><i class="fas fa-search"></i></span><h4 class="relatedText">Related search term</h4></span>
        <span class="relatedElement"><span class="relatedSearchIcon"><i class="fas fa-search"></i></span><h4 class="relatedText">Related search term</h4></span>
        <span class="relatedElement"><span class="relatedSearchIcon"><i class="fas fa-search"></i></span><h4 class="relatedText">Related search term</h4></span>
        <span class="relatedElement"><span class="relatedSearchIcon"><i class="fas fa-search"></i></span><h4 class="relatedText">Related search term</h4></span>
        <span class="relatedElement"><span class="relatedSearchIcon"><i class="fas fa-search"></i></span><h4 class="relatedText">Related search term</h4></span>
      </div>
      
    </div>
  </div>

  <div class="soResultWrapper hiddenResults hiddenElement" id="soResultWrapper">
    <div class="webResultMain" id="soResultsContainer">


    </div>


    <div class="webResultSide">
      <div class="relatedWrapper" id="relatedSOWrapper">
        <h3 class="relatedHeading">Related searches</h3>
        <span class="relatedElement"><span class="relatedSearchIcon"><i class="fas fa-search"></i></span><h4 class="relatedText">Related search term</h4></span>
        <span class="relatedElement"><span class="relatedSearchIcon"><i class="fas fa-search"></i></span><h4 class="relatedText">Related search term</h4></span>
        <span class="relatedElement"><span class="relatedSearchIcon"><i class="fas fa-search"></i></span><h4 class="relatedText">Related search term</h4></span>
        <span class="relatedElement"><span class="relatedSearchIcon"><i class="fas fa-search"></i></span><h4 class="relatedText">Related search term</h4></span>
        <span class="relatedElement"><span class="relatedSearchIcon"><i class="fas fa-search"></i></span><h4 class="relatedText">Related search term</h4></span>
        <span class="relatedElement"><span class="relatedSearchIcon"><i class="fas fa-search"></i></span><h4 class="relatedText">Related search term</h4></span>
      </div>  
    </div>
  </div>



  <div class="videoResultWrapper hiddenResults hiddenElement" id="videoResultWrapper">
    <div class="videoResultMain" id="videoResultMain">

      

    </div>

  </div>






<!-- BEGINNING WEB IMAGES RESULT SECTION WRAPPER -->


  <div class="webImagesResultWrapper hiddenResults hiddenElement" id="webImagesResultWrapper">
    <section class="webImagesGrid" id="webImagesGrid">
      

  
    </section>
  </div>

  <div class="gridResults hiddenResults hiddenElement" id="gridResults">
  
   

    
  </div>
  <div class="navigationWrapper" id="navigationWrapper">
    <span class="navigationItems" id="navigationItems">
      <button onclick="loadMoreResults()" class="navBtn" id="loadMoreResultsBtn">Load More</button>
    </span>
  </div>
</div>

</section>
</div>



<!-- BEGINNING OF IMAGES GALLERY POPUP MODAL -->

<div class="modal-container" aria-modal="true" role="dialog" hidden="true" id="modalContainer">
      <div class="modal">
        <div class="modal__overlay">
          <div class="modal__btn-container galleryBtnBox">
            <button class="modal__btn modal__arrow modal__arrow--left" id="nextBtnGallery" aria-label="Previous image">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.25 6.75L4.75 12L10.25 17.25"></path>
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.25 12H5"></path>
              </svg>
            </button>
            <button class="modal__btn modal__close" aria-label="Close gallery" id="closeGalleryBtn">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.25 6.75L6.75 17.25"></path>
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.75 6.75L17.25 17.25"></path>
              </svg>
            </button>
            <button class="modal__btn modal__arrow modal__arrow--right" id="previousBtnGallery" aria-label="Next image">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.75 6.75L19.25 12L13.75 17.25"></path>
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 12H4.75"></path>
              </svg>
            </button>
          </div>
          
        </div>
        
        <div class="modal__image-container carouselSlide" id="modalImagesContainer">
          
        </div>

        
      </div>
      <div class="imgHowToContainer">
          <span class="imgHowToMessage">Click an image to copy it's "src" attribute.</span>
      </div>
</div>

<!-- BEGINNING OF IMAGES GALLERY POPUP MODAL -->

<div class="videoModalContainer hiddenResults hiddenElement" aria-modal="true" role="dialog" hidden="true" id="videoModalContainer">
      <div class="videoModal hiddenResults hiddenElement" id="videoModal">
        
        
        <!--<div class="videoContainer" id="videoContainer">
          <iframe id="" width="1280" height="720" src="https://www.youtube.com/embed/1jAEyP9a1hg?autoplay=1" frameborder="0" allowfullscreen></iframe>  
        </div>-->

        <div class="videoPopup hiddenResults hiddenElement" id="videoPopup">
          <div class="videoPopupHeader hiddenResults" id="videoPopupHeader"> <span>Click here to Drag or Resize Video</span>  </div>
          <div class="videoPopupBtn" id="videoPopupBtn"><span onclick="dockVideo()"  class="dockVideoBtn hiddenResults" id="dockVideoBtn"><i class="fa-regular fa-window-maximize"></i></span><span onclick="closeVideo()" class="videoHeaderBtn"><i class="fa-solid fa-xmark"></i></span></div>
            <div class="" id="">
              <iframe id="streamElement" name="streamElement" class="poppedVideoFrame hiddenResults hiddenElement" src="about:blank" frameborder="0" allowfullscreen></iframe>  
            </div>
          </div>  
      </div>

      <section class="videoSubContentWrapper" id="videoSubContentWrapper">
        <div class="videoHowToContainer">
          <div class="videoSubContentTitleWrapper"><span class="videoSubTitle" id="videoSubTitle">Click an image to copy it's "src" attribute. Click an image to copy it's "src" attribute.</span></div><div class="videoSubContentButtonWrapper"><span class="videoSubViews" id="videoSubViews">327K views</span><span class="videoPageRedirect" id="videoPageRedirect" onclick="videoOGPageRedirect(this)">Visit website</span><button onclick="popOutVideo()" class="videoUndockBtn">In-Editor Video</button></div>
      </div>


      <div class="imgHowToContainer">
          <span class="imgHowToMessage">Click an image to copy it's "src" attribute.</span>
      </div>
      </section>
    

</div>


<textarea class="textAreaTemp" id="textAreaTemp"></textarea>

<div class="toastWindow copyToastWindow">
  <span class="copyToastMessage">Image "src" copied to clipboard.</span>
</div>

<div class="toastWindow connToastWindow">
  
</div>

<div class="successNotificationWrapper " id="successNotificationWrapper">
  <div class="centerSuccessWrapper">
  <div class="successNotificationPopup" id="successNotificationPopup">
    <div class="errorNotificationIcon removeMsgIcons hiddenSuccessIcon" ><i class="fa-solid fa-triangle-exclamation"></i></div>
    <div class="successNotificationIcon removeMsgIcons hiddenSuccessIcon"><i class="fa-regular fa-circle-check"></i></div>
    <div class="forkNotificationIcon removeMsgIcons hiddenSuccessIcon"><i class="fa-solid fa-code-fork"></i></div>
    <div class="searchNotificationIcon removeMsgIcons hiddenSuccessIcon"><i class="fa-solid fa-magnifying-glass"></i></div>
    <div class="newFileNotificationIcon removeMsgIcons hiddenSuccessIcon" id="newFileNotificationIcon"><i class="fa-regular fa-file"></i></div>
    <span class="successNotificationTitle">File Forked Successfully</span>
    <span class="successNotificationText" id="successNotificationText">This file has been forked successfully.<br>Would you like to open your fresh fork in a new tab?</span>
      <div class="notificationBtnWrapper">
        <button onclick="hideForkSuccess()" class="successNotificationBtnClose">Maybe Later</button>
        <button onclick="openNewFileTab(this)" class="successNotificationBtnOpen" id="">Yes, Please</button>
      </div>
  </div>
  </div>
</div>








<div class="moreResourcesWrapper">

<div class="resourcesContainer">
  <h4 class="moreResourcesHeading">Links</h4>
  <div class="resourceLink">
  <a href="/index" target="_blank">Home</a>
  <a href="/editorfeatures" target="_blank">Editor Features</a>
  <a href="/signup" target="_blank">Sign-Up</a>
  <a href="/login" target="_blank">Log-In</a>
  </div>
</div>

<div class="spacerMoreRes">
  
</div>

<div class="resourcesContainer">
  <h4 class="moreResourcesHeading">Tools and Resources</h4>
  <div class="resourceLink">
  <a href="/index" target="_blank">Home</a>
  <a href="/editorfeatures" target="_blank">Editor Features</a>
  <a href="/signup" target="_blank">Sign-Up</a>
  <a href="/login" target="_blank">Log-In</a>
  </div>
</div>

</div>










<div class="overlayPopupWindow fadeInLight" id="overlayPopupWindow">
    <div class="middlePopupWrapperOpen" id="middlePopupWrapperOpen">

      <span onclick="closeFunctionPopup()" class="closeIcon" id="closeIcon"><i class="fa-solid fa-xmark"></i></span>
      <h4 class="formHeading" id="formHeading">Name your file.</h4>
      <div class="formElement">

      </div>
     
      <input id="newFileNameInput" name="newFileNameInput" placeholder="New file name" class="formInput" type="text" required="" onkeydown="publicFileSubmit(event)"><button onclick="newPublicFile(event)" id="" class="formElementButton" type="submit">New File</button></div>

    </div>
</div>


<div class="shortcutsWrapper hiddenResults" id="shortcutsWrapper" onclick="closeShortcuts(event)"> 
  <div class="shortcutsElement">
    <h3 class="shortcutsHeading">Keyboard Shortcuts</h3>

    <div class="shortcutsSeparator">
      <h4><i class="fa-brands fa-apple"></i>&nbsp&nbsp Mac OS</h4>
      <div class="shortcutsBox">
        <span class="shortcutLine"><kbd><kbd>⌘ cmd</kbd> <span>+</span> <kbd class="singleLetters">x</kbd></kbd>&nbsp Toggle full-screen code.</span><br>
        <span class="shortcutLine"><kbd><kbd>⌘ cmd</kbd> <span>+</span> <kbd class="singleLetters">f</kbd></kbd>&nbsp Toggle full-screen live preview.</span><br>
        <span class="shortcutLine"><kbd><kbd>⌘ cmd</kbd> <span>/</span> <kbd>⇧ shift</kbd> <span>+</span> <kbd class="singleLetters">q</kbd></kbd>&nbsp HTML tab focus.</span><br>
        <span class="shortcutLine"><kbd><kbd>⌘ cmd</kbd> <span>/</span> <kbd>⇧ shift</kbd> <span>+</span> <kbd class="singleLetters">w</kbd></kbd>&nbsp CSS tab focus.</span><br>
        <span class="shortcutLine"><kbd><kbd>⌘ cmd</kbd> <span>/</span> <kbd>⇧ shift</kbd> <span>+</span> <kbd class="singleLetters">e</kbd></kbd>&nbsp JavaScript tab focus.</span><br>
        <span class="shortcutLine"><kbd><kbd>⌘ cmd</kbd> <span>+</span> <kbd class="singleLetters">j</kbd></kbd>&nbsp Run JavaScript logic.</span><br>
        <span class="shortcutLine"><kbd><kbd>⌘ cmd</kbd> <span>+</span> <kbd class="singleLetters">s</kbd></kbd>&nbsp Save file.</span><br>
        <span class="shortcutLine"><kbd><kbd>ctrl</kbd> <span>+</span> <kbd class="singleLetters">c</kbd> <span>/</span> <kbd class="singleLetters">i</kbd></kbd>&nbsp Open console.</span><br>
      </div>
    </div>

    <div class="shortcutsSeparator">
      <h4><i class="fa-brands fa-linux"></i>&nbsp&nbsp Linux</h4>
      <div class="shortcutsBox">
        <span class="shortcutLine"><kbd><kbd>❖ super</kbd> <span>+</span> <kbd class="singleLetters">x</kbd></kbd>&nbsp Toggle full-screen code.</span><br>
        <span class="shortcutLine"><kbd><kbd>❖ super</kbd> <span>+</span> <kbd class="singleLetters">f</kbd></kbd>&nbsp Toggle full-screen live preview.</span><br>
        <span class="shortcutLine"><kbd><kbd>❖ super</kbd> <span>/</span> <kbd>⇧ shift</kbd> <span>+</span> <kbd class="singleLetters">q</kbd></kbd>&nbsp HTML tab focus.</span><br>
        <span class="shortcutLine"><kbd><kbd>❖ super</kbd> <span>/</span> <kbd>⇧ shift</kbd> <span>+</span> <kbd class="singleLetters">w</kbd></kbd>&nbsp CSS tab focus.</span><br>
        <span class="shortcutLine"><kbd><kbd>❖ super</kbd> <span>/</span> <kbd>⇧ shift</kbd> <span>+</span> <kbd class="singleLetters">e</kbd></kbd>&nbsp JavaScript tab focus.</span><br>
        <span class="shortcutLine"><kbd><kbd>❖ super</kbd> <span>+</span> <kbd class="singleLetters">j</kbd></kbd>&nbsp Run JavaScript logic.</span><br>
        <span class="shortcutLine"><kbd><kbd>❖ super</kbd> <span>+</span> <kbd class="singleLetters">s</kbd></kbd>&nbsp Save file.</span><br>
        <span class="shortcutLine"><kbd><kbd>ctrl</kbd> <span>+</span> <kbd class="singleLetters">c</kbd> <span>/</span> <kbd class="singleLetters">i</kbd></kbd>&nbsp Open console.</span><br>
      </div>
    </div>

    <div class="shortcutsSeparator">
      <h4><i class="fa-brands fa-windows"></i>&nbsp&nbsp Windows</h4>
      <div class="shortcutsBox">
        <span class="shortcutLine"><kbd><kbd>ctrl</kbd> <span>+</span> <kbd class="singleLetters">x</kbd></kbd>&nbsp Toggle full-screen code.</span><br>
        <span class="shortcutLine"><kbd><kbd>ctrl</kbd> <span>+</span> <kbd class="singleLetters">f</kbd></kbd>&nbsp Toggle full-screen live preview.</span><br>
        <span class="shortcutLine"><kbd><kbd>ctrl</kbd> <span>/</span> <kbd>⇧ shift</kbd> <span>+</span> <kbd class="singleLetters">q</kbd></kbd>&nbsp HTML tab focus.</span><br>
        <span class="shortcutLine"><kbd><kbd>ctrl</kbd> <span>/</span> <kbd>⇧ shift</kbd> <span>+</span> <kbd class="singleLetters">w</kbd></kbd>&nbsp CSS tab focus.</span><br>
        <span class="shortcutLine"><kbd><kbd>ctrl</kbd> <span>/</span> <kbd>⇧ shift</kbd> <span>+</span> <kbd class="singleLetters">e</kbd></kbd>&nbsp JavaScript tab focus.</span><br>
        <span class="shortcutLine"><kbd><kbd>ctrl</kbd> <span>+</span> <kbd class="singleLetters">j</kbd></kbd>&nbsp Run JavaScript logic.</span><br>
        <span class="shortcutLine"><kbd><kbd>ctrl</kbd> <span>+</span> <kbd class="singleLetters">s</kbd></kbd>&nbsp Save file.</span><br>
        <span class="shortcutLine"><kbd><kbd>ctrl</kbd> <span>+</span> <kbd class="singleLetters">c</kbd> <span>/</span> <kbd class="singleLetters">i</kbd></kbd>&nbsp Open console.</span><br>
      </div>
    </div>
    
  </div>
</div>


<div id="readMeTXTFile" class="readMeTXTFile" onclick="closeTxtFile(event)">
  <div class="readMeContainer">
  <div class="insertLinkInputWrapper" id="insertLinkInputWrapper">
    <div class="inputURLWrapper">
    <input placeholder="https://www.someLinkResour..." type="text" name="imgLinkInput" id="insertTxtImageInput" class="insertLinkInput">
    <button onclick="addLinkToTxt()">Done</button>
    </div>
  </div>
  <div class="editButtons"> 
      <div class="txtBtnFlex">
        <span title="ALIGNMENT">
            <!-- alignment -->
            <button class="readMeBtn" data-edit="justifyLeft"><i class="fa-solid fa-align-left"></i></button>
            <button class="readMeBtn" data-edit="justifyCenter"><i class="fa-solid fa-align-center"></i></button>
            <button class="readMeBtn" data-edit="justifyRight"><i class="fa-solid fa-align-right"></i></button>
        </span>
        
        <span title="STYLES">

            <!-- bold -->
            <button class="readMeBtn" data-edit="bold"><b>B</b></button>
            <!-- italic -->
            <button class="readMeBtn" data-edit="italic"><i>I</i></button>
            <!-- underline -->
            <button class="readMeBtn" data-edit="underline"><u>U</u></button>
            <!-- strike -->
            <button class="readMeBtn" data-edit="strikeThrough"><s>S</s></button>
        </span>
        <span title="TEXT FORMAT">
            <!-- h1~h3 -->
            <button class="readMeBtn" data-edit="formatBlock:p">P</button>
            <button class="readMeBtn" data-edit="formatBlock:H1">h1</button>
            <button class="readMeBtn" data-edit="formatBlock:H2">h2</button>
            <button class="readMeBtn" data-edit="formatBlock:H3">h3</button>
        </span>

        <span title="FONT SIZE">
            <!-- font-size -->
            <button class="readMeBtn" data-edit="fontSize:1">S</button>
            <button class="readMeBtn" data-edit="fontSize:3">M</button>
            <button class="readMeBtn" data-edit="fontSize:5">L</button>
        </span>
      </div>

      <div class="txtBtnFlex">
        <span title="LISTS">
            <!-- ul/ol -->
            <button class="readMeBtn" data-edit="insertUnorderedList"><i class="fa-solid fa-list"></i></button>
            <button class="readMeBtn" data-edit="insertOrderedList"><i class="fa-solid fa-list-ol"></i></button>
        </span>
        <span title="INSERT">
          <!-- outdent -->
            <button class="readMeBtn" data-edit="insertImage"><i class="fa-regular fa-image"></i></button>
            <!-- indent -->
            <button class="readMeBtn" data-edit="createLink"><i class="fa-solid fa-link"></i></button>
            <!-- indent -->
            <button class="readMeBtn" data-edit="unlink"><i class="fa-solid fa-link-slash"></i></i></button>  
        </span>

        

        <span title="COPY"> 
            <!-- copy -->
            <button class="readMeBtn" data-edit="copy"><i class="fa-regular fa-clipboard"></i></button>
        </span>

         <span title="INDENT">
          <!-- indent -->
            <button class="readMeBtn btnFont" data-edit="fontName:serif">Serif</button>
            <!-- indent -->
            <button class="readMeBtn btnFont" data-edit="fontName:sans-serif">Sans-Serif</button>
        </span>
      </div>
    </div>
    <div contenteditable="true" id="textbox" class="redMeTextbox" autocorrect="off" autocomplete="off" autocapitalize="none" spellcheck="false">
        <h1>ReadMe.txt</h1>
    </div>
  </div>
</div>

<div onclick="hideShareWrapper(this, event)" class="sharePopUpWrapper" id="sharePopUpWrapper">
  <div class="sharePopUp">

  <h3 class="shareHeading">Share it, & make your code useful to others</h3>
  <p class="shareText">Spread the love <i class="fa-regular fa-heart"></i>, & help grow the community.</p>

  <div class="shareLinks">
      <!-- facebook -->
  <a onclick="hideShare()" class="facebook" target="blank">
    <i class="fab fa-facebook"></i>
    <span class="shareIconText">Facebook</span>
  </a>
  
  <!-- twitter -->
  <a onclick="hideShare()" class="twitter" target="blank"><i class="fab fa-twitter"></i><span class="shareIconText">Twitter</span>
  </a>
  <!-- linkedin -->
  <a onclick="hideShare()" class="linkedin" target="blank"><i class="fab fa-linkedin"></i><span class="shareIconText">Linkedin</span>
  </a>
  
  <!-- reddit -->
  <a onclick="hideShare()" class="reddit" target="blank"><i class="fab fa-reddit"></i><span class="shareIconText">Reddit</span>
  </a>

  <!-- whatsapp-->
  <a onclick="hideShare()" class="whatsapp" target="blank"><i class="fab fa-whatsapp"></i><span class="shareIconText">WhatsApp</span>
  </a>
  </div>
  <div class="shareLinkText">
    
  </div>
  <button onclick="shareLinkHref()" class="shareLinkBtn" id="shareLinkBtn"><i class="fa-regular fa-clipboard"></i>&nbsp; Copy Page Link</button>
  </div>
</div>


<section class="recorder-options sleepyBtn" onclick="closeRecOptions(this, event)">
   <div class="recOptionsWrapper">
    <div class="recHeadWrapper">
        <h2 class="recHeading"><i class="fas fa-video"></i></h2><h2 class="recHeadingText">CodeJS screen recorder and tutorials automation tool.</h2>
        <div class="displayRecFeaturesWrapper">
        <div class="displayRecFeatures">
            <div class="recFeaturePill"><p><i class="fa-regular fa-lightbulb"></i>&nbsp; Smart</p></div>
            <div class="recFeaturePill"><p><i class="fas fa-keyboard"></i>&nbsp; Automated</p></div>
            <div class="recFeaturePill"><p><i class="fa-solid fa-sack-dollar"></i>&nbsp; Free</p></div>
        </div>
        </div>
    </div>
    <hr class="splitLine">
    <div class="recHowToOuter"><div class="recHowTo"><p><i class="fa-regular fa-lightbulb"></i>&nbsp; Click on the "Start Manual Recording" button if you plan on typing in the code manually. When you are done, click on the green camera icon &nbsp;<i class="fas fa-video"></i>&nbsp; at the top of the screen to stop the recording and download your video.</p></div></div>
       <div class="recBtnWrapper"><div class="recHeadWrapIcon"><i class="fa-solid fa-display"></i> <h3 class="recHeading">&nbsp;Classic Screen Recording</h3></div> <button onclick="startRecording()" class="recBtn"><i class="fas fa-video"></i>&nbsp; Start Manual Recording</button></div>
       

       <!--<div class="recBtnWrapper"><button onclick="startRecording()" class="recBtn"><i class="fas fa-video"></i>&nbsp; Start Manual Recording</button></div>-->
       <hr class="splitLine">
       <div class="recHowToOuter"><div class="recHowTo"><p><i class="fa-regular fa-lightbulb"></i>&nbsp; Paste your code in the corresponding language fields & click on the "Start Automated Recording" button. Now relax and wait for your video & download button to appear on screen.</p></div></div>
       <div class="recBtnWrapper"><div class="recHeadWrapIcon"><i class="fas fa-keyboard"></i><h3 class="recHeading">&nbsp;Automated Screen Recording&nbsp;&nbsp;</h3><div class="recFeaturePill"><p>Experimental feature</p></div></div><button onclick="changeAutoRec(); " class="recBtn"><i class="fas fa-keyboard"></i>&nbsp; Start Automated Recording</button></div>
       <div class="recTextWrapper">
        <div class="recText"><h4>HTML</h4>
           <div contenteditable="true" class="recTextHtml" id="recTextHtml"></div>
        </div>
        <div class="recText"><h4>CSS</h4>
           <div contenteditable="true" class="recTextHtml" id="recTextCss"></div>
        </div>
        <div class="recText"><h4>JS</h4>
           <div contenteditable="true" class="recTextHtml" id="recTextJs"></div>
        </div>
       </div>
       <!--<div class="recBtnWrapperBottom"><button onclick="startRecording()" class="recBtn"><i class="fas fa-keyboard"></i>&nbsp; Start Automated Recording</button></div>-->
   </div> 
</section>

<video src="" class="video-feedback sleepyBtn"></video>

<section class="recorded-video-wrap sleepyBtn" onclick="closeRecVideo(this, event)">
   <video src="" controls width="1280" class="recorded-video sleepyBtn" id="recorded-video"></video>
   <div class="recDownWrapper">
       <a class="download-video"><button class="recDownBtn"><i class="fa-solid fa-floppy-disk"></i>&nbsp; Download video</button></a>
   </div>
</section>



<a class="download-video sleepyBtn"></a>

`
function loadHtmlDataAsync(){
	document.body.innerHTML += loadingHtml;
	//let parentNodeElement = document.getElementById("mainSettingsWindow");
	//console.log(parentNodeElement)
	//parentNodeElement.parentNode.insertBefore(loadingHtml, parentNodeElement.nextSibling)
}