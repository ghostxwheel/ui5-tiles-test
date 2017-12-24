sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"com/sap/grish/test/Tiles/model/models"
], function(UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("com.sap.grish.test.Tiles.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");

			// set the i18n model
			this.setModel(models.createI18NModel(), "i18n");

			// set the main model
			this.setModel(models.createMainModel());
		}
	});
});