import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { IonicSelectableModule } from '../../../../projects/ionic-selectable/src/lib/ionic-selectable.module';
import { PipesModule } from '../../pipes';
import { OnSearchPage } from './on-search.page';

const routes: Routes = [{
  path: '',
  component: OnSearchPage
}];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicSelectableModule,
    PipesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    OnSearchPage
  ]
})
export class OnSearchPageModule { }
