import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { LapTimeService } from 'src/app/shared/services/lap-time.service';

@Component({
  selector: 'app-lap-time',
  templateUrl: './lap-time.component.html',
  styleUrls: ['./lap-time.component.css']
})
export class LapTimeComponent implements OnInit {

  constructor(private lapTimeService: LapTimeService) {
  }

  ngOnInit(): void {
    this.getLapTime();
  }

  public getLapTime() {
    this.lapTimeService.getLapTime().subscribe(
      (res) => {
      }
    )
  }
}
