import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtDetailsComponent } from './features/art-details/art-details.component';
import { SearchResultsComponent } from './features/search-results/search-results.component';
import { HomePageComponent } from './layout/home-page/home-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'art-details/:artId', component: ArtDetailsComponent },
  { path: 'search-results/:searchedQuery', component: SearchResultsComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
