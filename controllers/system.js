var si = require('systeminformation');

exports.install = function() {
	F.route('/api/system/commands', showindex);
	F.route('/api/system/uptime', uptime);
	F.route('/api/system/sysinfo', sysinfo);
	F.route('/api/system/bios', bios);
	F.route('/api/system/cpu', cpu);
	F.route('/api/system/cpuFlags', cpuFlags);
	F.route('/api/system/cpuCache', cpuCache);
	F.route('/api/system/cpuCurrentspeed', cpuCurrentspeed);
	F.route('/api/system/cpuTemperature', cpuTemperature);
	F.route('/api/system/mem', mem);
	F.route('/api/system/memLayout', memLayout);
	F.route('/api/system/diskLayout', diskLayout);
	F.route('/api/system/battery', battery);
	F.route('/api/system/graphics', graphics);
	F.route('/api/system/osInfo', osInfo);
	F.route('/api/system/versions', versions);
	F.route('/api/system/shell', shell);
	F.route('/api/system/users', users);
	F.route('/api/system/fsSize', fsSize);
	F.route('/api/system/blockDevices', blockDevices);
	F.route('/api/system/fsStats', fsStats);
	F.route('/api/system/disksIO', disksIO);
	F.route('/api/system/networkInterfaces', networkInterfaces);
	F.route('/api/system/networkInterfaceDefault', networkInterfaceDefault);
	F.route('/api/system/networkStats', networkStats);
	F.route('/api/system/networkConnections', networkConnections);
	F.route('/api/system/currentLoad', currentLoad);
	F.route('/api/system/processes', processes);
};

function showindex() {
	var self = this;
	var cmds = [
		"uptime",
		"sysinfo",
		"bios",
		"cpu",
		"cpuFlags",
		"cpuCache",
		"cpuCurrentspeed",
		"cpuTemperature",
		"mem",
		"memLayout",
		"diskLayout",
		"battery",
		"graphics",
		"osInfo",
		"versions",
		"shell",
		"users",
		"fsSize",
		"blockDevices",
		"fsStats",
		"disksIO",
		"networkInterfaces",
		"networkInterfaceDefault",
		"networkStats",
		"networkConnections",
		"currentLoad",
		"processes"
	];
	self.json(cmds);
}
function uptime() {
	var self = this;
	self.json(si.time().uptime);
}
function sysinfo() {
	var self = this;
	si.system(function (data) {
		self.json(data);
	});
}
function bios() {
	var self = this;
	si.bios(function (data) {
		self.json(data);
	});
}
function baseboard() {
	var self = this;
	si.baseboard(function (data) {
		self.json(data);
	});
}
function cpu() {
	var self = this;
	si.cpu(function (data) {
		self.json(data);
	});
}
function cpuFlags() {
	var self = this;
	si.cpuFlags(function (data) {
		self.json(data);
	});
}
function cpuCache() {
	var self = this;
	si.cpuCache(function (data) {
		self.json(data);
	});
}
function cpuCurrentspeed() {
	var self = this;
	si.cpuCurrentspeed(function (data) {
		self.json(data);
	});
}
function cpuTemperature() {
	var self = this;
	si.cpuTemperature(function (data) {
		self.json(data.cores);
	});
}
function mem() {
	var self = this;
	si.mem(function (data) {
		self.json(data);
	});
}
function memLayout() {
	var self = this;
	si.memLayout(function (data) {
		self.json(data);
	});
}
function diskLayout() {
	var self = this;
	si.diskLayout(function (data) {
		self.json(data);
	});
}
function battery() {
	var self = this;
	si.battery(function (data) {
		self.json(data);
	});
}
function graphics() {
	var self = this;
	si.graphics(function (data) {
		self.json(data);
	});
}
function osInfo() {
	var self = this;
	si.osInfo(function (data) {
		self.json(data);
	});
}
function versions() {
	var self = this;
	si.versions(function (data) {
		self.json(data);
	});
}
function shell() {
	var self = this;
	si.shell(function (data) {
		self.json(data);
	});
}
function users() {
	var self = this;
	si.users(function (data) {
		self.json(data);
	});
}
function fsSize() {
	var self = this;
	si.fsSize(function (data) {
		self.json(data);
	});
}
function blockDevices() {
	var self = this;
	si.blockDevices(function (data) {
		self.json(data);
	});
}
function fsStats() {
	var self = this;
	si.fsStats(function (data) {
		self.json(data);
	});
}
function disksIO() {
	var self = this;
	si.disksIO(function (data) {
		self.json(data);
	});
}
function networkInterfaces() {
	var self = this;
	si.networkInterfaces(function (data) {
		self.json(data);
	});
}
function networkInterfaceDefault() {
	var self = this;
	si.networkInterfaceDefault(function (data) {
		self.json(data);
	});
}
function networkStats() {
	var self = this;
	si.networkStats(function (data) {
		self.json(data);
	});
}
function networkConnections() {
	var self = this;
	si.networkConnections(function (data) {
		self.json(data);
	});
}
function currentLoad() {
	var self = this;
	si.currentLoad(function (data) {
		self.json(data);
	});
}
function processes() {
	var self = this;
	si.processes(function (data) {
		self.json(data);
	});
}
