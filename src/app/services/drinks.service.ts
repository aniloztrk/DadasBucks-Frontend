import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Drink } from '../models/drink';

@Injectable({
    providedIn: 'root',
})

export class DrinkService {
    constructor(private http: HttpClient) { }

    address = "http://localhost:8080";

    getDrink() {
        return this.http.get<Drink[]>(`${this.address}/drinks`);
    }
    
    getDrinksByCategoryId(categoryId: number) {
        return this.http.get<Drink[]>(`${this.address}/drinks/${categoryId}`);
    }

    addDrink(drink: Drink) {
        return this.http.post(`${this.address}/drinks/add`, drink);
    }

    deleteDrink(id: String) {
        return this.http.delete(`${this.address}/drinks/delete/${id}`);
    }

    updateDrink(drink: Drink) {
        return this.http.put(`${this.address}/drinks/update`, drink);
    }
}