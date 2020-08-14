import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WelcomePageRoutingModule } from './welcome-routing.module';

import { WelcomePage } from './welcome.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { Routes } from '@angular/router';
const routes:Routes=[{
  path:'',
  component:WelcomePage
}];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WelcomePageRoutingModule,
    ComponentsModule
  ],
  declarations: [WelcomePage]
})
export class WelcomePageModule {}
