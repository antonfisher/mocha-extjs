Ext.define('Sandbox.view.main.Main', {
    extend: 'Ext.container.Container',

    requires: [
        'Sandbox.view.main.MainController',
        'Sandbox.view.main.MainModel'
    ],

    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'fit'
    },

    items: {
        xtype: 'tabpanel',
        bodyPadding: 5,
        defaults: {
            xtype: 'container',
            layout: 'vbox',
            defaults: {
                xtype: 'button',
                margin: 5
            }
        },
        items: [{
            title: 'Buttons',
            items: [{
                text: 'Simple button',
                handler: 'onButtonsSimpleButtonClick'
            }, {
                text: 'Disable',
                handler: 'onButtonsDisableButtonClick'
            }]
        }, {
            title: 'Windows',
            items: [{
                text: 'Show confirm',
                handler: 'onWindowsShowConfirmButtonClick'
            }, {
                text: 'Yes'
            }]
        }, {
            title: 'Fields',
            items: [{
                xtype: 'textfield',
                fieldLabel: 'Name'
            }, {
                xtype: 'numberfield',
                fieldLabel: 'Count'
            }, {
                xtype: 'checkbox',
                boxLabel: 'include'
            }, {
                xtype: 'radio',
                boxLabel: 'check A',
                name: 'checkMe',
                value: 'a'
            }, {
                xtype: 'radio',
                boxLabel: 'check B',
                name: 'checkMe',
                value: 'b'
            }, {
                xtype: 'combobox',
                fieldLabel: 'Select in list',
                editable: false,
                store: [
                    ['a', 'Position A'],
                    ['b', 'Position B']
                ]
            }]
        }, {
            title: 'Grids',
            items: [{
                xtype: 'grid',
                title: 'Names',
                width: 300,
                height: 150,
                border: true,
                columns: [{
                    header: 'Name',
                    dataIndex: 'name',
                    flex: 1
                }, {
                    header: 'Count',
                    dataIndex: 'count'
                }],
                store: Ext.create('Ext.data.Store', {
                    fields: ['name', 'count'],
                    data: [{
                        name: 'Aaa',
                        count: 3
                    }, {
                        name: 'Bbb',
                        count: 5
                    }]
                })
            }]
        }, {
            title: 'LoadMasks',
            items: [{
                text: 'Show global',
                handler: 'onLoadMasksShowGlobalButtonClick'
            }, {
                text: 'Show component',
                handler: 'onLoadMasksShowComponentButtonClick'
            }]
        }, {
            title: 'Content',
            items: [{
                text: 'Show result',
                handler: 'onTextsShowTextButtonClick'
            }, {
                xtype: 'displayfield',
                labelWidth: 145,
                fieldLabel: 'Wait new content here',
                bind: {
                    value: '{buttonResultText}'
                }
            }, {
                text: 'Hide me',
                handler: 'onContentHideMeButtonClick'
            }]
        }]
    }
});
