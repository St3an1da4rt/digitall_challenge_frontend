import React from 'react';

class LoginPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        password: ''
      };
    }

    handleSubmit(event) {
        event.preventDefault();
      };

    render() {
      return (
        <div className='main_loging'>
            <div className='logo_loging'></div>
            <form className="form_loging" onSubmit={this.handleSubmit}>
                <input
                    className='input_name'
                    type="text"
                    placeholder="Имя пользователя"
                    value={this.username}
                    onChange={(e) => e.target.value}
                />
                <input
                    className='input_password'
                    type="password"
                    placeholder="Пароль"
                    value={this.password}
                    onChange={(e) => e.target.value}
                />
                <button type="submit"><a href="/main">Войти</a></button>
            </form>
        </div>
      );
    }
  }

// class LoginPage extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//           username: '',
//           password: ''
//         };

//     handleSubmit = (event) => {
//         event.preventDefault();
//         // Здесь вы можете добавить логику авторизации
//     };

//     render() {
//         return (
//             <form onSubmit={handleSubmit}>
//             <input
//                 type="text"
//                 placeholder="Имя пользователя"
//                 value={this.username}
//                 onChange={(e) => setUsername(e.target.value)}
//             />
//             <input
//                 type="password"
//                 placeholder="Пароль"
//                 value={this.password}
//                 onChange={(e) => setPassword(e.target.value)}
//             />
//             <button type="submit">Войти</button>
//             </form>
//                 );
//             };
// }
// }

export default LoginPage;