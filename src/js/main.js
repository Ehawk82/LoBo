var myUI = {
	init: () => {
		myUI.loadout();
	},
	loadout: () => {
		var dvContain = createEle("div"),
		    btnFrameL = createEle("div"),
		    btnFrameR = createEle("div"),
		    fsBtn = createEle("div"),
		    rewardsBtn = createEle("div"),
		    dnaBtn = createEle("div"),
		    invBtn = createEle("div"),
		    natureBtn = createEle("div"),
		    storeBtn = createEle("div"),
		    mapBtn = createEle("div"),
		    homeBtn = createEle("div"),
		    settingsBtn = createEle("div");
        
        fsBtn.innerHTML = "🔳";
		fsBtn.className = "buttons";
		fsBtn.onclick = myUI.toggleScreen();

        rewardsBtn.innerHTML = "🌟";
		rewardsBtn.className = "buttons";

        dnaBtn.innerHTML = "💡";
		dnaBtn.className = "buttons";
        
        invBtn.innerHTML = "📦";
		invBtn.className = "buttons";

        natureBtn.innerHTML = "🌲";
		natureBtn.className = "buttons";

        storeBtn.innerHTML = "💲";
		storeBtn.className = "buttons";

        mapBtn.innerHTML = "📜";
		mapBtn.className = "buttons";

        homeBtn.innerHTML = "🏠";
		homeBtn.className = "buttons";

		settingsBtn.innerHTML = "⚙";
		settingsBtn.className = "buttons";

		btnFrameL.className = "btnFrameL";
		btnFrameL.append(homeBtn);
		btnFrameL.append(settingsBtn);
		btnFrameL.append(mapBtn);
		btnFrameL.append(storeBtn);
		btnFrameL.append(natureBtn);
		btnFrameL.append(invBtn);
		btnFrameL.append(dnaBtn);
		btnFrameL.append(rewardsBtn);

        btnFrameR.className = "btnFrameR";
        btnFrameR.append(fsBtn);

        dvContain.className = "dvContain";
        dvContain.append(btnFrameL);
        dvContain.append(btnFrameR);

		loboGame.append(dvContain);
	},
	toggleScreen: () => {
		return () => {
			var isInFullScreen = (document.fullscreenElement && document.fullscreenElement !== null) ||
        (document.webkitFullscreenElement && document.webkitFullscreenElement !== null) ||
        (document.mozFullScreenElement && document.mozFullScreenElement !== null) ||
        (document.msFullscreenElement && document.msFullscreenElement !== null);

    		var docElm = document.documentElement;
    		if (!isInFullScreen) {
        		if (docElm.requestFullscreen) {
            		docElm.requestFullscreen();
        		} else if (docElm.mozRequestFullScreen) {
            		docElm.mozRequestFullScreen();
        		} else if (docElm.webkitRequestFullScreen) {
            		docElm.webkitRequestFullScreen();
        		} else if (docElm.msRequestFullscreen) {
            		docElm.msRequestFullscreen();
        		}
    		} else {
        		if (document.exitFullscreen) {
            		document.exitFullscreen();
        		} else if (document.webkitExitFullscreen) {
            		document.webkitExitFullscreen();
        		} else if (document.mozCancelFullScreen) {
            		document.mozCancelFullScreen();
        		} else if (document.msExitFullscreen) {
            		document.msExitFullscreen();
        		}
    		}
		}
	}
};
window.onload = () => {
	myUI.init();
};