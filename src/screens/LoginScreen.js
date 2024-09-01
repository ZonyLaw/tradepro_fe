import React, {useState, useEffect} from 'react'
import { useNavigate, useLocation, Link  } from 'react-router-dom';
import { Form, Button, Row, Col} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {login} from '../actions/userActions'
import FormContainer from '../components/FormContainer'
import Loader from '../components/Loader'
import Message from '../components/Message';


function LoginScreen() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    // const redirect = location.search ? location.search : '/';
    const redirect = new URLSearchParams(location.search).get('redirect') || '/';
    const userLogin = useSelector(state => state.userLogin)
    const{error, loading, userInfo} = userLogin

    useEffect(()=>{
        console.log(userInfo)
        if(userInfo ){
            console.log(userInfo)
            navigate(redirect);
        }
    }, [navigate, userInfo, redirect]);

    const submitHandler = (e)=>{
        e.preventDefault();
        dispatch(login(email, password));
        console.log("Submitted")
        console.log(userInfo)
    };


    return (
        <FormContainer>
            <h1>Sign In</h1>

            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}

            <Form onSubmit={submitHandler}>
                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                    type ='email'
                    placeholder='Enter Email'
                    value={email}
                    onChangeCapture={(e)=> setEmail(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                    type ='password'
                    placeholder='Enter Password'
                    value={password}
                    onChangeCapture={(e)=> setPassword(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>
                <Button type='submit' variant='primary'>Sign In</Button>
            </Form>

            <Row>
                <Col>
                    New Customer? 
                    <Link to={redirect ? '/register?redirect=${redirect}' : '/register'}>
                        Register
                    </Link>
                </Col>
            </Row>
        </FormContainer>

    )
}

export default LoginScreen
