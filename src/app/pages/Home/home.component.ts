import { Component, OnInit } from "@angular/core";
import { Card } from "../../Shared/Card/card.component";
import { ApiService } from "../../service/api.service";
import { environment } from "../../../environments/environment";
import { forkJoin } from "rxjs";
@Component({
    selector: 'app-page-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [Card]
})
export class Home implements OnInit {
    private API_URL_1: string = environment.apiUrl1
    private API_URL_2: string = environment.apiUrl2

    data_smoothie: ICard[] | null = null;
    data_juice: ICard[] | null = null;
    data_best_seller: ICard[] | null = null;

    loading = false

    constructor(private api: ApiService) { }
    ngOnInit() {
        this.loading = true;

        forkJoin({
            smoothie: this.api.getData(`${this.API_URL_1}/smothie`, 'smoothie'),
            juice: this.api.getData(`${this.API_URL_1}/juice`, 'juice'),
            best_seller: this.api.getData(`${this.API_URL_2}/best_seller`, 'best_seller')
        }).subscribe({
            next: (res) => {
                this.data_smoothie = res.smoothie;
                this.data_juice = res.juice;
                this.data_best_seller = res.best_seller;
                this.loading = false;
            },
            error: (err) => {
                console.error('API Error:', err);
                this.loading = false;
            }
        });
    }
}