var myUI = {
	init: () => {
		myUI.loadout();
	},
	loadout: () => {
		var dvContain = createEle("div"),
		    btnFrame = createEle("div"),
		    dnaBtn = createEle("div"),
		    invBtn = createEle("div"),
		    natureBtn = createEle("div"),
		    storeBtn = createEle("div"),
		    mapBtn = createEle("div"),
		    homeBtn = createEle("div"),
		    settingsBtn = createEle("div");
        
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

		btnFrame.className = "btnFrame";
		btnFrame.append(homeBtn);
		btnFrame.append(settingsBtn);
		btnFrame.append(mapBtn);
		btnFrame.append(storeBtn);
		btnFrame.append(natureBtn);
		btnFrame.append(invBtn);
		btnFrame.append(dnaBtn);

        dvContain.className = "dvContain";
        dvContain.append(btnFrame);

		loboGame.append(dvContain);
	}
};
window.onload = () => {
	myUI.init();
};