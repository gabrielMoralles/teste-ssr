import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscaComponent } from './busca/busca.component';
import { HeroComponent } from './hero/hero.component';

const routes: Routes = [
  { path: 'heroes', component: HeroComponent },
  { path: 'busca', component: BuscaComponent },
  { path: 'detalhe', component: BuscaComponent },
  { path: 'home', component: HeroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }