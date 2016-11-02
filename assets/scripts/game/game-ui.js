'use strict';
const store = require('../store.js');


const success = (data) => {
  store.game = data.game;
 console.log(store);
 console.log(data);
};
const moveSuccess = (data) => {
  console.log(data);
};


const failure = (error) => {
  $("#messages").text("failure");
  console.error(error);
};

module.exports = {
  failure,
  success,
  moveSuccess
};