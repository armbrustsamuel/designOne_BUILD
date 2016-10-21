sap.ui.require(
	["sap/ui/test/opaQunit"],
	function (opaTest) {
		"use strict";

		QUnit.module("Posts");

		opaTest("Should see the table with all Posts", function (Given, When, Then) {
			// Arrangements
			Given.iStartMyApp();

			// Actions
			When.onTheWorklistPage.iPressOnMoreData();

			// Assertions
			Then.onTheWorklistPage.iShouldSeeTheTable().
		 		and.iTeardownMyAppFrame();
		});
	}
);