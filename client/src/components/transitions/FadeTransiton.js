import React from "react";
import Transition from "react-transition-group/Transition";

export default class FadeTransition extends React.Component {

    constructor(props) {
        super(props);
        //Default Style (Static CSS Style to be applyed)
        this.defaultStyle = {
            transitionProperty: "opacity",
            transition: `${this.props.duration}ms ease-in-out`
        };
        //Transition To Apply (the actual css transition to apply)
        //there are 4 states on the transition (entering, entered, exiting, exited).
        this.transitionStyle = {
            entering: {
                opacity: "0"
            },
            entered: {
                opacity: "1",
                transitionDelay: "700ms",
            },
            exiting: {
                opacity: "0"
            },
            exited: {
                opacity: "0"
            }
        };
    //Since we are doing fade so it is just about opacity (0 and 1 values).
    }

    render() {
        return (
          <Transition in={this.props.isOpen} timeout={this.props.duration}>
            {state => {
              //State is exited then we return render nothing.
              if (state === "exited") return null;
              //Loop on all children and clone new child with a new style applied (transition style).
              return React.Children.map(this.props.children, child => {
                return React.cloneElement(child, {
                  style: Object.assign(
                    {},
                    this.defaultStyle,
                    this.transitionStyle[state]
                  )
                });
              });
            }}
          </Transition>
        );
    }
}