import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeckListComponent } from './deck-list/deck-list.component';
import { DeckComponent } from './deck/deck.component';
import { PokemonComponent } from './pokemon/pokemon.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'deck-list', pathMatch: 'full'},
    { path: 'deck-list', component: DeckListComponent},
    { path: 'deck/:id', component: DeckComponent},
    { path: 'pokemon/:id', component: PokemonComponent },
    { path: '**', redirectTo: '/deck-list'}
  ];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
