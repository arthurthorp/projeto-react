import React from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
//Componente: bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
//Propriedade: informações que o componente PAI passa para o componente filho
//Estado: Informações mantidas pelo componente(Lembrar: imutabilidade)
//useState: utilizado para alterar dinamicamente um dado



function App() { // É um componente
  return (
    <div id="app">
      <aside>
          <strong>Cadastrar</strong>
          <form>
            <div className="input-block">
              <label htmlFor="github_username">Usuário do Github</label>
              <input type="text" name="github_username" id="github_username" required/>
            </div>
              
            <div className="input-block">
              <label htmlFor="techs">Tecnologias</label>
              <input type="text" name="techs" id="techs" required/>
            </div>

            <div className="input-group">
              <div className="input-block">
                <label htmlFor="latitude">Latitude</label>
                <input type="text" name="latitude" id="latitude" required/>
              </div>
              
              <div className="input-block">
                <label htmlFor="longitude">Longitude</label>
                <input type="text" name="longitude" id="longitude" required/>
              </div>
            </div>

            <button type="submit">Salvar</button>
          </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/yoda-profile_image-63cdc656c9f91fb4-70x70.jpeg" alt="Yoda"/>
              <div className="user-info">
                <strong>Diego Fernandes</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt veritatis vel ut</p>
            <a href="https://github.com/arthurthorp">Acessar perfil no Github</a>
          </li>
        </ul> 

      </main>
    </div>
  );
}
//fragment tag vazia <>
export default App;
