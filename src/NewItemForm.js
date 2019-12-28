import React from 'react';
import './App.css';
import PropTypes from 'prop-types';


class NewItemForm extends React.Component {

    state = {
        value: ''
    };

    inputIsEmpty = () => {
        return this.state.value === '';
    };

    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    addItem = (event) => {
        event.preventDefault();
        this.props.addItem(this.state.value);
    };

    render() {
        return <form onSubmit={this.addItem}>
            <input
                type="text"
                placeholder="Enter New Item"
                value={this.state.value}
                onChange={this.handleChange}
            />
            <button disabled={this.inputIsEmpty()}>Add</button>
        </form>
    }
}

NewItemForm.propTypes = {
    onAddItem: PropTypes.func.isRequired,
};

export default NewItemForm