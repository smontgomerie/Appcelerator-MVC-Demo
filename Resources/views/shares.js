Ti.include("../include/inheritance.js");
Ti.include("../include/db.js");
Ti.include("../common/view.js");

var ShareView = View.extend({
    init: function(win, controller) {
        this._super(win, controller);

        this.layout();
    },

    layout: function() {
        var tableView = Ti.UI.createTableView({
            data: [{title: "A Photo"} , {title: "Another Photo"}]
        });

        this.win.add(tableView);
    }

});
