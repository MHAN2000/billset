import { Injectable, Type } from "@angular/core";
import { BehaviorSubject, map } from "rxjs";

export interface ModalState {
    isVisible: boolean;
    component: Type<any> | null;
    data: any;
}

@Injectable({
    providedIn: 'root'
})

export class ModalService {
    private readonly _initialState: ModalState = { isVisible: false, component: null, data: null };
    private readonly _modalState$ = new BehaviorSubject<ModalState>(this._initialState);

    state$ = this._modalState$.asObservable();
    isVisible$ = this._modalState$.pipe(map(state => state.isVisible));
    data$ = this._modalState$.pipe(map(state => state.data));

    constructor() { }

    open(component: Type<any>, data: any) {
        this._modalState$.next({
            isVisible: true,
            data: data,
            component: component
        });
    }

    close() {
        this._modalState$.next(this._initialState);
    }
}