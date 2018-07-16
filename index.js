'use strict'

var self = module.exports = {
  /**
   * Logs the message as if you called console.log but prefixes the output with the process.pid and current time
   */
  log: function() {
    setImmediate(() => {
      let args = Array.prototype.slice.call(arguments);

      args.unshift(new Date().toISOString());
      args.unshift(process.pid);

      args = args.map(i => '[' + i + ']');

      console.log.apply(this, args);
    });
  },

  /**
   * Logs the message as if you called console.error but prefixes the output with the process.pid and current time
   */
  error: function() {
    setImmediate(() => {
      let args = Array.prototype.slice.call(arguments);

      args.unshift(new Date().toISOString());
      args.unshift(process.pid);

      args = args.map(i => '[' + i + ']');

      console.error.apply(this, args);
    });
  }
};
