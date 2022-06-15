import useAPIMessages from 'common/hooks/useAPIMessages';

import classes from './APIMessagesNotification.module.css';

const APIMessagesNotification = () => {
  const { messages } = useAPIMessages();

  return (
    <details className={classes.notifications}>
      <summary></summary>
      {messages && messages.map((message, index) => (
        <li key={index}>{message}</li>
      ))}
    </details>
  );
}

export default APIMessagesNotification;
