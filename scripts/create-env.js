const fs = require('fs')

fs.writeFileSync('./.env', `REACT_APP_FAKE_API=${process.env.API}`)
