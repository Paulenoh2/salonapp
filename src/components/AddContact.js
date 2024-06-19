import React from "react";
import { Link } from "react-router-dom";
import "./AddContact.css";

class AddContact extends React.Component {
    state = {
        username: "", email: "", discription: "",
    };

    add = (events) => {
        console.log(events)
        events.preventDefault();
        if (this.state.username === "" || this.state.email === "") {
            alert("All fields are mandatory")
            return;
        }

        this.setState({ username: "", email: "" });
        this.props.addContactHandler(this.state)
    }

    render() {
        const { p10 } = this.props;
        return (
            <div className="contact">
                <div className="contact-heading"> CONTACT PAGE</div>

                <Link to="/lists" className="list-contact">Contact List</Link>

                <div className="contact-content">
                    <img src={p10} alt="Supplement" className="contact-image" />

                    <form className="form-contact" onSubmit={this.add}>
                        <div>
                            <label>Username</label><br />
                            <input className="add" name="username" placeholder="USERNAME"
                                value={this.state.username} onChange={(events) => this.setState({ username: events.target.value })} />
                        </div>

                        <div>
                            <label>Email</label><br />
                            <input className="add" name="email" placeholder="EMAIL"
                                value={this.state.email} onChange={(events) => this.setState({ email: events.target.value })} />
                        </div>

                        <div>
                            <label>Description</label><br />
                            <input className="add" name="text"
                                value={this.state.discription} onChange={(events) => this.setState({ discription: events.target.value })} />
                        </div>

                        <button className="button">Add Contact</button>
                    </form>
                </div>

                    
                <div className="footer-contact">
                    <div>
    
      <p>123 Salon Street, City, Country</p>
      <p>Phone: 123-456-7890</p>
      <p>Email: info@salon.com</p>
    </div>
                    </div>
            </div>
        )
    }
}

export default AddContact;
