Ti.include("../include/inheritance.js");
Ti.include("../include/db.js");
Ti.include("../common/view.js");

var MainView = View.extend({
    init: function(win, controller)
    {
        this._super(win, controller);

        this.layout();
    },

    layout: function()
    {

        var tabs = this.tabs = [
            {title: "Capture", tabTitle: "Capture", controller: "capture.js",
                icon: "KS_nav_ui.png"
            },
            {title: "Share", controller: "shares.js", navBarHidden: true,
                icon: "KS_nav_ui.png"
            },
            {title: "Help", controller: "help.js", navBarHidden: true,
                icon: "KS_nav_ui.png"
            }
        ];

        var tabGroup = this.tabGroup = Titanium.UI.createTabGroup({
            activeTab: 0
        });

        var _this = this;
        setTimeout(function()
        {
            _this.createTabGroup();
        }, 500);
    },

    createTabGroup: function()
    {

        Ti.API.info("createTabGroup");

        for (var i = 0; i < this.tabs.length; i++)
        {
            var tab = this.tabs[i];
            // create tab and window
            //
            var w = Ti.UI.createWindow({
                title: tab.title,
                url: "../controllers/" + tab.controller,
                tabGroup: this.tabGroup,
                navBarHidden: tab.navBarHidden,
                fullscreen: tab.modal,
                titleControl: tab.titleControl
            });

            var items_tab = Titanium.UI.createTab({
                icon:tab.icon,
                title:tab.tabTitle || tab.title,
                window:w,
                badge: tab.badge
            });

            //
            //  add tabs
            //
            this.tabGroup.addTab(items_tab);
        }

        var _this = this;
        this.tabGroup.addEventListener("focus", function(e)
        {

        });

        this.tabGroup.addEventListener("open", function()
        {
        });

        this.tabGroup.setActiveTab(0);

        this.tabGroup.open();

        this.win.backgroundColor = "transparent";
        this.win.backgroundImage = null;


    }

});
