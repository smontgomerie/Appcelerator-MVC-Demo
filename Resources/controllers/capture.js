Ti.include("../include/inheritance.js");
Ti.include("../include/db.js");
Ti.include("../common/controller.js");
Ti.include("../views/capture.js");

var CaptureController = Controller.extend({
    init: function(win) {
        this._super(win);

        this.view = new CaptureView(win, this);
    }
});

(function() {
    var win = Titanium.UI.currentWindow;

    new CaptureController(win);
})();

