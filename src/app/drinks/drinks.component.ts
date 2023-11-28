import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../models/category';
import { Drink } from '../models/drink';
import { DrinkService } from '../services/drinks.service';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss']
})

export class DrinksComponent {
  constructor(private router: Router, private drinkService: DrinkService) {
    const navigation = this.router.getCurrentNavigation();
    this.category = navigation?.extras.state?.['data'];
  }

  category: Category;
  drinks: Drink[] = [];

  ngOnInit() {
    this.getDrinks();
  }

  getDrinks() {
    this.drinkService.getDrinksByCategoryId(this.category?.id).subscribe(
      data => this.drinks = data,
      error => console.error(error)
    );
  }
}
