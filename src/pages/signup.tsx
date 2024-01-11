"use client"
import '../app/globals.css'
import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useRouter } from 'next/router';

const Cadastro: React.FC = () => {
  const router = useRouter();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [instituicao, setInstituicao] = useState('');
  const [tamanhoOng, setTamanhoOng] = useState('');
  const [password, setPassword] = useState('');
  const [nomeError, setNomeError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [instituicaoError, setInstituicaoError] = useState('');
  const [tamanhoOngError, setTamanhoOngError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [cadastroSucesso, setCadastroSucesso] = useState(false);

  const validateNome = () => {
    if (!nome) {
      setNomeError('Digite seu nome');
    } else {
      setNomeError('');
    }
  };

  const validateEmail = () => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!emailRegex.test(email)) {
      setEmailError('Digite um email válido');
    } else {
      setEmailError('');
    }
  };

  const validateInstituicao = () => {
    if (!instituicao) {
      setInstituicaoError('Digite a instituição');
    } else {
      setInstituicaoError('');
    }
  };

  const validateTamanhoOng = () => {
    if (!tamanhoOng) {
      setTamanhoOngError('Selecione o tamanho da ONG');
    } else {
      setTamanhoOngError('');
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

  useEffect(() => {
    if (cadastroSucesso) {
      const timer = setTimeout(() => {
        router.push('/login');
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [cadastroSucesso, router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    validateNome();
    validateEmail();
    validateInstituicao();
    validateTamanhoOng();
    validatePassword();
    if (!nomeError && !emailError && !instituicaoError && !tamanhoOngError && !passwordError) {
      setTimeout(() => {
        setCadastroSucesso(true);
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-4xl font-extrabold text-black mb-6">Cadastro</h2>

        {cadastroSucesso ? (
          <div className="text-green-600 text-center mb-4">
            Cadastro concluído com sucesso! Um email de confirmação foi enviado para {email}.
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-white text-sm font-medium mb-2">Nome</label>
              <input
                type="text"
                className={`w-full p-3 rounded-lg border ${nomeError ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-indigo-500 text-black`}
                placeholder="Digite seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                onBlur={validateNome}
              />
              {nomeError && <p className="text-red-500 text-sm mt-1">{nomeError}</p>}
            </div>
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
              {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-white text-sm font-medium mb-2">Instituição</label>
              <input
                type="text"
                className={`w-full p-3 rounded-lg border ${instituicaoError ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-indigo-500 text-black`}
                placeholder="Digite a instituição"
                value={instituicao}
                onChange={(e) => setInstituicao(e.target.value)}
                onBlur={validateInstituicao}
              />
              {instituicaoError && <p className="text-red-500 text-sm mt-1">{instituicaoError}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-white text-sm font-medium mb-2">Tamanho da ONG</label>
              <select
                className={`w-full p-3 rounded-lg border ${tamanhoOngError ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-indigo-500 text-black`}
                value={tamanhoOng}
                onChange={(e) => setTamanhoOng(e.target.value)}
                onBlur={validateTamanhoOng}
              >
                <option value="">Selecione o tamanho da ONG</option>
                <option value="2-5">2-5 membros</option>
                <option value="6-10">6-10 membros</option>
                <option value="11-20">11-20 membros</option>
                <option value="21-50">21-50 membros</option>
                <option value="51-100">51-100 membros</option>
              </select>
              {tamanhoOngError && <p className="text-red-500 text-sm mt-1">{tamanhoOngError}</p>}
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
              Cadastrar
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Cadastro;
