import { NgModule } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
    // tslint:disable-next-line:max-line-length
    imports : [MatSnackBarModule, MatSidenavModule, MatSelectModule, MatExpansionModule, MatFormFieldModule, MatButtonModule , MatInputModule, MatListModule, MatDialogModule],
    // tslint:disable-next-line:max-line-length
    exports : [MatSnackBarModule, MatSidenavModule, MatSelectModule, MatExpansionModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatListModule, MatDialogModule]
})


export class MaterialModule {}
