import { Component, OnInit } from '@angular/core';
// import jsPDF from 'jspdf';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';


@Component({
  selector: 'app-jspdftest',
  templateUrl: './jspdftest.component.html',
  styleUrls: ['./jspdftest.component.scss']
})
export class JspdftestComponent implements OnInit {

  constructor() { }

  exportPDF() {
    // const doc = new jsPDF();
    // Landscape export, 2×4 inches
    const doc = new jsPDF({
      orientation: 'landscape'
      // unit: 'in',
      // format: [4, 2]
    });

    doc.text('Hello world!', 10, 10);
    doc.autoTable({ html: '#mytable' });
    doc.save('table.pdf');
  }


  ngOnInit() {
  }

}
