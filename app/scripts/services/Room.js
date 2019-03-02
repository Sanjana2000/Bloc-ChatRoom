//(function() {
//  function Room($firebaseArray) {
//    var ref = firebase.database().ref();
  //}

  //angular
//    .module('blocChat')
  //  .factory('Room', ['$firebaseArray', Room]);
//})();
//

(function() {
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    Room.all = rooms;

    return Room;
  }

  angular
    .module('ChatRoom')
    .factory('Room', ['$firebaseArray', Room]);
})();
