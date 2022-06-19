import { Component, OnInit } from '@angular/core';
import { Category } from '../Models/category';
import { CategoryRepository } from '../Models/categoryRepository';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

      categories:Category[];
      categoryRepository:CategoryRepository;
      selectedcategory:Category=null;

  constructor() {

    this.categoryRepository=new CategoryRepository();
    this.categories=this.categoryRepository.getCategories();
  }


  ngOnInit(): void {
  }

  displayAll:boolean=true;

  selectCategory(item?:any)
  {
    if(item)
    {
      this.selectedcategory=item;
      this.displayAll=false;
    }
    else{
      this.selectedcategory=null;
      this.displayAll=true;
    }



  }


}
