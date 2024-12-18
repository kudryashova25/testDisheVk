import { useEffect, useState } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { Group, SimpleCell } from '@vkontakte/vkui';

const BooksPanel = ({ id }: { id: string }) => {
  // Используем useState для хранения массива книг
  const [books, setBooks] = useState<
    { id: number; title: string; cover: string }[]
  >([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        // Инициализация vk bridge
        const response = await bridge.send('VKWebAppCallAPIMethod', {
          method: 'photos.get',
          params: {
            album_id: 'альбом_здесь', // ID альбома (например, 'profile' или 'wall')
            owner_id: 'ID_группы_или_пользователя', // ID владельца альбома
            access_token: 'ТВОЙ_ТОКЕН_ЗДЕСЬ', // Access token для API
            v: '5.131', // Версия API
          },
        });

        // Преобразуем данные в формат для отображения
        const photoItems = response.response.items.map((photo: any) => ({
          id: photo.id,
          title: photo.text || 'Без названия',
          cover: photo.sizes?.[photo.sizes.length - 1]?.url || '', // Берем URL максимального размера
        }));

        setBooks(photoItems);
      } catch (error) {
        console.error('Ошибка при загрузке фотографий:', error);
      }
    };

    fetchPhotos(); // Вызов функции загрузки фотографий
  }, []); // Пустой массив зависимостей для выполнения только один раз

  return (
    <Group>
      {books.map((book) => (
        <SimpleCell
          key={book.id}
          before={<img src={book.cover} alt={book.title} style={{ width: 50, height: 50 }} />}
          description={book.title}
        />
      ))}
    </Group>
  );
};

export default BooksPanel;
