import React from 'react';
import { useHistory } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import './LoginComponent.css';

const LoginComponent = () => {
  const [form, setForm] = useForm({
    user: '',
    password: '',
  });

  const history = useHistory();

  const login = (event) => {
    event.preventDefault();

    const { user, password } = form;

    if (user === 'joanmanueltitin@gmail.com' && password === '123456') {
      history.push('/back-office');
    } else if (!user || !password) {
      alert('El usuario y la contraseña no pueden estar vacios');
    } else {
      alert('El usuario o la contraseña son incorrectos');
    }
  };

  return (
    <div className='vh-100 d-flex align-items-center justify-content-center'>
      <form onSubmit={login} className='row form bg-white p-3 rounded'>
        <div className='col-12 text-center'>
          <h4>Iniciar session</h4>
        </div>

        <div className='col-12 form-group'>
          <label>Usuario</label>
          <input
            placeholder='Usuario'
            name='user'
            value={form.user}
            type='email'
            className='form-control'
            onChange={setForm}
          />
        </div>

        <div className='col-12 form-group'>
          <label>Password</label>
          <input
            placeholder='Password'
            name='password'
            value={form.password}
            type='password'
            className='form-control'
            onChange={setForm}
          />
        </div>

        <div className='col-12 align-self-end'>
          <button type='submit' className='btn btn-primary btn-block'>
            Ingresar
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginComponent;
