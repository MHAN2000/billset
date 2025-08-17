import { Component, HostListener, ViewChild, ViewContainerRef } from "@angular/core";
import { ModalService } from "./services/modal.service";
import { Observable, Subscription } from "rxjs";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'modal',
    templateUrl: './modal.html',
    styleUrls: ['./modal.css'],
    imports: [CommonModule]
})

export class ModalComponent {

    @ViewChild('dynamicComponentAnchor', { read: ViewContainerRef, static: false })
    private viewContainerRef!: ViewContainerRef;
    private stateSubscription!: Subscription;
    isVisible$!: Observable<boolean>;
    data$!: Observable<any>;

    constructor(private modalService: ModalService) {
        this.isVisible$ = this.modalService.isVisible$;
        this.data$ = this.modalService.data$;
    }

    ngAfterViewInit(): void {
        this.stateSubscription = this.modalService.state$.subscribe(state => {
            if (this.viewContainerRef)
                this.viewContainerRef.clear();
            
            if (state.isVisible && state.component) {
                if (this.viewContainerRef) {
                    const componentRef = this.viewContainerRef.createComponent(state.component);
                    if (state.data && componentRef.instance) {
                        (componentRef.instance as any).data = state.data;
                    }
                }
            }
        });
    }

    @HostListener('window:keydown', ['$event'])
    onKeydown(event: KeyboardEvent) {
        if (event.key === 'Escape') {
            this.closeModal();
        }
    }

    closeModal() {
        this.modalService.close();
    }

    ngOnDestroy() {
        this.stateSubscription.unsubscribe();
    }
}