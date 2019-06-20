(function() {
	function ModalInstanceCtrl($uibModalInstance) {

		this.ok = function() {
			$uibModalInstance.close(this.name);
		};

		this.cancel = function() {
			$uibModalInstance.dismiss();
		};

	}

	angular
		.module('blocChat')
		.controller('ModalInstanceCtrl', ['$uibModalInstance', 'Room', ModalInstanceCtrl]);
})();
