var gameUI;

gameUI = {
	init: () => {
		var tankContainer = bySel("#tankContainer"),
		    dvTank = bySel("#dvTank");

		dvTank.disabled = true;
        
		gameUI.updateContainer(tankContainer, dvTank);

	},
	updateContainer: (tankContainer, dvTank) => {
        var newTankForm = createEle("div");
        
        newTankForm.innerHTML = "NEW TANK";
        newTankForm.className = "newTankForm";

        tankContainer.append(newTankForm);

        setTimeout(() => {
        	makeFull(newTankForm);
        }, 230);
	}
};
//gameUI.init();
