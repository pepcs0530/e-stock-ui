import { Component, OnInit, Input } from '@angular/core';
import { CafeHistoryService } from '../../services/cafe-history.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cafe-history-save',
  templateUrl: './cafe-history-save.component.html',
  styleUrls: ['./cafe-history-save.component.scss'],
  providers: [MessageService]
})
export class CafeHistorySaveComponent implements OnInit {

  cols: any[];
  menuSelected: any[];

  constructor(
    private _cafeHistoryService: CafeHistoryService,
    private _router: Router,
    private _messageService: MessageService
  ) { }

  ngOnInit() {
    console.log('menuSelected[save] => ', this._cafeHistoryService.getCafeHistoryBean());

    this.initForm();
  }

  initForm() {
    this.cols = [
      { field: 'productName', header: 'เมนู' },
      { field: 'price', header: 'ราคา' }
    ];

    this.menuSelected = this._cafeHistoryService.getCafeHistoryBean();
  }

  save() {
    this._messageService.add({key: 'successMsg', severity:'success', summary: 'แจ้งเตือนจากระบบ', detail:'บันทึกสำเร็จ'});
    this._router.navigate(['/home/cafehistory']);
  }

}
