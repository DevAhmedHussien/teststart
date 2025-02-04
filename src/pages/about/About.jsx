import { Box, Typography, Button, Paper, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import CodeIcon from "@mui/icons-material/Code";
import SecurityIcon from "@mui/icons-material/Security";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// ... остальные импорты остаются без изменений ...

const About = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ mt: 5, p: 4 }}>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
          О Проекте: Система Управления Семинарами
        </Typography>

        {/* Общее описание */}
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="body1">
            Проект разработан как демонстрация современных подходов к созданию веб-приложений.
            Основные характеристики:
          </Typography>
          <ul>
            <li>Полнофункциональное React-приложение с CRUD-операциями</li>
            <li>Интеграция с Redux для управления состоянием</li>
            <li>Оптимизированная производительность с использованием React Hooks</li>
          </ul>
        </Paper>

        {/* Поисковая система */}
        <Box sx={{ mt: 3, textAlign: "left" }}>
          <Typography variant="h5">
            <SearchIcon sx={{ mr: 1 }} />
            Расширенный Поиск
          </Typography>
          <ul>
            <li>Поиск по: заголовку, описанию, дате и времени</li>
            <li>Динамическая подсветка результатов</li>
            <li>Оптимизация через useMemo и useCallback</li>
            <li>Мгновенный поиск без перезагрузки страницы</li>
          </ul>
        </Box>

        {/* Технологический Стек */}
        <Box sx={{ mt: 3, textAlign: "left" }}>
          <Typography variant="h5">
            <CodeIcon sx={{ mr: 1 }} />
            Технологический Стек
          </Typography>
          <ul>
            <li><strong>React 18+</strong> - Ядро приложения</li>
            <li><strong>Redux Toolkit</strong> - Управление состоянием</li>
            <li><strong>Material UI v5</strong> - UI компоненты</li>
            <li><strong>Axios</strong> - HTTP-клиент с кастомным инстансом</li>
            <li><strong>React Router 6</strong> - Навигация</li>
          </ul>
        </Box>

        {/* Ключевые Особенности */}
        <Box sx={{ mt: 3, textAlign: "left" }}>
          <Typography variant="h5">
            <SecurityIcon sx={{ mr: 1 }} />
            Основные Преимущества
          </Typography>
          <ul>
            <li>Режим реального времени для обновлений данных</li>
            <li>Централизованная обработка ошибок API</li>
            <li>Feature-Sliced Design архитектура</li>
            <li>Интеграция с JSON Server для mock API</li>
          </ul>
        </Box>

        {/* Архитектура Проекта */}
        <Box sx={{ mt: 3, textAlign: "left" }}>
          <Typography variant="h5">
            <FolderOpenIcon sx={{ mr: 1 }} />
            Архитектура Проекта
          </Typography>
          <ul>
            <li>Redux Store с RTK Query</li>
            <li>Изолированные модули API</li>
            <li>Кастомизированные хуки для бизнес-логики</li>
            <li>Система уведомлений через Snackbar</li>
          </ul>
        </Box>

        {/* Контактная Информация */}
        <Box sx={{ mt: 3, textAlign: "left" }}>
          <Typography variant="h5">
            <ContactMailIcon sx={{ mr: 1 }} />
            Контакты для Связи
          </Typography>
          <Typography>
            Email: <Link href="mailto:a.abdelmaskoud@mail.ru">a.abdelmaskoud@mail.ru</Link>
          </Typography>
          <Typography>
            Телефон: <Link href="tel:+79821313577">+7 982 131 35 77</Link> (WhatsApp)
          </Typography>
          <Typography>
            Исходный код: <Link href="https://github.com/DevAhmedHussien/teststart">GitHub Repository</Link>
          </Typography>
          <Typography>
            Демо: <Link href="https://teststart-j8v6.vercel.app/">Live Demo</Link>
          </Typography>
        </Box>

        {/* Технические Детали */}
        <Box sx={{ mt: 3, textAlign: "left" }}>
          <Typography variant="h6">
            Технические Требования:
          </Typography>
          <Typography variant="body2">
            - Node.js v18+
            <br/>
            - Запуск фронтенда: npm run dev
            <br/>
            - Запуск сервера: npm run server
          </Typography>
        </Box>

        {/* Кнопка возврата */}
        <Box sx={{ mt: 4 }}>
          <Button 
            variant="contained" 
            onClick={() => navigate("/")}
            startIcon={<ArrowBackIcon />}
          >
            Вернуться к списку семинаров
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default About;