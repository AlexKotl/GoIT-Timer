

class CTimer {

    format_time(number) {
        let mins = Math.floor(number/60);
        let secs = number - Math.floor(number/60) * 60;

        return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }

    render() {
        this._display_el.innerHTML = this.format_time(this._current_seconds);

        if (this._is_active) {
            this._current_seconds++;
            window.setTimeout(this.render.bind(this), 1000);
        }
    }

    constructor(el) {
        this._display_el = el;
        this._current_seconds = 0;
        this._is_active = false;

        console.log('Timer initialized');
    }

    start() {
        this._is_active = true;
        this.render();
    }

    stop() {
        this._is_active = false;
        this.render();
    }

    clear() {
        this._current_seconds = 0;
        this._is_active = false;
        this.render();
    }
};
    
var timer = new CTimer(document.getElementById('display'));
//timer.start();

// attach listiners to buttons
document.getElementById('start').addEventListener('click', timer.start.bind(timer));
document.getElementById('stop').addEventListener('click', timer.stop.bind(timer));
document.getElementById('reset').addEventListener('click', timer.clear.bind(timer));