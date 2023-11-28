import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../models/category';
import { CategoryService } from '../services/categories.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})

export class CategoriesComponent {
  constructor(private router: Router, private categoryService: CategoryService) { }
  
  categories: Category[] = [];

  ngOnInit(){
    this.getCategories();
  }

  getCategories(){
    this.categoryService.getCategories().subscribe(
      data => this.categories = data, 
      error => console.error(error)
    );
  }

  onCategoryButtonClicked(category: Category){
    this.router.navigate(["/drinks"], { state: { data: category } });
  }
}
