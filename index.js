const EVENTS = ['exit', 'SIGINT', 'SIGUSR1', 'SIGUSR2', 'uncaughtException', 'SIGTERM', 'SIGHUP', 'SIGQUIT']

function cleanup (handler = () => {}, opts = {}) {
  const events = opts.events || EVENTS
  const remove = []
  events.forEach(eventName => {
    const wrapper = (response) => {
      const result = {event: eventName}

      if (typeof response === 'number') {
        result.code = response
      }

      if (response instanceof Error) {
        result.error = response
      }

      handler(result)
      opts.exit && process.exit()
    }
    process.on(eventName, wrapper)
    remove.push(() => process.removeListener(eventName, wrapper))
  })

  return () => {
    remove.forEach(c => c())
  }
}

module.exports = {
  EVENTS,
  cleanup
}
