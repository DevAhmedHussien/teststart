import { Box, Typography, Button, Paper, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ mt: 5, p: 4}}>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          О тестовом задании
        </Typography>

        {/* 🔥 Competition Overview */}
        <Typography variant="body1" sx={{ mt: 2, textAlign: "left" }}>
          Это тестовое задание было выполнено в **рамках соревнования**.  
          В нем требовалось создать **эффективное и оптимизированное React-приложение** с 
          поддержкой **поиска, CRUD-операций и Redux-состояния**.
        </Typography>

        {/* 🚀 Amazing Search Feature */}
        <Box sx={{ mt: 3, textAlign: "left" }}>
          <Typography variant="h5">🔍 Уникальная поисковая система</Typography>
          <Typography>
            Реализована **интеллектуальная система поиска**, которая:
          </Typography>
          <ul>
            <li>Ищет **по заголовку, описанию, дате и времени**</li>
            <li>Выделяет **найденные слова** **жёлтым цветом**</li>
            <li>Работает **моментально** без перезагрузки</li>
            <li>Использует **useMemo и useCallback** для высокой производительности</li>
          </ul>
        </Box>

        {/* 🛠 Technologies Used */}
        <Box sx={{ mt: 3, textAlign: "left" }}>
          <Typography variant="h5">🛠 Используемые технологии</Typography>
          <ul>
            <li><strong>React, Redux Toolkit, React Hooks</strong> (Управление состоянием, оптимизация ререндеров)</li>
            <li><strong>Material UI (MUI)</strong> (Интерфейс и стилизация)</li>
            <li><strong>DatePicker, Date-fns</strong> (Работа с датами и временем)</li>
            <li><strong>React Router</strong> (Маршрутизация между страницами)</li>
            <li><strong>Axios Instance</strong> (Безопасные и быстрые HTTP-запросы)</li>
            <li><strong>Snackbar</strong> (Уведомления пользователю о действиях)</li>
          </ul>
        </Box>

        {/* 🚀 Feature Highlights */}
        <Box sx={{ mt: 3, textAlign: "left" }}>
          <Typography variant="h5">🚀 Основные функции</Typography>
          <ul>
            <li>**🔍 Поиск с подсветкой** — найденные слова **выделяются цветом** в заголовках, описаниях, датах и времени.</li>
            <li>**⚡ Быстрые CRUD-операции** — добавление, редактирование, удаление и получение данных через **Axios Instance**.</li>
            <li>**🔄 Обновление в реальном времени** — Redux обновляет состояние **моментально**.</li>
            <li>**🛡️ Безопасность** — API-запросы проходят через **централизованный Axios Instance**.</li>
          </ul>
        </Box>

        {/* 📁 Project Structure */}
        <Box sx={{ mt: 3, textAlign: "left" }}>
          <Typography variant="h5">📁 Архитектура проекта (FSD)</Typography>
          <ul>
            <li>**Redux Store** — централизованное управление состоянием.</li>
            <li>**Axios Instance** — для безопасных API-запросов.</li>
            <li>**Слои (Feature-Sliced Design)** — UI, API, Utils, State.</li>
            <li>**Асинхронные запросы** — через `createAsyncThunk` в Redux Toolkit.</li>
          </ul>
        </Box>

        {/* 🔗 Links */}
        <Box sx={{ mt: 3, textAlign: "center" }}>
          <Button variant="contained" color="primary" href="https://profile-react-inky.vercel.app/" target="_blank">
            Мое портфолио
          </Button>
          <Button variant="contained" color="secondary" href="https://github.com/DevAhmedHussien/profileReact" target="_blank" sx={{ ml: 2 }}>
            GitHub
          </Button>
        </Box>

        {/* 📞 Contact Information */}
        <Box sx={{ mt: 3, textAlign: "left" }}>
          <Typography variant="h5">📞 Контакты</Typography>
          <Typography>Email: <Link href="mailto:a.abdelmaskoud@mail.ru">a.abdelmaskoud@mail.ru</Link></Typography>
          <Typography>Телефон: <Link href="tel:+79821313577">+7 982 131 35 77</Link> (WhatsApp доступен)</Typography>
        </Box>

        {/* 🔙 Back Button */}
        <Box sx={{ mt: 4 }}>
          <Button variant="outlined" onClick={() => navigate("/")}>
            🔙 Назад
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
