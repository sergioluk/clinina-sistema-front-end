import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink, RouterOutlet } from '@angular/router';

type NavItem = {
  label: string;
  icon: string;
  route: string;
};

@Component({
  selector: 'app-app-shell',
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    RouterLink,
    RouterOutlet,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app-shell.html',
  styleUrl: './app-shell.css',
})
export class AppShell {
  protected readonly isSidebarOpen = signal(true);

  toggleSidebar(): void {
    this.isSidebarOpen.update((value) => !value);
  }

  protected readonly toggleAriaLabel = computed(() =>
    this.isSidebarOpen() ? 'Recolher menu lateral' : 'Expandir menu lateral',
  );

  protected readonly navItems: NavItem[] = [
    { label: 'Home', icon: 'home', route: '/' },
    { label: 'Clientes', icon: 'group', route: '/clientes' },
    { label: 'Pets', icon: 'pets', route: '/pets' },
    { label: 'Consultas', icon: 'event_note', route: '/consultas' },
    { label: 'Financeiro', icon: 'payments', route: '/financeiro' },
    { label: 'Produtos e serviços', icon: 'payments', route: '/produtos-servicos' },
  ];


}
