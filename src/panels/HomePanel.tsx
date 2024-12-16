import { Button, Group, Title } from '@vkontakte/vkui';

const HomePanel = ({ id, go }:
    {
        id: string;
        go: (view: string) => void
    }) => (
        <Group>
            <Title
            level="1" weight="bold" style={{ textAlign: 'center', marginTop: 20 }}>
                Электронная книжная выставка
            </Title>
            <p style={{
                texextAlign: 'center', margin: '20px 0'
            }}>
                Добро пожаловать на выставку
            </p>
            <Button size="1" stretched onClick={() =>
                go ('books')}
                style={{ margin: '0 auto'}}>
                Начать
            </Button>
        </Group>
    );

    export default HomePanel;
