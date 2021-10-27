import { Component, OnInit } from '@angular/core';
import { ArtObjects } from 'src/app/shared/models/rijks-data.model';
import { RijksDataService } from './../../shared/services/rijks-data.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  artObjects: ArtObjects[] = [];
  constructor(
    private readonly rijksDataService: RijksDataService,
  ) { }

  ngOnInit(): void {
    this.rijksDataService.getArtObjects().subscribe(artObjects => {
      this.artObjects = artObjects;
      console.log(artObjects);
    })
  }
}
