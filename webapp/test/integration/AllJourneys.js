jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",	
	 "generated/app/test/integration/pages/Common",
	 "generated/app/test/integration/pages/Worklist"
	// "sap/ui/demo/bulletinboard/test/integration/pages/Browser",
	// "sap/ui/demo/bulletinboard/test/integration/pages/Post"
	//"sap/ui/demo/bulletinboard/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "generated.app.view."
	});

	sap.ui.require([
		"generated/app/test/integration/WorklistJourney"
		// "sap/ui/demo/bulletinboard/test/integration/PostJourney"
		//"sap/ui/demo/bulletinboard/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});