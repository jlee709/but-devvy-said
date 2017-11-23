const { Wit, log } = require('node-wit');
const MIN_CONFIDENCE = 0.50;

module.exports = function(token) {
  
  if (!token) {
    throw new Error ('Please provide a Wit token!');
  }

  // new instatiation of Wit
  const client = new Wit({
    // pass Wit a valid token
    accessToken : token
    // logger : new log.Logger(log.DEBUG) // optional
  });

  return {
    receive : receive,
    hears : hears    
  };

  function receive(bot, message, next) {
    console.log('wit.receive HEARD MIDDLEWARE==========')
    console.log(message);
    // Wit will only recieve TEXT
    if (message.text && message.type !== 'self_message') {

      // sends the received message to Wit
      return client.message(message.text)
      .then(data => {           
        message.entities = data.entities;
        message.info_type = message.entities.info_type;
        message.db_query = message.entities.db_query;
        message.greetings = message.entities.greetings;

        next();
      })
      .catch(err => {
        console.log('wit error', err);
        message.error = true;
        next();
      });
    }

  }

  function hears(patterns, message) {
    console.log('wit.hears HEAR MIDDLEWARE==========')
    console.log(message);
    // patterns is the first argument of controller.hears
    if (patterns) return true;

    if (patterns && message.entities && message.entities.db_query) {
      return message.entities.db_query.some(query => {
        return patterns.some(pattern => {
          // check for a pattern that wants everything

          if (query.value === pattern && query.confidence >= MIN_CONFIDENCE) {
            return true;
          }
        });
      });
    }

    return false;
  }
};
