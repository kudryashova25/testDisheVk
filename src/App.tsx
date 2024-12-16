import { SplitLayout, SplitCol, View } from '@vkontakte/vkui';
import { useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router';
import HomePanel from './panels/HomePanel';
import BooksPanel from './panels/BooksPanel';

const App = () => {
    const { view: activeView, panel: activePanel } = useActiveVkuiLocation();

    const go = (panel: string) => {
        // простая навигация
        window.history.pushState(null, '', `/${panel}`);
    };

    return (
        <SplitLayout>
            <SplitCol>
                <View id="main" activePanel={activePanel}>
                    <HomePanel id="home" go={go} />
                    <BooksPanel id="books" />
                </View>
            </SplitCol>
        </SplitLayout>
    );
};

export default App;