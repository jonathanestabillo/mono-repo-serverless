'use strict';

module.exports.sayHelloWithTime = async (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello Jonathan the current time is ${new Date().toTimeString()}.`,
    }),
  };

  return response;
};
