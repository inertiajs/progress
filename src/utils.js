export function enqueueJob(callback) {
  if (typeof queueMicrotask === 'function') {
    return queueMicrotask(callback)
  }

  Promise.resolve().then(callback)
}
