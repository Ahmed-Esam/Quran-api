import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  ServerUrl;
  getData() {
    // const url ='http://mp3quran.net/api/_arabic.php'
    // const url =`http://api.islamhouse.com/v1/0j3LIaqPL8j5hJLk/quran/get-category/364764/ar/json/`
    const key = '0j3LIaqPL8j5hJLk';
    return this.http.get(
      `http://api.islamhouse.com/v1/${key}/quran/get-category/364764/ar/json/`
    );
  }
  funTest(url) {
    return this.http.get(`${url}`);
    // console.log(url, 'Serves')
  }
  // getArticles(){
  //   const url ='http://mp3quran.net/api/_arabic.php'
  //   return this.http.get(`${url}`)
  // }

  getServer() {
    const ServerUrl = 'http://server6.mp3quran.net/thubti/';
    return this.http.get(`${ServerUrl}`, { responseType: 'text' });
  }


  getPosts(){
    const headers = {
        'Content-type':'application/json'
      , 'DeviceToken':'E4E1FBAE-850D-4D41-B2BE-8F6550A43523'
      , 'AuthToken':'HoSVmfHMFa'
    }


    return this.http.get('http://apiversion10.thezagelapp.com/api/News/GetNewsHomebyuser/3574/0/0/20/0', { headers });
  }
}
