import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Cookies = () => (
  <>
    <Navbar />
    <main className="pt-28 pb-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl prose prose-sm md:prose-base prose-headings:font-display prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground">
        <h1>Политика использования cookie</h1>
        <p className="text-sm text-muted-foreground">Действует с 7 мая 2026 г.</p>

        <h2>Что такое cookie</h2>
        <p>
          Cookie — это небольшие текстовые файлы, которые сохраняются в вашем
          браузере при посещении сайта chlorella-delo.ru и помогают сайту
          корректно работать, запоминать ваши предпочтения и анализировать
          посещаемость.
        </p>

        <h2>Какие cookie мы используем</h2>
        <ul>
          <li>
            <strong>Технические</strong> — обеспечивают работу сайта (например,
            запоминают согласие с этой политикой).
          </li>
          <li>
            <strong>Аналитические</strong> — обезличенно собирают статистику
            посещаемости (Яндекс.Метрика и подобные сервисы).
          </li>
          <li>
            <strong>Функциональные</strong> — сохраняют ваши действия в
            калькуляторе и квизе для удобства.
          </li>
        </ul>

        <h2>Согласие и отказ</h2>
        <p>
          При первом визите вы видите баннер с предложением принять
          использование cookie. Вы можете отказаться, изменив настройки
          браузера — большинство браузеров позволяют блокировать или удалять
          cookie. Обратите внимание: при отключении часть функций сайта может
          работать некорректно.
        </p>

        <h2>Срок хранения</h2>
        <p>
          Сессионные cookie удаляются после закрытия браузера. Постоянные
          cookie хранятся до 12 месяцев или до момента, когда вы удалите их
          вручную.
        </p>

        <h2>Контакты</h2>
        <p>
          По вопросам обработки cookie и персональных данных пишите на{" "}
          <a href="mailto:valerian.orloff@yandex.ru">valerian.orloff@yandex.ru</a>.
        </p>
      </div>
    </main>
    <Footer />
  </>
);

export default Cookies;
