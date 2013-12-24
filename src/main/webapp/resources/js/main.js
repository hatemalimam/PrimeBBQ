/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



$(document).ready(function() {
    
    $('.ui-menuitem-link').click(function(event) {
        event.preventDefault();
        var currentNav = $(this).attr('href').substr($(this).attr('href').indexOf("/faces") + 6)
        window.location.hash = '#' + currentNav;
        
    })


    // Bind an event to window.onhashchange that, when the history state changes,
    // gets the url from the hash and displays fetches
    // new content to be displayed.
    $(window).bind('hashchange', function(e) {

        // Get the hash (fragment) as a string, with any leading # removed. Note that
        // in jQuery 1.4, you should use e.fragment instead of $.param.fragment().
        var url = $.param.fragment();
        updateNav([{name: 'currentNav', value: url}]);

    })

    // Since the event is only triggered when the hash changes, we need to trigger
    // the event now, to handle the hash the page may have loaded with.
    $(window).trigger('hashchange');
});
