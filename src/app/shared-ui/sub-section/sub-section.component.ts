import { Component, inject } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { ProductService } from '../../services/product.service';

@Component({
  standalone: true,
  imports: [
    CardComponent,
  ],
  selector: 'app-sub-section',
  templateUrl: './sub-section.component.html',
  styleUrls: ['./sub-section.component.scss']
})
export class SubSectionComponent {
  private readonly productService = inject(ProductService);

  readonly featured = this.productService.homeProducts;
}
