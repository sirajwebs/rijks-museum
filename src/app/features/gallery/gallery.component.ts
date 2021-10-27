import { Component, OnInit } from '@angular/core';
import { RijksDataService } from './../../shared/services/rijks-data.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  rijksData: any;
  constructor(
    private readonly rijksDataService: RijksDataService,
  ) { }

  ngOnInit(): void {
    this.rijksDataService.getData().subscribe(data => {
      this.rijksData = data;
      console.log(data);
    })
  }
}
