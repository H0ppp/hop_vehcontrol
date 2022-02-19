fx_version 'cerulean'
game 'gta5'

shared_scripts {
    "config.lua"
}

client_scripts {
    "vehcontrol-c.lua",
    "menu-c.lua"
}

server_scripts {
    "vehcontrol-s.lua"
}

ui_page 'html/index.html'

files {
	'html/index.html',
    'html/css/main.css',
    'html/css/RadialMenu.css',
    'html/js/main.js',
    'html/js/RadialMenu.js'
}
dependencies {
    'baseevents'
}

author 'Jake Hopkins'
description 'Vehicle Control'
version '1.3'
