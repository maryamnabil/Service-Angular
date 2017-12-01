import { Component, OnInit } from '@angular/core';
import {DataCardsService} from './data-cards.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

   result:any;

  constructor(private dc:DataCardsService) {}
  
  getDatafromService() {

  this.dc.getdata().subscribe((res) => this.result= res);

  }


  ngOnInit() {
   
  }

}
