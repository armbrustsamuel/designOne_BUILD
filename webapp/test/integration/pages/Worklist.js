sap.ui.require([
		'sap/ui/test/Opa5',
		'sap/ui/test/matchers/AggregationLengthEquals',
		'sap/ui/test/matchers/PropertyStrictEquals',
		'sap/ui/test/matchers/BindingPath',
		'generated/app/test/integration/pages/Common',
		'sap/ui/test/actions/Press'
	],
	function (Opa5,
			  AggregationLengthEquals,
			  PropertyStrictEquals,
			  BindingPath,
			  Common,
			  Press) {
		"use strict";

		var sViewName = "1444936040491_S0";
		var sTableId = "sap_Responsive_Page_0-content-build_simple_Table-1472711338098";
		var sLineItemId = "sap_Responsive_Page_0-content-build_simple_Table-1472711338098-columns-build_simple_Column-1472711347729";

		Opa5.createPageObjects({
			onTheWorklistPage: {
				baseClass: Common,
				actions: {
					iPressOnMoreData: function () {
						return this.waitFor({
							id: sTableId,
							viewName: sViewName,
							actions: new Press(),
							errorMessage: "The Table does not have a trigger"
						});
					}
				},
				assertions: {
					iShouldSeeTheTable: function () {
						return this.waitFor({
							id: sTableId,
							viewName: sViewName,
							success: function () {
								Opa5.assert.ok(true, "The table is visible");
							},
							errorMessage: "Was not able to see the table."
						});
					}
				}
			}
		});

	});