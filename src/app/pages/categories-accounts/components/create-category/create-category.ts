import { Component, Input } from "@angular/core";
import { LocalStorageService } from "../../../../services/local-storage.service";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'create-category',
    templateUrl: './create-category.html',
    imports: [CommonModule, FormsModule]
})

export class CreateCategoryComponent { 
    @Input() data: any;
    categories?: any[];
    accounts?: any[];
    value!: string;

    constructor(private localStorage: LocalStorageService) { }

    ngOnInit() {
        this.categories = this.localStorage.getState().categories;
        this.accounts = this.localStorage.getState().accounts;
    }

    saveCategoryAccount() {
        
    }
}