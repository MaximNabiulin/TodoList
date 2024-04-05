# Todo List

Это небольшое веб-приложение для отображения и управления списком дел написанное на [JavaScript](https://developer.mozilla.org/ru/docs/Web/JavaScript) с использованием фреймворка [React](https://reactjs.org/) и утилиты [Create React App](https://create-react-app.dev/).

Ссылка на репозиторий проекта: [https://github.com/MaximNabiulin/TodoList](https://github.com/MaximNabiulin/TodoList)

## Функционал
При помощи этого приложения можно добавлять новые задачи в список, отмечать задачи как выполненые/невыполненые, задачи можно удалять и редактировать. Список задач сохраняется между сессиями при помощи локального хранилища [Local storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).

## Технологии
`css` `javascript` `React` `TypeScript`

## Дополнительно
* Написана утилита для работы с LocalStorage
* Добавлен уровень абстракции: сервис `TodoService.ts`, имитирующий запросы на бэк, чтобы в дальнейшем можно было быстро переписать приложение для работы с бэком

## Использование
* Установите [Git](https://git-scm.com/download/)
* Клонируйте [Проект](https://github.com/MaximNabiulin/TodoList) используя **Tерминал** или **GitBash** (для Windows)
* Установите необходимые зависимости из package.json используя команду `npm i`
* Для просмотра в терминале запустите команду `npm run start`
* Для сборки проекта используйте команду `npm run build`