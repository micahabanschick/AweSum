# Planning

## Form Component 

1. first half of form contains question
    i. <li>Some Question</li>

2. second half of form contains answers
    i. Answer = quiz.questions[i].sum
    ii. wrongAnswer1 = quiz.questions[i].wrongNum1
    iii. wrongAnswer2 = quiz.questions[i].wrongNum2
    iv. wrongAnswer3 = quiz.questions[i].wrongNum3

3. form is in <ul>

4. FadeTransition between questions
    i. sample code:
        <!-- import FadeTransition from "../src/transitions/fadeTransition";
        ...
        {/*Applying to Login Box*/}
        <FadeTransition isOpen={this.state.isLoginOpen} duration={500}>
        <div className="box-container">
            <LoginBox />
        </div>
        </FadeTransition>
        {/*Applying to Register Box*/}
        <FadeTransition isOpen={this.state.isRegisterOpen} duration={500}>
        <div className="box-container">
            <RegisterBox />
        </div>
        </FadeTransition>
        ... -->

## Orbit Component

    1. QuizOrbit: create an orbit shape grid/list

    2. Grid: 4 items => <-Left ^-Top v-Bottom >-Right
        - 3 horizontal ListGroups
        -- each ListGroup has 3 items

        {
            ['sm', 'sm', 'sm'].map((breakpoint, idx) => (
                <ListGroup horizontal={breakpoint} className="my-2" key={idx}>
                    <ListGroup.Item action href="#link1" onClick={this.handleChange}>This ListGroup</ListGroup.Item>
                    <ListGroup.Item action href="#link2" onClick={this.handleChange}>renders horizontally</ListGroup.Item>
                    <ListGroup.Item action href="#link3" onClick={this.handleChange}>on {breakpoint}</ListGroup.Item>
                </ListGroup>
            ))
        }

        for (let i = 0; i < 3; i++) {
            <ListGroup horizontal={sm} className="my-2" key={i}>
                ['sm', 'sm', 'sm'].map((breakpoint, idx) => (
                    <ListGroup.Item action href="#link1" onClick={this.handleChange}>This ListGroup</ListGroup.Item>
                ))
            </ListGroup>
        }

        {
            <ListGroup horizontal={sm} className="my-2" key={0}>
                <ListGroup.Item action href="#disabled" onClick={this.handleChange} disabled>This ListGroup</ListGroup.Item>
                <ListGroup.Item action href="#link1" onClick={this.handleChange}>renders horizontally</ListGroup.Item>
                <ListGroup.Item action href="#disabled" onClick={this.handleChange} disabled>on {breakpoint}</ListGroup.Item>
            </ListGroup>
            <ListGroup horizontal={sm} className="my-2" key={1}>
                <ListGroup.Item action href="#link2" onClick={this.handleChange}>This ListGroup</ListGroup.Item>
                <ListGroup.Item action href="#submit" onClick={this.handleChange}>renders horizontally</ListGroup.Item>
                <ListGroup.Item action href="#link3" onClick={this.handleChange}>on {breakpoint}</ListGroup.Item>
            </ListGroup>
            <ListGroup horizontal={sm} className="my-2" key={2}>
                <ListGroup.Item action href="#disabled" onClick={this.handleChange} disabled>This ListGroup</ListGroup.Item>
                <ListGroup.Item action href="#link4" onClick={this.handleChange}>renders horizontally</ListGroup.Item>
                <ListGroup.Item action href="#disabled" onClick={this.handleChange} disabled>on {breakpoint}</ListGroup.Item>
            </ListGroup>
        }

        G0L0 (disabled) | G0L1 (option 1) | G0L2 (disabled) 
        ---------------------------------------------------
        G1L0 (option 2) | G1L1 (question) | G1L2 (option 3)
        --------------------------------------------------- 
        G2L0 (disabled) | G2L1 (option 4) | G2L2 (disabled) 