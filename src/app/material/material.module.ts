import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar'
import{MatIconModule} from '@angular/material/icon'
import {MatCardModule} from '@angular/material/card'
import{ MatFormFieldModule} from '@angular/material/form-field'
import{ MatButtonModule} from '@angular/material/button'
import{MatInputModule} from '@angular/material/input'

import{MatListModule} from '@angular/material/list'
import {MatTableModule} from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatOptionModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';

const MaterialComponents=[
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatListModule,
  MatTableModule,
  MatFormFieldModule,
  FormsModule,
  ReactiveFormsModule,
  MatSlideToggleModule,
  MatOptionModule,
  MatSelectModule


]
@NgModule({

  imports: [
    MaterialComponents

  ],
  exports:[
    MaterialComponents
  ]
})
export class MaterialModule { }
