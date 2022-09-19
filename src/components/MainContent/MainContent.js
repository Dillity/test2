import React from "react";

import style from "./MainContent.module.css";


const MainContent = (props) => {
    return (

        <div className={style.container}>

                    <h1 className={style.heading} >
                        Test assignment for front-end developer
                    </h1>

                    <body className={style.content}>
                    What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a
                    vast understanding of User design thinking as they'll be building web interfaces with accessibility
                    in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.
                    </body>

                    <button className={style.btn} ><a href="#signUp">Sign Up</a></button>

        </div>
    )
}

export default MainContent;