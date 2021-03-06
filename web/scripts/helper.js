/**
 * Created by tyan on 15-2-12.
 */
var helper = (function(){

    var helper = {};

    var rooms = [];

    helper.room_exist = function () {

    };

    helper.add_room_tab = function (RoomName) {
        var $new_nav = $('<li class="room_tab"><a><i class="fi-x"></a></li>');
        $new_nav.children('a').prepend(RoomName);
        $new_nav.attr('id', RoomName + '_tab');
        $('#room_tab').append($new_nav);
    };

    helper.add_room = function (RoomName) {
        var $new_room = $('<div class="panel room"></div>');
        $new_room.attr('id', RoomName);
        $('.All-Chat').append($new_room);
    };

    helper.show_room = function (RoomName) {
        $('room').hide();
        $('#' + RoomName).show();
    };

    helper.remove_room_tab = function (RoomName) {
        $('#' + RoomName + '_tab').remove();
    };

    helper.removeRoom = function (RoomName) {
        remove_room_tab(RoomName);
        $('#' + RoomName).remove();
    };

    helper.activate_room_tab = function (RoomName) {
        $('.room_tab').removeClass('current');
        $('#' + RoomName + '_tab').addClass('current');
    };

    helper.add_message = function (Message) {
        var $new_msg = $(TEMP.message);
        $new_msg.children('img').attr('src', Message.poritrait || '');
        $new_msg.children('.chat_nick').text(Message.username);
        $new_msg.children('.chat_content').text(Message.msg);
        $('#' + Message.room).append($new_msg);
        helper.room_scroll_bottom(Message.room);
    };

    helper.add_message_self = function (RoomName, Message) {
        var $new_msg = $(TEMP.message_self);
        $new_msg.children('img').attr('src', Message.poritrait);
        $new_msg.children('.chat_nick').text(Message.username);
        $new_msg.children('.chat_content').text(Message.msg);
        $('#' + RoomName).append($new_msg);
        helper.room_scroll_bottom(RoomName);
    };

    helper.add_sys_message = function (RoomName, MessageStr) {
      var $sys_message = $(TEMP.sys_message);
      $sys_message.text(MessageStr);
      $('#' + RoomName).append($sys_message);
      helper.room_scroll_bottom(RoomName);
    };

    helper.room_scroll_bottom = function (RoomName) {
      $('#' + RoomName).animate({
          scrollTop: $('#' + RoomName).height()
      }, 300);
    };



    return helper;

}());
