import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material/material.module';
import { InvoiceListingComponent } from '../invoices/components/invoice-listing/invoice-listing.component';
import { FormsModule } from '@angular/Forms';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [InvoiceListingComponent],
  exports: [
    InvoiceListingComponent
  ]
})
export class InvoicesModule { }
