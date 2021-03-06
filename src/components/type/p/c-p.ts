/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable} from 'aurelia-framework';
import * as styles from './c-p.css.json';

export class CP {
    @bindable
    public color = 'var(--c_smoke)';
    @bindable
    public maxWidth = 'unset';
    @bindable
    public size = 'medium';
    @bindable
    public truncate = false;

    public styles = styles;
}
