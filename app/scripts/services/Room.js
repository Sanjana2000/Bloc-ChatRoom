(function() {
	function Room($firebaseArray) {
		var ref = firebase.database().ref().child("rooms");
		var rooms = $firebaseArray(ref);

		return {
			all: rooms,
			create: function(name) {
				// store in firebase using $add
				rooms.$add({ $value: name }).then(function(ref) {
					var id = ref.key;
					console.log("added record with id" + id);
					rooms.$indexFor(id);
				});
			}
		};
	}

	angular
		.module('blocChat')
		.factory('Room', ['$firebaseArray', Room]);
})();
