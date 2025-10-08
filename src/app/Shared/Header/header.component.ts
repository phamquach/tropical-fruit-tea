import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [CommonModule, RouterLink],
})
export default class Header {
    menu = [
        {
            name: "Home",
            id: 0,
            path: '/home'
        },
        {
            name: "Memories",
            id: 1,
            path: '/memories'
        },
        {
            name: "Menu",
            id: 2,
            path: '/menu'
        },
        {
            name: "Công thức pha chế",
            id: 3,
            path: '/ingredients'
        }
    ]

    scrollToContacts() {
        const element = document.getElementById('contacts');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}
