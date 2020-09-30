import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReaderComponent } from './Reader/reader/reader.component';
import { AppComponent } from './app.component';
import { RecitersComponent } from './Reciters/reciters/reciters.component';

const routes: Routes = [
   { path: '', component: RecitersComponent },
  { path: 'reader/:id', component: ReaderComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
