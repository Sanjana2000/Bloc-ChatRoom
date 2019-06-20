
(function() {
	function HomeCtrl(Room, Message, $scope) {
		this.rooms = Room.all;

		$scope.activeRoom = function(room) {
			$scope.currentRoom = room;
			$scope.messages = Message.getByRoomId($scope.currentRoom.$id);
		};
	}

	angular
		.module('blocChat')
		.controller('HomeCtrl', ['Room', 'Message', '$scope', HomeCtrl]);
})();
