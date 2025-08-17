import { Injectable } from "@angular/core";
import { Event } from "../pages/calendar/types";
import { BehaviorSubject, Observable } from "rxjs";

export interface LocalStorageState {
    events?: Event[];
    accounts?: any[];
    categories?: any[];
}

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {

    private readonly storageKey = 'data';

    private readonly _initialState: LocalStorageState = {
        events: [],
        accounts: [],
        categories: []
    };

    private readonly _state$ = new BehaviorSubject<LocalStorageState>(this._initialState);

    public readonly state$: Observable<LocalStorageState> = this._state$.asObservable();

    constructor() {
        this.loadStateFromLocalStorage();
    }

    public getState(): LocalStorageState {
        return this._state$.getValue();
    }

    public setState(newState: Partial<LocalStorageState>): void {
        const currentState = this.getState();
        const updatedState = { ...currentState, ...newState };
        localStorage.setItem(this.storageKey, JSON.stringify(updatedState));
        this._state$.next(updatedState);
    }

    private loadStateFromLocalStorage(): void {
        try {
            const savedState = localStorage.getItem(this.storageKey);
            if (savedState) {
                const parsedState = JSON.parse(savedState);
                const initialState = { ...this._initialState, ...parsedState };
                this._state$.next(initialState);
            }
        } catch (error) {
            console.error("Error loading state from localStorage", error);
        }
    }
}