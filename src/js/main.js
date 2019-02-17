var myUI;
myUI = {
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
		dnaBtn.onclick = myUI.goMap(dnaBtn);
		
        
        invBtn.innerHTML = "📦";
		invBtn.id = "inventory";
		invBtn.className = "buttons";
		invBtn.onclick = myUI.goMap(invBtn);


        natureBtn.innerHTML = "🌲";
		natureBtn.id = "nature";
		natureBtn.className = "buttons";
		natureBtn.onclick = myUI.goMap(natureBtn);


        storeBtn.innerHTML = "💲";
		storeBtn.id = "store";
		storeBtn.className = "buttons";
		storeBtn.onclick = myUI.goMap(storeBtn);

        mapBtn.innerHTML = "📜";
		mapBtn.id = "map";
		mapBtn.className = "buttons";
		mapBtn.onclick = myUI.goMap(mapBtn);

        homeBtn.innerHTML = "🏠";
		homeBtn.className = "buttons";
		homeBtn.id = "home";
		homeBtn.onclick = myUI.goMap(homeBtn);

		settingsBtn.innerHTML = "⚙";
		settingsBtn.id = "settings";

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
        var btns = bySelAll(".buttons_full"), elem = btns[0].id,
            section = createEle("section"), sDiv = createEle("div"),
            h1 = createEle("h1"), sectionText, sectionImg;

        if (elem === "home") {
        	sectionText = "HOME";
        	sectionDiv = "<div class='item_holder'><div class='items'>" + homeSect[0] + "</div><div class='items'>" + homeSect[1] + "</div><div class='items'>" + homeSect[2] + "</div>" + "</div>";
        	sectionImg = "room";
        }
        if (elem === "map") {
        	sectionText = "WORLD MAP";
        	sectionDiv = "<div class='item_holder'><div class='items'>" + mapSect[0] + "</div><div class='items'>" + mapSect[1] + "</div><div class='items'>" + mapSect[2] + "</div>" + "</div>";
        	sectionImg = "map";
        }
        if (elem === "store") {
        	sectionText = "MARKET";
        	sectionDiv = "<div class='item_holder'><div class='items'>" + marketSect[0] + "</div><div class='items'>" + marketSect[1] + "</div><div class='items'>" + marketSect[2] + "</div>" + "</div>";
        	sectionImg = "market";
        }
        if (elem === "nature") {
        	sectionText = "NATURE";
        	sectionDiv = "<div class='item_holder'><div class='items'>" + natureSect[0] + "</div><div class='items'>" + natureSect[1] + "</div><div class='items'>" + natureSect[2] + "</div>" + "</div>";
        	sectionImg = "nature";
        }
        if (elem === "inventory") {
        	sectionText = "INVENTORY";
        	sectionDiv = "<div class='item_holder'><div class='items'>" + invSect[0] + "</div><div class='items'>" + invSect[1] + "</div><div class='items'>" + invSect[2] + "</div>" + "</div>";
        	sectionImg = "inventory";
        }
        if (elem === "dna") {
        	sectionText = "RESEARCH";
        	sectionDiv = "<div class='item_holder'><div class='items'>" + dnaSect[0] + "</div><div class='items'>" + dnaSect[1] + "</div><div class='items'>" + dnaSect[2] + "</div>" + "</div>";
        	sectionImg = "dna";
        }

        h1.innerHTML = sectionText;

        sDiv.innerHTML = sectionDiv;
        sDiv.className = "sDiv";
        sDiv.style.backgroundImage = "url('../LoBo/src/assets/" + sectionImg + ".jpg')";

        section.append(h1);
        section.append(sDiv);
        loboGame.append(section);

        var item_holder = bySel(".item_holder");
        setTimeout(() => {
            makeFull(item_holder);
        }, 200);
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
	goMap: (x) => {
		return () => {
			var full_btns = bySelAll(".buttons_full"), section = byTag("section", 0);
			if (full_btns[0].id != x.id) {
				takeFull(full_btns[0]);
                makeFull(x);
                section.remove();
                myUI.spawnPage();
			} else {

			}
		}
	}
};
window.onload = () => {
	myUI.init();
};