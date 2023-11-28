import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category';

@Injectable({
    providedIn: 'root',
})

export class CategoryService {
    constructor(private http: HttpClient) { }

    address = "http://localhost:8080";

    getCategories() {
        return this.http.get<Category[]>(`${this.address}/categories`);
    }

    addCategory(category: Category) {
        return this.http.post(`${this.address}/categories/add`, category);
    }

    deleteCategory(id: String){
        return this.http.delete(`${this.address}/categories/delete/${id}`);
    }

    updateCategory(category: Category){
        return this.http.put(`${this.address}/categories/update`, category);
    }
}