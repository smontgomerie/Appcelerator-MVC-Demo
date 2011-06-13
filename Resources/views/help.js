Ti.include("../include/inheritance.js");
Ti.include("../include/db.js");
Ti.include("../common/view.js");

var HelpView = View.extend({
    init: function(win, controller) {
        this._super(win, controller);

        this.layout();
    },

    layout: function() {
        var html = '<html><body><div style="color:red;">Hello from inline HTML. You should see red text and yellow background</div></body></html>';

        var webview = Ti.UI.createWebView();
        webview.html = html;

        this.win.add(webview);
    }

});
