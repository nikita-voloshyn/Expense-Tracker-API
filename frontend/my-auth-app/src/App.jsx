// src/App.jsx
import { useState } from "react";
import axios from "axios";
import "./index.css";

export default function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const apiBase = "http://0.0.0.0:8000/api/auth"; // замените на своё

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${apiBase}/login/`, { username, password });
      const access_token = res.data.access || res.data.token;
      localStorage.setItem("token", access_token);
      setToken(access_token);
      setMessage("Успешный вход!");
    } catch (err) {
      setMessage(err.response?.data?.detail || "Ошибка входа");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${apiBase}/register/`, { username, email, password });
      setMessage("Регистрация успешна! Теперь войдите.");
    } catch (err) {
      setMessage(err.response?.data?.detail || "Ошибка регистрации");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken("");
    setMessage("Вы вышли из аккаунта.");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">
          {token ? "Добро пожаловать!" : "Авторизация"}
        </h1>

        {!token ? (
          <>
            <form onSubmit={handleLogin} className="space-y-4 mb-8">
              <h2 className="text-lg font-semibold">Вход</h2>
              <input
                type="text"
                placeholder="Имя пользователя"
                className="w-full border p-2 rounded"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Пароль"
                className="w-full border p-2 rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                Войти
              </button>
            </form>

            <form onSubmit={handleRegister} className="space-y-4">
              <h2 className="text-lg font-semibold">Регистрация</h2>
              <input
                type="text"
                placeholder="Имя пользователя"
                className="w-full border p-2 rounded"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border p-2 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Пароль"
                className="w-full border p-2 rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
              >
                Зарегистрироваться
              </button>
            </form>
          </>
        ) : (
          <>
            <p className="mb-4">Вы успешно авторизованы.</p>
            <button
              onClick={handleLogout}
              className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
            >
              Выйти
            </button>
          </>
        )}

        {message && (
          <p className="mt-4 text-center text-red-500">{message}</p>
        )}
      </div>
    </div>
  );
}