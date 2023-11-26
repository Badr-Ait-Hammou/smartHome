import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName:string = "tel";
  @Input() appareilStatus: boolean = true;
  @Input() appareilImage:string="assets/images/table.png";
  constructor() { }

  ngOnInit(): void {
  }

}
