import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material/material.module';
import { FormsModule } from '@angular/Forms';
import { ClientlistingComponent } from './components/clientlisting/clientlisting.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    ClientlistingComponent
  ],
  declarations: [ClientlistingComponent]
})
export class ClientsModule { }
