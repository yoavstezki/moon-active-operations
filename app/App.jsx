import React from 'react';
import { makeStyles } from '@material-ui/core';
import { QueryClient, QueryClientProvider } from 'react-query';
import OperationPage from './pages/OperationsPage';
import AppBar from './components/AppBar';
import Footer from './components/Footer';
import Message from './components/message/Message';

const queryClient = new QueryClient();

const useStyles = makeStyles({
  container: {
    paddingRight: 100,
    paddingLeft: 100,
    minHeight: 'calc(100vh - 90px)',
  },
});

const App = ({}) => {
  const classes = useStyles();
  return (
    <QueryClientProvider client={queryClient}>
      <AppBar />
      <div className={classes.container}>
        <OperationPage />
      </div>
      <Message />
      <Footer />
    </QueryClientProvider>
  );
};

export default App;
