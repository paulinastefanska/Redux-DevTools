import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment } from './actions';
import './NewCommentContainer.css';

const mapDispatchToProps = (dispatch) => ({
  addComment: (text) => dispatch(addComment(text)) 
});

const mapStateToProps = state => {
  return {
    comments: state.comments,
    form: state.form
  }
};

class TextForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      id: ""
    };
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addComment(this.state.text);
    this.setState({text: ""});
  }

  render() {
    return(
      <form className="Form" onSubmit={(e) => this.handleSubmit(e)}>
        <div>
          <textarea
            value = {this.state.text}
            onChange = {(e) => this.handleChange(e)}
            rows = "6"
            cols = "40"
            placeholder = "Add a comment..."
            />
        </div>
        <div>
          <button type="submit">Comment!</button>
        </div>
      </form>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TextForm)