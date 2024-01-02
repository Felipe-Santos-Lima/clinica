import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-conteudos',
  templateUrl: './conteudos.component.html',
  styleUrls: ['./conteudos.component.css']
})
export class ConteudosComponent {
  private breakpointObserver = inject(BreakpointObserver);

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'perfil', cols: 1, rows: 1 },
          { title: 'Agenda', cols: 1, rows: 1 },
          { title: 'financeiro', cols: 1, rows: 1 },
          { title: 'clientes', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'perfil', cols: 2, rows: 1 },
        { title: 'Agenda', cols: 1, rows: 1 },
        { title: 'financeiro', cols: 1, rows: 2 },
        { title: 'clientes', cols: 1, rows: 1 }
      ];
    })
  );
}
