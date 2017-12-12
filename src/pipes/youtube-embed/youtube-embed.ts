import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

/**
 * Generated class for the YoutubeEmbedPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'youtubeEmbed',
})


export class YoutubeEmbedPipe implements PipeTransform {

  url: SafeUrl;
   constructor(private dom: DomSanitizer){}

  transform(value: string, ...args) {
    console.log(this.dom.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" +value));
    return this.dom.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" +value);
  }
}
