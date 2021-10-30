import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomePageComponent } from './layout/home-page/home-page.component';
import { AngularMaterialModule } from './shared/modules/angular-material.module';
import { ArtDetailsComponent } from './features/art-details/art-details.component';
import { SearchBarComponent } from './features/search-bar/search-bar.component';
import { GalleryComponent } from './features/gallery/gallery.component';
import { SearchResultsComponent } from './features/search-results/search-results.component';
import { PageTitleComponent } from './layout/page-title/page-title.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    FooterComponent,
    ArtDetailsComponent,
    SearchBarComponent,
    GalleryComponent,
    SearchResultsComponent,
    PageTitleComponent
  ],
  imports: [
    BrowserModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
