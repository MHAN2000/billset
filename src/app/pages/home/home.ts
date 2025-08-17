import { Component } from "@angular/core";
import { NavbarComponent } from "../../components/navbar/navbar";
import { ContainerComponent } from "../../components/container/container";

@Component({
    selector: 'home-page',
    templateUrl: './home.html',
    styleUrls: ['./home.css'],
    imports: [ContainerComponent]
})

export class HomePageComponent {

}