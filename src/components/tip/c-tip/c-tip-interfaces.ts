/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export interface CTipActions {
    /**
     * This will be called when tip content is made invisible.
     */
    onHide?(): void;

    /**
     * This will be called when tip content is made visible.
     */
    onShow?(): void;
}
