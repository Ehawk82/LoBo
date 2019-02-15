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
		fsBtn.onclick = myUI.toggleScreen(fsBtn);

        rewardsBtn.innerHTML = "🌟";
		rewardsBtn.id = "rewards";
		rewardsBtn.className = "buttons";

        dnaBtn.innerHTML = "💡";
		dnaBtn.id = "dna";
		dnaBtn.className = "buttons";
        
        invBtn.innerHTML = "📦";
		invBtn.id = "inventory";
		invBtn.className = "buttons";

        natureBtn.innerHTML = "🌲";
		natureBtn.id = "nature";
		natureBtn.className = "buttons";

        storeBtn.innerHTML = "💲";
		storeBtn.id = "store";
		storeBtn.className = "buttons";

        mapBtn.innerHTML = "📜";
		mapBtn.id = "map";
		mapBtn.className = "buttons";

        homeBtn.innerHTML = "🏠";
		homeBtn.className = "buttons";
		homeBtn.id = "home";
		homeBtn.onclick = myUI.goHome();

		settingsBtn.innerHTML = "⚙";
		settingsBtn.className = "buttons";

		btnFrameL.className = "btnFrameL";
		btnFrameL.append(homeBtn);
		btnFrameL.append(mapBtn);
		btnFrameL.append(storeBtn);
		btnFrameL.append(natureBtn);
		btnFrameL.append(invBtn);
		btnFrameL.append(dnaBtn);

        btnFrameR.className = "btnFrameR";
		btnFrameR.append(rewardsBtn);
        btnFrameR.append(settingsBtn);
        btnFrameR.append(fsBtn);

        dvContain.className = "dvContain";
        dvContain.append(btnFrameL);
        dvContain.append(btnFrameR);

		loboGame.append(dvContain);

		setTimeout(() => {
            makeFull(homeBtn);
            setTimeout(() => {
            	myUI.spawnPage();
            }, 40);
		}, 10);
	},
	spawnPage: () => {
        var btns = bySelAll(".buttons_full");
        
        console.log(btns);
	},
	toggleScreen: (fsBtn) => {
		return () => {
			var isInFullScreen = (document.fullscreenElement && document.fullscreenElement !== null) ||
        (document.webkitFullscreenElement && document.webkitFullscreenElement !== null) ||
        (document.mozFullScreenElement && document.mozFullScreenElement !== null) ||
        (document.msFullscreenElement && document.msFullscreenElement !== null);

    		var docElm = document.documentElement;
    		if (!isInFullScreen) {
    			fsBtn.innerHTML = "➖";
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
    			fsBtn.innerHTML = "🔳";

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
	},
	goHome: () => {
		return () => {
			location.reload();
		}
	}
};
window.onload = () => {
	myUI.init();
};