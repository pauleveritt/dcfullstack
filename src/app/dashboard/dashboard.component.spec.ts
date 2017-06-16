import {DashboardComponent} from './dashboard.component';
import {HeroService} from '../heroes/hero.service';
import {Http} from '@angular/http';

describe('DashboardComponent', () => {
  let comp: DashboardComponent,
    heroService: HeroService;
  const http: Http = null;

  beforeEach(() => {
    heroService = new HeroService(http);
    comp = new DashboardComponent(heroService)
  });

  it('empty heroes', () => {
    expect(comp.heroes.length).toBe(0);
  });

});
