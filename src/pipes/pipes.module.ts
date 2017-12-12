import { NgModule } from '@angular/core';
import { YoutubeEmbedPipe } from './youtube-embed/youtube-embed';
@NgModule({
	declarations: [YoutubeEmbedPipe],
	imports: [],
	exports: [YoutubeEmbedPipe]
})
export class PipesModule {}
