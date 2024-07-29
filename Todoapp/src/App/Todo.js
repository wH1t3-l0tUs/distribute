import React, { useRef, useState } from "react";
import { Button, ListGroup } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import style from '../Todo.module.scss';
function Todo(){
    const [work, setWork] = useState('')
    const [list, setList] = useState([])
    const inputRef = useRef();
    const handleSubmit = () =>{
        setList([...list,work]);
        setWork('');
        inputRef.current.focus();
    }
    const handleEdit = (index) => {
        let lists = [...list]
        const Edit = prompt('Edit here..')
        lists[index] = Edit
        setList(lists)
    }
    const handleDelete = (index) => {
        const lists = [...list]
        lists.splice(index,1)
        setList(lists)
    }
    return(
        <>
        <Container>
            <Row style={{marginBottom:'20px'}}> 
                <Row className={style.text}>Todo List</Row>
                    <Col md={{ span: 5, offset: 4 }}> 
                        <input ref={inputRef} placeholder="Enter your work.." value={work} onChange={(e) => setWork(e.target.value)}/>
                        <Button onClick={handleSubmit}>ADD</Button>
                    </Col> 
            </Row> 
            <Row> 
                <Col md={{ span: 5, offset: 4 }}> 
                    <ListGroup> 
                        {list.map((work, index) => (
                                <div key = {index} >  
                                <ListGroup.Item variant="dark" action 
                                    style={{display:"flex", 
                                            justifyContent:'space-between'
                                    }} 
                                > 
                                    {work} 
                                    <span> 
                                    <Button style={{marginRight:"10px"}} 
                                    variant = "light"
                                    onClick={() => handleDelete(index)}> 
                                        Delete 
                                    </Button> 
                                    <Button variant = "light"
                                    onClick={() => handleEdit(index)}> 
                                        Edit 
                                    </Button> 
                                    </span> 
                                </ListGroup.Item> 
                                </div> 
                        ))} 
                    </ListGroup> 
                </Col> 
            </Row> 
        </Container>
        </>
    )
}
export default Todo;