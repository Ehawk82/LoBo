var gameUI;

gameUI = {
	init: () => {
		var tankContainer = bySel("#tankContainer"),
		    dvTank = bySel("#dvTank");

		dvTank.disabled = true;
        
		gameUI.updateContainer(tankContainer, dvTank);

	},
	updateContainer: (tankContainer, dvTank) => {
        var newTankForm = createEle("div"),
            newTankIn = createEle("input"),
            newTankType = createEle("select"),
            opt0 = createEle("option"),
            opt1 = createEle("option"),
            opt2 = createEle("option"),
            opt3 = createEle("option"),
            opt4 = createEle("option"),
            opt5 = createEle("option"),
            opt6 = createEle("option"),
            opt7 = createEle("option"),
            opt8 = createEle("option");
            opt9 = createEle("option"),
        
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

        newTankIn.type = "text";
        newTankIn.placeholder = "TANK NAME";
        newTankIn.className = "tankFormItems";

        newTankForm.innerHTML = "<h2>NEW TANK</h2>";
        newTankForm.className = "newTankForm";
        newTankForm.append(newTankIn);
        newTankForm.append(newTankType);

        tankContainer.append(newTankForm);
        

        setTimeout(() => {
        	makeFull(newTankForm);
        }, 230);
	}
};
//gameUI.init();
