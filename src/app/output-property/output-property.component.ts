import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})

export class OutputPropertyComponent implements OnInit {

  @Input() valor:number = 0;

  @Output() mudouValor = new EventEmitter();
  
  @ViewChild('nameRef') nameElementRef!: ElementRef;
  
  incrementa(){
    this.nameElementRef.nativeElement.value++;
    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementa(){
    this.nameElementRef.nativeElement.value--;
    this.mudouValor.emit({novoValor: this.valor});
  }

  onMudouValor(evento:any){
    alert(evento.novoValor);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
