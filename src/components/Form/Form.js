import React from "react";
import { validateForm } from "./helpers/validat.forms";
import Input from "../Input";
import Button from "../Button";
import { NewTaskWrapper } from "./Form.styles";



class Form extends React.Component {
  state = {
    name: "",
    error: validateForm(""),
    touched: false,
  };

  handleChange =(e) => {
    this.setState({ 
      [e.target.name]: e.target.value ,
      error: validateForm(e.target.value),
    });
  };

  handleBlur = () => {
    this.setState({
      touched: true,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { onCreateTodo } = this.props;
    const { name, error, touched } = this.state;
    if (error && !touched) {
      this.setState({touched: true});
      return
    }

    if(!error) {
      onCreateTodo(name);
      this.setState({ name: "", error: validateForm(""), touched: false});
    }
  };
  
  
  
  render() {

    const { name, error, touched } = this.state;

    return (
      <section>
        <NewTaskWrapper>
          <div>
            <Input 
              name="name"
              label="Новое задание"
              id="create"
              error={!!error && !!touched}
              description={touched && error}
              placeholder="Название"
              value={name}
              onBlur={this.handleBlur}
              onChange={this.handleChange}
              />
          </div>
          <div>
          <Button onClick={this.handleSubmit} type="button" title="Создать" />
          </div>
        </NewTaskWrapper>
    </section>
    );

  }  
  
  
 }

 export default Form;