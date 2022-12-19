import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Content } from './shared/Content';
import { Header } from './shared/Header';
import { Layout } from './shared/Layout';
import { CardsList } from './shared/CardsList';
import './main.global.scss';
import { Dropdown } from './shared/Dropdown';
import { GenericList } from './shared/GenericList';
import { generateId, generateRandomString } from './utils/react/generateRandomIndex';
import { merge } from './utils/js/merge';

const LIST = [
  { As: 'li' as const, text: 'some' },
  { As: 'li' as const, text: 'other some' },
  { As: 'li' as const, text: 'some' },
  { As: 'li' as const, text: 'other some' },
].map(generateId);

function AppComponent() {
  const [list, setList] = React.useState(LIST);

  const handleItemClick = (id: string) => {
    setList(list.filter((item) => item.id !== id));
  };

  const handleAdd = () => {
    setList(list.concat(generateId({ text: generateRandomString(), As: 'li' as const })));
  };

  return (
    <Layout>
      <Header />
      <Content>
        <CardsList />
        <div style={{ padding: 20 }}>
          <br />
          <Dropdown
            onOpen={() => console.log('opened')}
            onClose={() => console.log('closed')}
            isOpen={false}
            button={<button>Test</button>}>
            <CardsList />
          </Dropdown>
        </div>
        <button onClick={handleAdd}>Add Element</button>
        <ul>
          <GenericList list={list.map(merge({ onClick: handleItemClick }))} />
        </ul>
      </Content>
    </Layout>
  );
}

export const App = hot(() => <AppComponent />);
