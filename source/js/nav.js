$(function() {
        // this will get the full URL at the address bar
        var url = window.location.href;
        // passes on every "a" tag
        $(".container .row .nav a").each(function() {
            var currentLocation = findLocation(window.location.host, url);
            var target = findLocation(this.host, this.href);
            // checks if its the same on the address bar
            if (currentLocation === target) {
                $(this).closest("li").addClass("active");
                //for making parent of submenu active
               $(this).closest("li").parent().parent().addClass("active");
            }
        });
    });

function findLocation(host, url){
  return url.split(host)[1].split('/')[1].replace('.php','');
}


$(function() {
        // this will get the full URL at the address bar
        var url = window.location.href;
        // passes on every "a" tag
        $("li.nav-item a.nav-link").each(function() {
            var currentLocation = findLocation(window.location.host, url);
            var target = findLocation(this.host, this.href);
            // checks if its the same on the address bar
            if (currentLocation === target) {
                $(this).closest("li").addClass("active");
                //for making parent of submenu active
               $(this).closest("li").parent().parent().addClass("active");
            }
        });
    });
