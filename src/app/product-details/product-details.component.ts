import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  providers: [{ provide: 'Window', useValue: window }]
})
export class ProductDetailsComponent implements OnInit {
  product: Product;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    @Inject('Window') private window: Window
  ) { }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.productService.getProduct(params['category'], params['id']))
      .subscribe(product => this.product = product);
  }

  goBack(): void {
    this.router.navigate(['category', this.product.category])
  }

  saveAsPdf(): void {
    this.getCanvas().then(canvas => {
      const img = canvas.toDataURL("image/png");
      const doc = new jsPDF({ unit: 'px', format: 'a4' });
      doc.addImage(img, 'JPEG', 20, 20);
      doc.save(`${this.product.category}_${this.product.title}.pdf`);
    })
  }

  private getCanvas(): any {
    return html2canvas(document.getElementById('product-pdf'));
  }
}
