import {Component, ElementRef, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NzMessageService} from 'ng-zorro-antd';

declare var AMap: any;
declare var AMapUI: any;
let map: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent implements OnInit {
  @ViewChild('container', {static: true}) private mapViewEl: ElementRef;
  @ViewChild('a', {static: true}) private mapViewEla: ElementRef;
  map;
  value;
  flag = true;
  selectedValue = null;
  sss = null;
  listOfOption = [];

  list = [
    {name: '新型肺炎定点医院', location: '1'},
    {name: '新型冠状病毒定点医院', location: '2'}
  ];

  constructor(private httpClient: HttpClient, private message: NzMessageService) {
  }

  ngOnInit() {
    this.map = new AMap.Map(this.mapViewEl.nativeElement, {
      resizeEnable: true
    });
  }

  changeVal(val) {
    AMap.plugin('AMap.Autocomplete', e => {
      // 实例化Autocomplete
      const autoOptions = {
        city: '全国'
      };
      const autoComplete = new AMap.Autocomplete(autoOptions);
      autoComplete.search(val, (status, result) => {
        console.log(status);
        console.log(result);
        this.listOfOption = result['tips'];
        // this.listOfOption = this.list;

        this.map.setZoom(15);
        this.flag = true;
        // 搜索成功时，result即是对应的匹配数据
        // var node = new PrettyJSON.view.Node({
        //     el: document.querySelector('#input-info'),
        //     data: result
        // })
      });
    });
    console.log(val);
  }

  log(e) {
    console.log(e);
  }

  search(value: string): void {
    if (value) {
      this.selectedValue = value;
      this.sss = this.selectedValue;
    }
    // this.flag = true;
    console.log(value);
    // this.getMap(value)

    AMap.plugin('AMap.Autocomplete', e => {
      // 实例化Autocomplete
      const autoOptions = {
        city: '全国'
      };
      const autoComplete = new AMap.Autocomplete(autoOptions);
      autoComplete.search(value, (status, result) => {
        console.log(status);
        console.log(result);
        this.listOfOption = result['tips'];
        this.map.setZoom(15);
        this.flag = true;
        // 搜索成功时，result即是对应的匹配数据
        // var node = new PrettyJSON.view.Node({
        //     el: document.querySelector('#input-info'),
        //     data: result
        // })
      });
    });
    // this.flag = true;
    // this.message.warning('This is a normal message',{
    //   nzDuration: 10,
    // });

    // this.httpClient.jsonp<{ result: Array<[string, string]> }>(`https://suggest.taobao.com/sug?code=utf-8&q=${value}`, 'callback').subscribe(data => {
    //     const listOfOption: Array<{ value: string; text: string }> = []
    //     data.result.forEach(item => {
    //         listOfOption.push({
    //             value: item[0],
    //             text: item[0]
    //         })
    //     })
    //     this.listOfOption = listOfOption
    // })
    // this.getMap(value)
  }

  getMap(value) {
    AMap.plugin('AMap.Autocomplete', e => {
      // 实例化Autocomplete
      var autoOptions = {
        city: '全国'
      };
      var autoComplete = new AMap.Autocomplete(autoOptions);
      autoComplete.search(value, (status, result) => {
        console.log(status);
        console.log(result);
        this.listOfOption = result['tips'];
        // 搜索成功时，result即是对应的匹配数据
        // var node = new PrettyJSON.view.Node({
        //     el: document.querySelector('#input-info'),
        //     data: result
        // })
      });
      autoComplete.search(value, (status, result) => {
        console.log(status);
        console.log(result);
        this.listOfOption = result['tips'];
        // 搜索成功时，result即是对应的匹配数据
        // var node = new PrettyJSON.view.Node({
        //     el: document.querySelector('#input-info'),
        //     data: result
        // })
      });
    });
    // var keywords = this.selectedValue
  }

  // autoInput() {
  //     var keywords = this.selectedValue
  //     AMap.plugin('AMap.Autocomplete', function() {
  //         // 实例化Autocomplete
  //         var autoOptions = {
  //             city: '全国'
  //         }
  //         var autoComplete = new AMap.Autocomplete(autoOptions)
  //         autoComplete.search(keywords, function(status, result) {
  //             console.log(status)
  //             console.log(result)
  //             // 搜索成功时，result即是对应的匹配数据
  //             // var node = new PrettyJSON.view.Node({
  //             //     el: document.querySelector('#input-info'),
  //             //     data: result
  //             // })
  //         })
  //     })
  // }

  modelChange($event: any) {
    this.flag = false;
    console.log($event);
    this.selectedValue = $event;
  }

  search1() {

  }

  ffff($event: void) {
    console.log($event);
    console.log(this.sss);
    this.selectedValue = this.sss;
  }

  check() {

  }


  cval(item: any) {
    this.value = item.name;
  }
}
