var gameUI;

gameUI = {
	init: () => {
		var tankContainer = bySel("#tankContainer"),
		    dvTank = bySel("#dvTank");

		dvTank.disabled = true;
        tankContainer.innerHTML = "";
		gameUI.updateContainer(tankContainer, dvTank);

	},
	updateContainer: (tankContainer, dvTank) => {
        var newTankForm = createEle("div"),
            newTankIn = createEle("input"),
            difficultyRngHolder = createEle("div"),
            difficultyRngLabel = createEle("label"),
            difficultyRng = createEle("input"),
            cheatToggle = createEle("input"),
            cheatSpan = createEle("span"),
            cheatLabel = createEle("label"),
            newTankCheatThing = createEle("div"),
            newTankMapPreviewBox = createEle("div"),
            newTankFormBtnHolder = createEle("div"),
            newTankFormBtn = createEle("button"),
            newTankType = createEle("select"),
            newTankSize = createEle("select"),
            optSmall = createEle("option"),
            optMed = createEle("option"),
            optLarge = createEle("option"),
            opt0 = createEle("option"),
            opt1 = createEle("option"),
            opt2 = createEle("option"),
            opt3 = createEle("option"),
            opt4 = createEle("option"),
            opt5 = createEle("option"),
            opt6 = createEle("option"),
            opt7 = createEle("option"),
            opt8 = createEle("option"),
            opt9 = createEle("option");
        
        difficultyRngLabel.innerHTML = "NORMAL";
        difficultyRngLabel.className = "difficultyRngLabel";

        difficultyRng.type = "range";
        difficultyRng.max = 3;
        difficultyRng.min = 1;
        difficultyRng.value = 2;
        difficultyRng.className = "difficultyRng";
        difficultyRng.onchange = gameUI.changeDiff(difficultyRng, difficultyRngLabel);

        difficultyRngHolder.className = "difficultyRngHolder";
        difficultyRngHolder.append(difficultyRngLabel);
        difficultyRngHolder.append(difficultyRng);


        newTankMapPreviewBox.innerHTML = "&nbsp;";
        newTankMapPreviewBox.className = "newTankMapPreviewBox";

        newTankFormBtn.innerHTML = "✔";
        newTankFormBtn.disabled = true;

        newTankFormBtnHolder.className = "newTankFormBtnHolder";
        newTankFormBtnHolder.append(newTankFormBtn);

        cheatSpan.className = "slider";

        cheatToggle.type = "checkbox";
        cheatToggle.name = "checkboxCheats";
        cheatToggle.className = "checkboxes";
        cheatToggle.id = "ch1";
        
        cheatLabel.className = "cheatLabel";
        cheatLabel.id = "cheatLabel";
        cheatLabel.append(cheatToggle);
        cheatLabel.append(cheatSpan);

        newTankCheatThing.innerHTML = "CHEATS";
        newTankCheatThing.className = "newTankCheatThing";
        newTankCheatThing.append(cheatLabel);

        optLarge.innerHTML = "LARGE";
        optLarge.value = "3";

        optMed.innerHTML = "MEDIUM";
        optMed.value = "2";

        optSmall.innerHTML = "SMALL";
        optSmall.value = "1";

        newTankSize.type = "text";
        newTankSize.selected = "0";
        newTankSize.className = "tankFormItems";
        newTankSize.name = "selectTerra";
        newTankSize.append(optSmall);
        newTankSize.append(optMed);
        newTankSize.append(optLarge);
      
        opt9.innerHTML = "CHAPARRAL";
        opt9.value = "9";

        opt8.innerHTML = "BOREAL";
        opt8.value = "8";

        opt7.innerHTML = "FEN";
        opt7.value = "7";

        opt6.innerHTML = "SWAMP";
        opt6.value = "6"; 
        
        opt5.innerHTML = "TUNDRA";
        opt5.value = "5";  

        opt4.innerHTML = "MARSH";
        opt4.value = "4";  
        
        opt3.innerHTML = "RAIN FOREST";
        opt3.value = "3";

        opt2.innerHTML = "DESERT";
        opt2.value = "2";

        opt1.innerHTML = "TEMPERATE FOREST";
        opt1.value = "1";
        
        opt0.innerHTML = "GRASSLAND";
        opt0.value = "0";

        newTankType.type = "text";
        newTankType.selected = "0";
        newTankType.className = "tankFormItems";
        newTankType.name = "selectTerra";
        newTankType.append(opt0);
        newTankType.append(opt1);
        newTankType.append(opt2);
        newTankType.append(opt3);
        newTankType.append(opt4);
        newTankType.append(opt5);
        newTankType.append(opt6);
        newTankType.append(opt7);
        newTankType.append(opt8);
        newTankType.append(opt9);

        newTankIn.type = "text";
        newTankIn.placeholder = "NAME";
        newTankIn.className = "tankFormItems";
        newTankIn.onkeyup = gameUI.checkAndRun(newTankForm, newTankIn, newTankType, newTankSize, cheatToggle, difficultyRng, newTankFormBtn);

        newTankForm.innerHTML = "<h2>NEW TANK</h2>";
        newTankForm.className = "newTankForm";
        newTankForm.append(newTankIn);
        newTankForm.append(newTankType);
        newTankForm.append(newTankSize);
        newTankForm.append(newTankCheatThing);
        newTankForm.append(difficultyRngHolder);
        newTankForm.append(newTankMapPreviewBox);
        newTankForm.append(newTankFormBtnHolder);


        tankContainer.append(newTankForm);
        
        setTimeout(() => {
        	makeFull(newTankForm);
        }, 250);
	},
	changeDiff: (difficultyRng, difficultyRngLabel) => {
		return () => {
         var diffText;

         if (difficultyRng.value === "1") {
             diffText = "EASY";
         }
         if (difficultyRng.value === "2") {
             diffText = "NORMAL";
         }
         if (difficultyRng.value === "3") {
             diffText = "HARD";
         }

         difficultyRngLabel.innerHTML = diffText;
     }
	},
	checkAndRun: (newTankForm, newTankIn, newTankType, newTankSize, cheatToggle, difficultyRng, newTankFormBtn) => {
		return () => {
			if (newTankIn.value != "" || newTankIn.value != " " || newTankIn.value != "   ") {
				newTankFormBtn.disabled = false;
				newTankFormBtn.onclick = gameUI.runTankAdd(newTankForm, newTankIn, newTankType, newTankSize, cheatToggle, difficultyRng);
			} else {
				newTankFormBtn.disabled = true;
			}
		}
	},
	runTankAdd: (newTankForm, newTankIn, newTankType, newTankSize, cheatToggle, difficultyRng) => {
		return () => {
			//takeFull(newTankForm);
			
			var mSGs = loadLS("mySavedGames");
			if (!mSGs || mSGs === null) {
				var savedItems = newTankIn.value;
            LSinit("mySavedGames", savedItems);
            } else {
	            
            }
		}
	}
};
