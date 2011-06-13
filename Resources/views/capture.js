Ti.include("../include/inheritance.js");
Ti.include("../include/db.js");
Ti.include("../common/view.js");

var CaptureView = View.extend({
    init: function(win, controller) {
        this._super(win, controller);

        this.layout();
    },

    layout: function() {

        var button = Titanium.UI.createButton({
            color:'#fff',
            backgroundImage:'../images/BUTT_grn_on.png',
            backgroundSelectedImage:'../images/BUTT_grn_off.png',
            backgroundDisabledImage: '../images/BUTT_gry_on.png',
            bottom:10,
            width:301,
            height:57,
            font:{fontSize:20,fontWeight:'bold',fontFamily:'Helvetica Neue'},
            title:'Take Picture'
        });

        var messageView = Titanium.UI.createView({
            height:30,
            width:250,
            visible:false
        });

        var indView = Titanium.UI.createView({
            height:30,
            width:250,
            backgroundColor:'#000',
            borderRadius:10,
            opacity:0.7
        });
        messageView.add(indView);

// message
        var message = Titanium.UI.createLabel({
            text:'Picture Taken',
            color:'#fff',
            font:{fontSize:20,fontWeight:'bold',fontFamily:'Helvetica Neue'},
            width:'auto',
            height:'auto'
        });
        messageView.add(message);

        var overlay = Titanium.UI.createView();
        overlay.add(button);
        overlay.add(messageView);

        button.addEventListener('click',function()
        {
            scanner.borderColor = 'blue';
            Ti.Media.takePicture();
            messageView.animate({visible:true});
            setTimeout(function()
            {
                scanner.borderColor = 'red';
                messageView.animate({visible:false});
            },500);
        });

        this.win.add(overlay);
    }

});
