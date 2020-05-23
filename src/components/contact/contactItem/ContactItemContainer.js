import { connect } from "react-redux";
import * as contactActions from "./../../../redux/contactActions";
import ContactItem from "./ContactItem";

const mapStateToProps = (state) => ({
	contacts: state.contacts,
});

const mapDispatchToProps = (dispatch) => ({
	onRemoveContact: (id) => dispatch(contactActions.removeContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);
