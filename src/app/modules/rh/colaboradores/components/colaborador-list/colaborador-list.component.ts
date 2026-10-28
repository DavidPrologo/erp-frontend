import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-colaborador-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="padding: 24px; font-family: sans-serif;">
      <h2>Gestão de Colaboradores</h2>
      <p>Módulo de RH carregado com sucesso via Lazy Loading (Vertical Slice)!</p>
      
      <div style="margin-top: 16px; padding: 12px; background: #f4f5f7; border-radius: 6px;">
        <strong>Status:</strong> Pronto para integrar com a API Java Spring Boot no Render.
      </div>
    </div>
  `,
  styles: []
})
export class ColaboradorListComponent {}