import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

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
