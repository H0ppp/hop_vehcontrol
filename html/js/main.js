'use strict';

var menuItems = [
    {
        id   : 'trunk',
        title: 'Trunk',
        icon: '#walk'
    },
    {
        id   : 'lights',
        title: 'Lights',
        icon: '#run'
    },
    {
        id   : 'engine',
        title: 'Engine',
        icon: '#drive'
    },
    {
        id   : 'hood',
        title: 'Hood',
        icon: '#fight'
    },
    {
        id   : 'more',
        title: 'Windows',
        icon: '#more',
        items: [
            {
                id: 'rlwindow',
                icon: '#firearm',
                title: 'RL Window'
            },
            {
                id: 'flwindow',
                icon: '#firearm',
                title: 'FL Window'
            },
            {
                id: 'frwindow',
                icon: '#firearm',
                title: 'FR Window'
            },
            {
                id: 'rrwindow',
                icon: '#firearm',
                title: 'RR Window'
            }
        ]
    },
    {
        id: 'door',
        title: 'Doors',
        icon: '#more',
        items: [
            {
                id: 'rldoor',
                icon: '#firearm',
                title: 'RL Door'
            },
            {
                id: 'fldoor',
                icon: '#firearm',
                title: 'FL Door'
            },
            {
                id: 'frdoor',
                icon: '#firearm',
                title: 'FR Door'
            },
            {
                id: 'rrdoor',
                icon: '#firearm',
                title: 'RR Door'
            }
        ]
    }
];

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
window.onload = function () {
    var svgMenu = new RadialMenu({
        parent      : document.body,
        size        : 400,
        closeOnClick: false,
        menuItems   : menuItems,
        onClick     : function (item) {
            console.log('You have clicked:', item.id, item.title);
            NUIcommand(item.id);
        }
    });

    var openMenu = document.getElementById('openMenu');
    openMenu.onclick = function () {
        svgMenu.open();
    };

    var closeMenu = document.getElementById('closeMenu');

    closeMenu.onclick = function () {
        svgMenu.close();
        NUIclose();

    };

    window.addEventListener('message', (event) => {
        if (event.data.type === 'open') {
            svgMenu.open();
        }
    });

};


function NUIclose() {
    fetch(`https://${GetParentResourceName()}/close`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            itemId: 'close'
        })
    }).then(resp => resp.json()).then(resp => console.log(resp));
}

function NUIcommand(commandString) {
    fetch(`https://${GetParentResourceName()}/command`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            itemId: commandString
        })
    }).then(resp => resp.json()).then(resp => console.log(resp));
}