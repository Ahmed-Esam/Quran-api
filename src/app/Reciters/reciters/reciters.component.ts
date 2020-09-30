import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reciters',
  templateUrl: './reciters.component.html',
  styleUrls: ['./reciters.component.css']
})
export class RecitersComponent implements OnInit {
  router: any;

  constructor(private ser:DataService) { }
  private reciters;
  public data:any = []
  Posts:any;
  public dataPost:any = []
  funData(){
    return this.reciters = this.ser.getData().subscribe((res:any) =>{
      this.data = res
      // console.log(this.data ,'data sadsad ' )
      // console.log(this.data.find(el => el.id == 205), 'includes' )
    })

  }
  funPost(){
    return this.Posts = this.ser.getPosts().subscribe((res:any) =>{
      this.dataPost = res
      console.log(this.dataPost ,'data Posts ' )
    })
  }



  ngOnInit(): void {
  this.funData()
  this.funPost()
  }

}
