import { connect } from "react-redux";
import * as contactActions from "./../../redux/contactActions";
import AddContactForm from "./AddContactForm";

const mapStateToProps = (state) => ({
	contacts: state.contacts,
});

const mapDispatchToProps = (dispatch) => ({
	addContact: (arr) => dispatch(contactActions.addContactArray(arr)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddContactForm);
