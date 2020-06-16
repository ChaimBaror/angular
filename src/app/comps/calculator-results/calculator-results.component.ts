import { Component, OnInit } from '@angular/core';
import { MycalcoulatorserviceService } from 'src/app/srevices/mycalcoulatorservice.service';

@Component({
  selector: 'app-calculator-results',
  templateUrl: './calculator-results.component.html',
  styleUrls: ['./calculator-results.component.css']
})
export class CalculatorResultsComponent implements OnInit {

  constructor(public InputerSvc: MycalcoulatorserviceService ) {  }

  ngOnInit(): void {
  }

}
