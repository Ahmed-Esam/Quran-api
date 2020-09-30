import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css'],
})
export class ReaderComponent implements OnInit {
  constructor(private ser: DataService, private route: ActivatedRoute) {}
  Reader;
  news: any = [];
  paramId;
  ObjReader = {
    title: '',
    api_url: '',
    prepared_by: '',
    id: '',
  };
  ServerApi;
  ServerApiTest;
  IntializeId() {
    this.route.paramMap.subscribe((params) => {
      this.paramId = params.get('id');
      console.log(params.get('id'), 'params id');
    });
  }
  fetchApitest() {
    return (this.Reader = this.ser.getData().subscribe((res: any) => {
      this.news = res.recitations;
      this.news.find((el) => {
        if (el.id == this.paramId) {
          this.ObjReader.title = el.title;
          this.ObjReader.api_url = el.api_url;
          this.ObjReader.prepared_by = el.prepared_by;
          this.ObjReader.id = el.id;
          // console.log( Array.from(this.ObjReader.server) ,'aaaaaaaaaaa')
          // console.log(this.news.find(el => el.id == this.paramId), 'Find' )
          // console.log(this.ObjReader.api_url )
        }

        // console.log(this.ObjReader.api_url , 'sssssssssssss' )
        // console.log(this.ser.funTest(this.ObjReader.api_url), 'sssssssssssss' )
      });
      this.ser.funTest(this.ObjReader.api_url).subscribe((reader: any) => {
        this.ServerApi = reader.attachments;

        console.log(this.ServerApi, 'reader');
      });
      // console.log(this.ServerApi , 'news')
      // console.log(this.news.find(el => el.id == this.paramId), 'includes' )
    }));
  }

  apitest;
  getServerApi() {
    return (this.apitest = this.ser.getServer().subscribe(
      (res: any) => {
        this.ServerApiTest = res;
        var textjson = JSON.stringify(this.ServerApiTest).toString()
        console.log(textjson.slice(0, 5), 'Server Test aaaaaaaaaaaaaa');
        // console.log(this.ServerApiTest, 'textjson Test aaaaaaaaaaaaaa');

      },
      (error: any) => {
        console.log(error, 'error test');
      }
    ));
  }

  ngOnInit(): void {
    this.IntializeId();
    this.fetchApitest();
    this.getServerApi();
  }
}
