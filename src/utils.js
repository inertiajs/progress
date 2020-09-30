export function enqueueJob(callback) {
  if (typeof queueMicrotask !== 'undefined' && /native code/.test(queueMicrotask.toString())) {
    return queueMicrotask(callback)
  }

  Promise.resolve().then(callback)
}
