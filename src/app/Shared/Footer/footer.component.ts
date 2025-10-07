import { Component } from "@angular/core";
import { IconFacebook, IconPhone, IconZalo } from "../Icon/Icon.component";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css',
    imports: [IconFacebook, IconZalo, IconPhone]
})
export default class Footer {

}