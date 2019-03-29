import { NgModule } from '@angular/core';
import { MatButtonModule, MatListModule, MatToolbarModule, MatCardModule } from '@angular/material';
@NgModule({
  declarations: [],
  imports: [MatButtonModule, MatToolbarModule, MatListModule, MatCardModule],
  exports: [MatButtonModule, MatToolbarModule, MatListModule, MatCardModule]
})
export class SharedMatModule {}
