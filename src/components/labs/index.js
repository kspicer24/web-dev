import React from "react";
import {Link} from "react-router-dom";
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
import TodoList from "./todo/TodoList";
import "../notTuiter.css";

const Labs = () => {
    return(
        <>
            <h1>Labs!</h1>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
            <TodoList/>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/tuiter/home">
                Tuiter
            </Link>
        </>
    )
};

export default Labs;