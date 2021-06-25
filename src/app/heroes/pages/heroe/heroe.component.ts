import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from "rxjs/operators";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
    img {
      width:100%;
      border-radius:10px
    }
  `
  ]
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;

  constructor(private activatrdRoute: ActivatedRoute,
              private heroeSvc: HeroesService,
              private router: Router) { }

  ngOnInit(): void {
    this.activatrdRoute.params
      .pipe(
        switchMap(({id}) => this.heroeSvc.getHeroePorId(id)))
        .subscribe(res => this.heroe = res)   
  }

  regresar(){
    this.router.navigate(['/heroes/listado'])
  }

}
