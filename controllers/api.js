exports.install = function() {
	F.route('/api', showindex);
};

function showindex() {
	var self = this;
	self.json('api index');
}
