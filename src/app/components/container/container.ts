import { CommonModule } from "@angular/common";
import { Component, ContentChild, Input, TemplateRef } from "@angular/core";

@Component({
    selector: 'container',
    templateUrl: './container.html',
    standalone: true,
    imports: [CommonModule]
})

export class ContainerComponent {
    @Input() title!: string;
    @Input() subtitle!: string;
    @Input() icon!: string;
    @ContentChild('body') bodyTemplate!: TemplateRef<any>;
}