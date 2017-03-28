'use strict';

import './animations.less';
import template from './navigation-inline.html';

class Controller {
    constructor() {
        'ngInject';
    }

    $onInit() {
        this.searchMode = true;
    }

    setSearchVisibility(visible) {
        if (this.searchMode === visible) {
            return;
        }

        this.searchMode = visible;
    }
}

export const NavigationInlineComponent = {
    __selector__: 'navigationInline',
    template,
    controller: Controller
};