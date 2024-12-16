import { Group, SimpleCell } from '@vkontakte/vkui';

const BooksPanel = ({ id }: { id: string}) => {
    const books = [
        { id: 1, title: 'книга 1', cover: '/../cover1.jpg' },
        { id: 2, title: 'книга 2', cover: '/../cover2.jpg' },
    ];

    return (
        <Group>
            {books.map((book) => (
                <SimpleCell
                key={book.id}
                before={<img src={book.cover} alt={book.title} style={{ width: 50, height: 50}} />
            } 
                description={book.title}
                />
            ))}
        </Group>
    );
};

export default BooksPanel;