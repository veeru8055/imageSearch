import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-imagetile',
  templateUrl: './imagetile.component.html',
  styleUrls: ['./imagetile.component.css']
})
export class ImagetileComponent implements OnInit {
  @Input() imageData: string;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  downloadImage() {
    const imgUrl = this.imageData;
    const imgName = 'image.jpg';
    this.httpClient.get(imgUrl, {responseType: 'blob' as 'json'})
      .subscribe((res: any) => {
        const file = new Blob([res], {type: res.type});
 
        // IE
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
          window.navigator.msSaveOrOpenBlob(file);
          return;
        }
 
        const blob = window.URL.createObjectURL(file);
        const link = document.createElement('a');
        link.href = blob;
        link.download = imgName;
 
        // Version link.click() to work at firefox
        link.dispatchEvent(new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window
        }));
 
        setTimeout(() => { // firefox
          window.URL.revokeObjectURL(blob);
          link.remove();
        }, 100);
      });
  }

}
