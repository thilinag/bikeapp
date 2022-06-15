import { useContext } from 'react';
import { APIMessagesContext } from 'common/providers/APIMessageProvider';

function useAPIMessages() {
  const { messages, addMessage } = useContext(APIMessagesContext);
  return { messages, addMessage };
}

export default useAPIMessages;