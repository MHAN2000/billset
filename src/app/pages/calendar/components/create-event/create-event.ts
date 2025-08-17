import { Component } from "@angular/core";
import { ContainerComponent } from "../../../../components/container/container";
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";

@Component({
    selector: 'create-event',
    templateUrl: './create-event.html',
    imports: [ContainerComponent, CommonModule, ReactiveFormsModule]
})

export class CreateEventComponent {
    eventForm = new FormGroup({
        title: new FormControl('', [Validators.required, Validators.minLength(1)]),
        description: new FormControl('', []),
        category: new FormControl(null, [Validators.required]),
        date: new FormControl(null, [Validators.required]),
        amount: new FormControl(null, [Validators.required]),
        type: new FormControl(null, [Validators.required]),
        frequency: new FormControl(null, [Validators.required]),
        account: new FormControl(null, [Validators.required])
    })
 }