import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  dodajServer = false;

  serverCreationStatus = 'Nista nisi kreirao';
  imeServera = 'TestServers';
  serverKreiran = false;
  serveri = ['Server1', 'Server2']

  onCreateServer() {
    this.serverKreiran = true;
    this.serveri.push(this.imeServera);
    this.serverCreationStatus = 'Server kreiran. Naziv servera: ' + this.imeServera;
  }

  onUpdateServerName(event: Event) {
    this.imeServera = (<HTMLInputElement>event.target).value;
  }


  constructor() { 
    setTimeout(() => {
      this.dodajServer = true;
    } , 2000);
  }

  ngOnInit() {
  }

}
