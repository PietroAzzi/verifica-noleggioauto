import { Component, OnInit, Input } from '@angular/core';
import { Mezzo } from '../driving.model';

@Component({
  selector: 'app-driving-list',
  templateUrl: './driving-list.component.html',
  styleUrls: ['./driving-list.component.css']
})
export class DrivingListComponent implements OnInit {

  @Input() mezzi;
  mezzoSelezionato: Mezzo;
  mezziNoleggiati: Mezzo[];

  constructor() { }

  onSelect(mezzo: Mezzo): void {
    this.mezzoSelezionato = mezzo;
  }

  dettagli(mezzo:Mezzo): void{
    console.log(mezzo.tipo + mezzo.descrizione + mezzo.tariffa + mezzo.valutazioneMedia);
  }

  ngOnInit() {
  }

}
