import { Component } from "@angular/core";
import { IOption } from "./types";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@Component({
    selector: 'navbar',
    standalone: true,
    templateUrl: './navbar.html',
    styleUrls: ['./navbar.css'],
    imports: [CommonModule, RouterModule]
})

export class NavbarComponent {
    routes: IOption[] = [
        {
            name: 'Dashboard',
            path: '/',
            icon: 'pi pi-home'
        },
        {
            name: 'Calendar',
            path: '/calendar',
            icon: 'pi pi-calendar'
        },
        {
            name: 'Categories/Accounts',
            path: '/categories-accounts',
            icon: 'pi pi-tags'
        },
        {
            name: 'Settings',
            path: '/settings',
            icon: 'pi pi-cog'
        }
    ];
 }