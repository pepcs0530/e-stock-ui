import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MenuType } from '@shared/models/menuType';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cafe-history',
  templateUrl: './cafe-history.component.html',
  styleUrls: ['./cafe-history.component.scss']
})
export class CafeHistoryComponent implements OnInit {

  cafeHistoryForm: FormGroup;

  es: any;
  th: any;

  menuTypeList: any[];
  menuSubTypeList: any[];

  constructor(
    private _formBuilder: FormBuilder,
    private _httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.es = {
      firstDayOfWeek: 1,
      dayNames: [ "domingo","lunes","martes","miércoles","jueves","viernes","sábado" ],
      dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
      dayNamesMin: [ "D","L","M","X","J","V","S" ],
      monthNames: [ "enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre" ],
      monthNamesShort: [ "ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic" ],
      today: 'Hoy',
      clear: 'Borrar'
    }

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
    });

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

  handleClick(event) {

  }

}
