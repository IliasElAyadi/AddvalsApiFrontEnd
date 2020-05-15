import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoApiService } from 'src/app/Service/co-api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-waiting',
  templateUrl: './waiting.component.html',
  styleUrls: ['./waiting.component.scss']
})
export class WaitingComponent implements OnInit {
  public skyTapUrl:string;

  /* myName = 'test'
  webPage: any;
  readonly rootURL2 = 'https://cloud.skytap.com/configurations/85730906/desktop?vm_id=68042573';
 */

  constructor(private router: Router,public coApiService: CoApiService,private http: HttpClient) {
    this.skyTapUrl = this.router.getCurrentNavigation().extras.state.skyTapUrl;
    //this.myName = this.skyTapUrl
   }


/* 
    httpOptions = {
    headers: new HttpHeaders({


      'Authorization': 'Basic ' + btoa('ili@ili.com:e32cab233318f4f29a3c87475a17d557da4f0714')
    })
  };
   
   getPage() {
    this.webPage = this.http.get(this.rootURL2,this.httpOptions);
  } */

  ngOnInit(): void {
  }

  public submit(): void { 
     
   } 
}
