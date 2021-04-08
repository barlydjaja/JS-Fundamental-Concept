// promotes loose coupling by ensuring that instead of modules referring to each other
//explicitly, their interaction is handled through this central point.

// centralized control
let mediator = (function () {

  // Storage for our topics/events
  const channels = {};

  // Subscribe to an event, supply a callback to be executed
  // when that event is broadcast
  const subscribe = function (channel, fn) {
    if (!channels[channel]) channels[channel] = [];
    channels[channel].push({context: this, callback: fn});
    return this;
  };
  // Publish/broadcast an event to the rest of the application
  const publish = function (channel) {
    if (!channels[channel]) return false;
    const args = Array.prototype.slice.call(arguments, 1);
    let i = 0;
    const l = channels[channel].length;
    for (; i < l; i++) {
      const subscription = channels[channel][i];
      subscription.callback.apply(subscription.context, args);
    }
    return this;
  };
  return {
    publish: publish,
    subscribe: subscribe,
    installTo: function (obj) {
      obj.subscribe = subscribe;
      obj.publish = publish;
    }
  };
}());

(function(m){
  let person = "luke"
  m.subscribe("nameChange", function(arg){
    console.log(person)
    person = arg
    console.log(person)
  })

  m.publish("nameChange", "David")
})(mediator)


