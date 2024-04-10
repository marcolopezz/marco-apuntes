import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-apuntes-git',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './apuntes-git.component.html',
  styleUrl: './apuntes-git.component.css'
})
export class ApuntesGitComponent {

  gitHubCommands: string[] = ["git clone", "git status", "git fetch", "git pull", "git push", "git init", "git branch", "git checkout [nombre rama]", "git checkout -b [nombre rama]", "git branch [nombre rama]", "git add [path/nombre-archivo]", "git add .", "git commit -m 'mensaje'", "git config --global user.name 'FIRST_NAME LAST_NAME'", "git config --global user.email 'email@email.com'"];
  gitHubCommandsDescription: object = {
     gitClone: "clonamos el repositorio remoto debe ser el nuestro",
     gitStatus: "muestra el estado del repositorio de trabajo",
     gitFetch: "compara mi último commit con el de la rama remota",
     gitPull: "trae los cambios desde la rama remota",
     gitPush: "sube mis cambios a la rama remota",
     gitInit: "inicializar repositorio git",
     gitBranch: "listado ramas",
     gitCheckout: "cambiar rama",
     gitCheckout2: "crear rama y cambiarse a ella",
     gitBranch2: "crear rama",
     gitAdd: "añadir al stage (limbo) la carpeta",
     gitAdd2: "añadir al stage todo",
     gitCommit: "perpetrar los cambios para que haya seguimiento",
     gitConfig: "configurar user name",
     gitConfig2: "configurar email"
};

arrDescript: string[] = Object.values(this.gitHubCommandsDescription);


}
