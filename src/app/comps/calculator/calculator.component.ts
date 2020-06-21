import { Component, OnInit } from '@angular/core';
import { MycalcoulatorserviceService } from 'src/app/srevices/mycalcoulatorservice.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  public screen: string = "";
  public number1: number;
  public number2: number;
  public result  : string="";
  public res  : number;
  public results = []

  constructor(private InputerSvc: MycalcoulatorserviceService ) { }

  

  num(srt) {
    this.screen += srt
    if(this.number1==null)
    this.number1=srt
    else
    this.number2=srt
  }
  delete(){
    this.screen ="";
    this.number1=0
    this.number2=0
    this.result =''
    this.results = []
    this.InputerSvc.imputArr=[]
  }
  equal() {

    this.result = this.screen +" = "+eval(this.screen)
    this.results.push(eval(this.screen))
    this.InputerSvc.imputArr.push(this.screen +" = "+eval(this.screen))
    this.screen = "";
  } 

  sum() {
    this.results.push(this.res = this.number1 + this.number2);

  }

  diff() {
    this.results.push(this.res = this.number1 - this.number2);
  }

  mult() {
    this.results.push(this.res = this.number1 * this.number2);
  }

  divi() {
    this.results.push(this.res = this.number1 / this.number2);
  }
  ngOnInit(): void {
  }

}
