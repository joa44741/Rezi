import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CountdownerModule } from 'ng-countdowner';


import { HomePage } from './home.page';
import { SecretComponentComponent } from './secret-component/secret-component.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    CountdownerModule
  ],
  declarations: [HomePage, SecretComponentComponent]
})
export class HomePageModule {}
