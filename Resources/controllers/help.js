Ti.include("../include/inheritance.js");
Ti.include("../include/db.js");
Ti.include("../common/controller.js");
Ti.include("../views/help.js");

var HelpController = Controller.extend({
    init: function(win) {
        this._super(win);

        this.view = new HelpView(win, this);
    }
});

(function() {
    var win = Titanium.UI.currentWindow;

    new HelpController(win);
})();

