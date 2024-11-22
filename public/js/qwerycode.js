let tabs = document.querySelectorAll('.tabs__toggle'),
    contents = document.querySelectorAll('.tabs__content');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        contents.forEach((content) => {
            content.classList.remove('is-active');
            if(tab.innerText == "CSS" || tab.innerText == "JavaScript"){
                tabsBody.classList.add("tabsBodyHtmlNoFocus");
            }else{
                tabsBody.classList.remove("tabsBodyHtmlNoFocus");
            }
        });
        tabs.forEach((tab) => {
            tab.classList.remove('is-active');
        });
        contents[index].classList.add('is-active');
        tabs[index].classList.add('is-active');
    });
});



let settingsTabs = document.querySelectorAll('.settingsTabs__toggle'),
    settingsContents = document.querySelectorAll('.settingsTabs__content');

settingsTabs.forEach((settingsTab, index) => {
    settingsTab.addEventListener('click', () => {
        settingsContents.forEach((settingsContent) => {
            settingsContent.classList.remove('is-active');
        });
        settingsTabs.forEach((settingsTab) => {
            settingsTab.classList.remove('is-active');
        });
        settingsContents[index].classList.add('is-active');
        settingsTabs[index].classList.add('is-active');
    });
});