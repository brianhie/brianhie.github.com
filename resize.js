_width_resize = function(event) {
    console.log('here');
    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth;

    var small = false, medium = false, large = false;
    var head = document.getElementById("main_content");
    if (head) {
	console.log('here2');
	if (x < 1100 && !small) {
	    head.style.maxWidth = "80%";
	    small = true;
	    medium = false;
	    large = false;
	} else if (x < 1500 && !medium) {
	    head.style.maxWidth = "65%";
	    small = false;
	    medium = true;
	    large = false;
	} else if (!large) {
	    head.style.maxWidth = "50%";
	    small = false;
	    medium = false;
	    large = true;
	}
    }
};

document.addEventListener("DOMContentLoaded", function() {
    _width_resize();
});

window.addEventListener("resize", _width_resize);


