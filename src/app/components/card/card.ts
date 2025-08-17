import { CommonModule } from "@angular/common";
import { Component, ContentChild, Input, TemplateRef } from "@angular/core";

@Component({
    selector: 'card',
    templateUrl: './card.html',
    imports: [CommonModule]
})

export class CardComponent { 
    @ContentChild('cardCustom') cardCustomTemplate!: TemplateRef<any>;
    @Input() icon?: string;
    @Input() header?: string;
    @Input() value?: number | string;
    @Input() color?: string = '';
}