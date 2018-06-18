Mieux trier à Nantes
=====================

Logiciel libre pour aider les habitants de Nantes Métropole à trier.

----------

## **Description**
Application développée par l'association [Mieux trier à Nantes](https://mieuxtrieranantes.wordpress.com/).

## **Dépendances**
1. **Node.js**

2. **Ionic v1 **
http://ionicframework.com/
Pour installer la dernière mise à jour de Ionic v1 :
```bash
$ npm install -g ionic@1.7.16
```

3. **Bower**
https://bower.io/
Pour installer Bower :
```bash
$ npm install -g bower
```

## **Setup **
```bash
$ npm install
$ bower install
```
Ajout des plateformes Android, iOS et Web :
```bash
$ ionic platform add android
$ ionic platform add ios
$ ionic platform add browser
```

## **Compilation**
```bash
$ ionic build android
$ ionic build ios
$ ionic build browser
```

## **Déploiement**
### Tests Web ###
```bash
$ ionic serve
```
### Mobile ###
```bash
$ ionic run android
$ ionic run ios
```
>iOS nécessitera peut-être l'installation de ios-deploy. Pour OSX la commande d'installation est la suivante :
```bash
$ sudo npm -g install ios-deploy --unsafe-perm=true
```

## License ##
Ce programme est publié sous les termes de la GNU GPL v3, consultez le fichier LICENSE.
