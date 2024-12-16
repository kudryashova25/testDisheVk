import { RoutesConfig, createRoot, createView, createPanel } from '@vkontakte/vk-mini-apps-router';

export const routes = RoutesConfig.create([
    createRoot ('root', [
        createView('main', [
            createPanel('home', '/', []),
            createPanel('books', '/books', []),
        ]),
    ]),
]);