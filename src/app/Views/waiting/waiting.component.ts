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
  public skyTapUrl: string;

  public show: boolean = false;

  timeLeft: number = 80;
  interval;
  /* myName = 'test' */


  constructor(private router: Router, public coApiService: CoApiService, private http: HttpClient) {
    this.skyTapUrl = this.router.getCurrentNavigation().extras.state.skyTapUrl;
  }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 0;
      }
    },1000)
  }

  ngOnInit(): void {
    setTimeout(() => { this.show = !this.show; }, 80000);
    this.startTimer();
  }


  public submit(): void {

  }

}
