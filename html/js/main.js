'use strict';

var menuItems = [
    {
        id   : 'trunk',
        title: 'Trunk',
        icon: '#trunk'
    },
    {
        id   : 'seat',
        title: 'Seats',
        icon: '#more',
        items: [
            {
                id: 'seat -1',
                title: 'Driver',
                icon: '#seat'
            },
            {
                id: 'seat 0',
                title: 'Passenger',
                icon: '#seat'
            },
            {
                id: 'seat 1',
                title: 'Back 1',
                icon: '#seat'
            },
            {
                id: 'seat 2',
                title: 'Back 2',
                icon: '#seat'
            },
            {
                id: 'seat 3',
                title: 'Back 3',
                icon: '#seat'
            },
            {
                id: 'seat 4',
                title: 'Back 4',
                icon: '#seat'
            }
        ]
    },
    {
        id   : 'engine',
        title: 'Engine',
        icon: '#drive'
    },
    {
        id   : 'hood',
        title: 'Hood',
        icon: '#hood'
    },
    {
        id   : 'window',
        title: 'Windows',
        icon: '#more',
        items: [
            {
                id: 'rlwindow',
                title: 'RL Window',
                icon: '#windowLeft'
            },
            {
                id: 'flwindow',
                title: 'FL Window',
                icon: '#windowLeft'
            },
            {
                id: 'frwindow',
                title: 'FR Window',
                icon: '#windowRight'
            },
            {
                id: 'rrwindow',
                title: 'RR Window',
                icon: '#windowRight'
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
                title: 'RL Door',
                icon: '#doorLeft'
            },
            {
                id: 'fldoor',
                title: 'FL Door',
                icon: '#doorLeft'
            },
            {
                id: 'frdoor',
                title: 'FR Door',
                icon: '#doorRight'
            },
            {
                id: 'rrdoor',
                title: 'RR Door',
                icon: '#doorRight'
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
    }).then(resp => resp.json());
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
    }).then(resp => resp.json());
}