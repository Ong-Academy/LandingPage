"use client"
import '../app/globals.css'
import React, { useState } from 'react';
import { FaGoogle, FaEnvelope, FaEye, FaEyeSlash } from 'react-icons/fa';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [forgotEmail, setForgotEmail] = useState(false);
  const [recoveryEmailSent, setRecoveryEmailSent] = useState(false);
  const [recoveryEmail, setRecoveryEmail] = useState('');

  const validateEmail = () => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!emailRegex.test(email)) {
      setEmailError('Digite um email válido');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = () => {
    if (password.length < 6) {
      setPasswordError('A senha deve ter pelo menos 6 caracteres');
    } else {
      setPasswordError('');
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleForgot = () => {
    setForgotEmail(true);
    setRecoveryEmailSent(false);
  };

  const handleSendRecoveryEmail = () => {
    // Implemente a lógica para enviar o email de recuperação aqui
    // Por simplicidade, apenas simularemos o envio e exibiremos uma notificação
    setTimeout(() => {
      setRecoveryEmailSent(true);
    }, 2000); // Simula um atraso de 2 segundos antes de mostrar a notificação
  };

  const handleBackToLogin = () => {
    setForgotEmail(false);
    setRecoveryEmailSent(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    validateEmail();
    validatePassword();
    if (!emailError && !passwordError) {
      console.log('Campos válidos, envie o formulário ou realize outra ação.');
    } else {
      console.log('Campos inválidos, corrija os erros.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-4xl font-extrabold text-black mb-6">Login</h2>

        <button
          className="w-full bg-red-600 text-white p-4 rounded-lg font-semibold hover:bg-red-700 transition duration-300 mb-4 flex items-center justify-center"
        >
          <FaGoogle className="h-6 w-6 mr-2" />
          Continuar com Google
        </button>

        <div className="text-center text-gray-500">OU</div>

        {forgotEmail ? (
          recoveryEmailSent ? (
            <div>
              <p className="text-green-600 text-center mb-4">
                Email de recuperação enviado para {recoveryEmail}!
              </p>
              <button
                className="w-full bg-black text-white p-4 rounded-lg font-semibold hover:bg-indigo-500 transition duration-300"
                onClick={handleBackToLogin}
              >
                Voltar para o Login
              </button>
            </div>
          ) : (
            <form onSubmit={handleSendRecoveryEmail}>
              <div className="mb-4">
                <label className="block text-white text-sm font-medium mb-2">Digite seu Email</label>
                <input
                  type="email"
                  className={`w-full p-3 rounded-lg border ${emailError ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-indigo-500 text-black`}
                  placeholder="Digite seu email"
                  value={recoveryEmail}
                  onChange={(e) => setRecoveryEmail(e.target.value)}
                />
                {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
              </div>
              <button
                type="submit"
                className={`w-full bg-black text-white p-4 rounded-lg font-semibold hover:bg-indigo-500 transition duration-300 ${
                  recoveryEmailSent ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={recoveryEmailSent}
              >
                {recoveryEmailSent ? 'Enviado' : 'Enviar Email de Recuperação'}
              </button>
            </form>
          )
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-white text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className={`w-full p-3 rounded-lg border ${emailError ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-indigo-500 text-black`}
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={validateEmail}
              />
              <div className="flex justify-end mt-2">
                <button
                  type="button"
                  className="text-gray-400 text-sm hover:text-gray-600 focus:outline-none"
                  onClick={handleForgot}
                >
                  Esqueceu o Email/Senha?
                </button>
              </div>
              {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-white text-sm font-medium mb-2">Senha</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className={`w-full p-3 rounded-lg border ${passwordError ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-indigo-500 text-black`}
                  placeholder="Digite sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={validatePassword}
                />
                <button
                  className="absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-500"
                  onClick={handleShowPassword}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white p-4 rounded-lg font-semibold hover:bg-indigo-500 transition duration-300 flex items-center justify-center"
            >
              <FaEnvelope className="h-6 w-6 mr-2" />
              Clicar para Entrar
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
