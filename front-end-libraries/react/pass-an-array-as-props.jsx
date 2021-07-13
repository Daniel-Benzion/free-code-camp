const List = (props) => {
    return <p>{props.tasks.join(", ")}</p>
  };
  
  class ToDo extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>To Do Lists</h1>
          <h2>Today</h2>
  
          <List tasks={["Go to the bank", "Do the laundry", "Wash the dishes"]}/>
  
          <h2>Tomorrow</h2>
  
          <List tasks={["File taxes", "Go to the gym", "Walk the dog"]}/>
  
        </div>
      );
    }
  };