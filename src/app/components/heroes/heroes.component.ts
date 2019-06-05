import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/servicios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];

  constructor(
    private _heroesService: HeroesService,
    private router: Router
    ) {
    // console.log('este es el constructor');

  }
  ngOnInit() {
    this.heroes  = this._heroesService.getHeroes();
    // console.log(this.heroes);
  }

  verHeroe(idx: number ) {
    this.router.navigate(['/heroe', idx]);
    // console.log(idx);
  }

  buscarHeroes( termino: string){
    let heroesArr : Heroe[] = [];

    termino = termino.toLowerCase();

    for( let heroe of this.heroes){
      let nombre = heroe.nombre.toLowerCase();
      if( nombre.indexOf( termino) >= 0) {
        heroesArr.push(heroe);
      }
    }

    return heroesArr;

  }


}
