import { Component, OnInit } from '@angular/core';
import { ActiveService } from '../active.service';
import { TpguardGuard } from '../guard/tpguard.guard';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {


  currentNumber = '0';
  firstOperand = null;
  operator = null;
  waitForSecondNumber = false;
  constructor(private verif : ActiveService , private  guard : TpguardGuard ) { 



  }

  ngOnInit() {
    this.verif.state += 1;

    if (this.verif.testVerif(1)){
      this.guard.data=true;
    }

    this.verif.active[1] = this.verif.active[1]+1;
    console.log("ex2" ,this.verif.active[1])
  }

  public getNumber(v: string){
    console.log(v);
    if(this.waitForSecondNumber)
    {
      this.currentNumber = v;
      this.waitForSecondNumber = false;
    }else{
      this.currentNumber === '0'? this.currentNumber = v: this.currentNumber += v;

    }
  }

  getDecimal(){
    if(!this.currentNumber.includes('.')){
        this.currentNumber += '.'; 
    }
  }

  private doCalculation(op , secondOp){
    switch (op){
      case '+':
      return this.firstOperand += secondOp; 
      case '-': 
      return this.firstOperand -= secondOp; 
      case '*': 
      return this.firstOperand *= secondOp; 
      case '/': 
      return this.firstOperand /= secondOp; 
      case '=':
      return secondOp;
    }
  }
  public getOperation(op: string){
    console.log(op);

    if(this.firstOperand === null){
      this.firstOperand = Number(this.currentNumber);

    }else if(this.operator){
      const result = this.doCalculation(this.operator , Number(this.currentNumber))
      this.currentNumber = String(result);
      this.firstOperand = result;
    }
    this.operator = op;
    this.waitForSecondNumber = true;

    console.log(this.firstOperand);
 
  }


}
