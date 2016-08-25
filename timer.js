

var timer = (function() {

    var display_el;
    var current_seconds = 5 * 60;
    var is_active = false;

    var format_time = function(number) {
        return Math.floor(number/60) + ':' + (number - Math.floor(number/60) * 60)
            + (number % 10 == 0 ? '0' : '');
    }

    var render = function() {

        display_el.innerHTML = format_time(current_seconds);

        if (is_active) {
            current_seconds--;
            window.setTimeout(render, 1000);
        }

        console.log('rendered...');
    };

    return {


        init: function(el) {
            display_el = el;

            console.log('Timer initialized');
        },

        start: function() {
            is_active = true;
            render();
            console.log('Timer started');
        },

        stop: function() {
            is_active = false;
            render();

            console.log('Timer stopped');
        },

        clear: function() {
            current_seconds = 5 * 60;
            is_active = false;
            render();

            console.log('Timer resetted');
        }
    }
})();

timer.init(document.getElementById('display'));

// attach listiners to buttons
document.getElementById('start').addEventListener('click', timer.start);
document.getElementById('stop').addEventListener('click', timer.stop);
document.getElementById('reset').addEventListener('click', timer.clear);