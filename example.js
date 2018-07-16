
/* global session driver */
const {cleanup} = require('@tiaanduplessis/cleanup')

const remove = cleanup((opts) => {
  console.log(opts) // { event: 'SIGINT' }
  session.close()
  driver.close()
}, {
  exit: true // call process.exit after handler
})

remove()// will remove handler
