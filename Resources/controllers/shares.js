Ti.include("../include/inheritance.js");
Ti.include("../include/db.js");
Ti.include("../common/controller.js");
Ti.include("../views/shares.js");

var ShareController = Controller.extend({
    init: function(win) {
        this._super(win);

        this.view = new ShareView(win, this);
    }
});

(function() {
    var win = Titanium.UI.currentWindow;

    new ShareController(win);
})();

