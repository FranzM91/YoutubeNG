import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'YoutubeNG';
  video: any = null;
  /**
   *
   */
  constructor(private sanitizer: DomSanitizer) {
    this.getVideoIframe('https://www.youtube.com/watch?v=8ILiiDpa4tk&list=PLV0nOzdUS5Xsj5o9c7HgLqYt7EV9MPOqD');
  }
  getVideoIframe(url: any) {
      var results: any = null;
      if (url === null) {
          return '';
      }
      results = url.match('[\\?&]v=([^&#]*)');
      this.video   = (results === null) ? url : results[1];
      return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.video);
  }
}
