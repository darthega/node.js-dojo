var setMsg = function(msg, owner, clear) {
  var $msgList = $('#messages');
  var $msgItem = $('<li>');
  var now = new Date().toTimeString().slice(0,8);
  var ownerStr = (owner === 'host') ? 'Host' : 'Client';

  $msgItem.html(msg);
  $msgItem.attr('data-owner', ownerStr + ' - ' + now);

  if (clear) {
    $msgList.html('');
  }

  if (owner === 'host') {
    $msgItem.addClass('host-msg');
  }

  $msgList.append($msgItem);
};

(function() {
  'use strict';

  var socket = io();
  var $form = $('.form');

  $form.on('submit', function(e){
    let msgString = $form.find('#m').val();
    e.preventDefault();
    socket.emit('chatMsg', {msg: msgString});

    $form.find('#m').val('');
  });

  socket.on('connectedUsr', function(e){
    setMsg(e.msg, 'host', true);
  });

  socket.on('chatMsg', function(e){
    setMsg(e.msg, 'client');
  });
}());
