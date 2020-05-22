import React, { Component } from "react";
//---------------------------------------
import ContactsContainer from "./contact/ContactsContainer";
import AddContactFormContainer from "./contactForm/AddContactFormContainer";
import PhonebookTitle from "./phonebookTitle/PhonebookTitle";
import SearchFormContainer from "./searchForm/SearchFormContainer";

export default class App extends Component {
	state = {};

	componentDidUpdate() {
		//localStorage.setItem("contact", JSON.stringify(this.props.contacts));
	}

	componentDidMount() {
		const contact = localStorage.getItem("contact");

		if (contact) {
			const convrtArr = JSON.parse(contact);
			// this.setState(() => ({
			// 	contacts: [...convrtArr],
			// }));
			this.props.addContact(convrtArr);
		}
	}

	render() {
		return (
			<>
				<PhonebookTitle name="Phonebook" />

				<AddContactFormContainer />

				<SearchFormContainer />

				<ContactsContainer />
			</>
		);
	}
}
