/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {LogManager} from 'aurelia-framework';

const logger = LogManager.getLogger('design-system: c-tip');
export class TipActions {
    public tipCols = [
        {
            _class: 'monospaced',
            colClass: 't175',
            colHeadName: 'name',
            colHeadValue: 'Name',
        },
        {
            _class: 'monospaced',
            colClass: 't350',
            colHeadName: 'value',
            colHeadValue: 'Value',
        },
        {
            colHeadName: 'description',
            colHeadValue: 'Description',
        },
        {
            _class: 'monospaced',
            colClass: 't120',
            colHeadName: 'default',
            colHeadValue: 'Default',
        },
    ];

    public tipActions = [
        {
            default: '',
            description: 'Callback functions supported: onHide, onShow. See actions section below for examples.',
            name: 'actions',
            value: 'Object with callback functions.',
        },
    ];

    public tipActionsFunction = {
        onHide: () => {
            logger.info('Hello from onHide callback');
        },
        onShow: () => {
            logger.info('Hello from onShow callback');
        },
    };
}
