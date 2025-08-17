import { Component } from "@angular/core";
import { ContainerComponent } from "../../components/container/container";
import { CardComponent } from "../../components/card/card";
import { CategoriesAccontsCardComponent } from "./components/categories-accounts-card/categories-accounts-card";
import { CategoryAccount } from "./types";
import { CommonModule } from '@angular/common';
import { ModalService } from "../../components/modal/services/modal.service";
import { CreateCategoryComponent } from "./components/create-category/create-category";

@Component({
    selector: 'categories-accounts',
    templateUrl: './categories-accounts.html',
    imports: [CommonModule, ContainerComponent, CardComponent, CategoriesAccontsCardComponent]
})

export class CategoriesAccountsComponent {
    categories: CategoryAccount[] = [
        {
            icon: 'pi pi-tag',
            type: 'Category',
            value: 'Home'
        },
        {
            icon: 'pi pi-tag',
            type: 'Category',
            value: 'Phone'
        },
        {
            icon: 'pi pi-tag',
            type: 'Category',
            value: 'Vehicle'
        }
    ];

    accounts: CategoryAccount[] = [
        {
            icon: 'pi pi-wallet',
            type: 'Account',
            value: 'Credit Card'
        },
        {
            icon: 'pi pi-wallet',
            type: 'Account',
            value: 'Debit Card'
        },
        {
            icon: 'pi pi-wallet',
            type: 'Account',
            value: 'Cash'
        }
    ];

    constructor(private modalService: ModalService) { }

    createAccount() {
        let data = {
            title: 'Add Account',
            width: 'w-100',
            type: 'Account'
        };

        this.modalService.open(CreateCategoryComponent, data);
    }

    createCategory() {
        let data = {
            title: 'Add Category',
            width: 'w-100',
            type: 'Category'
        };

        this.modalService.open(CreateCategoryComponent, data);
    }
}