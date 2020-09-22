import Nprogress from 'nprogress'

export default {
  delay: null,
  timeout: null,

  init({ delay = 250, showSpinner = false } = {}) {
    this.delay = delay

    Nprogress.configure({ showSpinner: showSpinner })

    document.addEventListener('inertia:start', this.start.bind(this))
    document.addEventListener('inertia:progress', this.progress.bind(this))
    document.addEventListener('inertia:finish', this.finish.bind(this))
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
