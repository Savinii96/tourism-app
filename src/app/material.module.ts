import {NgModule} from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatFormFieldModule,
  MatGridListModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatTabsModule
} from '@angular/material';

@NgModule({
    imports: [
      MatToolbarModule,
      MatIconModule,
      MatButtonModule,
      MatCardModule,
      MatGridListModule,
      MatDividerModule,
      MatFormFieldModule,
      MatInputModule,
      MatOptionModule,
      MatSelectModule,
      MatTabsModule
    ],
    exports: [
      MatToolbarModule,
      MatIconModule,
      MatButtonModule,
      MatCardModule,
      MatGridListModule,
      MatDividerModule,
      MatFormFieldModule,
      MatInputModule,
      MatOptionModule,
      MatSelectModule,
      MatTabsModule
    ]
  }
)

export class MaterialModule {
}
