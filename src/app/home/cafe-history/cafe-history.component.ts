import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cafe-history',
  templateUrl: './cafe-history.component.html',
  styleUrls: ['./cafe-history.component.scss']
})
export class CafeHistoryComponent implements OnInit {

  es: any;
  th: any;

  constructor() { }

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
  }

  handleClick(event) {

  }

}
