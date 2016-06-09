import {Component} from 'angular2/core';
import {ZippyComponent} from './zippy.component';
@Component({
    selector: 'my-app',
    template: `
      <zippy title="hey its a title">
        This is the content for the body.
      </zippy>
    `,
    directives: [ZippyComponent]
})
export class AppComponent { }
