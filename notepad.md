Redux SM
1. Store : holds our state - THERE IS ONLY ONE STATE
2. Action : state can be modified using actions - SIMPLE OBJECTS
3. Dispatcher : Action needs to be sent by someone - known as dispatching an action
4. Reducer : receives the action and modifies the state to give us a new state

- pure functions
- only mandatory argument is the 'type'
Subscriber : listens for state change to update the ui