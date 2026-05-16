import { Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-linked-signal',
  standalone: true,
  imports: [],
  templateUrl: './linked-signal.html',
  styleUrl: './linked-signal.css',
})
export class LinkedSignal {

  selectedItem= signal<string>('Apple');

  
  quantity = linkedSignal({
    source: this.selectedItem,
    computation: () => 0
  })

  available = ['Apple', 'Banana', 'Cherry'];

  increment(){
    this.quantity.update(q => q + 1);
  }

  decrement(){
    if(this.quantity() > 0){
      this.quantity.update(q => q - 1);
    }   
  }
}
