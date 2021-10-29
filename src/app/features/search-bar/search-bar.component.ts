import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  searchArtControl = new FormControl('');

  constructor(
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
  }

  searchArtwork() {
    this.router.navigate(['/search-results', this.searchArtControl.value]);
  }
}
