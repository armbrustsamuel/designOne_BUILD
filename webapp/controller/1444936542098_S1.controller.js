sap.ui.define(["sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
], function(BaseController, History) {
	"use strict";

	return BaseController.extend("generated.app.controller.1444936542098_S1", {

		onAfterRendering: function() {

		},

		onInit: function() {
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getTarget("1444936542098_S1").attachDisplay(jQuery.proxy(this.handleRouteMatched, this));

		},
		handleRouteMatched: function(oEvent) {
			var params = {
				"expand": "RelatedProduct,RelatedProduct/Product,ReviewSet,ReviewSet/Reviewpostedby"
			};
			if (oEvent.mParameters.data.context || oEvent.mParameters.data.masterContext) {
				this.sContext = oEvent.mParameters.data.context;
				this.sMasterContext = oEvent.mParameters.data.masterContext;

				if (!this.sContext) {
					this.getView().bindElement("/" + this.sMasterContext, params);
				} else {
					this.getView().bindElement("/" + this.sContext, params);
				}

			}

		},
		_onButtonPress1: function() {
			var oBindingContext = this.getView().getBindingContext();

			this.doNavigate("1444936040491_S0", oBindingContext);

		},
		doNavigate: function(sRouteName, oBindingContext) {

			var that = this;
			var sPath = (oBindingContext) ? oBindingContext.getPath() : null;
			var oModel = (oBindingContext) ? oBindingContext.getModel() : null;

			var entityNameSet;
			if (sPath !== null && sPath !== "") {

				if (sPath.substring(0, 1) === "/") {
					sPath = sPath.substring(1);
				}
				entityNameSet = sPath.split("(")[0];
			}
			var navigationPropertyName;
			var sMasterContext = this.sMasterContext ? this.sMasterContext : sPath;

			if (entityNameSet !== null) {
				navigationPropertyName = that.getOwnerComponent().getNavigationPropertyForNavigationWithContext(entityNameSet, sRouteName);
			}
			if (navigationPropertyName !== null && navigationPropertyName !== undefined) {
				if (navigationPropertyName === "") {
					this.oRouter.navTo(sRouteName, {
						context: sPath,
						masterContext: sMasterContext
					}, false);
				} else {
					oModel.createBindingContext(navigationPropertyName, oBindingContext, null, function(bindingContext) {
						sPath = bindingContext.getPath();
						if (sPath.substring(0, 1) === "/") {
							sPath = sPath.substring(1);
						}

						// If the navigation is a 1-n, sPath would be "undefined" as this is not supported in Build
						if (sPath === "undefined") {
							that.oRouter.navTo(sRouteName);
						} else {
							that.oRouter.navTo(sRouteName, {
								context: sPath,
								masterContext: sMasterContext
							}, false);
						}
					});
				}
			} else {
				this.oRouter.navTo(sRouteName);
			}
		},
		_onButtonPress: function() {
			var targetPos = "default";
			targetPos = (targetPos === "default") ? undefined : targetPos;
			sap.m.MessageToast.show("Added to Cart", {
				duration: 3000 || 3000,
				at: targetPos,
				my: targetPos
			});
		},
		_onTableItemPress: function(oEvent) {
			var oListItem = oEvent.getParameter("listItem");
			var oBindingContext = oListItem.getBindingContext();

			this.doNavigate("1444936542098_S1", oBindingContext);

		},
		_onTableItemPress1: function(oEvent) {
			var oListItem = oEvent.getParameter("listItem");
			var oBindingContext = oListItem.getBindingContext();

			this.doNavigate("1444937755408_S2", oBindingContext);

		}
	});
}, /* bExport= */ true);