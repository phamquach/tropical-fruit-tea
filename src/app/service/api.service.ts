import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
    private cache = new Map<string, ICard[]>();

    constructor(private http: HttpClient) { }

    getData(url: string, key: string): Observable<ICard[]> {
        if (this.cache.has(key)) {
            return of(this.cache.get(key)!); // trả về cache
        }
        return this.http.get<ICard[]>(url).pipe(
            tap(data => this.cache.set(key, data)) // lưu lại cache
        );
    }
}
