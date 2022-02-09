'use strict';

var menuItems = [
    {
        id   : 'trunk',
        title: 'Trunk'
    },
    {
        id   : 'seat',
        title: 'Seats',
        icon: '#more',
        items: [
            {
                id: 'seat -1',
                title: 'Driver'
            },
            {
                id: 'seat 0',
                title: 'Passenger'
            },
            {
                id: 'seat 1',
                title: 'Back 1'
            },
            {
                id: 'seat 2',
                title: 'Back 2'
            },
            {
                id: 'seat 3',
                title: 'Back 3'
            },
            {
                id: 'seat 4',
                title: 'Back 4'
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
        title: 'Hood'
    },
    {
        id   : 'window',
        title: 'Windows',
        icon: '#more',
        items: [
            {
                id: 'rlwindow',
                title: 'RL Window'
            },
            {
                id: 'flwindow',
                title: 'FL Window'
            },
            {
                id: 'frwindow',
                title: 'FR Window'
            },
            {
                id: 'rrwindow',
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
                title: 'RL Door'
            },
            {
                id: 'fldoor',
                title: 'FL Door'
            },
            {
                id: 'frdoor',
                title: 'FR Door'
            },
            {
                id: 'rrdoor',
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