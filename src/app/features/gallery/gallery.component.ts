import { Component, Input } from '@angular/core';
import { ArtObject } from 'src/app/shared/models/rijks-data.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  @Input() artObjects: ArtObject[] | null = null;
  @Input() apiLoading: boolean | null = null;
  @Input() apiError: boolean | null = null;

  constructor() { }
}
