(function() {
	function ModalCtrl($uibModal, Room) {
		this.open = function() {
			var modalInstance = $uibModal.open({
				templateUrl : '/templates/modal.html',
				controller: 'ModalInstanceCtrl',
				controllerAs: 'modalInstance'
			});

			modalInstance.result.then(function(name) {
				// save the room in firebase using Room service
				Room.create(name);
			})
		}

	}

	angular
		.module('blocChat')
		.controller('ModalCtrl', ['$uibModal', 'Room', ModalCtrl]);
})();
