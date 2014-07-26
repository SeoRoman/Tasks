forumApp.service('Session', function() {
	this.create = function (userId) {
		this.userId = userId;
	}

	this.destroy = function() {
		this.userId = null;
	}

	return this;
})