import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

type DrawerPosition = 'right' | 'left' | 'top' | 'fullscreen';

@Injectable({
  providedIn: 'root',
})
export class Drawer {
  constructor(private readonly dialog: MatDialog) { }

  abrir(component: any, position: DrawerPosition = 'right', config?: MatDialogConfig) {

    const baseConfig: MatDialogConfig = {
      panelClass: `drawer-${position}`,
      disableClose: true
    };

    switch (position) {
      case 'right':
        Object.assign(baseConfig, {
          width: '500px',
          maxWidth: '100vw',
          height: '100vh',
          position: { right: '0' },
        });
        break;

      case 'left':
        Object.assign(baseConfig, {
          width: '500px',
          height: '100vh',
          position: { left: '0' }
        });
        break;

      case 'top':
        Object.assign(baseConfig, {
          width: '600px',
          maxWidth: '90vw',
          height: 'auto',
          position: { top: '0' }
        });
        break;

      case 'fullscreen':
        Object.assign(baseConfig, {
          width: '100vw',
          height: '100vh',
          maxWidth: '100vw',
          position: { top: '0' }
        });
        break;
    }

    return this.dialog.open(component, {
      ...baseConfig,
      ...config,
      maxWidth: config?.maxWidth ?? baseConfig.maxWidth ?? '100vw',
    });
  }
}
