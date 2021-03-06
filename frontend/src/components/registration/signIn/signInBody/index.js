import { connect } from 'react-redux';
import React, { Component } from 'react';
import styled from 'styled-components';
import SignInButton from "../SignInButton";
import { withRouter } from "react-router-dom";
import { MiddleSection, H1 , OrangeDiv, TopDiv, BottomDiv}from "../../../../styledcomponents/forAll/layout.js";
import { Input, InputDiv, }from "../../../../styledcomponents/forAll/inputs.js";
import {Link} from "react-router-dom"

const ButtonDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Form = styled.form`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
  `
  const styleBox = {
    marginTop: '18px',
    marginRight: '8px'
}
class SignInBody extends Component {

  constructor (props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }
  
  setEmail = e => {
      this.setState({
          email: e.target.value
      });
  }
  setPassword = e => {
      this.setState({
          password: e.target.value 
      });
  }

  login = (e) => {
    e.preventDefault();
      const url = "https://luna-sagittarius.propulsion-learn.ch/backend/api/token/";
      // const url = "http://localhost:8000/backend/api/token/";
      const method = 'POST';
      const body = {
          email: this.state.email,
          password: this.state.password
      };
      const headers = new Headers({
          'Content-Type': 'application/json'
      });
      const config = {
          method: method,
          headers: headers,
          body: JSON.stringify(body)
      };
      fetch(url, config)
      .then(res => res.status ? res.json() : console.log('login response not ok'))
      .then(data => {
          if (data.access){
            const token = data.access;
            localStorage.setItem('token', token);
            this.props.dispatch({type: 'SET_TOKEN', payload: token});
            this.props.history.push(`/`);
          } else {
            this.setState({
              email: '',
              password: ''
            });
          }
      });
  }
  render(){
    return (
      <MiddleSection>
           <H1>LOGIN</H1>
             <OrangeDiv/>
           <Form onSubmit={ this.login } >
              <InputDiv>
                <i style={styleBox} className="far fa-user input-i" />
                <Input value={ this.state.email } onChange={ this.setEmail } type="email" placeholder="   Username" required />
              </InputDiv>
              <InputDiv>
                <i style={styleBox} className="fas fa-unlock-alt input-i" />
                <Input value={ this.state.password } onChange={ this.setPassword } type="password" placeholder="   Password" required />
                {/* <Input type="password" placeholder="   Password" required /> */}
              </InputDiv> 
                <ButtonDiv> 
                  <SignInButton/>
                </ButtonDiv>
           </Form>
      </MiddleSection>
    )
  }
}

const mapStateToProps = state => {
  return {
    token: state.token
  }
};

const connection = connect(mapStateToProps);
const ConnectedApp = connection(SignInBody);
export default withRouter(ConnectedApp);
