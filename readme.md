# Les commandes de base deGithub

## Première étape : initialiser un repo

* Créez dans le Github, un nouveau repository
* Nommez le comme vous le souhaitez
* Vous pouvez choisir sa visibiilité :
  * Public : Si vous souhaitez que tout le monde puisse y avoir accès
  * Private : Si vous souhaitez être le seul à y accéder
* La description est optionnelle : Remplissez-là si vous le souhaitez
* Allez en bas de page, cliquez sur "create repository"

Votre repository est maintenant créé, vous allez pouvoir faire votre premier commit.

## Faire son premier commit

Vous allez vous rendre compte qu'il y a un petit encadré nommé "Quick setup" qui vous propose deux possibilités : HTTPS et SSH

Si ce n'est pas fait par défaut, choisissez HTTPS

### Initialisation de Github sur votre machine

Sur Visual Studio Code :
* Ouvrez un terminal (3 possibilités)
  * Menu affichage > Terminal
  * CTRL + ù
  * En bas à gauche, vous avez une icone triangle et rond, cliquez dessus

Initialiser github sur le dossier qui est ouvert avec la commande `git init`

Une fois initialisé, vous allez devoir indiquer quel(s) fichier(s) vous souhaitez envoyer sur github. Pour cela :
* `git add *` Pour ajouter tous les fichiers
* `git add nomDuFichier` Pour ajouter un fichier en particulier

Pour info, vous ne devez PAS entrer le nom complet du dossier ou du fichier à ajouter. Ca augmente le risque d'erreur. Au lieu d'écrire le nom complet vous-même, vous devez écrire seulement la ou les premières lettres et appuyer sur la touche `tab`