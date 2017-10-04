import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-table-sample',
  templateUrl: './data-table-sample.component.html',
  styleUrls: ['./data-table-sample.component.css']
})
export class DataTableSampleComponent implements OnInit {

  frozenIdols: any[];
  idols: any[];

  constructor() { }

  ngOnInit() {
    this.frozenIdols = [
      {
        id: '1000101',
        type: 'Cu', 
        name: '島村卯月',
        cost: '2',
        atk: '160',
        def: '240',
      },
    ];
    this.idols = [
      {
        id: '1000201',
        type: 'Cu', 
        name: '中野有香',
        cost: '2',
        atk: '240',
        def: '160',
      },
      {
        id: '1000301',
        type: 'Cu', 
        name: '水本ゆかり',
        cost: '3',
        atk: '240',
        def: '360',
      },
      {
        id: '1000401',
        type: 'Cu', 
        name: '福山舞',
        cost: '4',
        atk: '320',
        def: '480',
      },
      {
        id: '1000501',
        type: 'Cu', 
        name: '椎名法子',
        cost: '5',
        atk: '500',
        def: '500',
      },
      {
        id: '1000601',
        type: 'Cu', 
        name: '今井加奈',
        cost: '6',
        atk: '600',
        def: '600',
      },
      {
        id: '1000701',
        type: 'Cu', 
        name: '持田亜里沙',
        cost: '7',
        atk: '700',
        def: '700',
      },
      {
        id: '1000801',
        type: 'Cu', 
        name: '三村かな子',
        cost: '7',
        atk: '820',
        def: '580',
      },
      {
        id: '1000901',
        type: 'Cu', 
        name: '奥山沙織',
        cost: '8',
        atk: '520',
        def: '920',
      },
      {
        id: '1001001',
        type: 'Cu', 
        name: '間中美里',
        cost: '8',
        atk: '920',
        def: '680',
      },
    ]
  }

}
