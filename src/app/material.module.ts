import { NgModule } from '@angular/core';
import {MatButtonModule,
    
    MatCardModule,
    
    MatDialogModule,
    
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatTableModule,
    MatToolbarModule,} from '@angular/material';


    
    const modules = [
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatTableModule,
        MatIconModule,
        MatDialogModule,
        MatToolbarModule,
        MatGridListModule,
        MatRadioModule,
        MatSelectModule


       
];

@NgModule({
    imports: [
        ...modules
    ],
    exports: [
        ...modules
    ],
    providers: [  
         
      ]
  })
export class MaterialModule { }