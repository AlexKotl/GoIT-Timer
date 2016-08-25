

var timer = (function() {

    var timer_display;

    var render = function() {
        console.log('rendered...');
    };

    return {


        init: function(el) {
            this.timer_display = el;
            console.log('Timer initialized');
        },

        start: function() {
            console.log('Timer started');
        },

        stop: function() {
            console.log('Timer stopped');
        },

        clear: function() {
            console.log('Timer resetted');
        }
    }
})();

timer.init(document.getElementById('display'));

// attach listiners to buttons
document.getElementById('start').addEventListener('click', timer.start);
document.getElementById('stop').addEventListener('click', timer.stop);
document.getElementById('reset').addEventListener('click', timer.clear);