import React from 'react';
import './styles/main.scss';
import Toggle from "./atoms/toggle/Toggle";
import Button from "./atoms/button/Button";
import useTodoList from "./hooks/use-todo-list";

function App() {
  const {list, remove} = useTodoList();

  return (
      <div className="App">
        <aside className="Sidebar">
          <h1 className="title">MyTrack</h1>

          <nav className="nav">
            <ul className="nav-menu">
              <li className="nav-menu-item">a</li>
            </ul>
          </nav>
        </aside>
        <main className="Main">
          <div className="h2">Main app</div>
          <div><Toggle/></div>
          <div>
            <Button variant={'success'}>COMPLETE</Button>
            <Button icon={'calendar'} counter={`0/${list.length}`}>ADD</Button>
            <Button variant={'success'} disabled>Disabled</Button>
          </div>
          <ul className="list">
            {list.map(item => <li className="list-item"
                                  key={item.id}
                                  onClick={() => remove(item.id)}
            >{item.text}</li>)}
          </ul>
        </main>
      </div>
  );
}

export default App;
