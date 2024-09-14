import * as React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Container from './components/container';

interface IAppProps {
}

const App: React.FunctionComponent<IAppProps> = () => {
  return (
    <>
      <Header></Header>
      <Container></Container>
      <Footer></Footer>
    </>
  );
};

export default App;
