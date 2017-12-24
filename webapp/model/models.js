sap.ui.define([
  "sap/ui/model/json/JSONModel",
  "sap/ui/Device",
  "sap/ui/model/resource/ResourceModel"
], function(JSONModel, Device, ResourceModel) {
  "use strict";

  return {

    createDeviceModel: function() {
      var oModel = new JSONModel(Device);
      oModel.setDefaultBindingMode("OneWay");
      return oModel;
    },

    createI18NModel: function() {
      var oModel = new ResourceModel({
        bundleUrl: "i18n/i18n.properties"
      });

      return oModel;
    },

    createMainModel: function() {
      var oModel = new JSONModel("model/model.json");

      return oModel;
    }

  };
});