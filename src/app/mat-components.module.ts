import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';

import { 
  MatButtonModule,
  MatToolbarModule, 
  MatIconModule,
  MatMenuModule,
  MatDividerModule,
  MatAutocompleteModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSidenavModule,
  MatCardModule,
  MatExpansionModule,
  MatGridListModule,
  MatListModule,
  MatStepperModule,
  MatTabsModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatDialogModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatPaginatorModule,
  MatTableModule 
} from '@angular/material';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatButtonModule, MatToolbarModule, MatIconModule, MatMenuModule, MatDividerModule,
    MatAutocompleteModule, MatCheckboxModule, MatFormFieldModule,
    MatAutocompleteModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, 
    MatSelectModule, MatSliderModule, MatSlideToggleModule, MatSidenavModule, 
    MatCardModule, MatExpansionModule, MatGridListModule, MatListModule,
    MatStepperModule, MatTabsModule, MatProgressSpinnerModule,
    MatProgressBarModule, MatDialogModule, MatSnackBarModule,
    MatTooltipModule, MatPaginatorModule, MatTableModule,
  ],
  exports: [
    BrowserAnimationsModule,
    MatButtonModule, MatToolbarModule, MatIconModule, MatMenuModule, MatDividerModule,
    MatAutocompleteModule, MatCheckboxModule, MatFormFieldModule,
    MatAutocompleteModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, 
    MatSelectModule, MatSliderModule, MatSlideToggleModule, MatSidenavModule, 
    MatCardModule, MatExpansionModule, MatGridListModule, MatListModule,
    MatStepperModule, MatTabsModule, MatProgressSpinnerModule,
    MatProgressBarModule, MatDialogModule, MatSnackBarModule,
    MatTooltipModule, MatPaginatorModule, MatTableModule,
  ]
})
export class MatComponents { }
