function printLoggingInfo(err) {
  err 
    ? console.error(`Request Logging Error: ${err.message}.`) 
    : console.log('Logged successfuly.')
}

module.exports = printLoggingInfo;