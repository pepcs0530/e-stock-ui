import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LazyLoadEvent } from 'primeng/api';
import { Table } from 'primeng/table';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { CafeHistorySaveComponent } from '../../save/cafe-history-save/cafe-history-save.component';
import { CafeHistoryService } from '../../services/cafe-history.service';

@Component({
  selector: 'app-cafe-history-search',
  templateUrl: './cafe-history-search.component.html',
  styleUrls: ['./cafe-history-search.component.scss'],
  providers: [MessageService]
})
export class CafeHistorySearchComponent implements OnInit {

  cafeHistoryForm: FormGroup;

  es: any;
  th: any;

  cols: any[];
  productList: any[];

  menuTypeList: any[];
  menuSubTypeList: any[];

  rowSelected: any[];
  loading: boolean;
  totalRecords: number;

  preSearch: boolean;

  @ViewChild('table') _table: Table;

  menuSelected: any[];

  @ViewChild('_saveForm') _saveForm: CafeHistorySaveComponent;

  constructor(
    private _formBuilder: FormBuilder,
    private _httpClient: HttpClient,
    private _router: Router,
    private _cafeHistoryService: CafeHistoryService,
    private _messageService: MessageService
  ) { }

  ngOnInit() {
    this.th = {
      firstDayOfWeek: 0,
      dayNames: [ "อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์" ],
      dayNamesShort: [ "อา","จ","อ","พ","พฤ","ศ","ส" ],
      dayNamesMin: [ "อา","จ","อ","พ","พฤ","ศ","ส" ],
      monthNames: [ "มกราคม","กุมภาพันธ์","marzo","มีนาคม","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม" ],
      monthNamesShort: [ "ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค." ],
      today: 'วันนี้',
      clear: 'ล้างค่า'
    }

    this.cafeHistoryForm = this._formBuilder.group({
      currentDate: [null],
      menuType: [null],
      menuSubType: [null],
      productName: [null],
    });

    this.cols = [
      { field: 'imgPath', header: 'รูป' },
      { field: 'productName', header: 'เมนู' },
      { field: 'price', header: 'ราคา' },
      { field: '', header: 'สั่ง' }
    ];

    this.initForm();

  }

  async initForm() {
    this.cafeHistoryForm.get('currentDate').setValue(new Date());
    
    const menuTypeResponse = await this.getMenuTypeList();
    console.log('menuTypeResponse => ', menuTypeResponse);
    this.menuTypeList = [
      {productTypePk: null, productTypeName: "--- เลือก ---", shopTypePk: null}, 
      ...menuTypeResponse['results']];

    const menuSubTypeResponse = await this.getMenuSubTypeList();
    console.log('menuSubTypeResponse => ', menuSubTypeResponse);
    this.menuSubTypeList = [
      {productSubTypePk: null, productSubTypeName: "--- เลือก ---"}, 
      ...menuSubTypeResponse['results']];

    this.menuSelected = [];
  }

  getMenuTypeList() {
    return this._httpClient.get<any>(environment.apiUrl + '/productType/getAllProductTypeList')
      .toPromise()
      .catch(e => {
        console.error(e);
        alert(e.message + environment.apiUrl);
      });
  }

  getMenuSubTypeList() {
    return this._httpClient.get<any>(environment.apiUrl + '/productSubType/getAllProductSubTypeList')
      .toPromise()
      .catch(e => {
        console.error(e);
        alert(e.message + environment.apiUrl);
      });
  }

  async refreshClick() {
    this.loading = true;
    this.clearTable();
    let payload = {
      'formData': {
        'productType': this.cafeHistoryForm.get('menuType').value ? this.cafeHistoryForm.get('menuType').value['productTypePk'] : null,
        'productSubType': this.cafeHistoryForm.get('menuSubType').value ? this.cafeHistoryForm.get('menuSubType').value['productSubTypePk'] : null,
        'productName': this.cafeHistoryForm.get('productName').value
      },
      'paginator': {
        'offset': 0,
        'limit': 5
      }  
    }
    const productResponse  = await this.getProductList(payload);
    console.log('productResponse => ', productResponse);
    this.productList = productResponse['results'];
    this.totalRecords = productResponse['paginator'].count;
    this.loading = false;
    this.preSearch = true;
  }

  getProductList(payload) {
    /* let payload = {
      'productType': this.cafeHistoryForm.get('menuType').value ? this.cafeHistoryForm.get('menuType').value['productTypePk'] : null,
      'productSubType': this.cafeHistoryForm.get('menuSubType').value ? this.cafeHistoryForm.get('menuSubType').value['productSubTypePk'] : null
    } */
    console.log('payload => ', payload);
    return this._httpClient.post<any>(environment.apiUrl + '/product/getProductListByCondition', payload)
      .toPromise()
      .catch(e => {
        console.error(e);
        alert(e.message + environment.apiUrl);
      });
  }

  menuTypeChange(event) {
    console.log('menuTypeChange => ', this.cafeHistoryForm.get('menuType').value);
  }

  menuSubTypeChange(event) {
    console.log('menuSubTypeChange => ', this.cafeHistoryForm.get('menuSubType').value);
  }

  checkBill(event) {
    this._cafeHistoryService.setCafeHistoryBean(this.menuSelected);
    this._router.navigate(['/home/cafehistory/save']);
  }

  cancelBill(event) {
    this.cafeHistoryForm.reset();
    this.clearTable();
    this.menuSelected = [];
  }

  chooseClick(event) {
    console.log('chooseClick => ', event);
    this._messageService.add({key: 'successMsg', severity:'success', summary: 'แจ้งเตือนจากระบบ', detail:'เพิ่มเมนู '+event['productName']+' เรียบร้อย'});
    
    this.menuSelected.push(event);
    console.log('menuSelected => ', this.menuSelected);
  }

  async loadLazyAction(event: LazyLoadEvent){
    console.log('loadLazyAction => ', event);
    if(this.preSearch) {
      //this.clearTable();
      let payload = {
        'formData': {
          'productType': this.cafeHistoryForm.get('menuType').value ? this.cafeHistoryForm.get('menuType').value['productTypePk'] : null,
          'productSubType': this.cafeHistoryForm.get('menuSubType').value ? this.cafeHistoryForm.get('menuSubType').value['productSubTypePk'] : null,
          'productName': this.cafeHistoryForm.get('productName').value
        },
        'paginator': {
          'offset': event.first,
          'limit': event.rows
        }  
      }
      console.log('loadLazyAction[payload] => ', payload);
      const productResponse  = await this.getProductList(payload);
      console.log('productResponse => ', productResponse);
      this.productList = productResponse['results'];
      this.totalRecords = productResponse['paginator'].count;
    }
  }

  clearTable() {
    this._table.first = 0;
    this.totalRecords = 0;
    this.productList = null;
    this.rowSelected = null;
  }

}
