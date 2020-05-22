import { connect } from "react-redux";
import * as contactActions from "./../redux/contactActions";
import App from "./App";

//В connect передаем пропы сотояние из redux reducer->state
const mapStateToProps = (state) => ({
	contacts: state.contacts,
	filter: state.filter,
});

//В connect передаем пропы в виде функций redux actions->function
const mapDispatchToProps = (dispatch) => ({
	addContact: (arr) => dispatch(contactActions.addContactArray(arr)),
	removeContact: (id) => dispatch(contactActions.removeContact(id)),
	filteredContacts: (string) => dispatch(contactActions.addFilter(string)),
});

//Шаг5 Подключить connect(state, functions/dispatch)(<BaseComponent/>)
export default connect(mapStateToProps, mapDispatchToProps)(App);
