import React, { Component } from 'react'
const AppContext = React.createContext()
class AppProvider extends Component {
 state = {
    number : 10,
    inc: () => {
      this.setState({number: this.state.number + 1})
    }
  }
 render() {
    return <AppContext.Provider value={this.state}>
      {this.props.children}
    </AppContext.Provider>
  }
}

const ComponentA = () => (
  <div className="A_TopLevel_Is_Wrapped_With_ContextProvider">
     <AppProvider>
        <ComponentB />
      </AppProvider>
  </div>
)

const ComponentB = () => (
  <div className="B_Does_Not_Need_Anything">
     <ComponentC />
  </div>
)

const ComponentC = () => (
  <div className="C_Will_Display_Value_Of_Number">
     <AppContext.Consumer>
        {(context) => context.number}
      </AppContext.Consumer>
      <ComponentD />
  </div>
)


const ComponentD = () => (
  <div className="D_Will_Have_Button_That_Will_Increment_Number">
    <AppContext.Consumer>
        {(context) => <button onClick={context.inc}>INC</button>}
    </AppContext.Consumer>
  </div>
)

export default ComponentA;
