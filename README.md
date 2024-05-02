# eCommerce-JSFE2023Q4

A team of JSFE2023Q4 students perform the final eCommerce Application task.

    "build": "webpack --mode=production --node-env=production",
    Команда build которая делает билд для выпуска приложения на деплой
    "start": "webpack serve --open --mode=development",
    Команда start которая включает сервер для режима разработки приложения
    "watch": "webpack --watch --mode=development",
    Команда watch запускает сборку билда при любом изменении в коде
    "format": "prettier --write \"src/**/*.ts\" \"src/**/*.scss\""
    команда format редактирует оформление кода в папке src только с расширением .ts и .scss
    "ci:format": "prettier --check \"src/**/*.ts\" \"src/**/*.scss\"",
    команда ci:format проверяет оформление кода в папке src только с расширением .ts и .scss
    "lint": "npx eslint src/**/*.ts",
    команда lint проверяет файлы ts по правилам eslint и prettier и ts
    "lint-1": "eslint src --ext .ts",
    команда lint-1 проверяет файлы ts по правилам eslint и prettier и ts
    "lint-fix": "eslint src --ext .ts --fix",
    команда lint-fix автоматически исправляет файлы ts по правилам eslint и prettier и ts
    "deploy": "gh-pages -d dist -b gh-pages"
    команда deploy отправляет файлы из папки dist в ветку gh-pages для развертывания

    Команды husky
    pre-commit  - при каждом коммите подключен husky и выполняет команды для финального редактирования кода при помощи prettier (команда npm run format) затем выполянется проверка кода на ошибки eslint и автоисправления ошибок при помощи команды (npm run lint-fix)
    pre-push - на данный момент выполняет тоже самое что и pre-commit
