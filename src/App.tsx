import React from 'react';
import './main.global.css';
import { hot } from 'react-hot-loader/root';
import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardsList } from './shared/CardsList';
import { EColor, Text } from './shared/Text';
import { Break } from './shared/Break';

function AppComponent() {
  return (
    <Layout>
      <Header />
      <Content>
        <CardsList />
        <br />
        <Text size={20} mobileSize={28} color={EColor.green}>
          Label 1
        </Text>
        <Text size={20}>Label 2</Text>
        <Break size={8} inline />
        <Text size={20} mobileSize={16}>
          Label 3
        </Text>
      </Content>
    </Layout>
  );
}

export const App = hot(() => <AppComponent />);
