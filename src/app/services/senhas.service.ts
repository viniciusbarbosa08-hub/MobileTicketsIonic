import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SenhasService {
  public senhasGeral: number = 0;
  public senhasPrior: number = 0;
  public senhasExame: number = 0;
  public senhasTotal: number = 0;
  
  public inputNovaSenha: string = '';
  
  public senhasArray: any = {
    SG: [],
    SP: [],
    SE: []
  };

  constructor() { }

  somaGeral() {
    this.senhasGeral++;
    this.senhasTotal++;
  }

  somaPrior() {
    this.senhasPrior++;
    this.senhasTotal++;
  }

  somaExame() {
    this.senhasExame++;
    this.senhasTotal++;
  }

  novaSenha(tipoSenha: string = '') {
    const hoje = new Date();
    const yy = hoje.getFullYear().toString().substring(2, 4);
    const mm = (hoje.getMonth() + 1).toString().padStart(2, '0');
    const dd = hoje.getDate().toString().padStart(2, '0');

    if (tipoSenha === 'SG') {
      this.somaGeral();
      this.inputNovaSenha = yy + mm + dd + '-' + tipoSenha + (this.senhasArray['SG'].length + 1).toString().padStart(2, '0');
      this.senhasArray.SG.push(this.inputNovaSenha);
    } 
    else if (tipoSenha === 'SP') {
      this.somaPrior();
      this.inputNovaSenha = yy + mm + dd + '-' + tipoSenha + (this.senhasArray['SP'].length + 1).toString().padStart(2, '0');
      this.senhasArray.SP.push(this.inputNovaSenha);
    } 
    else if (tipoSenha === 'SE') {
      this.somaExame();
      this.inputNovaSenha = yy + mm + dd + '-' + tipoSenha + (this.senhasArray['SE'].length + 1).toString().padStart(2, '0');
      this.senhasArray.SE.push(this.inputNovaSenha);
    }
    console.log(this.senhasArray);
  }
}