var myUI = {
	init: () => {
		myUI.loadout();
	},
	loadout: () => {
		console.log("working loadout");
	}
};
window.onload = () => {
	myUI.init();
};