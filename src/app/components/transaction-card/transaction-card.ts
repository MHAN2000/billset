import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { Event } from "../../pages/calendar/types";

@Component({
    selector: 'transaction-card',
    templateUrl: './transaction-card.html',
    imports: [CommonModule]
})

export class TransactionCardComponent {
    @Input() event!: Event;
}