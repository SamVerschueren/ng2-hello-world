import { Component, Input } from '@angular/core';

@Component({
	selector: 'my-footer',
	template: `<footer>&copy; {{name}}</footer>`
})
export class FooterComponent {
	@Input() name: string;
}
