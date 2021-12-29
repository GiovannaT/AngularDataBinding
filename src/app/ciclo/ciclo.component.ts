import { 
  AfterContentChecked, 
  AfterContentInit, 
  AfterViewChecked, 
  AfterViewInit,
  Component, 
  DoCheck, 
  OnInit, 
  OnChanges, 
  OnDestroy,
  Input} from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() valorInicial: number = 10;

  constructor() { 
    this.log('constructor');
  }

  ngOnChanges(){
    this.log('ngOnChanges');
  }

  ngOnInit( ): void {
  }

  ngDoCheck(){
    this.log('ngDoCheck');
  }

  ngAfterContentInit(){
    this.log('ngAfterContentInit');
  }

  ngAfterViewInit(){
      this.log('ngAfterViewInit');
  }

  ngAfterViewChecked(){
    this.log('ngAfterViewChecked')
  }

  ngAfterContentChecked(){
    this.log('ngAfterContentChecked')
  }

  ngOnDestroy(){
    this.log('ngOnDestroy')
  }
//cancela a assinatura dos observáveis
  private log(hook: string){
    console.log(hook)
  }

}
