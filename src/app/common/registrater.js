'use strict';

export default class Registrater {
    constructor(ngModule) {
        this.ngModule = ngModule;
    }

    registerComponents(components) {
        components.forEach(c => this.registerComponent(c));
        return this;
    }

    registerDirectives(directives) {
        directives.forEach(d => this.registerDirective(d));
        return this;
    }

    registerServices(services) {
        services.forEach(s => this.registerService(s));
        return this;
    }

    registerFactories(factories) {
        factories.forEach(f => this.registerFactory(f));
        return this;
    }

    registerFilters(filters) {
        filters.forEach(f => this.registerFilter(f));
        return this;
    }

    registerComponent(component) {
        this.ngModule.component(component.__name__, component);
        return this;
    }

    registerDirective(directive) {
        this.ngModule.directive(directive.__name__, directive);
        return this;
    }

    registerService(service) {
        this.ngModule.service(service.__name__, service);
        return this;
    }

    registerFactory(factory) {
        this.ngModule.factory(factory.__name__, factory);
        return this;
    }

    registerFilter(factory) {
        this.ngModule.filter(factory.__name__, factory);
        return this;
    }
}