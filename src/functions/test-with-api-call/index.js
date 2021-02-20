
"use strict";
exports.handler = async (event, context, callback) => {
    console.log(`Debug: event received: ${JSON.stringify(event)}`);
    const body = `Hello ${event.body ? event.body : 'World'}!`;
    const statusCode = 200;
    // Just throw in some async stuff to mislead everybody <3 :) 
  return  new Promise((resolve, reject) => {
        resolve({"statusCode":statusCode,"body":JSON.stringify({
            message:body
        } )})
    })
};