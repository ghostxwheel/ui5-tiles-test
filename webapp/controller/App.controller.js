sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "com/sap/grish/test/Tiles/thirdparty/rgbcolor"
], function(Controller, RGBColor) {
  "use strict";

  return Controller.extend("com.sap.grish.test.Tiles.controller.App", {

    onInit: function() {
      var oTile = this.getView().byId("idTile");

      oTile.addEventDelegate({
        onAfterRendering: function(oEvent) {
          var color = null,
            randomColor = null,
            $control = oEvent.srcControl.$(),
            $customTile = $control.find(".sapMCustomTileContent");

          $control.css("padding", "0.6rem");

          randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

          $customTile.css("background-color", randomColor);
          $customTile.css("border-radius", "2%");

          color = new RGBColor($customTile.css("background-color"));

          if (color.ok) {
            //good to go, let"s build up this RGB baby!
            //subtract each color component from 255
            $customTile.find(".sapMText").css("color",
              "rgb(" + (255 - color.r) + ", " + (255 - color.g) + ", " + (255 - color.b) + ")");
          }
        }
      });

      var oDummyText = this.getView().byId("idDummyText");

      oDummyText.addEventDelegate({
        onAfterRendering: function(oEvent) {
          var $control = oEvent.srcControl.$();

          $control.css("width", "10px");
          $control.css("height", "10px");
          $control.css("position", "absolute");
          $control.css("top", "30px");
          $control.css("left", "-30px");
        }
      });

    },

    handlePopoverPress: function(oEvent) {

      // create popover
      if (!this._oPopover) {
        this._oPopover = sap.ui.xmlfragment("com.sap.grish.test.Tiles.view.Popover", this);
        //this.getViewU:\Users\Grifon\Downloads\openui5-parallax-master\src\openui5().byId("idLink").$().click(this.handleAfterClick.bind(this));
        this.getView().addDependent(this._oPopover);
        this._oPopover.bindElement("/ProductCollection/0");
      }

      // delay because addDependent will do a async rerendering and the actionSheet will immediately close without it.
      var oDummyText = oEvent.getSource().getContent().getContent()[1];
      jQuery.sap.delayedCall(0, this, function() {
        this._oPopover.openBy(oDummyText);
      });
    },

    handleAfterClick: function() {
      if (this._oPopover) {
        this._oPopover.close();
      }
    }

  });
});