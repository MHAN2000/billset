import { Component, Input } from "@angular/core";

@Component({
    selector: 'categories-accounts-card',
    templateUrl: './categories-accounts-card.html',
    imports: [CategoriesAccontsCardComponent]
})

export class CategoriesAccontsCardComponent {
    @Input() icon!: string;
    @Input() type!: string;
    @Input() value!: string;

}