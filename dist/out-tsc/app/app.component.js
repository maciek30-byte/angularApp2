import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
let AppComponent = class AppComponent {
    constructor() {
        this.dummyTrafficData = [
            {
                id: 'd1',
                value: 433,
            },
            {
                id: 'd2',
                value: 260,
            },
            {
                id: 'd3',
                value: 290,
            },
            {
                id: 'd4',
                value: 410,
            },
            {
                id: 'd5',
                value: 397,
            },
            {
                id: 'd6',
                value: 488,
            },
            {
                id: 'd47',
                value: 589,
            },
        ];
        this.maxTraffic = Math.max(...this.dummyTrafficData.map((data) => data.value));
        this.currentStatus = 'online';
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        standalone: true,
        templateUrl: './app.component.html',
        imports: [
            HeaderComponent
        ]
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map