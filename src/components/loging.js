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
        <>
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Имя пользователя"
                    value={this.username}
                    onChange={(e) => e.target.value}
                />
                <input
                    type="password"
                    placeholder="Пароль"
                    value={this.password}
                    onChange={(e) => e.target.value}
                />
                <button type="submit">Войти</button>
            </form>
        </>
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