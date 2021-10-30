import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  @Input() set searchedQuery(makerName: string) {
    this.searchArtControl.setValue(makerName);
  };
  @Input() iSelfPageSearch = false;
  searchArtControl = new FormControl('');

  constructor(
    private readonly router: Router,
  ) { }

  searchArtwork() {
    this.router.navigate(['/search-results', this.searchArtControl.value]);
    if (!this.iSelfPageSearch) {
      this.searchArtControl.reset();
    }
  }
}
