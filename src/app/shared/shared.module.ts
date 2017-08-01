import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [FormsModule, ReactiveFormsModule, CommonModule, MaterialModule],
  declarations: [],
  exports: [FormsModule, ReactiveFormsModule, CommonModule, MaterialModule]
})
export class SharedModule { }
