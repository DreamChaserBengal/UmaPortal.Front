import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lap-time',
  templateUrl: './lap-time.component.html',
  styleUrls: ['./lap-time.component.css']
})
export class LapTimeComponent implements OnInit {
  // グラフの表示サイズ
  view: [number, number] = [800, 450];
  //色設定
  colorScheme = {
    domain: ["#cccccc"],
  };
  //チャートに表示するデータ
  sampleData = [
    {
      name: "lap time",
      series: [
        { name: "200m", value: 12.2 },
        { name: "400m", value: 11.2 },
        { name: "600m", value: 12.3 },
        { name: "800m", value: 12.3 },
        { name: "1000m", value: 11.7 },
        { name: "1200m", value: 12.3 },
        { name: "1400m", value: 11.8 },
        { name: "1600m", value: 11.5 },
        { name: "1800m", value: 11.5 },
        { name: "2000m", value: 11.8 },
      ],
    },
  ];

  // チャートの設定
  legend: boolean = false;
  showLabels: boolean = false;
  animations: boolean = false;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  autoScale: boolean = true;
  xAxisLabel: string = "距離";
  yAxisLabel: string = "タイム";

  constructor() { }

  ngOnInit(): void {
  }

}
