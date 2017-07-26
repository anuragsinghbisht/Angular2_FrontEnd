import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {
  form;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = fb.group({
      category: ['', Validators.required],
      title: ['', Validators.required],
      url: ['', Validators.required],
      description: ['', Validators.required],
      imageHref: ['', Validators.required]
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.router.navigate(['/category', 'list']);
    }
  }
}
