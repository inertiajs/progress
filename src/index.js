import Nprogress from 'nprogress'

export default {
  delay: null,
  timeout: null,

  init({ delay = 250, showSpinner = false } = {}) {
    this.delay = delay

    this.configureNProgress({ showSpinner })
    this.registerEvents()
    this.injectCSS()
  },

  configureNProgress(config) {
    Nprogress.configure(config)
  },

  registerEvents() {
    document.addEventListener('inertia:start', this.start.bind(this))
    document.addEventListener('inertia:progress', this.progress.bind(this))
    document.addEventListener('inertia:finish', this.finish.bind(this))
  },

  injectCSS() {
    const element = document.createElement('style')
    element.type = 'text/css'
    element.textContent = `
      #nprogress {
        pointer-events: none;
      }

      #nprogress .bar {
        background: #29d;

        position: fixed;
        z-index: 1031;
        top: 0;
        left: 0;

        width: 100%;
        height: 2px;
      }

      #nprogress .peg {
        display: block;
        position: absolute;
        right: 0px;
        width: 100px;
        height: 100%;
        box-shadow: 0 0 10px #29d, 0 0 5px #29d;
        opacity: 1.0;

        -webkit-transform: rotate(3deg) translate(0px, -4px);
            -ms-transform: rotate(3deg) translate(0px, -4px);
                transform: rotate(3deg) translate(0px, -4px);
      }

      #nprogress .spinner {
        display: block;
        position: fixed;
        z-index: 1031;
        top: 15px;
        right: 15px;
      }

      #nprogress .spinner-icon {
        width: 18px;
        height: 18px;
        box-sizing: border-box;

        border: solid 2px transparent;
        border-top-color: #29d;
        border-left-color: #29d;
        border-radius: 50%;

        -webkit-animation: nprogress-spinner 400ms linear infinite;
                animation: nprogress-spinner 400ms linear infinite;
      }

      .nprogress-custom-parent {
        overflow: hidden;
        position: relative;
      }

      .nprogress-custom-parent #nprogress .spinner,
      .nprogress-custom-parent #nprogress .bar {
        position: absolute;
      }

      @-webkit-keyframes nprogress-spinner {
        0%   { -webkit-transform: rotate(0deg); }
        100% { -webkit-transform: rotate(360deg); }
      }
      @keyframes nprogress-spinner {
        0%   { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `
    document.head.appendChild(element)
  },

  start() {
    clearTimeout(this.timeout)
    this.timeout = setTimeout(() => {
      Nprogress.set(0)
      Nprogress.start()
    }, this.delay)
  },

  progress(event) {
    if (event.detail.progress.completed) {
      Nprogress.set(event.detail.progress.completed / 100 * .9)
    }
  },

  finish() {
    clearTimeout(this.timeout)
    Nprogress.done()
  },
}
