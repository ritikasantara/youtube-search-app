import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule,DomSanitizer,SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { SearchPage } from '../pages/search/search';
import { HomePage } from '../pages/home/home';
import { YoutubeEmbedPipe } from '../pipes/youtube-embed/youtube-embed';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SearchProvider } from '../providers/search/search';

@NgModule({
  declarations: [
    MyApp,
    SearchPage,
    HomePage,
    YoutubeEmbedPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SearchPage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SearchProvider
  ]
})
export class AppModule {}
